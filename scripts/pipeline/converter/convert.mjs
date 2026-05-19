/**
 * Converter Agent
 * Transforms Bootstrap 5 classes to Tailwind CSS equivalents in React components.
 * Uses a deterministic mapping table + AST-aware string replacement.
 */
import { readFileSync, writeFileSync, copyFileSync, unlinkSync } from "fs";
import { join } from "path";

const ROOT = new URL("../../..", import.meta.url).pathname;

// ─── Bootstrap → Tailwind Class Mapping ──────────────────────────────────────
// Maps Bootstrap classes to their Tailwind equivalents.
// Classes provided by the UDS plugin (btn, card, etc.) are kept as-is
// since the plugin already provides them.
const CLASS_MAP = {
  // Grid → Tailwind grid/flex
  container: "container",
  "container-fluid": "w-full mx-auto px-3",
  row: "grid grid-cols-12 gap-gutter",
  col: "col-span-12",
  "col-1": "col-span-1", "col-2": "col-span-2", "col-3": "col-span-3",
  "col-4": "col-span-4", "col-5": "col-span-5", "col-6": "col-span-6",
  "col-7": "col-span-7", "col-8": "col-span-8", "col-9": "col-span-9",
  "col-10": "col-span-10", "col-11": "col-span-11", "col-12": "col-span-12",
  // Responsive grid
  "col-sm-1": "sm:col-span-1", "col-sm-2": "sm:col-span-2", "col-sm-3": "sm:col-span-3",
  "col-sm-4": "sm:col-span-4", "col-sm-5": "sm:col-span-5", "col-sm-6": "sm:col-span-6",
  "col-sm-7": "sm:col-span-7", "col-sm-8": "sm:col-span-8", "col-sm-9": "sm:col-span-9",
  "col-sm-10": "sm:col-span-10", "col-sm-11": "sm:col-span-11", "col-sm-12": "sm:col-span-12",
  "col-md-1": "md:col-span-1", "col-md-2": "md:col-span-2", "col-md-3": "md:col-span-3",
  "col-md-4": "md:col-span-4", "col-md-5": "md:col-span-5", "col-md-6": "md:col-span-6",
  "col-md-7": "md:col-span-7", "col-md-8": "md:col-span-8", "col-md-9": "md:col-span-9",
  "col-md-10": "md:col-span-10", "col-md-11": "md:col-span-11", "col-md-12": "md:col-span-12",
  "col-lg-1": "lg:col-span-1", "col-lg-2": "lg:col-span-2", "col-lg-3": "lg:col-span-3",
  "col-lg-4": "lg:col-span-4", "col-lg-5": "lg:col-span-5", "col-lg-6": "lg:col-span-6",
  "col-lg-7": "lg:col-span-7", "col-lg-8": "lg:col-span-8", "col-lg-9": "lg:col-span-9",
  "col-lg-10": "lg:col-span-10", "col-lg-11": "lg:col-span-11", "col-lg-12": "lg:col-span-12",
  "col-xl-1": "xl:col-span-1", "col-xl-2": "xl:col-span-2", "col-xl-3": "xl:col-span-3",
  "col-xl-4": "xl:col-span-4", "col-xl-5": "xl:col-span-5", "col-xl-6": "xl:col-span-6",
  "col-xl-7": "xl:col-span-7", "col-xl-8": "xl:col-span-8", "col-xl-9": "xl:col-span-9",
  "col-xl-10": "xl:col-span-10", "col-xl-11": "xl:col-span-11", "col-xl-12": "xl:col-span-12",
  // Display
  "d-none": "hidden", "d-block": "block", "d-inline": "inline",
  "d-inline-block": "inline-block", "d-flex": "flex", "d-inline-flex": "inline-flex",
  "d-grid": "grid",
  // Flexbox
  "flex-row": "flex-row", "flex-column": "flex-col",
  "flex-wrap": "flex-wrap", "flex-nowrap": "flex-nowrap",
  "flex-grow-1": "grow", "flex-shrink-0": "shrink-0",
  "justify-content-start": "justify-start", "justify-content-end": "justify-end",
  "justify-content-center": "justify-center", "justify-content-between": "justify-between",
  "justify-content-around": "justify-around", "justify-content-evenly": "justify-evenly",
  "align-items-start": "items-start", "align-items-end": "items-end",
  "align-items-center": "items-center", "align-items-baseline": "items-baseline",
  "align-items-stretch": "items-stretch",
  "align-self-start": "self-start", "align-self-end": "self-end",
  "align-self-center": "self-center", "align-self-stretch": "self-stretch",
  // Spacing (Bootstrap 0-5 → UDS scale)
  "m-0": "m-0", "m-1": "m-1", "m-2": "m-2", "m-3": "m-3", "m-4": "m-4", "m-5": "m-5", "m-auto": "m-auto",
  "mt-0": "mt-0", "mt-1": "mt-1", "mt-2": "mt-2", "mt-3": "mt-3", "mt-4": "mt-4", "mt-5": "mt-5", "mt-auto": "mt-auto",
  "mb-0": "mb-0", "mb-1": "mb-1", "mb-2": "mb-2", "mb-3": "mb-3", "mb-4": "mb-4", "mb-5": "mb-5",
  "ms-0": "ml-0", "ms-1": "ml-1", "ms-2": "ml-2", "ms-3": "ml-3", "ms-4": "ml-4", "ms-5": "ml-5", "ms-auto": "ml-auto",
  "me-0": "mr-0", "me-1": "mr-1", "me-2": "mr-2", "me-3": "mr-3", "me-4": "mr-4", "me-5": "mr-5", "me-auto": "mr-auto",
  "mx-0": "mx-0", "mx-1": "mx-1", "mx-2": "mx-2", "mx-3": "mx-3", "mx-4": "mx-4", "mx-5": "mx-5", "mx-auto": "mx-auto",
  "my-0": "my-0", "my-1": "my-1", "my-2": "my-2", "my-3": "my-3", "my-4": "my-4", "my-5": "my-5",
  "p-0": "p-0", "p-1": "p-1", "p-2": "p-2", "p-3": "p-3", "p-4": "p-4", "p-5": "p-5",
  "pt-0": "pt-0", "pt-1": "pt-1", "pt-2": "pt-2", "pt-3": "pt-3", "pt-4": "pt-4", "pt-5": "pt-5",
  "pb-0": "pb-0", "pb-1": "pb-1", "pb-2": "pb-2", "pb-3": "pb-3", "pb-4": "pb-4", "pb-5": "pb-5",
  "ps-0": "pl-0", "ps-1": "pl-1", "ps-2": "pl-2", "ps-3": "pl-3", "ps-4": "pl-4", "ps-5": "pl-5",
  "pe-0": "pr-0", "pe-1": "pr-1", "pe-2": "pr-2", "pe-3": "pr-3", "pe-4": "pr-4", "pe-5": "pr-5",
  "px-0": "px-0", "px-1": "px-1", "px-2": "px-2", "px-3": "px-3", "px-4": "px-4", "px-5": "px-5",
  "py-0": "py-0", "py-1": "py-1", "py-2": "py-2", "py-3": "py-3", "py-4": "py-4", "py-5": "py-5",
  // Typography
  "text-start": "text-left", "text-end": "text-right", "text-center": "text-center",
  "text-wrap": "text-wrap", "text-nowrap": "whitespace-nowrap",
  "text-uppercase": "uppercase", "text-lowercase": "lowercase", "text-capitalize": "capitalize",
  "text-decoration-none": "no-underline",
  "text-truncate": "truncate",
  "fw-bold": "font-bold", "fw-normal": "font-normal", "fw-light": "font-light",
  "fw-bolder": "font-bolder", "fw-lighter": "font-lighter",
  "fst-italic": "italic", "fst-normal": "not-italic",
  "fs-1": "text-h1", "fs-2": "text-h2", "fs-3": "text-h3",
  "fs-4": "text-h4", "fs-5": "text-h5", "fs-6": "text-medium",
  // Colors
  "text-white": "text-white", "text-dark": "text-gray-1", "text-muted": "text-gray-3",
  "text-primary": "text-maroon", "text-secondary": "text-gold",
  "bg-white": "bg-white", "bg-light": "bg-gray-6", "bg-dark": "bg-gray-1",
  "bg-primary": "bg-maroon", "bg-secondary": "bg-gold",
  "bg-success": "bg-bg-success", "bg-danger": "bg-bg-error",
  "bg-warning": "bg-bg-warning", "bg-info": "bg-bg-info",
  // Borders
  border: "border", "border-0": "border-0",
  "border-top": "border-t", "border-bottom": "border-b",
  "border-start": "border-l", "border-end": "border-r",
  rounded: "rounded", "rounded-0": "rounded-none",
  "rounded-circle": "rounded-full", "rounded-pill": "rounded-pill",
  // Shadows
  shadow: "shadow", "shadow-sm": "shadow-sm", "shadow-lg": "shadow-lg", "shadow-none": "shadow-none",
  // Sizing
  "w-25": "w-1/4", "w-50": "w-1/2", "w-75": "w-3/4", "w-100": "w-full", "w-auto": "w-auto",
  "h-100": "h-full", "h-auto": "h-auto",
  "mw-100": "max-w-full", "mh-100": "max-h-full",
  // Position
  "position-relative": "relative", "position-absolute": "absolute",
  "position-fixed": "fixed", "position-sticky": "sticky", "position-static": "static",
  "top-0": "top-0", "bottom-0": "bottom-0", "start-0": "left-0", "end-0": "right-0",
  "top-50": "top-1/2", "start-50": "left-1/2",
  "translate-middle": "-translate-x-1/2 -translate-y-1/2",
  // Visibility
  visible: "visible", invisible: "invisible",
  "visually-hidden": "sr-only",
  // Overflow
  "overflow-auto": "overflow-auto", "overflow-hidden": "overflow-hidden",
  "overflow-visible": "overflow-visible", "overflow-scroll": "overflow-scroll",
  // Float
  "float-start": "float-left", "float-end": "float-right", "float-none": "float-none",
  clearfix: "after:content-[''] after:table after:clear-both",
  // Images
  "img-fluid": "max-w-full h-auto",
  "img-thumbnail": "max-w-full h-auto p-1 border rounded",
  // Misc
  "stretched-link": "stretched-link",
  "pe-none": "pointer-events-none", "pe-auto": "pointer-events-auto",
  "user-select-none": "select-none", "user-select-all": "select-all",
  "opacity-0": "opacity-0", "opacity-25": "opacity-25",
  "opacity-50": "opacity-50", "opacity-75": "opacity-75", "opacity-100": "opacity-100",
  // Component classes kept as-is (provided by UDS plugin)
  // btn, btn-gold, btn-maroon, btn-dark, btn-gray, btn-md, btn-sm, etc.
  // card, card-body, card-header, card-title, card-footer, card-img-top
  // nav, nav-link, nav-item, nav-tabs
  // accordion, accordion-item, accordion-header, accordion-button, accordion-body
  // form-group, form-control, form-check, form-label, form-select
  // alert, alert-success, alert-danger, alert-warning, alert-info
  // table, modal, modal-dialog, modal-content, modal-header, modal-body, modal-footer
};

