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

// ─── Default 7-card dataset ───────────────────────────────────────────────────
// Mirrors the Figma sample (design-doc §3.1 and §3.2). Real alt text, slugs, and
// hrefs will be confirmed from the Jira AC before merge.
// TODO: confirm alt text, hrefs, and labels with design / Jira WWWCMS-233.

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

/**
 * Returns the first-render HTML string for a `.hp-rankings` section.
 *
 * **Consumer contract**: `background: transparent` — WCAG contrast is only met
 * when the parent surface is dark enough. Wrap in a dark surface (e.g. the
 * homepage hero band) before using in production.
 *
 * **CMS security note**: `attributionHref` values are rendered unescaped.
 * CMS-side consumers are responsible for HTML-escaping inputs before pasting
 * into this template. No `target="_blank"` is specified; if added later,
 * include `rel="noopener"`.
 *
 * @param {Object} [options]
 * @param {string} [options.headingId="hp-rankings-heading"] - Unique per rendered copy; feeds both `<h2 id>` and `aria-labelledby`.
 * @param {RankingCard[]} [options.cards] - Defaults to the 7-item `DEFAULT_CARDS` sample.
 * @param {string} [options.seeAllHref="#rankings-see-all"] - Placeholder until real URL exists. A bare `#` scrolls to top; use a unique fragment.
 * @param {string} [options.seeAllLabel="See all ASU rankings"] - Visible text for the see-all link.
 * @returns {string} HTML string (Stage B parity source, §3.3).
 */
export const rankingsCardsHtml = ({
  headingId = "hp-rankings-heading",
  cards = DEFAULT_CARDS,
  seeAllHref = "#rankings-see-all",
  seeAllLabel = "See all ASU rankings",
} = {}) => {
  // Soft content check: DEV-only warning for empty alt text (design-doc §7.9).
  // import.meta.env.DEV is tree-shaken to false in production builds.
  if (import.meta.env.DEV) {
    cards.forEach((card, i) => {
      if (card.imageAlt === "") {
        // eslint-disable-next-line no-console
        console.warn(
          `[rankings-cards] Card ${i} has an empty imageAlt. ` +
            'The default <img> will render with alt="" which removes ranking content from screen readers. ' +
            "Provide a full ranking statement in imageAlt. (WWWCMS-233)"
        );
      }
    });
  }

  const cardItems = cards
    .map(
      ({
        imageSrc,
        imageSrcHover,
        imageAlt,
        attributionHref,
        attributionLabel = "Attribution link",
      }) =>
        `<li class="hp-rankings__card">` +
        `<div class="hp-rankings__media">` +
        // Default image: carries full ranking statement in alt (design-doc §7.9).
        `<img class="hp-rankings__img hp-rankings__img--default"` +
        ` src="${imageSrc}"` +
        ` alt="${imageAlt}"` +
        ` width="400" height="500"` + // TODO: confirm with design — intrinsic dimensions from Figma node 13467:58610
        ` loading="lazy" decoding="async">` +
        // Hover image: decorative colour variant — alt="" + aria-hidden so SR does NOT double-announce.
        `<img class="hp-rankings__img hp-rankings__img--hover"` +
        ` src="${imageSrcHover}"` +
        ` alt="" aria-hidden="true"` +
        ` width="400" height="500"` + // TODO: confirm with design — intrinsic dimensions from Figma node 13467:58610
        ` loading="lazy" decoding="async">` +
        `</div>` +
        `<div class="hp-rankings__card-footer">` +
        `<a class="hp-rankings__attribution" href="${attributionHref}">` +
        `${attributionLabel}` +
        `<svg class="hp-rankings__attribution-icon" viewBox="0 0 448 512"` +
        ` aria-hidden="true" focusable="false">` +
        `<path fill="currentColor" d="${ARROW_RIGHT_PATH}"/>` +
        `</svg>` +
        `</a>` +
        `</div>` +
        `</li>`
    )
    .join("");

  return (
    `<section class="hp-rankings" aria-labelledby="${headingId}">` +
    `<h2 id="${headingId}" class="visually-hidden">ASU rankings</h2>` +
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
    // Next button: enabled at first render.
    `<button type="button" class="hp-rankings__nav-btn hp-rankings__nav-btn--next"` +
    ` aria-label="Next ranking">` +
    `<svg class="hp-rankings__nav-icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false">` +
    `<path fill="currentColor" d="${CHEVRON_RIGHT_PATH}"/>` +
    `</svg>` +
    `</button>` +
    `</div>` +
    `<a class="hp-rankings__see-all" href="${seeAllHref}">` +
    `${seeAllLabel}` +
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
// Pattern mirrors reimagine-helpers.jsx `forceHover`.

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
        // Also match nested rules like `.hp-rankings__card:hover .hp-rankings__*`
        if (
          /\.hp-rankings__card:hover\s+\.hp-rankings__/.test(rule.selectorText)
        ) {
          const text = rule.cssText.replace(
            /\.hp-rankings__card:hover(\s+\.hp-rankings__)/g,
            `.hp-rankings__card[${HOVER_ATTRIBUTE}]$1`
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
    try {
      collect(sheet.cssRules, []);
    } catch {
      // cross-origin or locked sheet
    }
  });
  if (!rules.length) {
    // No :hover rules found yet — insert an empty marker so we don't re-attempt
    // on every call during the same render cycle. Stories call this after styles load.
    // eslint-disable-next-line no-console
    console.warn(
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
 * @param {Element} element - The `.hp-rankings__card` element.
 * @param {boolean} [on=true] - Pass `false` to clear the forced hover.
 */
export const forceHover = (element, on = true) => {
  ensureHoverMirror();
  element.toggleAttribute(HOVER_ATTRIBUTE, on);
};
