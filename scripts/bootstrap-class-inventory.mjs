#!/usr/bin/env node
/**
 * Bootstrap Class Inventory Scanner
 * Scans JSX/TSX files in the UDS monorepo for Bootstrap class usage.
 * Outputs a JSON report and summary to stdout.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, relative, extname } from "path";

const ROOT = new URL("..", import.meta.url).pathname;
const PACKAGES_DIR = join(ROOT, "packages");
const OUTPUT_FILE = join(ROOT, "bootstrap-class-inventory.json");

// Bootstrap 5 class patterns (utilities, components, layout)
const BS_PATTERNS = [
  // Layout
  /\bcontainer(?:-fluid|-sm|-md|-lg|-xl|-xxl)?\b/,
  /\brow\b/, /\bcol(?:-(?:sm|md|lg|xl|xxl))?(?:-(?:auto|\d{1,2}))?\b/,
  /\bg-[0-5]\b/, /\bgx-[0-5]\b/, /\bgy-[0-5]\b/,
  // Flexbox
  /\bd-(?:none|inline|block|grid|table|flex|inline-flex|inline-block)(?:-(?:sm|md|lg|xl|xxl))?\b/,
  /\bflex-(?:row|column|wrap|nowrap|fill|grow|shrink)(?:-reverse)?(?:-(?:sm|md|lg|xl|xxl))?\b/,
  /\bjustify-content-(?:start|end|center|between|around|evenly)(?:-(?:sm|md|lg|xl|xxl))?\b/,
  /\balign-(?:items|self|content)-(?:start|end|center|baseline|stretch)(?:-(?:sm|md|lg|xl|xxl))?\b/,
  /\border-(?:first|last|\d{1,2})(?:-(?:sm|md|lg|xl|xxl))?\b/,
  // Spacing
  /\b[mp][tbsexyl]?-(?:auto|[0-5])(?:-(?:sm|md|lg|xl|xxl))?\b/,
  // Sizing
  /\b[wh]-(?:25|50|75|100|auto)\b/, /\bmw-100\b/, /\bmh-100\b/,
  /\bvw-100\b/, /\bvh-100\b/, /\bmin-vw-100\b/, /\bmin-vh-100\b/,
  // Typography
  /\bfs-[1-6]\b/, /\bfw-(?:bold|bolder|semibold|normal|light|lighter)\b/,
  /\bfst-(?:italic|normal)\b/, /\blh-(?:1|sm|base|lg)\b/,
  /\btext-(?:start|end|center|wrap|nowrap|break|lowercase|uppercase|capitalize|muted|primary|secondary|success|danger|warning|info|light|dark|body|white|black-50|white-50|reset|decoration-none|decoration-underline|truncate)(?:-(?:sm|md|lg|xl|xxl))?\b/,
  /\bfont-monospace\b/, /\btext-opacity-(?:25|50|75|100)\b/,
  // Colors & Backgrounds
  /\bbg-(?:primary|secondary|success|danger|warning|info|light|dark|body|white|transparent|opacity-(?:10|25|50|75|100)|gradient)\b/,
  /\btext-bg-(?:primary|secondary|success|danger|warning|info|light|dark)\b/,
  // Borders
  /\bborder(?:-(?:top|end|bottom|start|0|1|2|3|4|5|primary|secondary|success|danger|warning|info|light|dark|white))?\b/,
  /\brounded(?:-(?:top|end|bottom|start|circle|pill|0|1|2|3|4|5))?\b/,
  // Components
  /\bbtn(?:-(?:primary|secondary|success|danger|warning|info|light|dark|link|outline-(?:primary|secondary|success|danger|warning|info|light|dark)|lg|sm|block|close))?\b/,
  /\bcard(?:-(?:body|title|subtitle|text|link|header|footer|img-top|img-bottom|img-overlay|group))?\b/,
  /\bmodal(?:-(?:dialog|content|header|title|body|footer|sm|lg|xl|fullscreen|backdrop|static))?\b/,
  /\bnav(?:-(?:item|link|tabs|pills|fill|justified|underline))?\b/,
  /\bnavbar(?:-(?:brand|nav|toggler|collapse|text|expand(?:-(?:sm|md|lg|xl|xxl))?|light|dark))?\b/,
  /\bdropdown(?:-(?:toggle|menu|item|header|divider))?\b/,
  /\bbadge\b/, /\balert(?:-(?:primary|secondary|success|danger|warning|info|light|dark|dismissible|heading|link))?\b/,
  /\bbreadcrumb(?:-item)?\b/,
  /\bpagination(?:-(?:lg|sm))?\b/, /\bpage-(?:item|link)\b/,
  /\blist-group(?:-(?:item|flush|numbered|horizontal))?\b/,
  /\baccordion(?:-(?:item|header|button|body|collapse|flush))?\b/,
  /\btab-(?:content|pane)\b/,
  /\btooltip\b/, /\bpopover\b/,
  /\bspinner-(?:border|grow)(?:-sm)?\b/,
  /\bplaceholder(?:-(?:glow|wave|xs|sm|lg))?\b/,
  /\boffcanvas(?:-(?:start|end|top|bottom|header|title|body))?\b/,
  /\btoast(?:-(?:container|header|body))?\b/,
  /\bcarousel(?:-(?:item|inner|control-prev|control-next|indicators|caption|fade|dark))?\b/,
  /\bcollapse\b/, /\bcollapsing\b/,
  /\bfade\b/, /\bshow\b/, /\bhide\b/,
  // Tables
  /\btable(?:-(?:striped|bordered|borderless|hover|sm|responsive(?:-(?:sm|md|lg|xl|xxl))?|primary|secondary|success|danger|warning|info|light|dark|active|group-divider))?\b/,
  // Forms
  /\bform-(?:control|select|check|check-input|check-label|switch|label|text|range|floating|group)\b/,
  /\binput-group(?:-(?:text|sm|lg))?\b/,
  /\bwas-validated\b/, /\binvalid-feedback\b/, /\bvalid-feedback\b/,
  /\bform-control-(?:sm|lg|plaintext|color)\b/,
  // Visibility & Display
  /\bvisible\b/, /\binvisible\b/,
  /\boverflow-(?:auto|hidden|visible|scroll)\b/,
  /\bposition-(?:static|relative|absolute|fixed|sticky)\b/,
  /\btop-(?:0|50|100)\b/, /\bbottom-(?:0|50|100)\b/,
  /\bstart-(?:0|50|100)\b/, /\bend-(?:0|50|100)\b/,
  /\btranslate-middle(?:-[xy])?\b/,
  /\bfloat-(?:start|end|none)(?:-(?:sm|md|lg|xl|xxl))?\b/,
  /\bclearfix\b/,
  // Shadows & Opacity
  /\bshadow(?:-(?:sm|lg|none))?\b/,
  /\bopacity-(?:0|25|50|75|100)\b/,
  // Interactions
  /\bpe-(?:none|auto)\b/, /\buser-select-(?:all|auto|none)\b/,
  // Misc
  /\bimg-fluid\b/, /\bimg-thumbnail\b/,
  /\bratio(?:-(?:1x1|4x3|16x9|21x9))?\b/,
  /\bvisually-hidden(?:-focusable)?\b/,
  /\bstretched-link\b/, /\btext-truncate\b/,
  /\bvr\b/, /\bfixed-(?:top|bottom)\b/, /\bsticky-(?:top|bottom|sm|md|lg|xl|xxl)\b/,
  // Active/disabled states
  /\bactive\b/, /\bdisabled\b/,
];

// Also catch custom ASU/UDS classes that extend Bootstrap
const CUSTOM_BS_PATTERNS = [
  /\buds-\w[\w-]*\b/,
  /\bbtn-(?:gold|maroon|gray|dark)\b/,
  /\bbtn-(?:medium|small|large)\b/,
  /\bbtn-(?:borderless|outline|filled)(?:-(?:gold|maroon|gray|dark))?\b/,
];

const ALL_PATTERNS = [...BS_PATTERNS, ...CUSTOM_BS_PATTERNS];

function walkDir(dir, extensions) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === "dist" || entry === ".storybook" || entry === "coverage") continue;
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...walkDir(full, extensions));
    } else if (extensions.includes(extname(full))) {
      results.push(full);
    }
  }
  return results;
}

function extractClassStrings(content) {
  const strings = [];
  // Match className="..." and className={'...'}
  const classNameRegex = /className\s*=\s*(?:{?\s*["'`]([^"'`]*)["'`]\s*}?|{([^}]+)})/g;
  let match;
  while ((match = classNameRegex.exec(content)) !== null) {
    if (match[1]) strings.push(match[1]);
    if (match[2]) strings.push(match[2]);
  }
  // Match classNames(...) calls
  const classNamesRegex = /classNames?\s*\(([^)]*)\)/gs;
  while ((match = classNamesRegex.exec(content)) !== null) {
    strings.push(match[1]);
  }
  // Match template literals with classes
  const templateRegex = /`([^`]*)`/g;
  while ((match = templateRegex.exec(content)) !== null) {
    strings.push(match[1]);
  }
  return strings.join(" ");
}

function findBootstrapClasses(classText) {
  const found = new Set();
  for (const pattern of ALL_PATTERNS) {
    const globalPattern = new RegExp(pattern.source, "g");
    let match;
    while ((match = globalPattern.exec(classText)) !== null) {
      found.add(match[0]);
    }
  }
  return [...found];
}

// Main
const files = walkDir(PACKAGES_DIR, [".jsx", ".tsx", ".js", ".ts"]);
const inventory = {};
const classCounts = {};
const filesByClass = {};

for (const file of files) {
  // Skip test/story files for the primary inventory (but note them)
  const relPath = relative(ROOT, file);
  const content = readFileSync(file, "utf-8");
  const classText = extractClassStrings(content);
  const classes = findBootstrapClasses(classText);

  if (classes.length > 0) {
    const isTest = /\.(test|spec|stories)\.[jt]sx?$/.test(file);
    inventory[relPath] = { classes, isTest };
    for (const cls of classes) {
      classCounts[cls] = (classCounts[cls] || 0) + 1;
      if (!filesByClass[cls]) filesByClass[cls] = [];
      filesByClass[cls].push(relPath);
    }
  }
}

// Sort by frequency
const sortedClasses = Object.entries(classCounts)
  .sort((a, b) => b[1] - a[1]);

const report = {
  summary: {
    totalFiles: Object.keys(inventory).length,
    sourceFiles: Object.values(inventory).filter(v => !v.isTest).length,
    testFiles: Object.values(inventory).filter(v => v.isTest).length,
    uniqueClasses: sortedClasses.length,
    totalUsages: sortedClasses.reduce((sum, [, count]) => sum + count, 0),
  },
  classesByFrequency: sortedClasses.map(([cls, count]) => ({
    class: cls,
    count,
    files: filesByClass[cls],
  })),
  fileInventory: inventory,
};

writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2));

// Print summary
console.log("\n=== Bootstrap Class Inventory ===\n");
console.log(`Files with Bootstrap classes: ${report.summary.totalFiles}`);
console.log(`  Source files: ${report.summary.sourceFiles}`);
console.log(`  Test/story files: ${report.summary.testFiles}`);
console.log(`Unique Bootstrap classes found: ${report.summary.uniqueClasses}`);
console.log(`Total class usages: ${report.summary.totalUsages}`);
console.log(`\n--- Top 40 Classes by Frequency ---\n`);
for (const [cls, count] of sortedClasses.slice(0, 40)) {
  console.log(`  ${cls.padEnd(35)} ${count} usages across ${filesByClass[cls].length} files`);
}
console.log(`\n--- Classes by Category ---\n`);

const categories = {
  "Buttons": /^btn/,
  "Spacing (margin/padding)": /^[mp][tbsexyl]?-/,
  "Grid/Layout": /^(container|row|col|g[xy]?-)/,
  "Flexbox": /^(d-flex|d-inline-flex|flex-|justify-|align-)/,
  "Display": /^d-/,
  "Typography": /^(text-|fs-|fw-|fst-|lh-|font-)/,
  "Colors/Backgrounds": /^(bg-|text-bg-)/,
  "Cards": /^card/,
  "Forms": /^(form-|input-group|was-validated|invalid-|valid-)/,
  "Tables": /^table/,
  "Navigation": /^(nav|navbar|dropdown)/,
  "Modals": /^modal/,
  "Accordion": /^accordion/,
  "Borders/Rounded": /^(border|rounded)/,
  "Visibility/Position": /^(visible|invisible|overflow-|position-|top-|bottom-|start-|end-|float-)/,
  "Shadows/Opacity": /^(shadow|opacity-)/,
  "States": /^(active|disabled|show|hide|fade|collapse)/,
  "Custom UDS": /^(uds-|btn-(gold|maroon|gray|dark|medium|small|large|borderless|outline|filled))/,
};

for (const [category, pattern] of Object.entries(categories)) {
  const matches = sortedClasses.filter(([cls]) => pattern.test(cls));
  if (matches.length > 0) {
    const totalUsages = matches.reduce((sum, [, count]) => sum + count, 0);
    console.log(`  ${category}: ${matches.length} classes, ${totalUsages} usages`);
    for (const [cls, count] of matches.slice(0, 5)) {
      console.log(`    ${cls} (${count})`);
    }
    if (matches.length > 5) console.log(`    ... and ${matches.length - 5} more`);
  }
}

console.log(`\nFull report written to: ${relative(ROOT, OUTPUT_FILE)}`);
