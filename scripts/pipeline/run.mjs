#!/usr/bin/env node
/**
 * Bootstrap → Tailwind Migration Pipeline CLI
 *
 * Usage:
 *   node scripts/pipeline/run.mjs init          Build manifest and initialize state
 *   node scripts/pipeline/run.mjs status        Show pipeline progress
 *   node scripts/pipeline/run.mjs next          Convert + validate the next component
 *   node scripts/pipeline/run.mjs run [n]       Run pipeline for n components (default: all)
 *   node scripts/pipeline/run.mjs convert <name> Convert a specific component
 *   node scripts/pipeline/run.mjs revert <name>  Revert a specific component
 *   node scripts/pipeline/run.mjs list          List all components and their status
 */
import { buildManifest } from "./orchestrator/manifest.mjs";
import { loadState, saveState, createState, getNext, updateComponent, getSummary } from "./orchestrator/state.mjs";
import { convertComponent, revertComponent } from "./converter/convert.mjs";
import { validate, formatResults } from "./adversary/validate.mjs";

const [,, command, ...args] = process.argv;

async function init() {
  console.log("Building component manifest...");
  const manifest = buildManifest();
  console.log(`Found ${manifest.length} components with Bootstrap classes.`);
  const state = createState(manifest);
  console.log("Pipeline initialized. State saved to .pipeline-state.json");
  console.log(`\nTop 10 components (conversion order):`);
  for (const c of manifest.slice(0, 10)) {
    console.log(`  ${c.name.padEnd(40)} ${c.bootstrapClasses.length} classes, ${c.dependsOn.length} deps`);
  }
}

async function status() {
  const state = loadState();
  if (!state) return console.log("Pipeline not initialized. Run: node scripts/pipeline/run.mjs init");
  const s = getSummary(state);
  console.log(`\n=== Pipeline Status ===`);
  console.log(`Progress: ${s.progress} components graduated`);
  console.log(`  Pending:    ${s.pending}`);
  console.log(`  Passed:     ${s.passed}`);
  console.log(`  Failed:     ${s.failed}`);
  console.log(`  Skipped:    ${s.skipped}`);
}

async function processComponent(state, component) {
  const name = component.name;
  console.log(`\n── Converting: ${name} ──`);
  console.log(`   Files: ${component.files.length}, Classes: ${component.bootstrapClasses.length}`);

  // Convert
  updateComponent(state, name, { status: "converting", attempts: component.attempts + 1 });
  const { converted } = convertComponent(component);
  console.log(`   Converted ${converted.length} file(s)`);

  // Validate
  updateComponent(state, name, { status: "validating" });
  console.log(`   Running adversary validation...`);
  const { passed, results } = await validate(component);
  console.log(formatResults(results));

  if (passed) {
    updateComponent(state, name, { status: "passed", lastError: null });
    console.log(`   ✓ GRADUATED`);
    return true;
  }

  // Failed — revert and record
  const failureMsg = results.filter(r => !r.passed).map(r => r.message).join("; ");
  revertComponent(component);

  if (component.attempts + 1 >= state.config.maxAttempts) {
    updateComponent(state, name, { status: "failed", lastError: failureMsg, failures: [...component.failures, failureMsg] });
    console.log(`   ✗ FAILED (max attempts reached) — needs manual review`);
  } else {
    updateComponent(state, name, { status: "pending", lastError: failureMsg, failures: [...component.failures, failureMsg] });
    console.log(`   ✗ Reverted — will retry (attempt ${component.attempts + 1}/${state.config.maxAttempts})`);
  }
  return false;
}

async function next() {
  const state = loadState();
  if (!state) return console.log("Pipeline not initialized. Run: node scripts/pipeline/run.mjs init");

  const component = getNext(state);
  if (!component) {
    const s = getSummary(state);
    if (s.pending === 0) console.log("All components processed!");
    else console.log("No eligible components (dependencies not yet graduated).");
    return;
  }
  await processComponent(state, component);
}

async function run() {
  const state = loadState();
  if (!state) return console.log("Pipeline not initialized. Run: node scripts/pipeline/run.mjs init");

  const limit = parseInt(args[0]) || Infinity;
  let processed = 0;

  while (processed < limit) {
    const component = getNext(state);
    if (!component) break;
    await processComponent(state, component);
    processed++;
  }

  const s = getSummary(state);
  console.log(`\n=== Run Complete ===`);
  console.log(`Processed: ${processed}, Progress: ${s.progress}`);
}

async function convertOne() {
  const state = loadState();
  if (!state) return console.log("Pipeline not initialized.");
  const name = args[0];
  if (!name) return console.log("Usage: run.mjs convert <component-name>");
  const component = state.components.find(c => c.name === name || c.name.endsWith(`/${name}`));
  if (!component) return console.log(`Component not found: ${name}`);
  await processComponent(state, component);
}

async function revert() {
  const state = loadState();
  if (!state) return console.log("Pipeline not initialized.");
  const name = args[0];
  if (!name) return console.log("Usage: run.mjs revert <component-name>");
  const component = state.components.find(c => c.name === name || c.name.endsWith(`/${name}`));
  if (!component) return console.log(`Component not found: ${name}`);
  revertComponent(component);
  updateComponent(state, component.name, { status: "pending" });
  console.log(`Reverted: ${component.name}`);
}

async function list() {
  const state = loadState();
  if (!state) return console.log("Pipeline not initialized.");
  const icons = { pending: "○", converting: "◐", validating: "◑", passed: "●", failed: "✗", skipped: "⊘" };
  for (const c of state.components) {
    const icon = icons[c.status] || "?";
    const extra = c.lastError ? ` — ${c.lastError}` : "";
    console.log(`  ${icon} ${c.name.padEnd(45)} [${c.status}]${extra}`);
  }
}

// ─── Dispatch ────────────────────────────────────────────────────────────────
const commands = { init, status, next, run, convert: convertOne, revert, list };
const handler = commands[command];
if (!handler) {
  console.log(`Usage: node scripts/pipeline/run.mjs <command>\n`);
  console.log(`Commands: ${Object.keys(commands).join(", ")}`);
  process.exit(1);
}
handler().catch(e => { console.error(e); process.exit(1); });
