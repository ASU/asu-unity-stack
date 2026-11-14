// Quick-links helpers — WWWCMS-235
// Storybook-only module (React + test utilities). Nothing in this file ships to dist/.
// Follows the pattern of hero-helpers.jsx and reimagine-helpers.jsx.

export {
  emulateReducedMotion,
  realKeyboard,
  realPointer,
  resizeViewport,
  walkRules,
} from "../reimagine/reimagine-helpers.jsx";

// ---- Markup contract ----

// XSS-safe escape for attribute values and text nodes in template-literal HTML.
// Apostrophe is included so the helper remains XSS-safe in future single-quoted contexts.
const escape = value =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// URL allow-list for href attributes.
// Only the listed schemes are allowed. Anything else — including http:, file:,
// blob:, data:, vbscript:, custom schemes, and scheme-relative //evil — is
// blocked and replaced with "#". ASCII-whitespace leading characters are trimmed
// before scheme matching so that "  javascript:..." cannot bypass the check.
//
// Allowed: https:, mailto:, tel:, fragment-only (#...), and relative paths (no scheme).
const SAFE_SCHEMES = ["https:", "mailto:", "tel:"];

export const safeHref = href => {
  if (href == null) return "#";
  const raw = String(href);
  // Normalize ASCII whitespace that browsers would strip before scheme matching.
  const trimmed = raw.replace(/^[\t\n\f\r ]+/, "");
  if (trimmed === "") return "#";
  // Fragment-only is always safe.
  if (trimmed.startsWith("#")) return trimmed;
  // Scheme-relative URLs (//evil.example) are rejected; author must use https:.
  if (trimmed.startsWith("//")) return "#";
  // No scheme (relative path, query, root path) is safe.
  const schemeMatch = /^([a-zA-Z][a-zA-Z0-9+.-]*):/.exec(trimmed);
  if (!schemeMatch) return trimmed;
  // Scheme present: must be on the allow-list.
  const scheme = schemeMatch[1].toLowerCase() + ":";
  return SAFE_SCHEMES.includes(scheme) ? trimmed : "#";
};

// Font Awesome 6 (Free Solid). Per design, icons use the FA 6 `fa-solid` style prefix:
//   Explore ASU Online  — fa-solid fa-laptop
//   Visit an ASU campus — fa-solid fa-map-location-dot
//   Request info        — fa-solid fa-address-card
//   Apply now           — fa-solid fa-file-pen
// Storybook loads FA 6.4.2 CSS in .storybook/preview-head.html. Stage B: the host page
// must load Font Awesome 6 (the `fa-solid` prefix and these names do not exist in FA 5).
const DEFAULT_ITEMS = [
  {
    href: "https://asuonline.asu.edu",
    icon: "fa-laptop",
    label: "Explore ASU Online",
  },
  {
    href: "https://visit.asu.edu",
    icon: "fa-map-location-dot",
    label: "Visit an ASU campus",
  },
  {
    href: "https://admission.asu.edu/future-student-request",
    icon: "fa-address-card",
    label: "Request info",
  },
  {
    href: "https://admission.asu.edu/apply",
    icon: "fa-file-pen",
    label: "Apply now",
  },
];

// Spanish sibling link destination (resolves open question A6, WWWCMS-235).
export const SPANISH_HREF = "https://www.asu.edu/about/spanish";
// Lowercase "español" per Figma + Spanish grammar (WWWCMS-235 visual-fix). Overrules ticket Behavior spec wording.
export const SPANISH_LABEL = "Aprender más en español";

// Data layer attributes (Google Analytics). The theme's data-layer.js
// (unity-bootstrap-theme/src/js/data-layer.js) adds a click listener to every [data-ga]
// element and pushes its data-ga-* attributes (lowercased) to window.dataLayer; the bare
// data-ga value becomes `text`. Values below are provisional until the data team confirms
// the taxonomy (name / event / type / region / section).
const GA_ATTRIBUTES = [
  ["data-ga-name", "onclick"],
  ["data-ga-event", "link"],
  ["data-ga-action", "click"],
  ["data-ga-type", "internal link"],
  ["data-ga-region", "main content"],
  ["data-ga-section", "quick links"],
];

const gaAttributes = text =>
  ` data-ga="${escape(text)}"` +
  GA_ATTRIBUTES.map(([name, value]) => ` ${name}="${escape(value)}"`).join("");

// Stage B parity source (design-doc §4a). The Storybook html-parity story serializes
// `canvasElement.innerHTML` (normalized) and compares it against this string.
// Font Awesome 6 style prefix (fa-solid).
export const quickLinksHtml = ({
  items = DEFAULT_ITEMS,
  spanishHref = SPANISH_HREF,
  spanishIcon = "fa-arrow-right",
} = {}) =>
  `<div class="hp-quick-links">` +
  `<ul class="hp-quick-links__list" role="list">` +
  items
    .map(
      ({ href, icon, label }) =>
        `<li class="hp-quick-links__item">` +
        `<a class="hp-quick-link" href="${escape(safeHref(href))}"${gaAttributes(label)}>` +
        `<i class="hp-quick-link__icon fa-solid ${escape(icon)}" aria-hidden="true"></i>` +
        `<span class="hp-quick-link__label">${escape(label)}</span>` +
        `</a>` +
        `</li>`
    )
    .join("") +
  `</ul>` +
  `<a class="hp-quick-link-es" href="${escape(safeHref(spanishHref))}" lang="es" hreflang="es"${gaAttributes(SPANISH_LABEL)}>` +
  `${escape(SPANISH_LABEL)} ` +
  `<i class="hp-quick-link-es__icon fa-solid ${escape(spanishIcon)}" aria-hidden="true"></i>` +
  `</a>` +
  `</div>`;

// ---- Hover mirror (Storybook cannot set :hover) ----
// Follows reimagine-helpers.jsx → ensureHoverMirror / forceHover pattern exactly.

const MIRROR_ID = "hp-quick-links-hover-mirror";
const HOVER_ATTRIBUTE = "data-quick-link-hover";

const ensureHoverMirror = () => {
  if (document.getElementById(MIRROR_ID)) return;
  const rules = [];
  const collect = (list, conditions) =>
    Array.from(list).forEach(rule => {
      if (rule instanceof CSSStyleRule) {
        // Match both .hp-quick-link:hover and .hp-quick-link-es:hover
        if (/\.hp-quick-link[^,{]*:hover/.test(rule.selectorText)) {
          const text = rule.cssText.replace(/:hover/g, `[${HOVER_ATTRIBUTE}]`);
          rules.push(
            conditions.reduceRight(
              (inner, condition) => `@media ${condition} { ${inner} }`,
              text
            )
          );
        }
      } else if (rule instanceof CSSMediaRule) {
        collect(rule.cssRules, [...conditions, rule.conditionText]);
      } else if (rule.cssRules) {
        collect(rule.cssRules, conditions);
      }
    });
  Array.from(document.styleSheets).forEach(sheet => {
    try {
      collect(sheet.cssRules, []);
    } catch {
      // cross-origin sheet: not ours
    }
  });
  if (!rules.length) {
    throw new Error("No .hp-quick-link*:hover rule found to mirror.");
  }
  const style = document.createElement("style");
  style.id = MIRROR_ID;
  style.textContent = rules.join("\n");
  document.head.appendChild(style);
};

// Shows (or clears) the hover styles on an element without a real pointer.
export const forceHover = (element, on = true) => {
  ensureHoverMirror();
  element.toggleAttribute(HOVER_ATTRIBUTE, on);
};
