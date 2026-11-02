import React, { useEffect, useRef } from "react";

import { initStories } from "./stories-grid.js";

export {
  emulateReducedMotion,
  realKeyboard,
  realPointer,
  resizeViewport,
  walkRules,
} from "../reimagine/reimagine-helpers.jsx";

// TODO: destination TBD (WWWCMS-236, open question A7: a temporary URL until the content doc arrives). A bare "#"
// scrolls to the top on click, so each placeholder is a unique fragment that matches no element.
export const MORE_HREF = "#stories-more";
export const storyHref = index => `#story-${index + 1}`;

// Icons: Font Awesome Free 6.4.2 solid (CC BY 4.0, https://fontawesome.com/license/free).
const ARROW_PATH =
  "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";
const CHEVRON_LEFT_PATH =
  "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z";
const CHEVRON_RIGHT_PATH =
  "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z";

// The prototype's story photos (568x660, copied unchanged from prototype v2.71 img/story-N.png). Storybook serves
// them at story-photos/ (see staticDirs in .storybook/main.js); they are sample content, not part of dist/.
export const photoSrc = number => `story-photos/story-${number}.png`;

export const PROMO_ALT =
  "Barrett is the gold standard among the nation’s honors colleges. — The New York Times";

// Prototype v2.71 copy (P:2496-2502), in DOM order = visual order. The promo is item 5 (row 2, cell 2).
export const STORIES = [
  {
    title: "A new generation of physician-engineers begins at ASU",
    photo: photoSrc(1),
    sub: "Medical school opens with an engineering-first curriculum.",
  },
  {
    title: "The New game degree launches in Los Angeles",
    photo: photoSrc(2),
    sub: "Game design and development, taught in the heart of the industry.",
  },
  {
    title: "Students part of Venice Film Festival documentary",
    photo: photoSrc(3),
    sub: "Film students’ work premieres on the festival’s world stage.",
  },
  {
    title: "ASU No. 2 public university for GI Bill students",
    photo: photoSrc(5),
    sub: "Recognized for support of veterans and military-connected students.",
  },
  {
    title: "Barrett, The Honors College is creating bright futures",
    photo: photoSrc(6),
    sub: "Honors education with the reach of a Tier 1 research university.",
    promo: true,
  },
  {
    title: "New facility expands student research opportunities",
    photo: photoSrc(4),
    sub: "New labs put undergraduates on funded research teams.",
  },
  {
    title: "Preparing the future workforce for the West Valley’s needs",
    photo: photoSrc(7),
    sub: "Programs built around the region’s fastest-growing employers.",
  },
];

const escape = value =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const card = (story, index) => {
  const src = story.photo;
  const alt = story.promo ? escape(PROMO_ALT) : "";
  return `<li role="listitem"><a class="hp-stories__card${story.promo ? " hp-stories__card--promo" : ""}" href="${storyHref(index)}"><img src="${src}" alt="${alt}"><span class="hp-stories__scrim" aria-hidden="true"></span><span class="hp-stories__arrow" aria-hidden="true"><svg viewBox="0 0 448 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="${ARROW_PATH}"/></svg></span><div class="hp-stories__text"><h3 class="hp-stories__title">${escape(story.title)}</h3><div class="hp-stories__sub-wrap"><p class="hp-stories__sub">${escape(story.sub)}</p></div></div></a></li>`;
};

