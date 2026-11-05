// Rankings-cards markup template + Storybook test-support helpers.
// Package: @asu/components-homepage  ·  Jira: WWWCMS-233
// Design doc: .pipeline/design-doc.md §3 + v4 amendment
//
// v4 changes:
//   - DEFAULT_CARDS expanded from 7 → 11 entries (v4 §v4.4.2a schema).
//   - RankingCard typedef extended: isSummary, seeAllTopHref, seeAllTopLabel.
//   - rankingsCardsHtml emits sticky wrapper + spacer around .hp-rankings (v4 §v4.3.1c).
//   - rankingsCardsHtml emits per-slide ARIA labelling on every <li> (v4 §v4.4.2c).
//   - Card 1 (isSummary) emits .hp-rankings__see-all-top instead of
//     .hp-rankings__attribution; uses .hp-rankings__card--summary modifier (v4 §v4.4.2b).
//
// Post-approval change (supersedes v4 §v4.3.1a):
//   - .hp-rankings__learn-more removed from all cards per human approver decision.
//     Card footer keeps only the primary link (attribution on cards 2–11;
//     see-all-top on card 1). See .pipeline/impl-report.md §Post-approval.

// Re-export test helpers from sibling components so stories only need one import.
export { realPointer } from "../video-control/video-control-helpers.jsx";
export {
  realKeyboard,
  emulateReducedMotion,
  resizeViewport,
} from "../reimagine/reimagine-helpers.jsx";

// Emulates `forced-colors: active` for the current test page.
export const emulateForcedColors = async on => {
  const { realPointer: pointer } =
    await import("../video-control/video-control-helpers.jsx");
  if (!pointer.available) return;
  const { commands } = await import("vitest/browser");
  await commands.emulateForcedColors(on ? "active" : "none");
};

// ─── SVG icon paths (Font Awesome Free 6.4.2, CC BY 4.0) ─────────────────────
const ARROW_RIGHT_PATH =
  "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";

const CHEVRON_LEFT_PATH =
  "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z";

const CHEVRON_RIGHT_PATH =
  "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z";

// ─── Input sanitization ──────────────────────────────────────────────────────

const HTML_ESCAPES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/**
 * HTML-escapes a value for safe interpolation into text content or a
 * double-quoted attribute value.
 * @param {unknown} value
 * @returns {string}
 */