// ─── Converter Logic ─────────────────────────────────────────────────────────

function mapClass(cls) {
  if (CLASS_MAP[cls]) return CLASS_MAP[cls];
  // Pass through classes provided by the UDS plugin
  if (/^(btn|card|nav|accordion|form-|alert|table|modal|uds-)/.test(cls)) return cls;
  // Unknown class — keep as-is with a marker comment
  return cls;
}

function convertClassString(classStr) {
  return classStr
    .split(/\s+/)
    .filter(Boolean)
    .map(mapClass)
    .join(" ");
}

/**
 * Convert a source file's Bootstrap classes to Tailwind.
 * Handles: className="...", classNames(...), template literals with classes.
 */
function convertFileContent(content) {
  let converted = content;
  const unmapped = new Set();

  // 1. Static className="..." strings
  converted = converted.replace(
    /(className\s*=\s*")([^"]+)(")/g,
    (_, pre, classes, post) => `${pre}${convertClassString(classes)}${post}`
  );

  // 2. className={'...'} single-quoted in JSX expression
  converted = converted.replace(
    /(className\s*=\s*\{\s*['"])([^'"]+)(['"]\s*\})/g,
    (_, pre, classes, post) => `${pre}${convertClassString(classes)}${post}`
  );

  // 3. Template literal class strings in className context only
  // Matches: className={`...`} — skips styled.X`...` and css`...`
  // Only converts complete class tokens (space-delimited), preserves ${} expressions
  converted = converted.replace(
    /(className\s*=\s*\{\s*`)([^`]*)(`)/g,
    (_, pre, inner, post) => {
      // Split on ${...} expressions, convert only static segments
      const result = inner.replace(
        /([^${}]+)(?=\$\{|$)/g,
        (segment) => {
          // Convert each space-separated token that looks like a class
          return segment.replace(/\b([a-z][\w-]*)\b/g, (cls) => mapClass(cls));
        }
      );
      return `${pre}${result}${post}`;
    }
  );

  // 4. classNames() object keys: classNames({ 'btn-md': condition })
  converted = converted.replace(
    /classNames?\s*\(([^)]*)\)/gs,
    (match) => {
      return match.replace(
        /(['"`])([a-z][\w-]*)(['"`])\s*:/g,
        (_, q1, cls, q2) => `${q1}${mapClass(cls)}${q2}:`
      );
    }
  );

  // 5. classNames() string arguments: classNames("btn", "btn-gold")
  converted = converted.replace(
    /(classNames?\s*\([^)]*)(["'])([^"']+)(["'])/g,
    (match, pre, q1, classes, q2) => {
      return `${pre}${q1}${convertClassString(classes)}${q2}`;
    }
  );

  return converted;
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Convert a component's files from Bootstrap to Tailwind.
 * Creates backups before modifying.
 * @returns {{ converted: string[], unmapped: string[] }}
 */
export function convertComponent(component) {
  const converted = [];
  const allUnmapped = new Set();

  for (const relFile of component.files) {
    const filePath = join(ROOT, relFile);
    const backupPath = filePath + ".bs-backup";

    // Create backup
    copyFileSync(filePath, backupPath);

    const original = readFileSync(filePath, "utf-8");
    const result = convertFileContent(original);

    if (result !== original) {
      writeFileSync(filePath, result);
      converted.push(relFile);
    }
  }

  return { converted, unmapped: [...allUnmapped] };
}

/**
 * Revert a component's files from backup.
 */
export function revertComponent(component) {
  for (const relFile of component.files) {
    const filePath = join(ROOT, relFile);
    const backupPath = filePath + ".bs-backup";
    try {
      copyFileSync(backupPath, filePath);
    } catch { /* no backup exists */ }
  }
}

/**
 * Clean up backup files after successful conversion.
 */
export function cleanBackups(component) {
  for (const relFile of component.files) {
    try { unlinkSync(join(ROOT, relFile) + ".bs-backup"); } catch { /* noop */ }
  }
}

export { CLASS_MAP, convertClassString, convertFileContent };
