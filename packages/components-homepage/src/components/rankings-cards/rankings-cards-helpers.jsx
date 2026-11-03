// Rankings-cards markup template + Storybook test-support helpers.
// Package: @asu/components-homepage  ·  Jira: WWWCMS-233
// Design doc: .pipeline/design-doc.md §3
//
// Re-export test helpers from sibling components so stories only need one import.
export { realPointer } from "../video-control/video-control-helpers.jsx";
export {
  realKeyboard,
  emulateReducedMotion,
  resizeViewport,
} from "../reimagine/reimagine-helpers.jsx";

// Emulates `forced-colors: active` for the current test page. `on === true`
// activates it; `false` clears the override. Registered as a vitest command in
// `vitest.config.js`. Returns early when the browser runner is unavailable.
export const emulateForcedColors = async on => {
  // Use the same `.available` gate as the sibling helpers so Storybook preview
  // runs don't try to call vitest-only APIs.
  const { realPointer: pointer } =
    await import("../video-control/video-control-helpers.jsx");
  if (!pointer.available) return;
  const { commands } = await import("vitest/browser");
  await commands.emulateForcedColors(on ? "active" : "none");
};

// ─── SVG icon paths (Font Awesome Free 6.4.2, CC BY 4.0) ─────────────────────
// arrow-right path (used in attribution link and see-all link)
const ARROW_RIGHT_PATH =
  "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";

// chevron-left path
const CHEVRON_LEFT_PATH =
  "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z";

// chevron-right path
const CHEVRON_RIGHT_PATH =
  "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z";

// ─── Input sanitization ──────────────────────────────────────────────────────
// The template interpolates untrusted strings into HTML attributes and text
// content. We treat **all** inputs as untrusted at this boundary (CMS inputs
// have been shown to leak unescaped author content). Three contextual escapes
// cover every interpolation point:
//
//   • escapeHtml(str)   → text content and attribute values (same escape set
//                         is safe for both when values are quoted with ").
//   • sanitizeHref(url) → URL attribute values. Whitelist of schemes:
//                         empty, fragment (#...), relative (./  ../  /path),
//                         absolute http: / https:, mailto:, tel:. Everything
//                         else (javascript:, data:, vbscript:, file:, …) is
//                         replaced with a safe `#` fallback.
//   • sanitizeId(id)    → HTML id attribute. Must match `^[A-Za-z][\w-]*$`.
//                         Falsy/invalid falls back to the default.

const HTML_ESCAPES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/**
 * HTML-escapes a value for safe interpolation into text content or a
 * double-quoted attribute value. Coerces non-strings to strings first.
 * @param {unknown} value
 * @returns {string}
 */
