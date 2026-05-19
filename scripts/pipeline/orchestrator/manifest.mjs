/**
 * Manifest Builder
 * Scans the monorepo and builds a prioritized component manifest for conversion.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, relative, extname, basename, dirname } from "path";

const ROOT = new URL("../../..", import.meta.url).pathname;
const PACKAGES_DIR = join(ROOT, "packages");

// Bootstrap class patterns (simplified for detection)
const BS_CLASS_RE = /\b(btn|card|modal|nav|accordion|form-|table|alert|badge|breadcrumb|pagination|col-|row|container|d-flex|d-none|d-block|me-|ms-|mt-|mb-|mx-|my-|p-|pt-|pb-|ps-|pe-|px-|py-|text-|bg-|border|rounded|shadow|img-fluid|visually-hidden|collapse|show|active|disabled|fade|uds-)\S*/g;

function walkDir(dir, extensions, skip = ["node_modules", "dist", ".storybook", "coverage", "__mocks__"]) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    if (skip.includes(entry)) continue;
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) results.push(...walkDir(full, extensions, skip));
    else if (extensions.includes(extname(full))) results.push(full);
  }
  return results;
}

function extractImports(content) {
  const imports = [];
  const re = /from\s+["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    imports.push(m[1]);
  }
  return imports;
}

function extractBootstrapClasses(content) {
  const classes = new Set();
  const matches = content.match(BS_CLASS_RE) || [];
  for (const m of matches) classes.add(m);
  return [...classes];
}

function isComponentDir(dir) {
  const entries = readdirSync(dir);
  return entries.some(e => /\.(jsx|tsx)$/.test(e) && !/\.(test|spec|stories)\./.test(e));
}

function getComponentDirs(packageSrc) {
  if (!existsSync(packageSrc)) return [];
  const dirs = [];
  const componentsDir = join(packageSrc, "components");
  if (existsSync(componentsDir)) {
    for (const entry of readdirSync(componentsDir)) {
      const full = join(componentsDir, entry);
      if (statSync(full).isDirectory() && isComponentDir(full)) {
        dirs.push(full);
      }
    }
  }
  return dirs;
}

export function buildManifest() {
  const packages = readdirSync(PACKAGES_DIR).filter(p => {
    const full = join(PACKAGES_DIR, p);
    return statSync(full).isDirectory() && existsSync(join(full, "src"));
  });

  const components = [];

  for (const pkg of packages) {
    const srcDir = join(PACKAGES_DIR, pkg, "src");
    const componentDirs = getComponentDirs(srcDir);

    for (const dir of componentDirs) {
      const name = `${pkg}/${basename(dir)}`;
      const files = readdirSync(dir)
        .filter(f => /\.(jsx|tsx|js|ts)$/.test(f) && !/\.(test|spec|stories)\./.test(f))
        .map(f => relative(ROOT, join(dir, f)));

      // Scan for Bootstrap classes and imports
      let allClasses = new Set();
      let allImports = [];

      for (const file of files) {
        const content = readFileSync(join(ROOT, file), "utf-8");
        const classes = extractBootstrapClasses(content);
        classes.forEach(c => allClasses.add(c));
        allImports.push(...extractImports(content));
      }

      // Resolve internal component dependencies
      const dependsOn = [];
      for (const imp of allImports) {
        if (imp.startsWith("../") || imp.startsWith("./")) {
          // Check if it references another component in the same package
          const match = imp.match(/\.\.\/(\w+)\//);
          if (match) {
            const depName = `${pkg}/${match[1]}`;
            if (depName !== name) dependsOn.push(depName);
          }
        }
      }

      if (allClasses.size > 0) {
        components.push({
          name,
          path: relative(ROOT, dir),
          files,
          bootstrapClasses: [...allClasses],
          dependsOn: [...new Set(dependsOn)],
          status: "pending",
          attempts: 0,
          failures: [],
          lastError: null,
        });
      }
    }
  }

  // Sort: leaf components first (fewest dependencies), then by class count (simplest first)
  components.sort((a, b) => {
    if (a.dependsOn.length !== b.dependsOn.length) return a.dependsOn.length - b.dependsOn.length;
    return a.bootstrapClasses.length - b.bootstrapClasses.length;
  });

  return components;
}
