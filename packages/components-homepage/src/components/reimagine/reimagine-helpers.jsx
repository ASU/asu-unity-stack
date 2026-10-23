import { realPointer } from "../video-control/video-control-helpers.jsx";

export { realPointer };

// A real (trusted) key press. After a real mouse click Chromium treats script focus as pointer
// focus (no :focus-visible) until the next trusted key event, so tests that click end with this.
export const realKeyboard = {
  async press(key) {
    if (!realPointer.available) return;
    const { userEvent } = await import("vitest/browser");
    await userEvent.keyboard(key);
  },
};

// A real pointer press held down (`:active`) needs commands registered in vitest.config.js; the
// vitest browser `userEvent` can only click. The pointer must already be over the element (hover).
export const pressedPointer = {
  async down() {
    if (!realPointer.available) return;
    const { commands } = await import("vitest/browser");
    await commands.pointerDown();
  },
  async up() {
    if (!realPointer.available) return;
    const { commands } = await import("vitest/browser");
    await commands.pointerUp();
  },
};

// Resizes the test viewport (vitest browser only).
export const resizeViewport = async (width, height = 900) => {
  if (!realPointer.available) return;
  const { page } = await import("vitest/browser");
  await page.viewport(width, height);
};

// Emulates a touch-only device (`hover: none`, `pointer: coarse`) until called with false.
export const emulateTouchInput = async touch => {
  if (!realPointer.available) return;
  const { commands } = await import("vitest/browser");
  await commands.emulateTouchInput(touch);
};

// TODO: destinations TBD (WWWCMS-242). A bare "#" scrolls the page to the top on click, so each
// placeholder is a unique fragment that matches no element (the browser then does not scroll).
export const CTA_PLACEHOLDER_HREF = "#reimagine-learn-more";
export const audiencePlaceholderHref = label =>
  `#audience-${label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;

export const AUDIENCES = [
  "K-12 learners",
  "College students",
  "Professionals",
  "Educators",
  "Parents",
  "50+ learners",
];

// Icon: Font Awesome Free 6.4.2 solid arrow-right (CC BY 4.0, https://fontawesome.com/license/free).
const ARROW_PATH =
  "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z";

const row = label =>
  `<li><a class="hp-reimagine__link" href="${audiencePlaceholderHref(label)}"><span class="hp-reimagine__label">${label}</span><span class="hp-reimagine__chip" aria-hidden="true"><svg class="hp-reimagine__arrow" viewBox="0 0 448 512" focusable="false"><path fill="currentColor" d="${ARROW_PATH}"/></svg></span></a></li>`;

// Markup contract (design doc section 6): the Stage B parity source. `headingId` must be unique per
// rendered copy (it feeds both `id` and `aria-labelledby`); `entrance` adds the opt-in attribute.
export const reimagineHtml = ({
  headingId = "hp-reimagine-heading",
  entrance = false,
} = {}) =>
  `<section class="hp-reimagine bg-white"${entrance ? " data-entrance" : ""} aria-labelledby="${headingId}"><div class="hp-reimagine__inner"><div class="hp-reimagine__content"><p class="hp-reimagine__eyebrow mb-0">Programs for all ages</p><h2 id="${headingId}" class="hp-reimagine__heading mt-3 mb-0">A top U.S. university reimagining education <span class="text-nowrap">for <span class="scrib-host">everyone<img class="scrib scrib--reimg" src="img/scribble-reimg.svg" alt="" aria-hidden="true"></span></span></h2><p class="hp-reimagine__text mt-3 mb-0">Breaking down education barriers and building up high quality, affordable and accessible learning opportunities for everyone, from K-12 to midcareer to postretirement and every individual in between.</p><div class="hp-reimagine__actions mt-3"><a class="btn outline btn-outline-maroon btn-medium hp-reimagine__cta" href="${CTA_PLACEHOLDER_HREF}" aria-label="Learn more about reimagining education for everyone">Learn more<svg class="hp-reimagine__cta-icon ms-1" viewBox="0 0 448 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="${ARROW_PATH}"/></svg></a></div></div><ul class="hp-reimagine__list list-unstyled mb-0" role="list" aria-label="Programs by audience">${AUDIENCES.map(row).join("")}</ul></div></section>`;

// ---- Test support ----

const MIRROR_ID = "hp-reimagine-hover-mirror";
const HOVER_ATTRIBUTE = "data-reimagine-hover";

// Calls `visit(styleRule, mediaConditions)` for every style rule of the document, skipping the hover
// mirror sheet below; `mediaConditions` lists the enclosing @media conditions, outermost first.
export const walkRules = visit => {
  const walk = (list, conditions) =>
    Array.from(list).forEach(rule => {
      if (rule instanceof CSSStyleRule) {
        visit(rule, conditions);
      } else if (rule instanceof CSSMediaRule) {
        walk(rule.cssRules, [...conditions, rule.conditionText]);
      } else if (rule.cssRules) {
        walk(rule.cssRules, conditions);
      }
    });
  Array.from(document.styleSheets).forEach(sheet => {
    if (sheet.ownerNode && sheet.ownerNode.id === MIRROR_ID) return;
    try {
      walk(sheet.cssRules, []);
    } catch {
      // cross-origin sheet: not ours
    }
  });
};

// Storybook cannot set :hover, so the package's own `.hp-reimagine__*:hover` rules are copied at
// runtime to `[data-reimagine-hover]`. Unlike the foundations' mirror, the enclosing @media
// conditions are kept, so a desktop-only rule stays desktop-only.
const ensureHoverMirror = () => {
  if (document.getElementById(MIRROR_ID)) return;
  const rules = [];
  const collect = (list, conditions) =>
    Array.from(list).forEach(rule => {
      if (rule instanceof CSSStyleRule) {
        if (/\.hp-reimagine__[^,{]*:hover/.test(rule.selectorText)) {
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
    throw new Error("No .hp-reimagine__*:hover rule found to mirror.");
  }
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

// WCAG relative-luminance contrast of two computed `rgb(r, g, b)` colours (pure arithmetic).
export const contrastRatio = (colorA, colorB) => {
  const luminance = color => {
    const [r, g, b] = color.match(/\d+(\.\d+)?/g).map(Number);
    const channel = value => {
      const s = value / 255;
      return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
    };
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
  };
  const [light, dark] = [luminance(colorA), luminance(colorB)].sort(
    (a, b) => b - a
  );
  return (light + 0.05) / (dark + 0.05);
};