export const escapeHtml = value =>
  String(value == null ? "" : value).replace(/[&<>"']/g, c => HTML_ESCAPES[c]);

/**
 * Whitelists safe URL schemes for `href` attributes. Preserves fragments,
 * relative paths, and `http(s)/mailto/tel` absolute URLs. Returns `#` for
 * all other schemes (e.g. `javascript:`, `data:`, `vbscript:`, `file:`).
 * @param {unknown} href
 * @returns {string}
 */
export const sanitizeHref = href => {
  if (typeof href !== "string") return "#";
  const trimmed = href.trim();
  if (trimmed === "") return "#";
  // Fragments and relative paths are safe by definition (no scheme).
  if (trimmed.startsWith("#")) return trimmed;
  if (
    trimmed.startsWith("/") ||
    trimmed.startsWith("./") ||
    trimmed.startsWith("../")
  ) {
    return trimmed;
  }
  // Scheme detection: a scheme is `scheme:` at the start. If the first path
  // segment contains ':', assume it is a scheme indicator.
  const colonAt = trimmed.indexOf(":");
  const slashAt = trimmed.indexOf("/");
  const schemeIsFirst = colonAt !== -1 && (slashAt === -1 || colonAt < slashAt);
  if (!schemeIsFirst) return trimmed; // bare relative path like `foo/bar`
  // Allowed schemes (case-insensitive).
  if (/^(https?|mailto|tel):/i.test(trimmed)) return trimmed;
  // Everything else is rejected.
  return "#";
};

/**
 * Validates an HTML id token. Must start with a letter and contain only
 * `[A-Za-z0-9_-]`. Falsy/invalid falls back to the default.
 * @param {unknown} id
 * @param {string} fallback
 * @returns {string}
 */
export const sanitizeId = (id, fallback = "hp-rankings-heading") => {
  if (typeof id !== "string" || id === "") return fallback;
  return /^[A-Za-z][\w-]*$/.test(id) ? id : fallback;
};

/**
 * Validates an intrinsic image dimension (width or height) at the template
 * boundary.  Only finite, positive, integer, safe integers are accepted.
 * Any other value falls back to the supplied default and emits a DEV warning.
 *
 * Accepted:   positive, whole-number, safe integers  (e.g. 500, 800, 1)
 * Rejected:   0, negatives, fractions, NaN, non-finite, non-safe, non-numbers
 *
 * @param {unknown} value   - Caller-supplied candidate value.
 * @param {number}  def     - Fallback default (must itself be a valid dimension).
 * @param {string}  name    - Param name used in the DEV warning.
 * @returns {number}        - A validated, finite positive safe integer.
 */
export const validateIntrinsicDimension = (value, def, name) => {
  if (
    typeof value === "number" &&
    Number.isFinite(value) &&
    Number.isInteger(value) &&
    Number.isSafeInteger(value) &&
    value > 0
  ) {
    return value;
  }
  // Safe formatter: never calls JSON.stringify or any method on `value`.
  // JSON.stringify(1n) throws; hostile proxies can throw from toJSON/valueOf.
  // We derive a safe type description without touching the value's methods.
  if (import.meta.env.DEV) {
    const safeType =
      typeof value === "bigint"
        ? "bigint"
        : (() => {
            try {
              return typeof value;
            } catch {
              return "unknown";
            }
          })();
    warnDev(
      `rankingsCardsHtml: '${name}' must be a finite positive safe integer; ` +
        `received <${safeType}>. Falling back to ${def}.`
    );
  }
  return def;
};

// ─── Default 7-card dataset ───────────────────────────────────────────────────
// Mirrors the Figma sample (design-doc §3.1 and §3.2). Real alt text, slugs, and
// hrefs will be confirmed from the Jira AC before merge.
// TODO: confirm with design — alt text, hrefs, and labels for the WWWCMS-233 default dataset.

/**
 * @typedef {Object} RankingCard
 * @property {string} imageSrc        - Path to the default-state PNG, e.g. "img/rankings/sustainable-practices.png"
 * @property {string} imageSrcHover   - Path to the hover-state PNG, e.g. "img/rankings/sustainable-practices--hover.png"
 * @property {string} imageAlt        - Complete ranking statement for the default image (full SR content).
 *                                      Example: "#1 in the U.S. and #2 in the world for sustainable practices. ASU ahead of Stanford and UC Berkeley."
 * @property {string} attributionHref - URL for the attribution link.
 * @property {string} [attributionLabel="Attribution link"] - Visible link text.
 */

/** @type {RankingCard[]} */
export const DEFAULT_CARDS = [
  {
    imageSrc: "img/rankings/sustainable-practices.png",
    imageSrcHover: "img/rankings/sustainable-practices--hover.png",
    imageAlt:
      "#1 in the U.S. and #2 in the world for sustainable practices. ASU ahead of Stanford and UC Berkeley.",
    attributionHref: "#rankings-see-all",
    attributionLabel: "Attribution link",
  },
  {
    imageSrc: "img/rankings/innovation.png",
    imageSrcHover: "img/rankings/innovation--hover.png",
    imageAlt:
      "#1 in the U.S. for innovation. ASU ranked most innovative university for the ninth consecutive year.",
    attributionHref: "#rankings-see-all",
    attributionLabel: "Attribution link",
  },
  {
    imageSrc: "img/rankings/global-impact.png",
    imageSrcHover: "img/rankings/global-impact--hover.png",
    imageAlt:
      "#1 in the U.S. for global impact. ASU leads in global engagement and research impact.",
    attributionHref: "#rankings-see-all",
    attributionLabel: "Attribution link",
  },
  {
    imageSrc: "img/rankings/entrepreneurship.png",
    imageSrcHover: "img/rankings/entrepreneurship--hover.png",
    imageAlt:
      "#1 in the U.S. for entrepreneurship. ASU recognized for startup culture and venture creation.",
    attributionHref: "#rankings-see-all",
    attributionLabel: "Attribution link",
  },
  {
    imageSrc: "img/rankings/research-output.png",
    imageSrcHover: "img/rankings/research-output--hover.png",
    imageAlt:
      "Top 10 in the U.S. for research output. ASU recognized among the nation's most productive research universities.",
    attributionHref: "#rankings-see-all",
    attributionLabel: "Attribution link",
  },
  {
    imageSrc: "img/rankings/online-education.png",
    imageSrcHover: "img/rankings/online-education--hover.png",
    imageAlt:
      "#1 in the U.S. for online education. ASU Online offers more than 300 degree programs.",
    attributionHref: "#rankings-see-all",
    attributionLabel: "Attribution link",
  },
  {
    imageSrc: "img/rankings/community-engagement.png",
    imageSrcHover: "img/rankings/community-engagement--hover.png",
    imageAlt:
      "#1 in the U.S. for community engagement. ASU serves the public good through research and service.",
    attributionHref: "#rankings-see-all",
    attributionLabel: "Attribution link",
  },
];

// ─── Markup template ──────────────────────────────────────────────────────────

const warnDev = message => {
  // import.meta.env.DEV is tree-shaken to false in production builds.
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.warn(`[rankings-cards] ${message} (WWWCMS-233)`);
  }
};

/**
 * Returns the first-render HTML string for a `.hp-rankings` section.
 *
 * **Consumer contract**: `background: transparent` — WCAG contrast is only met
 * when the parent surface is dark enough. Wrap in a dark surface (e.g. the
 * homepage hero band) before using in production.
 *
 * **Security**: all template-interpolated values (`headingId`, `cards[*].*`,
 * `seeAllHref`, `seeAllLabel`) are contextually escaped at render time.
 * Attribute values are HTML-escaped and `href` values are scheme-validated
 * (fragment/relative/http/https/mailto/tel allowed; everything else rewritten
 * to `#`). `headingId` must match `^[A-Za-z][\w-]*$` or it falls back to the
 * default. The template never emits unescaped user content.
 *
 * **Content-model soft contract (DEV only)**: `cards` must be a non-empty
 * array. Each card requires `imageSrc`, `imageAlt`, and `attributionHref`.
 * `imageAlt === ""` or `undefined` renders `alt=""` and emits a DEV warning
 * (never fabricates text — design-doc §7.9). Missing `imageSrcHover` falls
 * back to `imageSrc` with a DEV warning. Zero cards renders inert markup
 * (empty track, both nav buttons disabled) so Next cannot activate.
 *
 * All warnings are stripped from production bundles via `import.meta.env.DEV`.
 *
 * @param {Object} [options]
 * @param {string} [options.headingId="hp-rankings-heading"] - Unique per rendered copy; feeds both `<h2 id>` and `aria-labelledby`. Must be `/^[A-Za-z][\w-]*$/`.
 * @param {RankingCard[]} [options.cards] - Defaults to the 7-item `DEFAULT_CARDS` sample. Non-array / zero-length renders inert markup.
 * @param {string} [options.seeAllHref="#rankings-see-all"] - Placeholder until real URL exists. Rendered scheme-sanitized. A bare `#` scrolls to top; use a unique fragment.
 * @param {string} [options.seeAllLabel="See all ASU rankings"] - Visible text for the see-all link (HTML-escaped).
 * @param {number} [options.imageWidth=500]  - Dataset-wide intrinsic width (px) emitted on every <img> as the `width` attribute; see §3 image intrinsics contract and design-doc v3 §3.1 Q2 = C.
 * @param {number} [options.imageHeight=251] - Dataset-wide intrinsic height (px) emitted on every <img> as the `height` attribute; see §3 image intrinsics contract and design-doc v3 §3.1 Q2 = C.
 * @returns {string} HTML string (Stage B parity source, §3.3).
 */
export const rankingsCardsHtml = ({
  headingId = "hp-rankings-heading",
  cards = DEFAULT_CARDS,
  seeAllHref = "#rankings-see-all",
  seeAllLabel = "See all ASU rankings",
  imageWidth = 500,
  imageHeight = 251,
} = {}) => {
  // ── Intrinsic dimension validation (design-doc v3 §3.1; P1-1 security fix) ──
  // Both params are interpolated directly into HTML width/height attributes.
  // A non-integer or string value could escape the attribute and inject HTML.
  // validateIntrinsicDimension() accepts only finite positive safe integers;
  // anything else falls back to the default with a DEV warning.
  const safeImageWidth = validateIntrinsicDimension(
    imageWidth,
    500,
    "imageWidth"
  );
  const safeImageHeight = validateIntrinsicDimension(
    imageHeight,
    251,
    "imageHeight"
  );

  // ── Content-model validation (DEV warnings, never fabricate content) ──────
  let safeCards;
  if (!Array.isArray(cards)) {
    warnDev(
      `rankingsCardsHtml: 'cards' must be an array of RankingCard objects; received ${typeof cards}. Rendering empty track.`
    );
    safeCards = [];
  } else {
    safeCards = cards;
  }
  if (safeCards.length === 0) {
    warnDev(
      "rankingsCardsHtml: 'cards' is empty. Rendering inert markup with both nav buttons disabled."
    );
  }

  const headingIdSafe = sanitizeId(headingId);
  if (headingIdSafe !== headingId) {
    warnDev(
      `rankingsCardsHtml: 'headingId' must match ^[A-Za-z][\\w-]*$; received ${JSON.stringify(headingId)}. Falling back to default.`
    );
  }

  const cardItems = safeCards
    .map((card, i) => {
      if (card == null || typeof card !== "object") {
        warnDev(
          `rankingsCardsHtml: card ${i} is not an object (received ${typeof card}). Skipping.`
        );
        return "";
      }
      const {
        imageSrc,
        imageSrcHover,
        imageAlt,
        attributionHref,
        attributionLabel = "Attribution link",
      } = card;

      // imageSrc is required.
      if (!imageSrc || typeof imageSrc !== "string") {
        warnDev(
          `rankingsCardsHtml: card ${i} is missing a valid 'imageSrc'. Skipping card.`
        );
        return "";
      }

      // imageSrcHover falls back to imageSrc with a DEV warning.
      let resolvedHover = imageSrcHover;
      if (!resolvedHover || typeof resolvedHover !== "string") {
        warnDev(
          `rankingsCardsHtml: card ${i} is missing 'imageSrcHover'. Falling back to imageSrc so no src="undefined" is emitted.`
        );
        resolvedHover = imageSrc;
      }

      // imageAlt: undefined or "" renders alt="" with a DEV warning.
      // This preserves the §7.9 "never fabricate alt" contract.
      let resolvedAlt = imageAlt;
      if (resolvedAlt == null) {
        warnDev(
          `rankingsCardsHtml: card ${i} has undefined 'imageAlt'. Rendering alt="" — provide a full ranking statement.`
        );
        resolvedAlt = "";
      } else if (resolvedAlt === "") {
        warnDev(
          `rankingsCardsHtml: card ${i} has empty 'imageAlt'. Rendering alt="" — provide a full ranking statement for screen-reader users.`
        );
      }

      return (
        `<li class="hp-rankings__card">` +
        `<div class="hp-rankings__media">` +
        // Default image: carries full ranking statement in alt (design-doc §7.9).
        `<img class="hp-rankings__img hp-rankings__img--default"` +
        ` src="${escapeHtml(imageSrc)}"` +
        ` alt="${escapeHtml(resolvedAlt)}"` +
        // Dataset-wide intrinsic dimensions (design-doc v3 §3.1 Q2 = C; default 500 × 251).
        // TODO: confirm with design — intrinsic dimensions from Figma node 13467:58610 (design-doc §11.2).
        ` width="${safeImageWidth}" height="${safeImageHeight}"` +
        // TODO: confirm with design — all images lazy-loaded (design-doc §11.2); revisit if homepage places rankings above the fold.
        ` loading="lazy" decoding="async">` +
        // Hover image: decorative colour variant — alt="" + aria-hidden so SR does NOT double-announce.
        // TODO: confirm with design — hover filename suffix convention (locked placeholder: double-dash BEM `--hover`, see src/img/rankings/README.md §11.2 row 13).
        `<img class="hp-rankings__img hp-rankings__img--hover"` +
        ` src="${escapeHtml(resolvedHover)}"` +
        ` alt="" aria-hidden="true"` +
        // Dataset-wide intrinsic dimensions (hover img) — same pair as default (design-doc v3 §3.1 Q2 = C).
        // TODO: confirm with design — intrinsic dimensions (hover img) locked at 500 × 251 (§11.2).
        ` width="${safeImageWidth}" height="${safeImageHeight}"` +
        // TODO: confirm with design — all images lazy-loaded (design-doc §11.2).
        ` loading="lazy" decoding="async">` +
        `</div>` +
        `<div class="hp-rankings__card-footer">` +
        `<a class="hp-rankings__attribution" href="${escapeHtml(sanitizeHref(attributionHref))}">` +
        `${escapeHtml(attributionLabel)}` +
        `<svg class="hp-rankings__attribution-icon" viewBox="0 0 448 512"` +
        ` aria-hidden="true" focusable="false">` +
        `<path fill="currentColor" d="${ARROW_RIGHT_PATH}"/>` +
        `</svg>` +
        `</a>` +
        `</div>` +
        `</li>`
      );
    })
    .join("");

  // Zero-cards inert state: both prev and next ship with the disabled triplet
  // and the section carries .hp-rankings--no-overflow so the nav is hidden by
  // CSS. JS further hides the nav via ResizeObserver when the track doesn't
  // overflow, but the server markup is already safe without JS.
  const noCards = safeCards.length === 0;
  const sectionClass = noCards
    ? "hp-rankings hp-rankings--no-overflow"
    : "hp-rankings";
  // Prev button is always disabled on first render (track starts at scrollLeft=0).
  // Next button is disabled only when there are no cards.
  const nextDisabledMarkup = noCards
    ? ` class="hp-rankings__nav-btn hp-rankings__nav-btn--next is-disabled" aria-disabled="true" tabindex="-1"`
    : ` class="hp-rankings__nav-btn hp-rankings__nav-btn--next"`;

  return (
    `<section class="${sectionClass}" aria-labelledby="${escapeHtml(headingIdSafe)}">` +
    `<h2 id="${escapeHtml(headingIdSafe)}" class="visually-hidden">ASU rankings</h2>` +
    `<div class="hp-rankings__inner">` +
    `<ul class="hp-rankings__track" role="list">` +
    cardItems +
    `</ul>` +
    `<div class="hp-rankings__controls">` +
    `<div class="hp-rankings__nav" role="group" aria-label="Rankings carousel navigation">` +
    // Prev button: ships disabled (scrollLeft = 0 on first render). Design-doc §3.4 invariant 5.
    // Disabled state is the triplet: .is-disabled + aria-disabled="true" + tabindex="-1" (never native `disabled`).
    `<button type="button" class="hp-rankings__nav-btn hp-rankings__nav-btn--prev is-disabled"` +
    ` aria-disabled="true" tabindex="-1" aria-label="Previous ranking">` +
    `<svg class="hp-rankings__nav-icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">` +
    `<path fill="currentColor" d="${CHEVRON_LEFT_PATH}"/>` +
    `</svg>` +
    `</button>` +
    // Next button: enabled at first render unless zero cards.
    `<button type="button"${nextDisabledMarkup}` +
    ` aria-label="Next ranking">` +
    `<svg class="hp-rankings__nav-icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">` +
    `<path fill="currentColor" d="${CHEVRON_RIGHT_PATH}"/>` +
    `</svg>` +
    `</button>` +
    `</div>` +
    `<a class="hp-rankings__see-all" href="${escapeHtml(sanitizeHref(seeAllHref))}">` +
    `${escapeHtml(seeAllLabel)}` +
    `<svg class="hp-rankings__see-all-icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">` +
    `<path fill="currentColor" d="${ARROW_RIGHT_PATH}"/>` +
    `</svg>` +
    `</a>` +
    `</div>` +
    `</div>` +
    `</section>`
  );
};

// ─── Storybook test-support: hover mirror ─────────────────────────────────────
// Mirrors `.hp-rankings__card:hover` and `.hp-rankings__card[data-rankings-hover]`
// rules at runtime so Storybook stories can force the hover state without a real
// pointer event (Storybook cannot programmatically set :hover).
// Pattern mirrors reimagine-helpers.jsx `forceHover` — including the strict
// `throw` when no :hover rules are found (prevents silent test-rot).

const HOVER_MIRROR_ID = "hp-rankings-hover-mirror";
const HOVER_ATTRIBUTE = "data-rankings-hover";

const ensureHoverMirror = () => {
  if (document.getElementById(HOVER_MIRROR_ID)) return;
  const rules = [];
  const collect = (list, conditions) =>
    Array.from(list).forEach(rule => {
      if (rule instanceof CSSStyleRule) {
        // Match rules targeting .hp-rankings__card:hover
        if (/\.hp-rankings__card:hover/.test(rule.selectorText)) {
          const text = rule.cssText.replace(
            /\.hp-rankings__card:hover/g,
            `.hp-rankings__card[${HOVER_ATTRIBUTE}]`
          );
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
    if (sheet.ownerNode && sheet.ownerNode.id === HOVER_MIRROR_ID) return;
    try {
      collect(sheet.cssRules, []);
    } catch {
      // cross-origin or locked sheet
    }
  });
  if (!rules.length) {
    // Strict: match reimagine-helpers.jsx — a missing hover rule would silently
    // turn hover-state tests into no-ops. Fail loudly instead.
    throw new Error(
      "[rankings-cards] No .hp-rankings__card:hover rule found to mirror."
    );
  }
  const style = document.createElement("style");
  style.id = HOVER_MIRROR_ID;
  style.textContent = rules.join("\n");
  document.head.appendChild(style);
};

/**
 * Forces (or clears) the hover styles on a `.hp-rankings__card` element without
 * a real pointer event. Mirrors the `:hover` CSS rules using a `[data-rankings-hover]`
 * attribute so Storybook interaction tests can assert hover-state styles.
 *
 * Throws if no `.hp-rankings__card:hover` rules are found in any stylesheet —
 * this prevents a missing CSS import from silently turning hover tests into
 * false negatives.
 *
 * @param {Element} element - The `.hp-rankings__card` element.
 * @param {boolean} [on=true] - Pass `false` to clear the forced hover.
 */
export const forceHover = (element, on = true) => {
  ensureHoverMirror();
  element.toggleAttribute(HOVER_ATTRIBUTE, on);
};
