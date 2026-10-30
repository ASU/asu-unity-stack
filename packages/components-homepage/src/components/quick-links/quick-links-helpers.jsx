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
const escape = value =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// Normative order per design-doc §4a and ticket Behavior spec.
const DEFAULT_ITEMS = [
  {
    href: "#quick-link-explore",
    icon: "fa-laptop",
    label: "Explore ASU Online",
  },
  {
    href: "#quick-link-apply",
    icon: "fa-file-pen",
    label: "Apply now",
  },
  {
    href: "#quick-link-visit",
    icon: "fa-map-location-dot",
    label: "Visit an ASU campus",
  },
  {
    href: "#quick-link-request-info",
    icon: "fa-id-card",
    label: "Request info",
  },
];

export const SPANISH_HREF_PLACEHOLDER = "<spanish-url-placeholder>";
export const SPANISH_LABEL = "Aprender más en Español";

// Stage B parity source (design-doc §4a). The Storybook html-parity story serializes
// `canvasElement.firstChild.outerHTML` and compares it against this string.
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
        `<a class="hp-quick-link" href="${escape(href)}">` +
        `<i class="hp-quick-link__icon fa-solid ${escape(icon)}" aria-hidden="true"></i>` +
        `<span class="hp-quick-link__label">${escape(label)}</span>` +
        `</a>` +
        `</li>`
    )
    .join("") +
  `</ul>` +
  `<a class="hp-quick-link-es" href="${escape(spanishHref)}" lang="es" hreflang="es">` +
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
