/**
 * Pipeline Orchestrator
 * Manages the conversion queue, state, and retry logic.
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, relative } from "path";

const ROOT = new URL("../../..", import.meta.url).pathname;
const STATE_FILE = join(ROOT, ".pipeline-state.json");

/** @typedef {'pending'|'converting'|'validating'|'passed'|'failed'|'skipped'} Status */

/**
 * @typedef {Object} ComponentEntry
 * @property {string} name
 * @property {string} path - relative path to component dir
 * @property {string[]} files - source files in the component
 * @property {string[]} bootstrapClasses - classes used
 * @property {string[]} dependsOn - other components this one imports
 * @property {Status} status
 * @property {number} attempts
 * @property {string[]} failures - failure messages from adversary
 * @property {string|null} lastError
 */

/**
 * @typedef {Object} PipelineState
 * @property {ComponentEntry[]} components
 * @property {Object} config
 * @property {string} startedAt
 * @property {string|null} completedAt
 */

export function loadState() {
  if (existsSync(STATE_FILE)) {
    return JSON.parse(readFileSync(STATE_FILE, "utf-8"));
  }
  return null;
}

export function saveState(state) {
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

export function createState(manifest, config = {}) {
  /** @type {PipelineState} */
  const state = {
    components: manifest,
    config: { maxAttempts: 3, ...config },
    startedAt: new Date().toISOString(),
    completedAt: null,
  };
  saveState(state);
  return state;
}

export function getNext(state) {
  // Priority: components with no unresolved dependencies
  const passed = new Set(
    state.components.filter(c => c.status === "passed").map(c => c.name)
  );
  return state.components.find(
    c =>
      c.status === "pending" &&
      c.dependsOn.every(dep => passed.has(dep))
  );
}

export function updateComponent(state, name, updates) {
  const idx = state.components.findIndex(c => c.name === name);
  if (idx === -1) throw new Error(`Component not found: ${name}`);
  state.components[idx] = { ...state.components[idx], ...updates };
  saveState(state);
  return state;
}

export function getSummary(state) {
  const counts = { pending: 0, converting: 0, validating: 0, passed: 0, failed: 0, skipped: 0 };
  for (const c of state.components) counts[c.status]++;
  return {
    total: state.components.length,
    ...counts,
    progress: `${counts.passed}/${state.components.length}`,
  };
}
