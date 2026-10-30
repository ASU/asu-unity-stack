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
// Allowed: https:, mailto:, tel:, fragment-only (#...), relative paths (no scheme),
// and the literal design-doc Spanish URL placeholder.
const SAFE_SCHEMES = ["https:", "mailto:", "tel:"];
// The literal design-doc placeholder that must round-trip through markup unchanged.
const SPANISH_URL_PLACEHOLDER = "<spanish-url-placeholder>";

export const safeHref = href => {
  if (href == null) return "#";
  const raw = String(href);
  // Round-trip the literal design placeholder as-is; escape() handles the delimiters.
  if (raw === SPANISH_URL_PLACEHOLDER) return raw;
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

// Font Awesome resolution (WWWCMS-235 review fix cycle 1):
// The unity-bootstrap-theme peer dependency is @fortawesome/fontawesome-free 5.15.3 (FA 5).
// The components-homepage/.storybook/main.js previewHead strips the shared CDN script that
// would inject Font Awesome 6.4.2, so FA CSS is not loaded in Storybook for this package.
// DEFAULT_ITEMS therefore uses FA 5 Free Solid class names:
//   fa-laptop       — available in FA 5 Free Solid (unchanged)
//   fa-file-signature — FA 5 equivalent of FA 6 fa-file-pen (for "Apply now")
//   fa-map-marked-alt — FA 5 equivalent of FA 6 fa-map-location-dot (for "Visit an ASU campus")
//   fa-id-card      — available in FA 5 Free Solid (unchanged)
// Stage B: the host page is expected to load Font Awesome (standard Unity host assumption,
// documented in unity-bootstrap-theme/README.md). Use FA 5 Free Solid class names in Twig.
// If the host upgrades to FA 6, update fa-file-signature → fa-file-pen and
//   fa-map-marked-alt → fa-map-location-dot accordingly.
const DEFAULT_ITEMS = [
  {
    href: "#quick-link-explore",
    icon: "fa-laptop",
    label: "Explore ASU Online",
  },
  {
    href: "#quick-link-apply",
    icon: "fa-file-signature",
    label: "Apply now",
  },
  {
    href: "#quick-link-visit",
    icon: "fa-map-marked-alt",
    label: "Visit an ASU campus",
  },
  {
    href: "#quick-link-request-info",
    icon: "fa-id-card",
    label: "Request info",
  },
];

export const SPANISH_HREF_PLACEHOLDER = "<spanish-url-placeholder>";
// Lowercase "español" per Figma + Spanish grammar (WWWCMS-235 visual-fix). Overrules ticket Behavior spec wording.
export const SPANISH_LABEL = "Aprender más en español";

// Stage B parity source (design-doc §4a). The Storybook html-parity story serializes
// `canvasElement.innerHTML` (normalized) and compares it against this string.
export const quickLinksHtml = ({
  items = DEFAULT_ITEMS,
  spanishHref = SPANISH_HREF_PLACEHOLDER,
  spanishIcon = "fa-arrow-right",
} = {}) =>
  `<div class="hp-quick-links">` +
  `<ul class="hp-quick-links__list" role="list">` +
  items
    .map(
      ({ href, icon, label }) =>
        `<li class="hp-quick-links__item">` +
        `<a class="hp-quick-link" href="${escape(safeHref(href))}">` +
        `<i class="hp-quick-link__icon fa-solid ${escape(icon)}" aria-hidden="true"></i>` +
        `<span class="hp-quick-link__label">${escape(label)}</span>` +
        `</a>` +
        `</li>`
    )
    .join("") +
  `</ul>` +
  `<a class="hp-quick-link-es" href="${escape(safeHref(spanishHref))}" lang="es" hreflang="es">` +
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