export const escapeHtml = value =>
  String(value == null ? "" : value).replace(/[&<>"']/g, c => HTML_ESCAPES[c]);

/**
 * Whitelists safe URL schemes for `href` attributes.
 * @param {unknown} href
 * @returns {string}
 */
export const sanitizeHref = href => {
  if (typeof href !== "string") return "#";
  const trimmed = href.trim();
  if (trimmed === "") return "#";
  if (trimmed.startsWith("#")) return trimmed;
  if (
    trimmed.startsWith("/") ||
    trimmed.startsWith("./") ||
    trimmed.startsWith("../")
  ) {
    return trimmed;
  }
  const colonAt = trimmed.indexOf(":");
  const slashAt = trimmed.indexOf("/");
  const schemeIsFirst = colonAt !== -1 && (slashAt === -1 || colonAt < slashAt);
  if (!schemeIsFirst) return trimmed;
  if (/^(https?|mailto|tel):/i.test(trimmed)) return trimmed;
  return "#";
};

/**
 * Validates an HTML id token.
 * @param {unknown} id
 * @param {string} fallback
 * @returns {string}
 */
export const sanitizeId = (id, fallback = "hp-rankings-heading") => {
  if (typeof id !== "string" || id === "") return fallback;
  return /^[A-Za-z][\w-]*$/.test(id) ? id : fallback;
};

// Safe type formatter for rejected public-API inputs.
const formatRejectedValue = value => {
  if (typeof value === "bigint") return "bigint";
  try {
    return typeof value;
  } catch {
    return "unknown";
  }
};

/**
 * Validates an intrinsic image dimension.
 * @param {unknown} value
 * @param {number}  def
 * @param {string}  name
 * @returns {number}
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
  if (import.meta.env.DEV) {
    warnDev(
      `rankingsCardsHtml: '${name}' must be a finite positive safe integer; ` +
        `received <${formatRejectedValue(value)}>. Falling back to ${def}.`
    );
  }
  return def;
};

// ─── Default 11-card dataset (v4 §v4.4.2a) ───────────────────────────────────
// Expanded from 7 → 11 entries. Cards 1–4 have confirmed content from
// .intake/SCR-20261104-jrkv.png top frame. Cards 5–11 carry TBD-Jira-WWWCMS-233
// placeholders and are tracked in rankings-cards/README.md.
// TODO: confirm all 11 rows against Jira WWWCMS-233 before merging to dev.

/**
 * @typedef {Object} RankingCard
 * @property {string}  imageSrc         - Default-state PNG path (rank-NN-w.png convention).
 * @property {string}  imageSrcHover    - Hover-state PNG path (rank-NN.png convention).
 * @property {string}  imageAlt         - Full ranking statement for the default img (SR content).
 * @property {string}  attributionHref  - URL for the primary attribution link.
 * @property {string}  [attributionLabel="Attribution link"] - Visible link text (publication name).
 * @property {boolean} [isSummary=false] - When true, renders as summary variant (card 1):
 *                                         adds .hp-rankings__card--summary, renders
 *                                         .hp-rankings__see-all-top, skips primary attribution.
 * @property {string}  [seeAllTopHref]   - Only used when isSummary=true. URL to the all-#1-rankings page.
 * @property {string}  [seeAllTopLabel="See all of ASU's #1 rankings"] - Visible link text.
 */

/** @type {RankingCard[]} */
export const DEFAULT_CARDS = [
  // Card 1: "Repeatedly ranked #1" with see-all link
  {
    imageSrc: "img/rankings/rank-01-w.png",
    imageSrcHover: "img/rankings/rank-01.png",
    imageAlt: "Repeatedly ranked #1. 30+ lists in the last 3 years.",
    attributionHref: "#rankings-see-all",
    attributionLabel: "See all of ASU's #1 rankings",
    isSummary: true,
  },
  // Card 2: innovation (confirmed from .intake/SCR-20261104-jrkv.png)
  {
    imageSrc: "img/rankings/rank-02-w.png",
    imageSrcHover: "img/rankings/rank-02.png",
    imageAlt: "#1 in the U.S. for innovation. ASU ahead of MIT and Stanford.",
    attributionHref: "TBD-Jira-WWWCMS-233", // TODO: confirm attribution URL from Jira WWWCMS-233.
    attributionLabel: "U.S. News & World Report",
  },
  // Card 3: employability (confirmed from .intake/SCR-20261104-jrkv.png)
  {
    imageSrc: "img/rankings/rank-03-w.png",
    imageSrcHover: "img/rankings/rank-03.png",
    imageAlt:
      "#2 in the U.S. for employability (among public universities). ASU ahead of UCLA, University of Michigan and Purdue.",
    attributionHref: "TBD-Jira-WWWCMS-233", // TODO: confirm attribution URL from Jira WWWCMS-233.
    attributionLabel: "Global Employability Ranking",
  },
  // Card 4: Fulbright students (confirmed from .intake/SCR-20261104-jrkv.png)
  {
    imageSrc: "img/rankings/rank-04-w.png",
    imageSrcHover: "img/rankings/rank-04.png",
    imageAlt:
      "A top producer in the U.S. of Fulbright students, among doctoral-granting institutions. ASU ahead of Stanford, USC and Johns Hopkins.",
    attributionHref: "TBD-Jira-WWWCMS-233", // TODO: confirm attribution URL from Jira WWWCMS-233.
    attributionLabel: "Chronicle of Higher Education",
  },
  // Cards 5–11: placeholder content — TBD-Jira-WWWCMS-233 (v4 §v4.4.2a)
  // TODO: pull topic, ranking statement, source label, source URL from Jira WWWCMS-233.
  {
    imageSrc: "img/rankings/rank-05-w.png",
    imageSrcHover: "img/rankings/rank-05.png",
    imageAlt: "TBD-Jira-WWWCMS-233",
    attributionHref: "TBD-Jira-WWWCMS-233",
    attributionLabel: "TBD-Jira-WWWCMS-233",
  },
  {
    imageSrc: "img/rankings/rank-06-w.png",
    imageSrcHover: "img/rankings/rank-06.png",
    imageAlt: "TBD-Jira-WWWCMS-233",
    attributionHref: "TBD-Jira-WWWCMS-233",
    attributionLabel: "TBD-Jira-WWWCMS-233",
  },
  {
    imageSrc: "img/rankings/rank-07-w.png",
    imageSrcHover: "img/rankings/rank-07.png",
    imageAlt: "TBD-Jira-WWWCMS-233",
    attributionHref: "TBD-Jira-WWWCMS-233",
    attributionLabel: "TBD-Jira-WWWCMS-233",
  },
  {
    imageSrc: "img/rankings/rank-08-w.png",
    imageSrcHover: "img/rankings/rank-08.png",
    imageAlt: "TBD-Jira-WWWCMS-233",
    attributionHref: "TBD-Jira-WWWCMS-233",
    attributionLabel: "TBD-Jira-WWWCMS-233",
  },
  {
    imageSrc: "img/rankings/rank-09-w.png",
    imageSrcHover: "img/rankings/rank-09.png",
    imageAlt: "TBD-Jira-WWWCMS-233",
    attributionHref: "TBD-Jira-WWWCMS-233",
    attributionLabel: "TBD-Jira-WWWCMS-233",
  },
  {
    imageSrc: "img/rankings/rank-10-w.png",
    imageSrcHover: "img/rankings/rank-10.png",
    imageAlt: "TBD-Jira-WWWCMS-233",
    attributionHref: "TBD-Jira-WWWCMS-233",
    attributionLabel: "TBD-Jira-WWWCMS-233",
  },
  {
    imageSrc: "img/rankings/rank-11-w.png",
    imageSrcHover: "img/rankings/rank-11.png",
    imageAlt: "TBD-Jira-WWWCMS-233",
    attributionHref: "TBD-Jira-WWWCMS-233",
    attributionLabel: "TBD-Jira-WWWCMS-233",
  },
];

// ─── Markup template ──────────────────────────────────────────────────────────

const warnDev = message => {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.warn(`[rankings-cards] ${message} (WWWCMS-233)`);
  }
};

/**
 * Returns the first-render HTML string for a `.hp-rankings` section, wrapped
 * in the sticky-dock structure (`.hp-rankings__sticky-wrapper` + `.hp-rankings`
 * + `.hp-rankings__sticky-spacer`).
 *
 * **Consumer contract**: `background: transparent` — WCAG contrast is only met
 * when the parent surface is dark enough.
 *
 * **Security**: all template-interpolated values are contextually escaped.
 *
 * @param {Object} [options]
 * @param {string} [options.headingId="hp-rankings-heading"]
 * @param {RankingCard[]} [options.cards] - Defaults to the 11-item DEFAULT_CARDS.
 * @param {string} [options.seeAllHref="#rankings-see-all"]
 * @param {string} [options.seeAllLabel="See all ASU rankings"]
 * @param {number} [options.imageWidth=500]
 * @param {number} [options.imageHeight=251]
 * @returns {string} HTML string (Stage B parity source, §3.3 + v4 §v4.3.1c).
 */
export const rankingsCardsHtml = ({
  headingId = "hp-rankings-heading",
  cards = DEFAULT_CARDS,
  seeAllHref = "#rankings-see-all",
  seeAllLabel = "See all ASU rankings",
  imageWidth = 500,
  imageHeight = 251,
} = {}) => {
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
      `rankingsCardsHtml: 'headingId' must match ^[A-Za-z][\\w-]*$; received <${formatRejectedValue(headingId)}>. Falling back to default.`
    );
  }

  const total = safeCards.length;

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
        isSummary = false,
      } = card;

      if (!imageSrc || typeof imageSrc !== "string") {
        warnDev(
          `rankingsCardsHtml: card ${i} is missing a valid 'imageSrc'. Skipping card.`
        );
        return "";
      }

      let resolvedHover = imageSrcHover;
      if (!resolvedHover || typeof resolvedHover !== "string") {
        warnDev(
          `rankingsCardsHtml: card ${i} is missing 'imageSrcHover'. Falling back to imageSrc so no src="undefined" is emitted.`
        );
        resolvedHover = imageSrc;
      }

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

      const slideN = i + 1;
      // Per-slide ARIA labelling (v4 §v4.4.2c).
      // SR-only span text: "Ranking N of TOTAL, <imageAlt>"
      const slideLabelId = `${headingIdSafe}-slide-${slideN}-label`;
      const slideLabelText = `Ranking ${slideN} of ${total}, ${resolvedAlt}`;

      // Card class: add --summary modifier for card 1 (v4 §v4.4.2b).
      const cardClass = isSummary
        ? "hp-rankings__card hp-rankings__card--summary"
        : "hp-rankings__card";

      // Build the footer content.
      // All cards now use .hp-rankings__attribution (removed see-all-top distinction).
      // Note: .hp-rankings__learn-more removed per post-approval human decision.
      const footerContent =
        `<a class="hp-rankings__attribution" href="${escapeHtml(sanitizeHref(attributionHref))}">` +
        `${escapeHtml(attributionLabel)}` +
        `<svg class="hp-rankings__attribution-icon" viewBox="0 0 448 512"` +
        ` aria-hidden="true" focusable="false">` +
        `<path fill="currentColor" d="${ARROW_RIGHT_PATH}"/>` +
        `</svg>` +
        `</a>`;

      return (
        // Per-slide labelling: aria-roledescription + aria-labelledby (v4 §v4.4.2c).
        `<li class="${cardClass}"` +
        ` aria-roledescription="slide"` +
        ` aria-labelledby="${escapeHtml(slideLabelId)}">` +
        // SR-only span: "Ranking N of TOTAL, <imageAlt>" (v4 §v4.4.2c).
        `<span id="${escapeHtml(slideLabelId)}" class="visually-hidden">` +
        `${escapeHtml(slideLabelText)}` +
        `</span>` +
        `<div class="hp-rankings__media">` +
        `<img class="hp-rankings__img hp-rankings__img--default"` +
        ` src="${escapeHtml(imageSrc)}"` +
        ` alt="${escapeHtml(resolvedAlt)}"` +
        ` width="${safeImageWidth}" height="${safeImageHeight}"` +
        ` loading="lazy" decoding="async">` +
        `<img class="hp-rankings__img hp-rankings__img--hover"` +
        ` src="${escapeHtml(resolvedHover)}"` +
        ` alt="" aria-hidden="true"` +
        ` width="${safeImageWidth}" height="${safeImageHeight}"` +
        ` loading="lazy" decoding="async">` +
        `</div>` +
        `<div class="hp-rankings__card-footer">` +
        footerContent +
        `</div>` +
        `</li>`
      );
    })
    .join("");

  const noCards = safeCards.length === 0;
  const sectionClass = noCards
    ? "hp-rankings hp-rankings--no-overflow"
    : "hp-rankings";
  const nextDisabledMarkup = noCards
    ? ` class="hp-rankings__nav-btn hp-rankings__nav-btn--next is-disabled" aria-disabled="true" tabindex="-1"`
    : ` class="hp-rankings__nav-btn hp-rankings__nav-btn--next"`;

  // Sticky wrapper (v4 §v4.3.1c): wraps .hp-rankings + spacer.
  // Both elements are always present on first render (HTML-parity).
  // No JS needed; pure CSS sticky. No inline style on any card (scroll-opacity
  // is JS-only progressive enhancement — --hp-strip-opacity absent on first render
  // → CSS fallback 0.70 applies).
  return (
    `<div class="hp-rankings__sticky-wrapper">` +
    `<section class="${sectionClass}" aria-labelledby="${escapeHtml(headingIdSafe)}">` +
    `<h2 id="${escapeHtml(headingIdSafe)}" class="visually-hidden">ASU rankings</h2>` +
    `<div class="hp-rankings__inner">` +
    `<ul class="hp-rankings__track" role="list">` +
    cardItems +
    `</ul>` +
    `<div class="hp-rankings__controls">` +
    `<div class="hp-rankings__nav" role="group" aria-label="Rankings carousel navigation">` +
    `<button type="button" class="hp-rankings__nav-btn hp-rankings__nav-btn--prev is-disabled"` +
    ` aria-disabled="true" tabindex="-1" aria-label="Previous ranking">` +
    `<svg class="hp-rankings__nav-icon" viewBox="0 0 320 512" aria-hidden="true" focusable="false">` +
    `<path fill="currentColor" d="${CHEVRON_LEFT_PATH}"/>` +
    `</svg>` +
    `</button>` +
    `<button type="button"${nextDisabledMarkup}` +
    ` aria-label="Next ranking">` +
    `<svg class="hp-rankings__nav-icon" viewBox="0 0 320 512" aria-hidden="true" focusable="false">` +
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
    `</section>` +
    // Sticky spacer: display:none at mobile, height:100vh at ≥901px (v4 §v4.3.1c).
    `<div class="hp-rankings__sticky-spacer" aria-hidden="true"></div>` +
    `</div>`
  );
};

// ─── Storybook test-support: hover mirror ─────────────────────────────────────

const HOVER_MIRROR_ID = "hp-rankings-hover-mirror";
const HOVER_ATTRIBUTE = "data-rankings-hover";

const ensureHoverMirror = () => {
  if (document.getElementById(HOVER_MIRROR_ID)) return;
  const rules = [];
  const collect = (list, conditions) =>
    Array.from(list).forEach(rule => {
      if (rule instanceof CSSStyleRule) {
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
 * Forces (or clears) the hover styles on a `.hp-rankings__card` element.
 * @param {Element} element - The `.hp-rankings__card` element.
 * @param {boolean} [on=true]
 */
export const forceHover = (element, on = true) => {
  ensureHoverMirror();
  element.toggleAttribute(HOVER_ATTRIBUTE, on);
};