// Markup contract (design doc section 6): the Stage B parity source. `id` is the heading id and must be
// unique per rendered copy.
export const storiesHtml = ({
  id = "hp-stories-heading",
  href = MORE_HREF,
} = {}) =>
  `<section class="hp-stories hp-bg-host" aria-labelledby="${id}"><span class="hp-topo hp-topo--band" aria-hidden="true"></span><div class="hp-stories__grid"><div class="hp-stories__lead"><p class="hp-stories__eyebrow">ASU news</p><h2 id="${id}" class="hp-stories__heading">Stories of excellence</h2><p class="hp-stories__dek">This is ASU innovation.</p><a class="btn btn-outline-gold btn-sm hp-stories__more" href="${escape(href)}">More stories <svg class="hp-stories__more-icon" viewBox="0 0 448 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="${ARROW_PATH}"/></svg></a></div><ul class="hp-stories__cards" role="list">${STORIES.map((story, index) => card(story, index)).join("")}</ul><div class="hp-stories__controls" hidden><button type="button" class="hp-stories__prev" aria-label="Previous stories"><svg viewBox="0 0 320 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="${CHEVRON_LEFT_PATH}"/></svg></button><button type="button" class="hp-stories__next" aria-label="Next stories"><svg viewBox="0 0 320 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="${CHEVRON_RIGHT_PATH}"/></svg></button></div></div></section>`;

// Renders the markup and runs `initStories` (unless `manual`, the server-markup state). `before`/`after`
// are blank spacers (CSS height) so a story can put the section away from the top of the page.
export const Harness = ({ html, manual = false, before = 0, after = 0 }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (manual) return undefined;
    const cleanup = initStories(ref.current);
    return cleanup;
  }, [html, manual]);
  return (
    <>
      {before ? <div style={{ height: before }} aria-hidden="true" /> : null}
      <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
      {after ? <div style={{ height: after }} aria-hidden="true" /> : null}
    </>
  );
};

const MIRROR_ID = "hp-stories-hover-mirror";
const HOVER_ATTRIBUTE = "data-stories-hover";

// Storybook cannot set :hover, so the package's own `.hp-stories__*:hover` rules are copied at runtime to
// `[data-stories-hover]` (enclosing @media conditions kept).
const ensureHoverMirror = () => {
  if (document.getElementById(MIRROR_ID)) return;
  const rules = [];
  const collect = (list, conditions) =>
    Array.from(list).forEach(rule => {
      if (rule instanceof CSSStyleRule) {
        if (/\.hp-stories__[^,{]*:hover/.test(rule.selectorText)) {
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
  if (!rules.length) throw new Error("No .hp-stories__*:hover rule to mirror.");
  const style = document.createElement("style");
  style.id = MIRROR_ID;
  style.textContent = rules.join("\n");
  document.head.appendChild(style);
};

// Shows (or clears) the hover styles on an element without a pointer.
export const forceHover = (element, on = true) => {
  ensureHoverMirror();
  element.toggleAttribute(HOVER_ATTRIBUTE, on);
};

// ---- Opening geometry (design doc D6) ----

// Opening progress for a section whose top edge is `top`, in a window `vh` tall under a header `header` tall.
export const openingProgress = (top, vh, header) => {
  const start = vh * 0.9;
  const end = header + 48;
  return Math.min(1, Math.max(0, (start - top) / (start - end)));
};

// ---- Contrast budget (design doc section 8): pure arithmetic over the scrim ----

export const SCRIM_REST_START = 0.53636;
export const SCRIM_MAX_ALPHA = 0.7686;

// Multiplier applied to the photo at `fraction` of the card height (0 top, 1 bottom) for a scrim starting at `start`.
export const scrimMultiplier = (fraction, start) =>
  1 -
  SCRIM_MAX_ALPHA *
    Math.min(1, Math.max(0, (fraction - start) / (1 - start || 1)));

const channel = value => {
  const s = value / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};

// Highest photo gray (0-255) that keeps white text at `ratio`:1 under the scrim multiplier `multiplier`.
export const maxPhotoGray = (multiplier, ratio) => {
  const needed = 1.05 / ratio - 0.05;
  let low = 0;
  let high = 255;
  for (let i = 0; i < 40; i += 1) {
    const mid = (low + high) / 2;
    if (channel(mid * multiplier) <= needed) low = mid;
    else high = mid;
  }
  return low;
};

// WCAG: bold text of at least 18.66px (14pt) is "large" and needs 3:1, smaller text 4.5:1.
export const requiredRatio = (fontPx, bold = true) =>
  fontPx >= 18.66 && bold ? 3 : fontPx >= 24 ? 3 : 4.5;
