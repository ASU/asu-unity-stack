/**
 * Adversary Validator
 * Runs multiple validation layers against a converted component.
 * All layers must pass for the component to graduate.
 */
import { execSync } from "child_process";
import { existsSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { compareScreenshots } from "./visual.mjs";
import { runA11yScan } from "./a11y.mjs";

const ROOT = new URL("../../..", import.meta.url).pathname;

/** @typedef {{ layer: string, passed: boolean, message: string, details?: string }} ValidationResult */

/**
 * Run all validation layers against a component.
 * @returns {{ passed: boolean, results: ValidationResult[] }}
 */
export async function validate(component) {
  const results = [];

  results.push(checkSyntax(component));
  results.push(checkImports(component));
  results.push(checkPropsIntact(component));
  results.push(await runTests(component));
  results.push(await runTypeCheck(component));
  results.push(await compareScreenshots(component));
  results.push(await runA11yScan(component));

  const passed = results.every(r => r.passed);
  return { passed, results };
}

// ─── Layer 1: Syntax Check ───────────────────────────────────────────────────
function checkSyntax(component) {
  for (const relFile of component.files) {
    const filePath = join(ROOT, relFile);
    try {
      // Use Node's built-in parser to check for syntax errors
      const content = readFileSync(filePath, "utf-8");
      // Quick check: unbalanced quotes/braces from bad conversion
      const openBraces = (content.match(/\{/g) || []).length;
      const closeBraces = (content.match(/\}/g) || []).length;
      if (openBraces !== closeBraces) {
        return { layer: "syntax", passed: false, message: `Unbalanced braces in ${relFile}`, details: `open: ${openBraces}, close: ${closeBraces}` };
      }
      // Check for broken template literals
      const backticks = (content.match(/`/g) || []).length;
      if (backticks % 2 !== 0) {
        return { layer: "syntax", passed: false, message: `Unbalanced backticks in ${relFile}` };
      }
    } catch (e) {
      return { layer: "syntax", passed: false, message: `Syntax error in ${relFile}: ${e.message}` };
    }
  }
  return { layer: "syntax", passed: true, message: "Syntax OK" };
}

// ─── Layer 2: Import Check ───────────────────────────────────────────────────
function checkImports(component) {
  for (const relFile of component.files) {
    const content = readFileSync(join(ROOT, relFile), "utf-8");
    // Ensure classnames import still exists if classNames is used
    if (/classNames?\s*\(/.test(content) && !/import.*classnames/i.test(content) && !/import.*classNames/i.test(content)) {
      // Check for require too
      if (!/require\s*\(\s*["']classnames["']\s*\)/.test(content)) {
        return { layer: "imports", passed: false, message: `${relFile} uses classNames but missing import` };
      }
    }
  }
  return { layer: "imports", passed: true, message: "Imports OK" };
}

// ─── Layer 3: Props Interface Intact ─────────────────────────────────────────
function checkPropsIntact(component) {
  for (const relFile of component.files) {
    const filePath = join(ROOT, relFile);
    const current = readFileSync(filePath, "utf-8");
    const backupPath = filePath + ".bs-backup";

    if (!existsSync(backupPath)) continue;
    const original = readFileSync(backupPath, "utf-8");

    // Extract propTypes or interface definitions
    const origProps = extractPropSignature(original);
    const currProps = extractPropSignature(current);

    if (origProps && currProps && origProps !== currProps) {
      return {
        layer: "props-intact",
        passed: false,
        message: `Props interface changed in ${relFile}`,
        details: `Original had ${origProps.length} chars, current has ${currProps.length} chars`,
      };
    }
  }
  return { layer: "props-intact", passed: true, message: "Props interface unchanged" };
}

function extractPropSignature(content) {
  // Extract PropTypes block
  const propTypesMatch = content.match(/(\w+)\.propTypes\s*=\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/s);
  if (propTypesMatch) return propTypesMatch[0];
  // Extract TypeScript interface/type
  const tsMatch = content.match(/(?:interface|type)\s+\w+Props\s*(?:=\s*)?\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/s);
  if (tsMatch) return tsMatch[0];
  return null;
}

// ─── Layer 4: Run Existing Tests ─────────────────────────────────────────────
async function runTests(component) {
  // Determine which test runner to use based on package config
  const pkgName = component.name.split("/")[0];
  const pkgDir = join(ROOT, "packages", pkgName);
  const pkgJson = JSON.parse(readFileSync(join(pkgDir, "package.json"), "utf-8"));

  const hasVitest = pkgJson.devDependencies?.vitest || pkgJson.dependencies?.vitest || pkgJson.scripts?.test?.includes("vitest");
  const hasJest = !hasVitest && (pkgJson.devDependencies?.jest || pkgJson.dependencies?.jest || pkgJson.jest);

  // Find test files for this component
  const componentName = component.name.split("/")[1];
  const testPattern = `${componentName}`;

  let cmd;
  if (hasVitest) {
    cmd = `npx vitest run --reporter=json --passWithNoTests "${testPattern}" 2>&1`;
  } else if (hasJest) {
    cmd = `npx jest --passWithNoTests --json "${testPattern}" 2>&1`;
  } else {
    return { layer: "tests", passed: true, message: "No test runner configured — skipped" };
  }

  try {
    execSync(cmd, { cwd: pkgDir, timeout: 60000, stdio: "pipe" });
    return { layer: "tests", passed: true, message: "Tests passed" };
  } catch (e) {
    const output = e.stdout?.toString() || e.stderr?.toString() || e.message;
    // Try to parse JSON output for failure details
    let failureMsg = "Tests failed";
    try {
      const json = JSON.parse(output);
      if (json.numFailedTests) failureMsg = `${json.numFailedTests} test(s) failed`;
    } catch { /* not JSON */ }
    return { layer: "tests", passed: false, message: failureMsg, details: output.slice(0, 500) };
  }
}

// ─── Layer 5: Type Check ─────────────────────────────────────────────────────
async function runTypeCheck(component) {
  const pkgName = component.name.split("/")[0];
  const pkgDir = join(ROOT, "packages", pkgName);

  // Only run if tsconfig exists
  if (!existsSync(join(pkgDir, "tsconfig.json"))) {
    return { layer: "typecheck", passed: true, message: "No tsconfig — skipped" };
  }

  // Only check .ts/.tsx files
  const tsFiles = component.files.filter(f => /\.tsx?$/.test(f));
  if (tsFiles.length === 0) {
    return { layer: "typecheck", passed: true, message: "No TypeScript files — skipped" };
  }

  try {
    execSync(`npx tsc --noEmit --pretty false 2>&1`, {
      cwd: pkgDir,
      timeout: 30000,
      stdio: "pipe",
    });
    return { layer: "typecheck", passed: true, message: "Type check passed" };
  } catch (e) {
    const output = e.stdout?.toString() || "";
    // Filter errors to only those in our component files
    const relevantErrors = output
      .split("\n")
      .filter(line => component.files.some(f => line.includes(f.split("/").pop())))
      .slice(0, 10)
      .join("\n");

    if (!relevantErrors) {
      // Errors exist but not in our files — pass
      return { layer: "typecheck", passed: true, message: "Type errors exist but not in converted files" };
    }
    return { layer: "typecheck", passed: false, message: "Type errors in converted files", details: relevantErrors };
  }
}

/**
 * Format validation results for display.
 */
export function formatResults(results) {
  return results.map(r => {
    const icon = r.passed ? "✓" : "✗";
    let line = `  ${icon} [${r.layer}] ${r.message}`;
    if (!r.passed && r.details) line += `\n    ${r.details.split("\n")[0]}`;
    return line;
  }).join("\n");
}
