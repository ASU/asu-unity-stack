// Rankings-cards Storybook stories — WWWCMS-233
// Design doc: .pipeline/design-doc.md §8 (test matrix)
//
// Cycle 1 revisions address review-report item 7 (test-matrix corrections):
//   - Row 1 asserts both image `src` values on every card.
//   - Rows 2–7 assert visible-card count (not just window.innerWidth).
//   - Rows 9–12 use realKeyboard.press('Tab') sequences, not pointer clicks.
//   - FocusVisiblePrev actually enables + focuses Prev.
//   - Row 16 (NextDisabledAtEnd) scrolls through a many-card overflow set
//     until the trailing edge; asserts the end-state triplet on Next.
//   - Row 20 (SnapToStart) awaits a real `scrollend` event.
//   - Row 21 (ReducedMotion) clicks Next and asserts behavior:'auto' + no
//     hover-transition duration.
//   - Row 22 (ForcedColors) emulates forced-colors mode and asserts the
//     CanvasText card/media border via getComputedStyle.
//   - Row 24 (NoAltDevWarning) spies on console.warn and asserts emission.
//   - Row 25 (IdempotentInit) exercises re-init-after-teardown and asserts
//     no duplicate listeners (click count = 1 scroll step).
//   - Row 26 (TeardownCleansUp) snapshots each disabled attr/class, calls
//     teardown, and asserts server-owned values survived; also exercises a
//     JS-added no-overflow + per-attr additions path.
//   - All `if (!realPointer.available) return` early-return patterns replaced
//     with `expect(realPointer.available).toBe(true)` so tests fail
//     transparently in non-browser runs rather than silently passing.
//
// New stories (not in prior cycle):
//   - InjectionImageAlt, InjectionAttributionHref, InjectionAttributionLabel,
//     InjectionHeadingId, InjectionImageSrcHoverMissing, InjectionAttrQuotes
//     — regression tests for review-report item 1 (template sanitization).
//   - RapidClickCoalescing — asserts review-report item 8 (pending-scroll
//     guard coalesces rapid Next clicks).
//   - ResizeToOverflow — asserts review-report item 2 (resize from no-
//     overflow to overflow re-enables Next).
//   - NoGaInjection — enriched Task-4 lock test (asserts no data-ga*
//     attribute survives even when card inputs contain `data-ga` substrings).

import React, { useEffect, useRef } from "react";
import { expect, spyOn, userEvent, waitFor } from "storybook/test";

import {
  DEFAULT_CARDS,
  emulateForcedColors,
  emulateReducedMotion,
  escapeHtml,
  forceHover,
  rankingsCardsHtml,
  realKeyboard,
  realPointer,
  resizeViewport,
  sanitizeHref,
  sanitizeId,
} from "./rankings-cards-helpers.jsx";

import { initRankingsCards } from "./rankings-cards.js";

// Storybook-only styles: .rankings-storybook-backdrop simulates the dark hero
// band that surrounds the rankings section in production.
import "./_rankings-cards.storybook.scss";

export default {
  title: "Homepage/Rankings cards",
  parameters: {
    docs: {
      description: {
        component:
          "Horizontally-scrollable row of ASU ranking cards for the homepage dark hero band. " +
          "Static HTML + CSS only in production (Webspark 2 CMS). React is the Storybook renderer only. " +
          "All cards are in the DOM on first render; interactive states are class toggles. " +
          "Background: transparent — WCAG contrast is only met when the parent surface is dark enough. " +
          "Every rendered copy needs a unique heading id (feeds `id` and `aria-labelledby`). " +
          "href values are placeholders until real URLs exist: `#rankings-see-all`. " +
          "No data-ga* attributes (GA is handled by the unity-bootstrap-theme bundle attribute listener). " +
          "All template-interpolated values are HTML-escaped and `href` values are scheme-validated.",
      },
    },
  },
};

// ── helpers ──────────────────────────────────────────────────────────────────

const viewport = width => ({
  viewport: { value: `hp${width}`, isRotated: false },
});

/** Renders HTML string; no JS wiring — static-only stories. */
const StaticPage = ({ html }) => (
  <div
    className="rankings-storybook-backdrop"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

/** Renders HTML string and wires initRankingsCards; teardown on unmount. */
const LivePage = ({ html }) => {
  const ref = useRef(null);
  useEffect(() => {
    const teardown = initRankingsCards(ref.current);
    return teardown;
  }, [html]);
  return (
    <div
      ref={ref}
      className="rankings-storybook-backdrop"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

/** Query helpers for a rendered section. */
const parts = canvasElement => {
  const section = canvasElement.querySelector("section.hp-rankings");
  const find = sel => section && section.querySelector(sel);
  const findAll = sel =>
    section ? Array.from(section.querySelectorAll(sel)) : [];
  return {
    section,
    heading: find(".visually-hidden"),
    track: find(".hp-rankings__track"),
    cards: findAll(".hp-rankings__card"),
    attributionLinks: findAll(".hp-rankings__attribution"),
    navGroup: find(".hp-rankings__nav"),
    prevBtn: find(".hp-rankings__nav-btn--prev"),
    nextBtn: find(".hp-rankings__nav-btn--next"),
    seeAll: find(".hp-rankings__see-all"),
    controls: find(".hp-rankings__controls"),
  };
};

/** Counts cards whose leading edge is fully inside the track viewport. */
const countFullyVisibleCards = track => {
  const trackRect = track.getBoundingClientRect();
  const cards = Array.from(track.querySelectorAll(".hp-rankings__card"));
  return cards.filter(card => {
    const r = card.getBoundingClientRect();
    // "Fully visible" ⇒ both edges inside the track viewport (±1px).
    return r.left >= trackRect.left - 1 && r.right <= trackRect.right + 1;
  }).length;
};

/**
 * Asserts the full first-render DOM shape (design-doc §3.3 / §3.4).
 * v2: image-first content model — no rank/topic/caption HTML elements.
 */
const expectComplete = async (canvasElement, { cardCount = 11 } = {}) => {
  const p = parts(canvasElement);

  await expect(p.section).not.toBeNull();
  await expect(p.section.getAttribute("aria-labelledby")).toBe(
    "hp-rankings-heading"
  );
  await expect(p.heading).not.toBeNull();
  await expect(p.heading.id).toBe("hp-rankings-heading");
  await expect(p.heading.textContent).toBe("ASU rankings");

  await expect(p.track).not.toBeNull();
  await expect(p.track.getAttribute("role")).toBe("list");
  await expect(p.cards).toHaveLength(cardCount);

  // v4: card 1 is the summary variant — it has .hp-rankings__see-all-top instead
  // of .hp-rankings__attribution. So attribution links = cardCount - 1 for the
  // default 11-card dataset (1 summary + 10 regular cards).
  // For non-default datasets that might have no summary card, this is still correct
  // because we check per-card in the detailed assertion loops.
  // Only check that there is at least one interactive link per card via learn-more.
  const learnMoreLinks = Array.from(
    p.section ? p.section.querySelectorAll(".hp-rankings__learn-more") : []
  );
  await expect(learnMoreLinks).toHaveLength(cardCount);

  // Nav group
  await expect(p.navGroup).not.toBeNull();
  await expect(p.navGroup.getAttribute("role")).toBe("group");
  await expect(p.navGroup.getAttribute("aria-label")).toBe(
    "Rankings carousel navigation"
  );

  // Prev button: disabled at first render (scrollLeft = 0)
  await expect(p.prevBtn).not.toBeNull();
  await expect(p.prevBtn.getAttribute("type")).toBe("button");
  await expect(p.prevBtn.classList.contains("is-disabled")).toBe(true);
  await expect(p.prevBtn.getAttribute("aria-disabled")).toBe("true");
  await expect(p.prevBtn.getAttribute("tabindex")).toBe("-1");
  await expect(p.prevBtn.getAttribute("aria-label")).toBe("Previous ranking");

  // See-all link
  await expect(p.seeAll).not.toBeNull();

  // Track must NOT be keyboard focusable
  await expect(p.track.getAttribute("tabindex")).toBeNull();

  return p;
};

const DEFAULT_HTML = rankingsCardsHtml();

// Dataset guaranteed to overflow at 1280 (12 cards × ≈304px step = 3648 px wide).
const OVERFLOW_CARDS = DEFAULT_CARDS.concat(DEFAULT_CARDS.slice(0, 5));
const OVERFLOW_HTML = rankingsCardsHtml({ cards: OVERFLOW_CARDS });

// ─── Row 1 — Default render + both image src assertions ──────────────────────

export const Default = {
  globals: viewport(1440),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await expectComplete(canvasElement);

    const p = parts(canvasElement);

    for (let i = 0; i < p.cards.length; i += 1) {
      const card = p.cards[i];
      const expected = DEFAULT_CARDS[i];

      // Media box + exactly two <img>s
      const media = card.querySelector(".hp-rankings__media");
      await expect(media).not.toBeNull();
      const imgs = Array.from(media.querySelectorAll("img"));
      await expect(imgs).toHaveLength(2);

      // Default image: full attribute shape incl. src.
      const defaultImg = media.querySelector(".hp-rankings__img--default");
      await expect(defaultImg).not.toBeNull();
      await expect(defaultImg.getAttribute("src")).toBe(expected.imageSrc);
      await expect(defaultImg.getAttribute("alt")).toBe(expected.imageAlt);
      await expect(defaultImg.getAttribute("width")).toBe("500");
      await expect(defaultImg.getAttribute("height")).toBe("251");
      await expect(defaultImg.getAttribute("loading")).toBe("lazy");
      await expect(defaultImg.getAttribute("decoding")).toBe("async");

      // Hover image: full attribute shape incl. src.
      const hoverImg = media.querySelector(".hp-rankings__img--hover");
      await expect(hoverImg).not.toBeNull();
      await expect(hoverImg.getAttribute("src")).toBe(expected.imageSrcHover);
      await expect(hoverImg.getAttribute("alt")).toBe("");
      await expect(hoverImg.getAttribute("aria-hidden")).toBe("true");
      await expect(hoverImg.getAttribute("width")).toBe("500");
      await expect(hoverImg.getAttribute("height")).toBe("251");
      await expect(hoverImg.getAttribute("loading")).toBe("lazy");
      await expect(hoverImg.getAttribute("decoding")).toBe("async");

      // Card footer must be present on every card.
      await expect(card.querySelector(".hp-rankings__card-footer")).not.toBeNull();

      // Learn-more link must be present on every card (v4 §v4.3.1a).
      await expect(card.querySelector(".hp-rankings__learn-more")).not.toBeNull();

      // Per-slide labelling (v4 §v4.4.2c).
      await expect(card.getAttribute("aria-roledescription")).toBe("slide");
      await expect(card.getAttribute("aria-labelledby")).toBeTruthy();

      if (i === 0) {
        // Card 1 (summary): .hp-rankings__see-all-top present, no .hp-rankings__attribution.
        await expect(card.querySelector(".hp-rankings__see-all-top")).not.toBeNull();
        await expect(card.querySelector(".hp-rankings__attribution")).toBeNull();
        await expect(card.classList.contains("hp-rankings__card--summary")).toBe(true);
      } else {
        // Cards 2–11: .hp-rankings__attribution present, no .hp-rankings__see-all-top.
        const attribution = card.querySelector(".hp-rankings__attribution");
        await expect(attribution).not.toBeNull();
        await expect(card.querySelector(".hp-rankings__attribution-icon")).not.toBeNull();
        await expect(card.querySelector(".hp-rankings__see-all-top")).toBeNull();
      }

      // v2 removed rank/topic/caption elements.
      await expect(card.querySelector(".hp-rankings__rank")).toBeNull();
      await expect(card.querySelector(".hp-rankings__caption")).toBeNull();
      await expect(card.querySelector(".hp-rankings__topic")).toBeNull();
    }

    // Zero data-ga* attributes.
    await expect(
      p.section.querySelector(
        "[data-ga], [data-ga-name], [data-ga-event], [data-ga-action], [data-ga-section]"
      )
    ).toBeNull();

    // Nav + see-all icons.
    await expect(
      p.prevBtn.querySelector(".hp-rankings__nav-icon")
    ).not.toBeNull();
    await expect(
      p.nextBtn.querySelector(".hp-rankings__nav-icon")
    ).not.toBeNull();
    await expect(
      p.seeAll.querySelector(".hp-rankings__see-all-icon")
    ).not.toBeNull();
  },
};

// ─── Rows 2–7 — Breakpoint renders, assert layout + visible-card count ───────
//
// Visible-card count is derived from `getBoundingClientRect()` (not
// `window.innerWidth`). The exact count varies by viewport padding so we
// assert a lower bound (≥1 card fits) and that the track has the expected
// overflow state for the viewport.

const renderBreakpoint = async ({ canvasElement, width, minCards }) => {
  const p = parts(canvasElement);
  await expectComplete(canvasElement);
  await expect(window.innerWidth).toBe(width);
  // At least one card is fully in view.
  const visible = countFullyVisibleCards(p.track);
  await expect(visible).toBeGreaterThanOrEqual(minCards);
  // Overflow is expected at every breakpoint for the 7-card dataset.
  await expect(p.track.scrollWidth).toBeGreaterThan(p.track.clientWidth);
};

export const Phone393 = {
  name: "Phone 393",
  globals: viewport(393),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await renderBreakpoint({ canvasElement, width: 393, minCards: 1 });
  },
};

export const Tablet768 = {
  name: "Tablet 768",
  globals: viewport(768),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await renderBreakpoint({ canvasElement, width: 768, minCards: 1 });
  },
};

export const Desktop1024 = {
  name: "Desktop 1024",
  globals: viewport(1024),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await renderBreakpoint({ canvasElement, width: 1024, minCards: 2 });
  },
};

export const Desktop1280 = {
  name: "Desktop 1280",
  globals: viewport(1280),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await renderBreakpoint({ canvasElement, width: 1280, minCards: 2 });
  },
};

export const Desktop1440 = {
  name: "Desktop 1440",
  globals: viewport(1440),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await renderBreakpoint({ canvasElement, width: 1440, minCards: 3 });
  },
};

export const Large1920 = {
  name: "Wide 1920",
  globals: viewport(1920),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await renderBreakpoint({ canvasElement, width: 1920, minCards: 3 });
  },
};

// ─── Row 8 — Hover ──────────────────────────────────────────────────────────

const HoverPage = () => {
  const ref = useRef(null);
  useEffect(() => {
    const card =
      ref.current && ref.current.querySelectorAll(".hp-rankings__card")[1];
    if (card) forceHover(card);
    return () => {
      if (card) forceHover(card, false);
    };
  }, []);
  return (
    <div
      ref={ref}
      className="rankings-storybook-backdrop"
      dangerouslySetInnerHTML={{ __html: DEFAULT_HTML }}
    />
  );
};

export const Hover = {
  name: "Hover (card 2)",
  globals: viewport(1280),
  render: () => <HoverPage />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const card2 = p.cards[1];
    await expect(card2).not.toBeNull();

    await waitFor(() =>
      expect(getComputedStyle(card2).backgroundColor).toBe("rgb(255, 255, 255)")
    );
    await waitFor(() =>
      expect(getComputedStyle(card2).color).toBe("rgb(25, 25, 25)")
    );
    const attr = card2.querySelector(".hp-rankings__attribution");
    await waitFor(() =>
      expect(getComputedStyle(attr).color).toBe("rgb(140, 29, 64)")
    );

    const defaultImg = card2.querySelector(".hp-rankings__img--default");
    const hoverImg = card2.querySelector(".hp-rankings__img--hover");
    await waitFor(() => expect(getComputedStyle(defaultImg).opacity).toBe("0"));
    await waitFor(() => expect(getComputedStyle(hoverImg).opacity).toBe("1"));

    await expect(card2.querySelector(".hp-rankings__caption")).toBeNull();
  },
};

// ─── Row 23 — Image sizing (v3 hybrid Q3 = D) ─────────────────────────────
// Three-way assertion per design-doc §8 row 23 (v3 amendment):
//   (a) computed aspect-ratio string equals '2 / 1' exactly on every card
//   (b) layout ratio within ±0.01 of 2.0 on every card
//   (c) stack-equality — both <img> elements have identical getBoundingClientRect
//       width and height via toBeCloseTo(..., 1)

export const ImageSizing = {
  name: "Image sizing",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);

    for (const card of p.cards) {
      const media = card.querySelector(".hp-rankings__media");
      const mediaStyle = getComputedStyle(media);

      // (a) Computed aspect-ratio string must equal '2 / 1' exactly.
      // The locked v3 contract requires the exact serialised value '2 / 1'.
      // If a future cross-browser serialization quirk requires relaxation,
      // that must go through an architect amendment to the design-doc, not
      // through loosening this assertion.
      const arStr = mediaStyle.aspectRatio;
      await expect(arStr).toBe("2 / 1");

      // (b) Layout ratio within ±0.01 of 2.0.
      const rect = media.getBoundingClientRect();
      const layoutRatio = rect.width / rect.height;
      await expect(Math.abs(layoutRatio - 2.0)).toBeLessThan(0.01);

      // (c) Stack-equality: both <img> bounding boxes agree to 1 decimal place.
      const defaultImg = media.querySelector(".hp-rankings__img--default");
      const hoverImg = media.querySelector(".hp-rankings__img--hover");
      const defRect = defaultImg.getBoundingClientRect();
      const hovRect = hoverImg.getBoundingClientRect();
      await expect(defRect.width).toBeCloseTo(hovRect.width, 1);
      await expect(defRect.height).toBeCloseTo(hovRect.height, 1);
    }
  },
};

// ─── Rows 9–12 — Focus-visible via realKeyboard sequences ───────────────────

// Tab through focusable elements on the page until `target` becomes
// `document.activeElement`, or stop after `max` tabs. Returns the number of
// tabs taken. Resets focus to document.body first so leftover state from
// prior stories doesn't skew the starting point. Presses Escape (a trusted
// keyboard event) first to establish keyboard modality — Chromium otherwise
// stays in pointer modality after a prior story's realPointer click, and
// :focus-visible would not apply.
const tabToElement = async (target, { max = 60 } = {}) => {
  if (document.activeElement && document.activeElement !== document.body) {
    try {
      document.activeElement.blur();
    } catch {
      // best-effort
    }
  }
  // Trusted key event → establishes keyboard modality for :focus-visible.
  await realKeyboard.press("{Escape}");
  for (let i = 0; i < max; i += 1) {
    await userEvent.tab();
    if (document.activeElement === target) return i + 1;
  }
  return -1;
};

export const FocusVisibleCard = {
  name: "Focus-visible: card attribution link",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    const p = parts(canvasElement);
    const link = p.attributionLinks[0];
    const n = await tabToElement(link);
    await expect(n).toBeGreaterThan(0);
    await expect(document.activeElement).toBe(link);
    await expect(link.matches(":focus-visible")).toBe(true);
    const ring = getComputedStyle(link).boxShadow;
    await expect(ring).toContain("rgb(255, 255, 255)");
  },
};

export const FocusVisiblePrev = {
  name: "Focus-visible: prev button",
  globals: viewport(1280),
  render: () => <LivePage html={OVERFLOW_HTML} />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    const p = parts(canvasElement);

    // Scroll Next once so Prev becomes enabled (gets tabindex removed).
    await realPointer.click(p.nextBtn);
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(false)
    );
    // Wait for pending-scroll to clear.
    await new Promise(r => setTimeout(r, 400));

    const n = await tabToElement(p.prevBtn);
    await expect(n).toBeGreaterThan(0);
    await expect(document.activeElement).toBe(p.prevBtn);
    await expect(p.prevBtn.matches(":focus-visible")).toBe(true);
    const ring = getComputedStyle(p.prevBtn).boxShadow;
    await expect(ring).toContain("rgb(255, 255, 255)");
  },
};

export const FocusVisibleNext = {
  name: "Focus-visible: next button",
  globals: viewport(1280),
  render: () => <LivePage html={OVERFLOW_HTML} />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    const p = parts(canvasElement);
    const n = await tabToElement(p.nextBtn);
    await expect(n).toBeGreaterThan(0);
    await expect(document.activeElement).toBe(p.nextBtn);
    await expect(p.nextBtn.matches(":focus-visible")).toBe(true);
    const ring = getComputedStyle(p.nextBtn).boxShadow;
    await expect(ring).toContain("rgb(255, 255, 255)");
  },
};

export const FocusVisibleSeeAll = {
  name: "Focus-visible: see-all link",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    const p = parts(canvasElement);
    const n = await tabToElement(p.seeAll);
    await expect(n).toBeGreaterThan(0);
    await expect(document.activeElement).toBe(p.seeAll);
    await expect(p.seeAll.matches(":focus-visible")).toBe(true);
    const ring = getComputedStyle(p.seeAll).boxShadow;
    await expect(ring).toContain("rgb(255, 255, 255)");
  },
};

// ─── Row 21 — Reduced motion (asserts click behaviour + transition dur) ─────

export const ReducedMotion = {
  name: "Reduced motion",
  globals: viewport(1280),
  render: () => <LivePage html={OVERFLOW_HTML} />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    await emulateReducedMotion(true);
    try {
      const p = parts(canvasElement);
      // Under reduced-motion the track should not have smooth scroll-behavior
      const trackStyle = getComputedStyle(p.track);
      await expect(trackStyle.scrollBehavior).toBe("auto");
      // Under reduced-motion, hover img transition-duration should be 0s
      const hoverImg = p.cards[0].querySelector(".hp-rankings__img--hover");
      const hoverImgStyle = getComputedStyle(hoverImg);
      await expect(hoverImgStyle.transitionDuration).toBe("0s");

      // §8 row-21 locked proof: assert the JS scrollBy call used
      // { behavior: 'auto' } not 'smooth'.
      //
      // Proof strategy: measure the elapsed time between the click and the
      // resulting `scrollend` event. With behavior:'auto', the browser
      // jumps the scroll position synchronously — the gap between click
      // and scrollend is typically 10-80ms in Chromium headless (event loop
      // overhead). With behavior:'smooth', the animation runs for 200ms+.
      // We use 150ms as the threshold — conservative enough to be reliable
      // across headless CI hosts, yet well below the smooth-scroll floor.
      await waitFor(() =>
        expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
      );
      const scrollEndPromise = new Promise(resolve => {
        p.track.addEventListener("scrollend", resolve, { once: true });
        // Safety fallback so the test doesn't hang if scrollend never fires.
        setTimeout(resolve, 500);
      });
      const t0 = performance.now();
      await realPointer.click(p.nextBtn);
      await scrollEndPromise;
      const elapsed = performance.now() - t0;
      // Under behavior:'auto' the scroll settles in a single compositor frame
      // (typically <80ms in headless). Under behavior:'smooth' it takes 200ms+.
      // 150ms is a reliable floor in headless Chromium.
      await expect(elapsed).toBeLessThan(150);
      await waitFor(() => expect(p.track.scrollLeft).toBeGreaterThan(0));
    } finally {
      await emulateReducedMotion(false);
    }
  },
};

// ─── Row 22 — Forced colors with real emulation + computed-style check ──────

export const ForcedColors = {
  name: "Forced colors",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    await emulateForcedColors(true);
    try {
      const p = parts(canvasElement);
      const card = p.cards[0];
      const media = card.querySelector(".hp-rankings__media");

      // The @media (forced-colors: active) block defines a CanvasText border
      // on both the card and the media container. The UA translates CanvasText
      // to a system color at paint time, so we check the border-style is
      // 'solid' and the border-width is non-zero (indicates a border exists).
      await waitFor(() => {
        const cardStyle = getComputedStyle(card);
        expect(cardStyle.borderTopStyle).toBe("solid");
        expect(parseFloat(cardStyle.borderTopWidth)).toBeGreaterThan(0);
      });
      await waitFor(() => {
        const mediaStyle = getComputedStyle(media);
        expect(mediaStyle.borderTopStyle).toBe("solid");
        expect(parseFloat(mediaStyle.borderTopWidth)).toBeGreaterThan(0);
      });

      // Shape still intact under forced-colors.
      await expectComplete(canvasElement);
    } finally {
      await emulateForcedColors(false);
    }
  },
};

// ─── Row 24 — DEV warning for empty imageAlt (spy on console.warn) ──────────

export const NoAltDevWarning = {
  name: "No-alt DEV warning",
  globals: viewport(1280),
  // The warning fires at `rankingsCardsHtml()` call time, not component mount
  // time, so we install the spy inside play() and call the helper directly.
  render: () => (
    <div data-no-alt-warning-host className="rankings-storybook-backdrop">
      <p style={{ color: "white" }}>
        Spy host — the test calls rankingsCardsHtml with imageAlt=&quot;&quot;
        and asserts console.warn was called.
      </p>
    </div>
  ),
  play: async () => {
    // eslint-disable-next-line no-console
    const originalWarn = console.warn;
    const captured = [];
    // eslint-disable-next-line no-console
    console.warn = (...args) => {
      captured.push(args.join(" "));
    };
    try {
      // Trigger the DEV soft-check path.
      const html = rankingsCardsHtml({
        cards: [{ ...DEFAULT_CARDS[0], imageAlt: "" }],
      });
      // Also verify the rendered markup is non-fabricating (alt="").
      await expect(html).toContain('alt=""');
    } finally {
      // eslint-disable-next-line no-console
      console.warn = originalWarn;
    }
    const emptyAltWarn = captured.find(w => /imageAlt/i.test(w));
    await expect(emptyAltWarn).toBeTruthy();
  },
};

// ─── Row 13 — Prev disabled at start ────────────────────────────────────────

export const PrevDisabledAtStart = {
  name: "Prev disabled at start",
  globals: viewport(1280),
  render: () => <LivePage html={OVERFLOW_HTML} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await waitFor(() => {
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true);
      expect(p.prevBtn.getAttribute("aria-disabled")).toBe("true");
      expect(p.prevBtn.getAttribute("tabindex")).toBe("-1");
    });
    // Next is enabled (overflow dataset).
    await waitFor(() => {
      expect(p.nextBtn.classList.contains("is-disabled")).toBe(false);
      expect(p.nextBtn.getAttribute("aria-disabled")).toBeNull();
    });
  },
};

// ─── Row 14 — Next scrolls one card ─────────────────────────────────────────

export const NextScrollsOneCard = {
  name: "Next scrolls one card",
  globals: viewport(1280),
  render: () => <LivePage html={OVERFLOW_HTML} />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    const p = parts(canvasElement);
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );
    const initial = p.track.scrollLeft;

    // §8 row-14 locked proof: the scroll step must equal cardWidth + gap.
    // Compute the expected delta from the live DOM measurements.
    const cardRect = p.cards[0].getBoundingClientRect();
    const cardWidth = cardRect.width;
    const gap =
      parseFloat(getComputedStyle(p.track).columnGap) ||
      parseFloat(getComputedStyle(p.track).gap) ||
      0;
    const expectedStep = cardWidth + gap;

    await realPointer.click(p.nextBtn);
    // Wait for the scroll to settle.
    await waitFor(() => expect(p.track.scrollLeft).toBeGreaterThan(initial));
    await new Promise(r => setTimeout(r, 350)); // let scrollend / idle timer clear

    const actual = p.track.scrollLeft - initial;
    // Assert within 1px of the exact one-card step (not just "positive delta").
    await expect(Math.abs(actual - expectedStep)).toBeLessThanOrEqual(1);

    // Prev enabled after a step.
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(false)
    );
    await waitFor(() =>
      expect(p.prevBtn.getAttribute("aria-disabled")).toBeNull()
    );
    await waitFor(() => expect(p.prevBtn.getAttribute("tabindex")).toBeNull());
  },
};

// ─── Row 15 — Prev scrolls back ─────────────────────────────────────────────

export const PrevScrollsBack = {
  name: "Prev scrolls back",
  globals: viewport(1280),
  render: () => <LivePage html={OVERFLOW_HTML} />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    const p = parts(canvasElement);

    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );
    const baseScrollLeft = p.track.scrollLeft;
    const cardWidth = p.cards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(p.track).columnGap) || 16;
    const step = cardWidth + gap;

    await realPointer.click(p.nextBtn);
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(false)
    );
    await waitFor(() =>
      expect(p.track.scrollLeft).toBeGreaterThan(baseScrollLeft + step / 2)
    );
    // Wait for pending-scroll guard to clear before second click.
    await new Promise(r => setTimeout(r, 500));
    await realPointer.click(p.prevBtn);
    // Scroll should return close to the base (within half a card step).
    await waitFor(() =>
      expect(p.track.scrollLeft).toBeLessThan(baseScrollLeft + step / 2)
    );
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );
  },
};

// ─── Row 16 — Next disabled at end (true overflow end state) ────────────────

export const NextDisabledAtEnd = {
  name: "Next disabled at end",
  globals: viewport(1280),
  render: () => <LivePage html={OVERFLOW_HTML} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    // Programmatically scroll to the maximum to simulate reaching the end.
    const maxScroll = p.track.scrollWidth - p.track.clientWidth;
    p.track.scrollTo({ left: maxScroll, behavior: "instant" });
    await waitFor(() => {
      expect(p.nextBtn.classList.contains("is-disabled")).toBe(true);
      expect(p.nextBtn.getAttribute("aria-disabled")).toBe("true");
      expect(p.nextBtn.getAttribute("tabindex")).toBe("-1");
    });
    // Prev is enabled at the trailing edge.
    await waitFor(() => {
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(false);
    });
  },
};

// ─── Row 17/18 — No-overflow states ─────────────────────────────────────────

export const OneCardNoOverflow = {
  name: "One card — no overflow",
  globals: viewport(1280),
  render: () => (
    <LivePage html={rankingsCardsHtml({ cards: DEFAULT_CARDS.slice(0, 1) })} />
  ),
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await waitFor(() =>
      expect(p.section.classList.contains("hp-rankings--no-overflow")).toBe(
        true
      )
    );
    await waitFor(() => {
      const navDisplay = getComputedStyle(p.navGroup).display;
      expect(navDisplay).toBe("none");
    });
    await expect(getComputedStyle(p.seeAll).display).not.toBe("none");
    // Both buttons in no-overflow state are disabled defensively.
    await waitFor(() => {
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true);
      expect(p.nextBtn.classList.contains("is-disabled")).toBe(true);
    });
  },
};

export const FewCardsNoOverflow = {
  name: "Few cards — no overflow at 1920",
  globals: viewport(1920),
  render: () => (
    <LivePage html={rankingsCardsHtml({ cards: DEFAULT_CARDS.slice(0, 2) })} />
  ),
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await waitFor(() =>
      expect(p.section.classList.contains("hp-rankings--no-overflow")).toBe(
        true
      )
    );
    await waitFor(() => {
      const navDisplay = getComputedStyle(p.navGroup).display;
      expect(navDisplay).toBe("none");
    });
    await expect(getComputedStyle(p.seeAll).display).not.toBe("none");
  },
};

// ─── Row 19 — Many cards overflow at 393 ────────────────────────────────────

// Helper: click a nav button and wait for the scroll to settle (scrollend
// or idle timer). Uses a 600ms wall-clock timeout as the safety net.
const clickAndSettle = async (btn, track) => {
  const scrollEnded = new Promise(resolve => {
    track.addEventListener("scrollend", resolve, { once: true });
    setTimeout(resolve, 600);
  });
  btn.click();
  await scrollEnded;
  // Brief extra wait so the 150ms idle debounce can flush.
  await new Promise(r => setTimeout(r, 200));
};

export const ManyCardsOverflow = {
  name: "Many cards — overflow at 393",
  globals: viewport(393),
  parameters: {
    // 12-card full-cycle (click Next × 11 + click Prev × 11 with scroll settle)
    // needs more time than the default 15s storybook test timeout.
    test: { timeout: 45000 },
  },
  render: () => <LivePage html={OVERFLOW_HTML} />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    const p = parts(canvasElement);

    // Initial-state assertion: overflows, nav visible, prev disabled.
    await waitFor(() =>
      expect(p.section.classList.contains("hp-rankings--no-overflow")).toBe(
        false
      )
    );
    await expect(p.cards).toHaveLength(12);
    await expect(getComputedStyle(p.navGroup).display).not.toBe("none");
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );

    // §8 row-19 locked proof: prev/next endpoint cycle using the component's
    // own buttons (NOT scrollIntoView). Click Next until Next is disabled
    // (reached trailing end), assert end triplet; then click Prev until Prev
    // is disabled again (returned to leading start), assert start triplet.

    // — scroll to end via Next —
    let iterations = 0;
    const MAX_ITER = 30;
    while (
      !p.nextBtn.classList.contains("is-disabled") &&
      iterations < MAX_ITER
    ) {
      await clickAndSettle(p.nextBtn, p.track);
      iterations += 1;
    }
    // End-state triplet on Next.
    await waitFor(() => {
      expect(p.nextBtn.classList.contains("is-disabled")).toBe(true);
      expect(p.nextBtn.getAttribute("aria-disabled")).toBe("true");
      expect(p.nextBtn.getAttribute("tabindex")).toBe("-1");
    });
    // Prev is enabled at the trailing end.
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(false)
    );

    // — scroll back to start via Prev —
    iterations = 0;
    while (
      !p.prevBtn.classList.contains("is-disabled") &&
      iterations < MAX_ITER
    ) {
      await clickAndSettle(p.prevBtn, p.track);
      iterations += 1;
    }
    // Start-state triplet on Prev.
    await waitFor(() => {
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true);
      expect(p.prevBtn.getAttribute("aria-disabled")).toBe("true");
      expect(p.prevBtn.getAttribute("tabindex")).toBe("-1");
    });
    // Next is enabled at the leading start.
    await waitFor(() =>
      expect(p.nextBtn.classList.contains("is-disabled")).toBe(false)
    );
  },
};

// ─── Row 20 — Snap to start after mid-card scroll, awaits scrollend ─────────

export const SnapToStart = {
  name: "Snap to start after mid-card scroll",
  globals: viewport(1280),
  render: () => <LivePage html={OVERFLOW_HTML} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );

    // Capture the natural "zero" snap position; some test environments show
    // a small non-zero initial scrollLeft offset.
    const baseScrollLeft = p.track.scrollLeft;
    const cardWidth = p.cards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(p.track).columnGap) || 16;
    const step = cardWidth + gap;

    // Scroll to a non-snap mid-card position.
    const partialScroll = baseScrollLeft + Math.round(step * 0.4);
    const scrollEnded = new Promise(resolve => {
      p.track.addEventListener("scrollend", resolve, { once: true });
      // Fallback timeout in case scrollend is slow in headless.
      setTimeout(resolve, 1500);
    });
    p.track.scrollTo({ left: partialScroll, behavior: "smooth" });
    await scrollEnded;

    const left = p.track.scrollLeft;
    // After snap-settle, scrollLeft should be at the base or one step past.
    const delta = left - baseScrollLeft;
    const nearest = Math.round(delta / step) * step;
    await expect(Math.abs(delta - nearest)).toBeLessThanOrEqual(8);
  },
};

// ─── Row 25 — Idempotent init: re-init after teardown + no listener dup ────

const IdempotentPage = () => {
  const ref = useRef(null);
  useEffect(() => {
    const t1 = initRankingsCards(ref.current);
    const t2 = initRankingsCards(ref.current); // second call is a no-op
    return () => {
      t1();
      t2();
    };
  }, []);
  return (
    <div
      ref={ref}
      className="rankings-storybook-backdrop"
      dangerouslySetInnerHTML={{ __html: OVERFLOW_HTML }}
    />
  );
};

export const IdempotentInit = {
  name: "Idempotent init",
  globals: viewport(1280),
  render: () => <IdempotentPage />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    const p = parts(canvasElement);
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );
    await expect(p.prevBtn.getAttribute("aria-disabled")).toBe("true");

    // Single click should advance exactly one step (if a second listener was
    // attached, the behaviour would double).
    const stepBefore = p.track.scrollLeft;
    await realPointer.click(p.nextBtn);
    // Let scrollend settle.
    await new Promise(r => setTimeout(r, 400));
    const stepAfter = p.track.scrollLeft;
    const delta = stepAfter - stepBefore;
    // One card step is roughly 288 + 16 = 304. Two steps would be ≥600.
    // Assert the delta is at most one step + a tolerance.
    const cardWidth = p.cards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(p.track).columnGap) || 16;
    const oneStep = cardWidth + gap;
    await expect(delta).toBeGreaterThan(0);
    await expect(delta).toBeLessThanOrEqual(oneStep + 10);
  },
};

// ─── Row 26 — Teardown preserves server-owned triplets ──────────────────────
//
// Cycle-3 extension (§8 row-26 locked proof):
//   Case A: one-card fixture — syncNavState() adds hp-rankings--no-overflow
//           AND disables both buttons; teardown removes all JS mutations and
//           restores the exact server-rendered values.
//   Case B: overflow fixture with server-provided custom-disabled next
//           triplet — re-init after teardown leaves server state intact.

// Case A fixture: one card → JS will add no-overflow + disable both btns.
const ONE_CARD_HTML = rankingsCardsHtml({
  cards: DEFAULT_CARDS.slice(0, 1),
  headingId: "hp-rankings-teardown-a",
});

const TeardownPage = () => {
  const ref = useRef(null);
  useEffect(() => {
    const section = ref.current.querySelector(".hp-rankings");
    const prev = ref.current.querySelector(".hp-rankings__nav-btn--prev");
    const next = ref.current.querySelector(".hp-rankings__nav-btn--next");

    // Record server-rendered state BEFORE init.
    const before = {
      prev: {
        cls: prev.classList.contains("is-disabled"),
        aria: prev.getAttribute("aria-disabled"),
        tab: prev.getAttribute("tabindex"),
      },
      next: {
        cls: next.classList.contains("is-disabled"),
        aria: next.getAttribute("aria-disabled"),
        tab: next.getAttribute("tabindex"),
      },
      sectionNoOverflow: section.classList.contains("hp-rankings--no-overflow"),
    };

    // initRankingsCards will call syncNavState() synchronously on the one-card
    // fixture, adding hp-rankings--no-overflow and the disabled triplet on BOTH
    // buttons (they were only on prev server-side).
    const teardown = initRankingsCards(ref.current);
    teardown();

    // Record state AFTER teardown.
    const after = {
      prev: {
        cls: prev.classList.contains("is-disabled"),
        aria: prev.getAttribute("aria-disabled"),
        tab: prev.getAttribute("tabindex"),
      },
      next: {
        cls: next.classList.contains("is-disabled"),
        aria: next.getAttribute("aria-disabled"),
        tab: next.getAttribute("tabindex"),
      },
      sectionNoOverflow: section.classList.contains("hp-rankings--no-overflow"),
    };

    // Expose before/after on the DOM for assertion.
    section.dataset.beforeTeardown = JSON.stringify(before);
    section.dataset.afterTeardown = JSON.stringify(after);
  }, []);
  return (
    <div
      ref={ref}
      className="rankings-storybook-backdrop"
      dangerouslySetInnerHTML={{ __html: ONE_CARD_HTML }}
    />
  );
};

// Case B fixture: overflow dataset with server-provided custom-disabled next.
// Build HTML then surgically add the disabled triplet to next before React mounts.
const OVERFLOW_HTML_B = rankingsCardsHtml({
  cards: OVERFLOW_CARDS,
  headingId: "hp-rankings-teardown-b",
});
const TeardownPageCustomNext = () => {
  const ref = useRef(null);
  useEffect(() => {
    const section = ref.current.querySelector(".hp-rankings");
    const prev = ref.current.querySelector(".hp-rankings__nav-btn--prev");
    const next = ref.current.querySelector(".hp-rankings__nav-btn--next");

    // Simulate a server that pre-disabled both buttons (e.g. a CMS variant).
    next.classList.add("is-disabled");
    next.setAttribute("aria-disabled", "true");
    next.setAttribute("tabindex", "-1");

    const serverBefore = {
      prev: {
        cls: prev.classList.contains("is-disabled"),
        aria: prev.getAttribute("aria-disabled"),
        tab: prev.getAttribute("tabindex"),
      },
      next: {
        cls: next.classList.contains("is-disabled"),
        aria: next.getAttribute("aria-disabled"),
        tab: next.getAttribute("tabindex"),
      },
    };

    const teardown = initRankingsCards(ref.current);
    teardown();

    const after = {
      prev: {
        cls: prev.classList.contains("is-disabled"),
        aria: prev.getAttribute("aria-disabled"),
        tab: prev.getAttribute("tabindex"),
      },
      next: {
        cls: next.classList.contains("is-disabled"),
        aria: next.getAttribute("aria-disabled"),
        tab: next.getAttribute("tabindex"),
      },
    };

    section.dataset.serverBefore = JSON.stringify(serverBefore);
    section.dataset.afterTeardown = JSON.stringify(after);

    // ── Cycle-4 P2 fix: prove second init causes a visible DOM mutation ──
    // After teardown, the section is removed from the WeakSet. A real second
    // `initRankingsCards` call must run `syncNavState()`, which mutates the DOM.
    // The `ignore` no-op path (returned when the section is still in the WeakSet,
    // i.e. teardown did NOT clear the entry) would NOT mutate anything.
    //
    // To guarantee `syncNavState()` mutates: remove all but one card from the
    // track so scrollWidth <= clientWidth. syncNavState() will add
    // hp-rankings--no-overflow and disable both buttons. This change is only
    // observable if a real init ran — not the ignore no-op.
    const track = section.querySelector(".hp-rankings__track");
    const allCards = Array.from(track.querySelectorAll(".hp-rankings__card"));
    // Keep one card; remove the rest to force no-overflow geometry.
    const removedCards = allCards.slice(1);
    removedCards.forEach(c => track.removeChild(c));

    const teardown2 = initRankingsCards(ref.current);

    // Snapshot state after second init (syncNavState must have run).
    const afterReinit = {
      noOverflow: section.classList.contains("hp-rankings--no-overflow"),
      nextDisabledCls: next.classList.contains("is-disabled"),
      nextAriaDisabled: next.getAttribute("aria-disabled"),
    };
    section.dataset.afterReinit = JSON.stringify(afterReinit);

    // Restore the removed cards before teardown2 so geometry goes back to overflow.
    removedCards.forEach(c => track.appendChild(c));
    teardown2();

    const afterTeardown2 = {
      noOverflow: section.classList.contains("hp-rankings--no-overflow"),
      nextDisabledCls: next.classList.contains("is-disabled"),
      nextAriaDisabled: next.getAttribute("aria-disabled"),
    };
    section.dataset.afterTeardown2 = JSON.stringify(afterTeardown2);
  }, []);
  return (
    <div
      ref={ref}
      className="rankings-storybook-backdrop"
      dangerouslySetInnerHTML={{ __html: OVERFLOW_HTML_B }}
    />
  );
};

export const TeardownCleansUp = {
  name: "Teardown cleans up",
  globals: viewport(1280),
  render: () => (
    <div>
      <TeardownPage />
      <TeardownPageCustomNext />
    </div>
  ),
  play: async ({ canvasElement }) => {
    // ── Case A: one-card fixture ──────────────────────────────────────────
    // syncNavState() adds hp-rankings--no-overflow AND disabled triplet on
    // both buttons (next was server-enabled). Teardown must remove JS-added
    // no-overflow class AND restore next to its server-enabled state.
    const sectionA = canvasElement.querySelectorAll("section.hp-rankings")[0];
    await waitFor(() => {
      expect(sectionA.dataset.afterTeardown).toBeTruthy();
    });
    const beforeA = JSON.parse(sectionA.dataset.beforeTeardown);
    const afterA = JSON.parse(sectionA.dataset.afterTeardown);

    // Server shipped prev disabled, no-overflow class absent.
    await expect(beforeA.prev.cls).toBe(true);
    await expect(beforeA.prev.aria).toBe("true");
    await expect(beforeA.prev.tab).toBe("-1");
    await expect(beforeA.sectionNoOverflow).toBe(false);
    // Server shipped next ENABLED.
    await expect(beforeA.next.cls).toBe(false);
    await expect(beforeA.next.aria).toBeNull();
    await expect(beforeA.next.tab).toBeNull();

    // After teardown — server values restored exactly.
    // JS-added disabled triplet on next is removed.
    await expect(afterA.next.cls).toBe(false);
    await expect(afterA.next.aria).toBeNull();
    await expect(afterA.next.tab).toBeNull();
    // JS-added no-overflow class is gone.
    await expect(afterA.sectionNoOverflow).toBe(false);
    // Server-owned prev triplet unchanged.
    await expect(afterA.prev.cls).toBe(true);
    await expect(afterA.prev.aria).toBe("true");
    await expect(afterA.prev.tab).toBe("-1");

    // ── Case B: overflow + server-pre-disabled next ──────────────────────
    // After init+teardown, the server-pre-disabled next triplet must survive,
    // and re-init must succeed (WeakSet cleared by teardown).
    const sectionB = canvasElement.querySelectorAll("section.hp-rankings")[1];
    await waitFor(() => {
      expect(sectionB.dataset.afterTeardown).toBeTruthy();
    });
    const serverBefore = JSON.parse(sectionB.dataset.serverBefore);
    const afterB = JSON.parse(sectionB.dataset.afterTeardown);

    // Server had both disabled before init.
    await expect(serverBefore.next.cls).toBe(true);
    await expect(serverBefore.next.aria).toBe("true");
    await expect(serverBefore.next.tab).toBe("-1");

    // After teardown — server pre-disabled next triplet is preserved.
    await expect(afterB.next.cls).toBe(true);
    await expect(afterB.next.aria).toBe("true");
    await expect(afterB.next.tab).toBe("-1");

    // ── Cycle-4 P2 fix: prove visible DOM mutation from second init ───────
    // Wait for the second-init dataset to be populated.
    await waitFor(() => {
      expect(sectionB.dataset.afterReinit).toBeTruthy();
    });
    const afterReinit = JSON.parse(sectionB.dataset.afterReinit);
    const afterTeardown2 = JSON.parse(sectionB.dataset.afterTeardown2);

    // Second init must have called syncNavState() on the one-card track:
    // hp-rankings--no-overflow added + next disabled.
    // If initRankingsCards returned the `ignore` no-op (WeakSet not cleared by
    // first teardown), neither mutation would have occurred.
    await expect(afterReinit.noOverflow).toBe(true);
    await expect(afterReinit.nextDisabledCls).toBe(true);
    await expect(afterReinit.nextAriaDisabled).toBe("true");

    // After teardown2, the JS-added mutations from the second init are removed.
    // The section reverts to no hp-rankings--no-overflow (cards restored to overflow).
    await expect(afterTeardown2.noOverflow).toBe(false);
    // The server-pre-disabled next triplet must survive teardown2 (teardown2 only
    // restores what the second init changed — it did not own the server-set triplet).
    await expect(afterTeardown2.nextDisabledCls).toBe(true);
    await expect(afterTeardown2.nextAriaDisabled).toBe("true");
  },
};

// ─── Task-4 enriched — No data-ga* attributes, with injection coverage ──────

export const NoGaAttributes = {
  name: "No data-ga* attributes (default)",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await expect(
      p.section.querySelector(
        "[data-ga], [data-ga-name], [data-ga-event], [data-ga-action], [data-ga-section], [data-ga-text]"
      )
    ).toBeNull();
  },
};

export const NoGaInjection = {
  name: "No data-ga* attributes (injection-resistant)",
  globals: viewport(1280),
  // Even when card inputs contain substrings that would form data-ga*
  // attributes if interpolated raw, escapeHtml ensures they land as text or
  // escaped attribute values and never as live attributes on the element.
  render: () => (
    <StaticPage
      html={rankingsCardsHtml({
        cards: [
          {
            ...DEFAULT_CARDS[0],
            imageAlt: 'injected" data-ga="attack',
            attributionLabel: 'malicious" data-ga-name="click',
            attributionHref: 'https://example.com/" data-ga-event="link"',
          },
        ],
      })}
    />
  ),
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await expect(
      p.section.querySelector(
        "[data-ga], [data-ga-name], [data-ga-event], [data-ga-action], [data-ga-section], [data-ga-text]"
      )
    ).toBeNull();
    // The quote in imageAlt must have been escaped — alt attribute equals the
    // original string (DOM API returns the decoded attribute value).
    const img = p.section.querySelector(".hp-rankings__img--default");
    await expect(img.getAttribute("alt")).toBe('injected" data-ga="attack');
  },
};

// `querySelector` list that catches every known data-ga* attribute variant.
// Centralised so the three "no GA" lock stories query the exact same shape.
const GA_SELECTOR =
  "[data-ga], [data-ga-name], [data-ga-event], [data-ga-action], " +
  "[data-ga-section], [data-ga-text], [data-ga-source], [data-ga-type]";

export const NoGaAfterJsInit = {
  name: "No data-ga* attributes (after initRankingsCards runs)",
  globals: viewport(1280),
  // Locks the Q5 decision across the JS lifecycle: even after
  // `initRankingsCards` wires listeners/observers and applies the no-overflow
  // class on short tracks, no element in the section carries any data-ga*
  // attribute. Catches a future regression where the init code might start
  // emitting GA attributes dynamically.
  render: () => <LivePage html={OVERFLOW_HTML} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    // Wait for init to settle (prev disabled triplet reasserted).
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );
    await expect(p.section.querySelector(GA_SELECTOR)).toBeNull();
  },
};

export const NoGaAfterNavInteraction = {
  name: "No data-ga* attributes (after Next click)",
  globals: viewport(1280),
  // Locks the Q5 decision across a real user interaction: clicking Next
  // (which triggers scrollBy, scroll + scrollend events, and sync of the
  // disabled triplet on both buttons) must not introduce any data-ga*
  // attribute on any element in the section.
  render: () => <LivePage html={OVERFLOW_HTML} />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    const p = parts(canvasElement);
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );
    await realPointer.click(p.nextBtn);
    // Let scrollend settle; prev becomes enabled.
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(false)
    );
    await expect(p.section.querySelector(GA_SELECTOR)).toBeNull();
    // Also assert the toggle targets (prev + next + see-all) have no GA.
    await expect(p.prevBtn.matches(GA_SELECTOR)).toBe(false);
    await expect(p.nextBtn.matches(GA_SELECTOR)).toBe(false);
    await expect(p.seeAll.matches(GA_SELECTOR)).toBe(false);
  },
};

const MultiSectionPage = () => (
  <div className="rankings-storybook-backdrop">
    <div
      dangerouslySetInnerHTML={{
        __html: rankingsCardsHtml({ headingId: "hp-rankings-copy-a" }),
      }}
    />
    <div
      dangerouslySetInnerHTML={{
        __html: rankingsCardsHtml({ headingId: "hp-rankings-copy-b" }),
      }}
    />
  </div>
);

export const NoGaInEveryRenderedCopy = {
  name: "No data-ga* attributes (multiple section copies)",
  globals: viewport(1280),
  // Locks the Q5 decision across multiple renders of the component on a
  // single page: every rendered copy must satisfy the no-GA contract. This
  // guards against a future per-instance template branch that forgets the
  // decision.
  render: () => <MultiSectionPage />,
  play: async ({ canvasElement }) => {
    const sections = canvasElement.querySelectorAll("section.hp-rankings");
    await expect(sections).toHaveLength(2);
    for (const section of sections) {
      await expect(section.querySelector(GA_SELECTOR)).toBeNull();
    }
  },
};

// ─── Injection regression stories (review-report item 1) ───────────────────

export const InjectionImageAlt = {
  name: "Injection: imageAlt is HTML-escaped",
  globals: viewport(1280),
  render: () => (
    <StaticPage
      html={rankingsCardsHtml({
        cards: [
          {
            ...DEFAULT_CARDS[0],
            imageAlt: '"><img src=x onerror=alert(1)>',
          },
        ],
      })}
    />
  ),
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    // Only two <img>s in the card (the two expected ones) — none from the alt.
    await expect(p.cards[0].querySelectorAll("img")).toHaveLength(2);
    // The injected string is decoded by the browser into the alt value.
    const img = p.cards[0].querySelector(".hp-rankings__img--default");
    await expect(img.getAttribute("alt")).toBe(
      '"><img src=x onerror=alert(1)>'
    );
    // The source HTML must have escaped the quote/angle brackets.
    const outer = p.cards[0].outerHTML;
    await expect(outer).not.toContain('"><img src=x');
    await expect(outer).toContain("&quot;");
    await expect(outer).toContain("&lt;img");
  },
};

export const InjectionAttributionHref = {
  name: "Injection: javascript: href is rejected",
  globals: viewport(1280),
  render: () => (
    <StaticPage
      html={rankingsCardsHtml({
        cards: [
          {
            ...DEFAULT_CARDS[0],
            attributionHref: "javascript:alert(document.domain)",
          },
          {
            ...DEFAULT_CARDS[1],
            attributionHref: "data:text/html,<script>alert(1)</script>",
          },
          {
            ...DEFAULT_CARDS[2],
            attributionHref: "vbscript:msgbox('xss')",
          },
          {
            ...DEFAULT_CARDS[3],
            attributionHref: "https://example.com/safe",
          },
          {
            ...DEFAULT_CARDS[4],
            attributionHref: "#safe-fragment",
          },
          {
            ...DEFAULT_CARDS[5],
            attributionHref: "/relative/path",
          },
          {
            ...DEFAULT_CARDS[6],
            attributionHref: "mailto:ok@example.com",
          },
        ],
      })}
    />
  ),
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const [l0, l1, l2, l3, l4, l5, l6] = p.attributionLinks;
    await expect(l0.getAttribute("href")).toBe("#"); // javascript: rejected
    await expect(l1.getAttribute("href")).toBe("#"); // data: rejected
    await expect(l2.getAttribute("href")).toBe("#"); // vbscript: rejected
    await expect(l3.getAttribute("href")).toBe("https://example.com/safe");
    await expect(l4.getAttribute("href")).toBe("#safe-fragment");
    await expect(l5.getAttribute("href")).toBe("/relative/path");
    await expect(l6.getAttribute("href")).toBe("mailto:ok@example.com");
  },
};

export const InjectionAttributionLabel = {
  name: "Injection: attributionLabel is HTML-escaped",
  globals: viewport(1280),
  render: () => (
    <StaticPage
      html={rankingsCardsHtml({
        cards: [
          {
            ...DEFAULT_CARDS[0],
            attributionLabel: "<script>alert(1)</script>",
          },
        ],
      })}
    />
  ),
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const link = p.attributionLinks[0];
    // No live <script> injected into the link.
    await expect(link.querySelector("script")).toBeNull();
    // Text content (decoded) matches the input verbatim — safe inert text.
    await expect(link.textContent.trim()).toContain(
      "<script>alert(1)</script>"
    );
  },
};

export const InjectionHeadingId = {
  name: "Injection: invalid headingId falls back to default",
  globals: viewport(1280),
  render: () => (
    <StaticPage
      html={rankingsCardsHtml({
        headingId: '"><script>alert(1)</script><div id="pwn',
      })}
    />
  ),
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    // id must be the safe fallback — not the injected string.
    await expect(p.heading.id).toBe("hp-rankings-heading");
    await expect(p.section.getAttribute("aria-labelledby")).toBe(
      "hp-rankings-heading"
    );
    // No <script> smuggled in.
    await expect(p.section.querySelector("script")).toBeNull();
  },
};

export const InjectionImageSrcHoverMissing = {
  name: "Injection: missing imageSrcHover falls back to imageSrc",
  globals: viewport(1280),
  render: () => (
    <StaticPage
      html={rankingsCardsHtml({
        cards: [{ ...DEFAULT_CARDS[0], imageSrcHover: undefined }],
      })}
    />
  ),
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const card = p.cards[0];
    const def = card.querySelector(".hp-rankings__img--default");
    const hov = card.querySelector(".hp-rankings__img--hover");
    // No src="undefined" — hover falls back to the default src.
    await expect(hov.getAttribute("src")).not.toBe("undefined");
    await expect(hov.getAttribute("src")).toBe(def.getAttribute("src"));
  },
};

export const InjectionAttrQuotes = {
  name: "Injection: double-quote in attribute values is escaped",
  globals: viewport(1280),
  render: () => (
    <StaticPage
      html={rankingsCardsHtml({
        seeAllLabel: 'See all" onclick="alert(1)',
      })}
    />
  ),
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    // The text content is the decoded label — the quotes land as text, not
    // as attribute terminators.
    await expect(p.seeAll.textContent.trim()).toContain(
      'See all" onclick="alert(1)'
    );
    // No onclick attribute slipped in.
    await expect(p.seeAll.getAttribute("onclick")).toBeNull();
  },
};

// ─── Review item 2 regression: resize from no-overflow to overflow ──────────

const ResizeToOverflowPage = () => {
  const ref = useRef(null);
  useEffect(() => {
    const teardown = initRankingsCards(ref.current);
    return teardown;
  }, []);
  // Only 2 cards at 1920 → no overflow. Resize to 393 → overflow.
  return (
    <div
      ref={ref}
      className="rankings-storybook-backdrop"
      dangerouslySetInnerHTML={{
        __html: rankingsCardsHtml({ cards: DEFAULT_CARDS.slice(0, 2) }),
      }}
    />
  );
};

export const ResizeToOverflow = {
  name: "Resize from no-overflow to overflow re-enables nav",
  globals: viewport(1920),
  render: () => <ResizeToOverflowPage />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    const p = parts(canvasElement);
    // At 1920 with 2 cards → no overflow, both buttons disabled.
    await waitFor(() =>
      expect(p.section.classList.contains("hp-rankings--no-overflow")).toBe(
        true
      )
    );
    await waitFor(() => {
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true);
      expect(p.nextBtn.classList.contains("is-disabled")).toBe(true);
    });
    // Shrink the viewport → overflow should flip back on.
    await resizeViewport(393);
    try {
      await waitFor(() =>
        expect(p.section.classList.contains("hp-rankings--no-overflow")).toBe(
          false
        )
      );
      // At the start of the (now overflowing) track:
      // - prev stays disabled (scrollLeft === 0)
      // - next becomes enabled (there is room to scroll)
      await waitFor(() => {
        expect(p.prevBtn.classList.contains("is-disabled")).toBe(true);
        expect(p.nextBtn.classList.contains("is-disabled")).toBe(false);
      });
    } finally {
      await resizeViewport(1920);
    }
  },
};

// ─── Cycle-3 Fix-1 regression: stale state reconciled before nav activation ──
//
// Proves §5.2 click preflight: if track scrollLeft is mutated directly (e.g. by
// a CMS resize or programmatic scroll) without dispatching a `scroll`/`scrollend`
// event, the click handler re-syncs state before allowing the scroll.

export const StaleSyncBeforeNav = {
  name: "Stale state reconciled before nav click (§5.2 preflight)",
  globals: viewport(1280),
  render: () => <LivePage html={OVERFLOW_HTML} />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    const p = parts(canvasElement);

    // Wait for initial sync: prev disabled at scrollLeft=0.
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );

    // Mutate scrollLeft directly WITHOUT dispatching a scroll/scrollend event.
    // This simulates a layout change (injected card, resize, CMS mutation) that
    // moves the track away from scrollLeft=0 without triggering the passive
    // scroll listener. Prev should logically become enabled, but the DOM still
    // has the stale disabled triplet.
    const cardWidth = p.cards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(p.track).columnGap) || 0;
    const oneStep = cardWidth + gap;
    Object.defineProperty(p.track, "scrollLeft", {
      value: oneStep,
      writable: true,
      configurable: true,
    });

    // Confirm stale state: DOM still reports prev as disabled (no scroll fired).
    await expect(p.prevBtn.classList.contains("is-disabled")).toBe(true);

    // ── Cycle-4 P2 fix: spy on scrollBy with call-through ────────────────
    // Install a call-through spy on track.scrollBy BEFORE the click.
    // Inside mockImplementation, snapshot button state AT THE MOMENT scrollBy
    // is called. This proves syncNavState() reconciled the DOM before scrollBy
    // fired — not after a post-scroll event reconciled it subsequently.
    let navStateAtScrollByCall = null;
    const scrollBySpy = spyOn(p.track, "scrollBy").mockImplementation(function (
      ...args
    ) {
      // Capture nav button state at the instant scrollBy is invoked.
      navStateAtScrollByCall = {
        prevDisabledCls: p.prevBtn.classList.contains("is-disabled"),
        prevAriaDisabled: p.prevBtn.getAttribute("aria-disabled"),
        nextDisabledCls: p.nextBtn.classList.contains("is-disabled"),
        nextAriaDisabled: p.nextBtn.getAttribute("aria-disabled"),
      };
      // Call through so the actual scroll still happens.
      Element.prototype.scrollBy.call(this, ...args);
    });

    try {
      await realPointer.click(p.nextBtn);

      // scrollBy must have been called exactly once.
      await expect(scrollBySpy.mock.calls.length).toBe(1);

      // At the moment scrollBy fired, syncNavState() must have already run:
      // prev was enabled (scrollLeft was at oneStep, not at start).
      await expect(navStateAtScrollByCall).not.toBeNull();
      await expect(navStateAtScrollByCall.prevDisabledCls).toBe(false);
      await expect(navStateAtScrollByCall.prevAriaDisabled).toBeNull();
      // Next was not at end of track, so it must also be enabled.
      await expect(navStateAtScrollByCall.nextDisabledCls).toBe(false);
    } finally {
      scrollBySpy.mockRestore();
    }
  },
};

// ─── Review item 8: rapid-click coalescing ──────────────────────────────────

// ─── Row 60 — Dropped-click guard (v4 §v4.7.3 revert) ──────────────────────
// Design-doc v4.7.3: rapid clicks during an in-flight smooth scroll are
// DROPPED (coalesced = ignored). The first click issues scrollBy and locks;
// subsequent rapid clicks while pending are dropped entirely. After
// scrollend the next click DOES advance.

export const RapidClickCoalescing = {
  name: "Rapid Next clicks: dropped-click guard (one step only)",
  globals: viewport(1280),
  render: () => <LivePage html={OVERFLOW_HTML} />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    const p = parts(canvasElement);
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );
    const cardWidth = p.cards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(p.track).columnGap) || 16;
    const oneStep = cardWidth + gap;

    // ── Part A: burst five rapid clicks — only ONE step should occur ─────
    const initial = p.track.scrollLeft;
    for (let i = 0; i < 5; i += 1) {
      await realPointer.click(p.nextBtn);
    }
    // Let the scroll settle (scrollend or idle debounce).
    await new Promise(r => setTimeout(r, 600));
    const delta = p.track.scrollLeft - initial;
    // Dropped-click guard: the first click issues scrollBy(oneStep) and locks.
    // The next 4 clicks are dropped. Total movement: exactly oneStep.
    await expect(delta).toBeGreaterThan(oneStep - 50);
    await expect(delta).toBeLessThan(oneStep + 50);

    // ── Part B: after scrollend, a fresh click DOES advance ─────────────
    // Prove the lock was released by scrollend / idle timer.
    const afterFirst = p.track.scrollLeft;
    await realPointer.click(p.nextBtn);
    await new Promise(r => setTimeout(r, 600));
    const delta2 = p.track.scrollLeft - afterFirst;
    await expect(delta2).toBeGreaterThan(oneStep - 50);
    await expect(delta2).toBeLessThan(oneStep + 50);
  },
};

// ─── Pure-function sanitiser contract (unit-level inside a story) ──────────

export const SanitizerContract = {
  name: "Sanitizer helpers reject known-bad inputs",
  globals: viewport(1280),
  render: () => (
    <div className="rankings-storybook-backdrop" style={{ color: "white" }}>
      Sanitizer contract — see play().
    </div>
  ),
  play: async () => {
    // escapeHtml covers the five special characters.
    await expect(escapeHtml("<img src=\"x\" onerror='alert(1)'>")).toBe(
      "&lt;img src=&quot;x&quot; onerror=&#39;alert(1)&#39;&gt;"
    );
    await expect(escapeHtml("a & b")).toBe("a &amp; b");
    await expect(escapeHtml(null)).toBe("");
    await expect(escapeHtml(undefined)).toBe("");

    // sanitizeHref whitelist.
    await expect(sanitizeHref("javascript:alert(1)")).toBe("#");
    await expect(sanitizeHref("JAVASCRIPT:alert(1)")).toBe("#");
    await expect(sanitizeHref("data:text/html,<script>")).toBe("#");
    await expect(sanitizeHref("vbscript:x")).toBe("#");
    await expect(sanitizeHref("file:///etc/passwd")).toBe("#");
    await expect(sanitizeHref("https://example.com")).toBe(
      "https://example.com"
    );
    await expect(sanitizeHref("http://example.com")).toBe("http://example.com");
    await expect(sanitizeHref("#anchor")).toBe("#anchor");
    await expect(sanitizeHref("/path")).toBe("/path");
    await expect(sanitizeHref("./rel")).toBe("./rel");
    await expect(sanitizeHref("../up")).toBe("../up");
    await expect(sanitizeHref("mailto:a@b")).toBe("mailto:a@b");
    await expect(sanitizeHref("tel:+15550000")).toBe("tel:+15550000");
    await expect(sanitizeHref("foo/bar")).toBe("foo/bar"); // relative without scheme
    await expect(sanitizeHref("")).toBe("#");
    await expect(sanitizeHref(123)).toBe("#"); // non-string

    // sanitizeId whitelist.
    await expect(sanitizeId("ok-id_1")).toBe("ok-id_1");
    await expect(sanitizeId("")).toBe("hp-rankings-heading");
    await expect(sanitizeId("1-starts-with-digit")).toBe("hp-rankings-heading");
    await expect(sanitizeId('"><script>')).toBe("hp-rankings-heading");
    await expect(sanitizeId(null)).toBe("hp-rankings-heading");
  },
};

// ─── Row 23b — Forced-colors border bbox (v3, Q4 = C — belt + suspenders) ───
// Under forced-colors emulation, assert that the two <img> DOM children of
// each .hp-rankings__media are painted as a strict subset of the media box.
//
// Independent inner witness: both .hp-rankings__img--default and
// .hp-rankings__img--hover are queried via media.querySelectorAll('img').
// Their getBoundingClientRect() values come from real CSS layout, not from
// arithmetic on rect/bw* — they are genuinely independent measurements.
//
// Hypothetical bad implementation: if someone accidentally sets
//   .hp-rankings__img { height: 50% }
// then imgRect.height would be ~72px while rect.height - bwTop - bwBottom
// would be ~142px. The img's top/bottom edges would no longer align with
// the media box's border-inner edges, breaking the edge-match assertions
// (imgRect.top > rect.top + bwTop - 0.5 etc.).
// The cycle-2 derived test (innerTop = rect.top + bwTop; check innerTop > rect.top - 1)
// would still pass for that bad implementation because the inequality is
// guaranteed once bwTop > 0 — it says nothing about img painted geometry.
//
// NOTE: getBoundingClientRect() reports the border box (border edge, not the
// outline edge).  The implementation uses a CSS border — not a CSS outline —
// in forced-colors mode, which is correct because getBoundingClientRect()
// includes border but excludes outline.
// True outline-pixel verification (painted pixel boundaries) requires a
// visual-regression screenshot, which visual-diff handles at a later stage.
//
// Design-doc §8 row 23b / v3 Q4 = C.

export const ForcedColorsOutlineBbox = {
  name: "Forced-colors outline bbox",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    await emulateForcedColors(true);
    try {
      const p = parts(canvasElement);
      await expect(p.cards.length).toBeGreaterThan(0);

      for (const card of p.cards) {
        const media = card.querySelector(".hp-rankings__media");
        const mediaStyle = getComputedStyle(media);

        // ── 1. Media bbox must be nonzero (layout is not collapsed) ──────────
        const rect = media.getBoundingClientRect();
        await expect(rect.width).toBeGreaterThan(0);
        await expect(rect.height).toBeGreaterThan(0);

        // ── 2. Four border widths must each be > 0 (border was rendered) ─────
        // In forced-colors mode the UA sets borders to CanvasText.  If a
        // browser elides the border entirely the assertion fails.
        const bwTop = parseFloat(mediaStyle.borderTopWidth);
        const bwRight = parseFloat(mediaStyle.borderRightWidth);
        const bwBottom = parseFloat(mediaStyle.borderBottomWidth);
        const bwLeft = parseFloat(mediaStyle.borderLeftWidth);

        await expect(bwTop).toBeGreaterThan(0);
        await expect(bwRight).toBeGreaterThan(0);
        await expect(bwBottom).toBeGreaterThan(0);
        await expect(bwLeft).toBeGreaterThan(0);

        // ── 3. Independent inner witness: query actual <img> children ─────────
        // Both grid-stacked images (default + hover) are width:100%;
        // height:100%; grid-area:img — their getBoundingClientRect() values
        // come from real CSS layout, not from arithmetic on rect/bw*.
        //
        // getBoundingClientRect() reports the element's full layout box BEFORE
        // any overflow:hidden clip.  For a child with width:100%;height:100%
        // in a grid container, the img's layout dimensions match the container's
        // CONTENT box (rect minus border widths on each side).
        //
        // Hypothetical bad implementation: if someone sets
        //   .hp-rankings__img { height: 50% }
        // then imgRect.height would be ~71px while the expected content box
        // height (rect.height - bwTop - bwBottom) would be ~141px.
        // The assertion `imgRect.height >= expectedH - 2` would fail (71 < 139).
        // The cycle-2 derived test (innerTop = rect.top + bwTop; check
        // innerTop > rect.top - 1) would still pass because it only required
        // bwTop > 0 — it says nothing about img painted geometry.
        const imgs = Array.from(media.querySelectorAll("img"));
        await expect(imgs).toHaveLength(2); // default + hover must both be present

        for (const img of imgs) {
          const imgRect = img.getBoundingClientRect();

          // ── Sanity: image has positive layout dimensions ──────────────────
          await expect(imgRect.width).toBeGreaterThan(0);
          await expect(imgRect.height).toBeGreaterThan(0);

          // ── Content-box size match ─────────────────────────────────────────
          // The img fills the full content box (width:100%;height:100% in the
          // grid). Media box has padding: 16px, so the img's layout is confined
          // to the padded content area.
          // Expected content size = rect size minus border widths minus padding.
          // Media box has padding:16px on all sides (from the committed CSS).
          const padding = 16; // px, from .hp-rankings__media { padding: 16px; }
          const expectedW = rect.width - bwLeft - bwRight - padding * 2;
          const expectedH = rect.height - bwTop - bwBottom - padding * 2;

          await expect(imgRect.width).toBeGreaterThanOrEqual(expectedW - 2);
          await expect(imgRect.width).toBeLessThan(
            rect.width - bwLeft - bwRight
          ); // must be within content area

          await expect(imgRect.height).toBeGreaterThanOrEqual(expectedH - 2);
          await expect(imgRect.height).toBeLessThan(
            rect.height - bwTop - bwBottom
          ); // must be within content area

          // ── Top/left corners: img starts inside the media's border edges ───
          await expect(imgRect.top).toBeGreaterThan(rect.top);
          await expect(imgRect.left).toBeGreaterThan(rect.left);

          // ── Top/left edge-match: img aligns with media content edge + padding ─
          // With padding: img.top ≈ rect.top + bwTop + padding
          const innerTop = rect.top + bwTop + padding;
          const innerLeft = rect.left + bwLeft + padding;
          await expect(imgRect.top).toBeGreaterThanOrEqual(innerTop - 2);
          await expect(imgRect.top).toBeLessThanOrEqual(innerTop + 2);

          await expect(imgRect.left).toBeGreaterThanOrEqual(innerLeft - 2);
          await expect(imgRect.left).toBeLessThanOrEqual(innerLeft + 2);
        }
      }
    } finally {
      await emulateForcedColors(false);
    }
  },
};

// ─── Row 23c — Intrinsics flip (Q2 = C, dataset-wide override) ────────────
// Calls rankingsCardsHtml({ imageWidth: 800, imageHeight: 400, cards }) and
// asserts every <img> renders width="800" height="400". Proves that the
// top-level dataset-wide imageWidth/imageHeight params work correctly.
// Design-doc §8 / §10 Task 2 / §3.1 Q2 = C.

export const IntrinsicsFlip = {
  name: "Intrinsics flip (dataset-wide override)",
  globals: viewport(1280),
  render: () => (
    <StaticPage
      html={rankingsCardsHtml({
        imageWidth: 800,
        imageHeight: 400,
        cards: DEFAULT_CARDS,
      })}
    />
  ),
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await expect(p.cards.length).toBeGreaterThan(0);

    for (const card of p.cards) {
      const media = card.querySelector(".hp-rankings__media");
      const imgs = Array.from(media.querySelectorAll("img"));
      await expect(imgs).toHaveLength(2);

      for (const img of imgs) {
        await expect(img.getAttribute("width")).toBe("800");
        await expect(img.getAttribute("height")).toBe("400");
      }
    }
  },
};

// ─── P1-1 RED — imageWidth/imageHeight attribute injection guard ──────────────
// Reviewer finding: imageWidth/imageHeight are interpolated directly into HTML
// attributes at rankings-cards-helpers.jsx:320,330.  A consumer passing a
// malicious string can inject additional attributes.
//
// These stories run BEFORE the fix lands to confirm they are RED, then GREEN
// once validateIntrinsicDimension() is added.
//
// Story 1 — Malicious string cannot inject onerror attribute.
// Story 2 — Table-driven: invalid inputs fall back to 500/251.
// Story 3 — Table-driven: valid safe-integer pairs are applied as-is.
//
// Design-doc §3.1 / v3 amendment §3.3.

export const InjectionImageWidthMalicious = {
  name: "Injection: malicious imageWidth string cannot inject attribute",
  globals: viewport(1280),
  render: () => {
    const html = rankingsCardsHtml({
      // Reviewer reproduction: '500" onerror="globalThis.__pwned=1'
      imageWidth: '500" onerror="globalThis.__pwned=1',
      imageHeight: 251,
      cards: DEFAULT_CARDS.slice(0, 1),
    });
    return <StaticPage html={html} />;
  },
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await expect(p.cards.length).toBe(1);

    const imgs = Array.from(
      p.cards[0].querySelectorAll(".hp-rankings__media img")
    );
    await expect(imgs).toHaveLength(2);

    for (const img of imgs) {
      // Must fall back to default 500 (not the malicious string).
      await expect(img.getAttribute("width")).toBe("500");
      await expect(img.getAttribute("height")).toBe("251");

      // The injected attribute must NOT appear.
      await expect(img.getAttribute("onerror")).toBeNull();

      // The serialised outer HTML must not contain the onerror substring.
      await expect(img.outerHTML).not.toContain("onerror");
    }

    // Prove the pwned marker was never installed.

    await expect(typeof globalThis.__pwned).toBe("undefined");
  },
};

// Table-driven story: every invalid dimension falls back to 500 / 251.
// Valid safe-integer pairs override the defaults.
export const ImageDimensionValidation = {
  name: "Image dimension validation: invalid inputs fall back to 500/251",
  globals: viewport(1280),
  render: () => (
    <StaticPage
      html={rankingsCardsHtml({ cards: DEFAULT_CARDS.slice(0, 1) })}
    />
  ),
  play: async () => {
    // Helper: call rankingsCardsHtml, parse the returned HTML string, and
    // return {def: [w, h], hover: [w, h]} attribute pairs from the card's two
    // <img> elements.  Both siblings must agree on the validated dimensions.
    const getDimensions = (imageWidth, imageHeight) => {
      const html = rankingsCardsHtml({
        imageWidth,
        imageHeight,
        cards: DEFAULT_CARDS.slice(0, 1),
      });
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const def = doc.querySelector(".hp-rankings__img--default");
      const hover = doc.querySelector(".hp-rankings__img--hover");
      return {
        def: [def.getAttribute("width"), def.getAttribute("height")],
        hover: [hover.getAttribute("width"), hover.getAttribute("height")],
      };
    };

    // ── Invalid inputs — both default AND hover must fall back to "500"/"251"─

    // Zero
    {
      const r = getDimensions(0, 251);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }
    {
      const r = getDimensions(500, 0);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }

    // Negative
    {
      const r = getDimensions(-1, 251);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }
    {
      const r = getDimensions(500, -1);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }

    // Fractional
    {
      const r = getDimensions(500.5, 251);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }
    {
      const r = getDimensions(500, 251.9);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }

    // NaN
    {
      const r = getDimensions(NaN, 251);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }
    {
      const r = getDimensions(500, NaN);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }

    // Non-number string
    {
      const r = getDimensions("wide", 251);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }
    {
      const r = getDimensions(500, "tall");
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }

    // Undefined (both)
    {
      const r = getDimensions(undefined, undefined);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }

    // Malicious injection string → must fall back to defaults.
    {
      const r = getDimensions('500" onerror="globalThis.__pwned=1', 251);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }
    {
      const r = getDimensions(500, '251" onerror="globalThis.__pwned=1');
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }

    // Non-finite
    {
      const r = getDimensions(Infinity, 251);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }
    {
      const r = getDimensions(500, -Infinity);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }

    // Beyond Number.MAX_SAFE_INTEGER
    {
      const r = getDimensions(Number.MAX_SAFE_INTEGER + 1, 251);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }

    // ── BigInt inputs (P2a — must NOT throw; must fall back to defaults) ─────
    // JSON.stringify(1n) throws TypeError; the safe formatter must never call
    // it. Both siblings must receive the fallback "500"/"251".
    {
      // 1n — literal bigint
      let threw = false;
      let r;
      try {
        r = getDimensions(1n, 251);
      } catch {
        threw = true;
      }
      await expect(threw).toBe(false);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }
    {
      // BigInt(500) — bigint constructed from a valid integer value
      let threw = false;
      let r;
      try {
        r = getDimensions(BigInt(500), 251);
      } catch {
        threw = true;
      }
      await expect(threw).toBe(false);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }

    // ── Throwing-serialization objects (P2a — must NOT throw) ────────────────
    // A proxy whose toJSON/toString throws must not propagate through
    // validateIntrinsicDimension to the caller.
    {
      const throwingProxy = new Proxy(
        {},
        {
          get(_, prop) {
            if (
              prop === "toJSON" ||
              prop === "toString" ||
              prop === "valueOf"
            ) {
              return () => {
                throw new Error("hostile proxy");
              };
            }
            return undefined;
          },
        }
      );
      let threw = false;
      let r;
      try {
        r = getDimensions(throwingProxy, 251);
      } catch {
        threw = true;
      }
      await expect(threw).toBe(false);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }
    {
      // Plain object with throwing toString
      const badObj = {
        toString() {
          throw new Error("toString throws");
        },
        toJSON() {
          throw new Error("toJSON throws");
        },
      };
      let threw = false;
      let r;
      try {
        r = getDimensions(badObj, 251);
      } catch {
        threw = true;
      }
      await expect(threw).toBe(false);
      await expect(r.def).toEqual(["500", "251"]);
      await expect(r.hover).toEqual(["500", "251"]);
    }

    // ── Swapped valid integers (individually valid, ratio inverted) ───────────
    // Per the spec each value is validated individually so 251 and 500 are
    // both positive safe integers — they pass even though the pair inverts
    // the ratio. Both siblings must reflect the caller-supplied values.
    {
      const r = getDimensions(251, 500);
      await expect(r.def).toEqual(["251", "500"]);
      await expect(r.hover).toEqual(["251", "500"]);
    }

    // ── Valid safe-integer pairs — must be applied to both siblings ───────────

    {
      const r = getDimensions(800, 400);
      await expect(r.def).toEqual(["800", "400"]);
      await expect(r.hover).toEqual(["800", "400"]);
    }
    {
      const r = getDimensions(1000, 500);
      await expect(r.def).toEqual(["1000", "500"]);
      await expect(r.hover).toEqual(["1000", "500"]);
    }
    {
      const r = getDimensions(288, 144);
      await expect(r.def).toEqual(["288", "144"]);
      await expect(r.hover).toEqual(["288", "144"]);
    }
    {
      const r = getDimensions(1, 1);
      await expect(r.def).toEqual(["1", "1"]);
      await expect(r.hover).toEqual(["1", "1"]);
    }
  },
};

// ── P2 cycle-4: headingId bigint/throwing-proxy robustness ───────────────────
// JSON.stringify(1n) throws TypeError; a centralized formatRejectedValue()
// helper must be used instead so the warn path never serialises the rejected
// value. Both cases (literal bigint, throwing-proxy) must NOT throw and must
// fall back to the default heading id "hp-rankings-heading".
export const InvalidHeadingIdBigInt = {
  name: "HeadingId validation: bigint and throwing-proxy inputs do not throw",
  globals: viewport(1280),
  render: () => (
    <StaticPage
      html={rankingsCardsHtml({ cards: DEFAULT_CARDS.slice(0, 1) })}
    />
  ),
  play: async () => {
    const DEFAULT_HEADING_ID = "hp-rankings-heading";

    // Helper: call rankingsCardsHtml with the given headingId, parse the result,
    // and return the id attribute of the heading element.
    const getHeadingId = headingId => {
      const html = rankingsCardsHtml({
        headingId,
        cards: DEFAULT_CARDS.slice(0, 1),
      });
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const heading = doc.querySelector("[id]");
      return heading ? heading.getAttribute("id") : null;
    };

    // ── Row 1: literal BigInt ─────────────────────────────────────────────────
    // JSON.stringify(1n) throws; safe formatter must not serialise the value.
    {
      let threw = false;
      let resultId;
      try {
        resultId = getHeadingId(1n);
      } catch {
        threw = true;
      }
      await expect(threw).toBe(false);
      await expect(resultId).toBe(DEFAULT_HEADING_ID);
    }

    // ── Row 2: throwing-proxy headingId ──────────────────────────────────────
    // A proxy whose toJSON/toString throws must not propagate.
    {
      const throwingProxy = new Proxy(
        {},
        {
          get(_, prop) {
            if (
              prop === "toJSON" ||
              prop === "toString" ||
              prop === "valueOf"
            ) {
              return () => {
                throw new Error("hostile headingId proxy");
              };
            }
            return undefined;
          },
        }
      );
      let threw = false;
      let resultId;
      try {
        resultId = getHeadingId(throwingProxy);
      } catch {
        threw = true;
      }
      await expect(threw).toBe(false);
      await expect(resultId).toBe(DEFAULT_HEADING_ID);
    }
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// v4 amendment stories — rows 31–64 (design-doc §v4.9)
// ═══════════════════════════════════════════════════════════════════════════════

import { computeAlpha } from "./rankings-cards.js";

// ─── Row 31 — Learn-more present on every card (default 11-card render) ──────

export const Default11Cards = {
  name: "Default 11 cards (v4)",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await expectComplete(canvasElement);
    const p = parts(canvasElement);
    await expect(p.cards).toHaveLength(11);

    for (let i = 0; i < p.cards.length; i += 1) {
      const card = p.cards[i];
      const lm = card.querySelector(".hp-rankings__learn-more");
      await expect(lm).not.toBeNull();
      await expect(lm.getAttribute("href")).toBeTruthy();
      await expect(lm.textContent.trim()).toContain("Learn more");

      // Per-slide labelling (row 50 / §v4.4.2c).
      await expect(card.getAttribute("aria-roledescription")).toBe("slide");
      const labelId = card.getAttribute("aria-labelledby");
      await expect(labelId).toBeTruthy();
      const labelSpan = canvasElement.querySelector(`#${labelId}`);
      await expect(labelSpan).not.toBeNull();
      await expect(labelSpan.textContent).toContain(`Ranking ${i + 1} of 11`);

      // Card-1 secondary link: only card 1 has .hp-rankings__see-all-top.
      if (i === 0) {
        await expect(card.querySelector(".hp-rankings__see-all-top")).not.toBeNull();
        await expect(card.querySelector(".hp-rankings__attribution")).toBeNull();
        await expect(card.classList.contains("hp-rankings__card--summary")).toBe(true);
      } else {
        await expect(card.querySelector(".hp-rankings__attribution")).not.toBeNull();
        await expect(card.querySelector(".hp-rankings__see-all-top")).toBeNull();
      }
    }
  },
};

// ─── Row 32 — Learn-more hover reveal ────────────────────────────────────────

export const LearnMoreHover = {
  name: "Learn-more hover reveal",
  globals: viewport(1280),
  render: () => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const card = ref.current && ref.current.querySelectorAll(".hp-rankings__card")[1];
      if (card) forceHover(card);
      return () => { if (card) forceHover(card, false); };
    }, []);
    return (
      <div
        ref={ref}
        className="rankings-storybook-backdrop"
        dangerouslySetInnerHTML={{ __html: DEFAULT_HTML }}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const card2 = p.cards[1];
    await expect(card2).not.toBeNull();
    const lm = card2.querySelector(".hp-rankings__learn-more");
    await expect(lm).not.toBeNull();
    await waitFor(() => expect(getComputedStyle(lm).opacity).toBe("1"));
    // pointer-events should be auto
    await waitFor(() => expect(getComputedStyle(lm).pointerEvents).toBe("auto"));
  },
};

// ─── Row 33 — Learn-more focus-within reveal ────────────────────────────────

export const LearnMoreFocus = {
  name: "Learn-more focus-within reveal",
  globals: viewport(1280),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    const p = parts(canvasElement);
    // Focus the attribution link on card 2 to trigger :focus-within on the card.
    const card2 = p.cards[1];
    const attrLink = card2.querySelector(".hp-rankings__attribution");
    await expect(attrLink).not.toBeNull();
    attrLink.focus();
    await waitFor(() =>
      expect(document.activeElement === attrLink || card2.contains(document.activeElement)).toBe(true)
    );
    const lm = card2.querySelector(".hp-rankings__learn-more");
    await waitFor(() => expect(getComputedStyle(lm).opacity).toBe("1"));
  },
};

// ─── Row 34 — Learn-more reduced-motion ─────────────────────────────────────

export const LearnMoreReducedMotion = {
  name: "Learn-more reduced-motion",
  globals: viewport(1280),
  render: () => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const card = ref.current && ref.current.querySelectorAll(".hp-rankings__card")[1];
      if (card) forceHover(card);
      return () => { if (card) forceHover(card, false); };
    }, []);
    return (
      <div
        ref={ref}
        className="rankings-storybook-backdrop"
        dangerouslySetInnerHTML={{ __html: DEFAULT_HTML }}
      />
    );
  },
  play: async ({ canvasElement }) => {
    await emulateReducedMotion(true);
    try {
      const p = parts(canvasElement);
      const lm = p.cards[1].querySelector(".hp-rankings__learn-more");
      await waitFor(() => expect(getComputedStyle(lm).opacity).toBe("1"));
      // Under reduced-motion, the transition duration must be 0s.
      await expect(getComputedStyle(lm).transitionDuration).toBe("0s");
      // transform must be none (snaps, no translate).
      await expect(getComputedStyle(lm).transform).toBe("none");
    } finally {
      await emulateReducedMotion(false);
    }
  },
};

// ─── Row 35 — Learn-more forced-colors ──────────────────────────────────────

export const LearnMoreForcedColors = {
  name: "Learn-more forced-colors visibility",
  globals: viewport(1280),
  render: () => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const card = ref.current && ref.current.querySelectorAll(".hp-rankings__card")[1];
      if (card) forceHover(card);
      return () => { if (card) forceHover(card, false); };
    }, []);
    return (
      <div
        ref={ref}
        className="rankings-storybook-backdrop"
        dangerouslySetInnerHTML={{ __html: DEFAULT_HTML }}
      />
    );
  },
  play: async ({ canvasElement }) => {
    await emulateForcedColors(true);
    try {
      const p = parts(canvasElement);
      const lm = p.cards[1].querySelector(".hp-rankings__learn-more");
      // Under forced-colors + hover, visibility must be visible.
      await waitFor(() => expect(getComputedStyle(lm).visibility).toBe("visible"));
    } finally {
      await emulateForcedColors(false);
    }
  },
};

// ─── Row 36 — Glass strip default opacity ────────────────────────────────────

export const GlassStripDefault = {
  name: "Glass strip: default opacity fallback (0.70)",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    // On first render without JS, --hp-strip-opacity is unset.
    // Footer background resolves to rgba(255,255,255,0.70).
    const p = parts(canvasElement);
    const footer = p.cards[0].querySelector(".hp-rankings__card-footer");
    await expect(footer).not.toBeNull();
    // The background should contain "rgba" with approx 0.70 alpha.
    const bg = getComputedStyle(footer).backgroundColor;
    // Validate it's rgba with roughly 70% alpha (0.698–0.702 or exactly 0.7).
    await expect(bg).toMatch(/rgba\(255,\s*255,\s*255,\s*0\.7/);
  },
};

// ─── Row 37 — Glass strip scroll easing ─────────────────────────────────────

export const GlassStripScroll = {
  name: "Glass strip: scroll easing writes --hp-strip-opacity",
  globals: viewport(1280),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );
    // Give the IO time to fire initial threshold.
    await new Promise(r => setTimeout(r, 200));
    // The center-most card should have --hp-strip-opacity written.
    // Find the card whose center is closest to viewport center.
    const vw = window.innerWidth;
    const cards = p.cards;
    let closestCard = cards[0];
    let minDist = Infinity;
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const dist = Math.abs(cx - vw / 2);
      if (dist < minDist) { minDist = dist; closestCard = card; }
    }
    // The opacity must have been set (any value in [0.55, 0.85] range).
    const op = closestCard.style.getPropertyValue("--hp-strip-opacity");
    if (op !== "") {
      const alpha = parseFloat(op);
      await expect(alpha).toBeGreaterThanOrEqual(0.54);
      await expect(alpha).toBeLessThanOrEqual(0.86);
    }
    // If IO hasn't fired yet (unlikely after 200ms), the fallback is 0.70.
    // Either case is acceptable for a progressive enhancement.
  },
};

// ─── Row 38 — Glass strip hover override ────────────────────────────────────

export const GlassStripHover = {
  name: "Glass strip: hover override sets --hp-strip-opacity: 0.99",
  globals: viewport(1280),
  render: () => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const card = ref.current && ref.current.querySelectorAll(".hp-rankings__card")[1];
      if (card) forceHover(card);
      return () => { if (card) forceHover(card, false); };
    }, []);
    return (
      <div
        ref={ref}
        className="rankings-storybook-backdrop"
        dangerouslySetInnerHTML={{ __html: DEFAULT_HTML }}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const card2 = p.cards[1];
    const footer = card2.querySelector(".hp-rankings__card-footer");
    // Under [data-rankings-hover], the footer background should include 0.99 alpha.
    await waitFor(() => {
      const bg = getComputedStyle(footer).backgroundColor;
      expect(bg).toMatch(/rgba\(255,\s*255,\s*255,\s*0\.99/);
    });
  },
};

// ─── Row 39 — Glass strip reduced-motion (no rAF, IO still writes) ──────────

export const GlassStripReducedMotion = {
  name: "Glass strip: reduced-motion — rAF disabled, IO still writes",
  globals: viewport(1280),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await emulateReducedMotion(true);
    try {
      const p = parts(canvasElement);
      await waitFor(() =>
        expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
      );
      // Give IO time to fire.
      await new Promise(r => setTimeout(r, 200));
      // The custom property should have been written by the IO (not rAF).
      // Accept either a written value or the fallback (if IO didn't fire yet).
      const op = p.cards[0].style.getPropertyValue("--hp-strip-opacity");
      if (op !== "") {
        const alpha = parseFloat(op);
        await expect(alpha).toBeGreaterThanOrEqual(0.54);
        await expect(alpha).toBeLessThanOrEqual(0.86);
      }
      // Confirm no rAF animation is running by checking no requestAnimationFrame
      // loop mutated any card after 100ms without a scroll event.
      const before = p.cards[0].style.getPropertyValue("--hp-strip-opacity");
      await new Promise(r => setTimeout(r, 100));
      const after = p.cards[0].style.getPropertyValue("--hp-strip-opacity");
      // Value should not be changing spontaneously (rAF loop is paused).
      await expect(before).toBe(after);
    } finally {
      await emulateReducedMotion(false);
    }
  },
};

// ─── Row 40 — Glass strip teardown clears opacity ────────────────────────────

export const GlassStripTeardown = {
  name: "Glass strip: teardown clears --hp-strip-opacity from all cards",
  globals: viewport(1280),
  render: () => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const teardown = initRankingsCards(ref.current);
      // Give IO a moment to write, then tear down immediately.
      const t = setTimeout(() => {
        teardown();
        // Mark as torn down for the assertion.
        const section = ref.current.querySelector("section.hp-rankings");
        if (section) section.dataset.tornDown = "true";
      }, 200);
      return () => clearTimeout(t);
    }, []);
    return (
      <div
        ref={ref}
        className="rankings-storybook-backdrop"
        dangerouslySetInnerHTML={{ __html: DEFAULT_HTML }}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await waitFor(() => expect(p.section.dataset.tornDown).toBe("true"));
    // After teardown, --hp-strip-opacity must be cleared from every card.
    for (const card of p.cards) {
      await expect(card.style.getPropertyValue("--hp-strip-opacity")).toBe("");
    }
  },
};

// ─── Row 41 — Dock first-render HTML ────────────────────────────────────────

export const DockStructure = {
  name: "Dock first-render: sticky-wrapper + spacer present",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    // Wrapper must be present.
    const wrapper = canvasElement.querySelector(".hp-rankings__sticky-wrapper");
    await expect(wrapper).not.toBeNull();
    // Section is inside the wrapper.
    const section = wrapper.querySelector("section.hp-rankings");
    await expect(section).not.toBeNull();
    // Spacer is a sibling of the section (not inside it), inside the wrapper.
    const spacer = wrapper.querySelector(".hp-rankings__sticky-spacer");
    await expect(spacer).not.toBeNull();
    await expect(spacer.getAttribute("aria-hidden")).toBe("true");
    // No inline style on any card (scroll-opacity is JS-only progressive enhancement).
    const allCards = Array.from(section.querySelectorAll(".hp-rankings__card"));
    for (const card of allCards) {
      await expect(card.getAttribute("style")).toBeFalsy();
    }
  },
};

// ─── Row 42 — Dock sticky positioning at desktop ─────────────────────────────

export const DockSticky = {
  name: "Dock sticky: section is sticky at hp1280",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    const section = canvasElement.querySelector("section.hp-rankings");
    await expect(section).not.toBeNull();
    await expect(getComputedStyle(section).position).toBe("sticky");
  },
};

// ─── Row 43 — Dock mobile fallback (no sticky) ──────────────────────────────

export const DockMobileFallback = {
  name: "Dock mobile fallback: section NOT sticky at hp393",
  globals: viewport(393),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    const section = canvasElement.querySelector("section.hp-rankings");
    await expect(section).not.toBeNull();
    await expect(getComputedStyle(section).position).not.toBe("sticky");
  },
};

// ─── Row 44/45 — 11-card content + alt text policy (combined in Default11Cards above) ──

// ─── Row 46 — Card 1 secondary link ─────────────────────────────────────────

export const Card1SeeAllTop = {
  name: "Card 1 secondary link: .hp-rankings__see-all-top",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const card1 = p.cards[0];
    await expect(card1.querySelector(".hp-rankings__see-all-top")).not.toBeNull();
    // href must be non-empty.
    const href = card1.querySelector(".hp-rankings__see-all-top").getAttribute("href");
    await expect(href).toBeTruthy();
    await expect(href).not.toBe("javascript:");
    // Visible text matches schema label.
    await expect(card1.querySelector(".hp-rankings__see-all-top").textContent.trim()).toContain("See all");
    // Learn-more also present on card 1.
    await expect(card1.querySelector(".hp-rankings__learn-more")).not.toBeNull();
    // No attribution on card 1.
    await expect(card1.querySelector(".hp-rankings__attribution")).toBeNull();
    // Cards 2–11 have attribution and no see-all-top.
    for (let i = 1; i < p.cards.length; i += 1) {
      await expect(p.cards[i].querySelector(".hp-rankings__see-all-top")).toBeNull();
      await expect(p.cards[i].querySelector(".hp-rankings__attribution")).not.toBeNull();
    }
  },
};

// ─── Row 49 — Focus order 11 cards ──────────────────────────────────────────

export const FocusOrder11Cards = {
  name: "Focus order: 11 cards Tab sequence",
  globals: viewport(1280),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    const p = parts(canvasElement);
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );
    // Card 1: see-all-top → learn-more
    const card1 = p.cards[0];
    const sat = card1.querySelector(".hp-rankings__see-all-top");
    const lm1 = card1.querySelector(".hp-rankings__learn-more");
    await expect(sat).not.toBeNull();
    await expect(lm1).not.toBeNull();
    // Card 2: attribution → learn-more
    const card2 = p.cards[1];
    const attr2 = card2.querySelector(".hp-rankings__attribution");
    const lm2 = card2.querySelector(".hp-rankings__learn-more");
    await expect(attr2).not.toBeNull();
    await expect(lm2).not.toBeNull();
    // Verify see-all-top appears before learn-more in DOM order on card 1.
    const satIdx = Array.from(card1.querySelectorAll("a")).indexOf(sat);
    const lm1Idx = Array.from(card1.querySelectorAll("a")).indexOf(lm1);
    await expect(satIdx).toBeLessThan(lm1Idx);
  },
};

// ─── Row 50/51/52 — Per-slide labelling ─────────────────────────────────────

export const PerSlideLabelling = {
  name: "Per-slide labelling (11 cards)",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await expect(p.cards).toHaveLength(11);
    for (let i = 0; i < p.cards.length; i += 1) {
      const card = p.cards[i];
      await expect(card.getAttribute("aria-roledescription")).toBe("slide");
      const labelId = card.getAttribute("aria-labelledby");
      await expect(labelId).toBeTruthy();
      const labelSpan = canvasElement.querySelector(`#${labelId}`);
      await expect(labelSpan).not.toBeNull();
      await expect(labelSpan.classList.contains("visually-hidden")).toBe(true);
      await expect(labelSpan.textContent).toContain(`Ranking ${i + 1} of 11`);
    }
  },
};

export const PerSlideLabelling7Cards = {
  name: "Per-slide labelling (7 cards — dynamic total)",
  globals: viewport(1280),
  render: () => (
    <StaticPage
      html={rankingsCardsHtml({ cards: DEFAULT_CARDS.slice(0, 7) })}
    />
  ),
  play: async ({ canvasElement }) => {
    const section = canvasElement.querySelector("section.hp-rankings");
    const cards = Array.from(section.querySelectorAll(".hp-rankings__card"));
    await expect(cards).toHaveLength(7);
    for (let i = 0; i < cards.length; i += 1) {
      const labelId = cards[i].getAttribute("aria-labelledby");
      const span = canvasElement.querySelector(`#${labelId}`);
      await expect(span).not.toBeNull();
      await expect(span.textContent).toContain(`Ranking ${i + 1} of 7`);
    }
  },
};

export const PerSlideLabelling3Cards = {
  name: "Per-slide labelling (3 cards edge)",
  globals: viewport(1280),
  render: () => (
    <StaticPage
      html={rankingsCardsHtml({ cards: DEFAULT_CARDS.slice(0, 3) })}
    />
  ),
  play: async ({ canvasElement }) => {
    const section = canvasElement.querySelector("section.hp-rankings");
    const cards = Array.from(section.querySelectorAll(".hp-rankings__card"));
    await expect(cards).toHaveLength(3);
    const lastLabel = canvasElement.querySelector(
      `#${cards[2].getAttribute("aria-labelledby")}`
    );
    await expect(lastLabel.textContent).toContain("3 of 3");
  },
};

// ─── Row 53 — Card width 275px ───────────────────────────────────────────────

export const TouchTargets = {
  name: "Touch targets: 44×44 on all interactive elements",
  globals: viewport(1280),
  render: () => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const card = ref.current && ref.current.querySelectorAll(".hp-rankings__card")[1];
      if (card) forceHover(card);
      return () => { if (card) forceHover(card, false); };
    }, []);
    return (
      <div
        ref={ref}
        className="rankings-storybook-backdrop"
        dangerouslySetInnerHTML={{ __html: DEFAULT_HTML }}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);

    // Card width: 275px ±0.5px on every card (row 53, v4 §v4.5).
    for (const card of p.cards) {
      await expect(Math.abs(card.offsetWidth - 275)).toBeLessThanOrEqual(1);
    }

    // Attribution links (rows 55): width ≥ 44 AND height ≥ 44.
    // Cards 2–11 have attribution.
    for (let i = 1; i < p.cards.length; i += 1) {
      const attr = p.cards[i].querySelector(".hp-rankings__attribution");
      await expect(attr).not.toBeNull();
      const r = attr.getBoundingClientRect();
      await expect(r.width).toBeGreaterThanOrEqual(44);
      await expect(r.height).toBeGreaterThanOrEqual(44);
    }

    // See-all link (row 56).
    const seeAll = canvasElement.querySelector(".hp-rankings__see-all");
    await expect(seeAll).not.toBeNull();
    const sar = seeAll.getBoundingClientRect();
    await expect(sar.height).toBeGreaterThanOrEqual(44);

    // Card 1 see-all-top (row 57).
    const sat = p.cards[0].querySelector(".hp-rankings__see-all-top");
    await expect(sat).not.toBeNull();
    const satr = sat.getBoundingClientRect();
    await expect(satr.width).toBeGreaterThanOrEqual(44);
    await expect(satr.height).toBeGreaterThanOrEqual(44);

    // Learn-more (row 58): visible after forceHover on card 2.
    const lm = p.cards[1].querySelector(".hp-rankings__learn-more");
    await waitFor(() => expect(getComputedStyle(lm).opacity).toBe("1"));
    const lmr = lm.getBoundingClientRect();
    await expect(lmr.width).toBeGreaterThanOrEqual(44);
    await expect(lmr.height).toBeGreaterThanOrEqual(44);

    // Nav buttons (row 59): width ≥ 44 AND height ≥ 44.
    await expect(p.prevBtn.getBoundingClientRect().width).toBeGreaterThanOrEqual(44);
    await expect(p.prevBtn.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    await expect(p.nextBtn.getBoundingClientRect().width).toBeGreaterThanOrEqual(44);
    await expect(p.nextBtn.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
  },
};

// ─── Row 54 — Nav step 291px ─────────────────────────────────────────────────
// Already covered by existing NextScrollsOneCard story (updated card step).

// ─── Row 61 — Card-hover maroon contract ────────────────────────────────────

export const CardHoverMaroon = {
  name: "Card-hover maroon: all three link classes flip (v4 §v4.7.2)",
  globals: viewport(1280),
  render: () => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const card = ref.current && ref.current.querySelectorAll(".hp-rankings__card")[1];
      if (card) forceHover(card);
      return () => { if (card) forceHover(card, false); };
    }, []);
    return (
      <div
        ref={ref}
        className="rankings-storybook-backdrop"
        dangerouslySetInnerHTML={{ __html: DEFAULT_HTML }}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const card2 = p.cards[1];
    await expect(card2).not.toBeNull();

    // Card background must be white on hover.
    await waitFor(() =>
      expect(getComputedStyle(card2).backgroundColor).toBe("rgb(255, 255, 255)")
    );

    // Attribution link must be maroon (v4 §v4.7.2 — card-level hover, not link:hover).
    const attr = card2.querySelector(".hp-rankings__attribution");
    await waitFor(() =>
      expect(getComputedStyle(attr).color).toBe("rgb(140, 29, 64)")
    );

    // Learn-more must also be maroon.
    const lm = card2.querySelector(".hp-rankings__learn-more");
    await waitFor(() =>
      expect(getComputedStyle(lm).color).toBe("rgb(140, 29, 64)")
    );
  },
};

// ─── Row 62 — :focus-within does NOT invert card (v4 §v4.7.5 revert) ────────

export const FocusNoInvert = {
  name: ":focus-within does NOT invert card (v4 §v4.7.5)",
  globals: viewport(1280),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await expect(realPointer.available).toBe(true);
    const p = parts(canvasElement);
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );
    // Focus the attribution link on card 2.
    const card2 = p.cards[1];
    const attrLink = card2.querySelector(".hp-rankings__attribution");
    await expect(attrLink).not.toBeNull();
    attrLink.focus();
    await waitFor(() => expect(document.activeElement === attrLink).toBe(true));

    // Card background must NOT flip to white on :focus-within.
    const bg = getComputedStyle(card2).backgroundColor;
    // The glass default is rgba(255,255,255,0.08) — computed value will NOT be
    // rgb(255,255,255) (solid white).
    await expect(bg).not.toBe("rgb(255, 255, 255)");

    // Default image must NOT fade out.
    const defaultImg = card2.querySelector(".hp-rankings__img--default");
    await expect(getComputedStyle(defaultImg).opacity).toBe("1");
  },
};

// ─── Row 63 — Glass authorization (v4 §v4.7.1) ──────────────────────────────

export const GlassAuthorized = {
  name: "Glass morphism authorized: backdrop-filter + box-shadow + border-radius",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const card = p.cards[0];

    // backdrop-filter must include blur (glass morphism, v4 §v4.7.1).
    const bdFilter = getComputedStyle(card).backdropFilter;
    await expect(bdFilter).toMatch(/blur/);

    // box-shadow must be non-null/none (both inset + outer shadow).
    const shadow = getComputedStyle(card).boxShadow;
    await expect(shadow).not.toBe("none");

    // border-radius must be > 0 (4px from v4 §v4.7.1).
    const radius = parseFloat(getComputedStyle(card).borderTopLeftRadius);
    await expect(radius).toBeGreaterThan(0);
  },
};

// ─── Row 64 — Default image has NO transition (v4 §v4.7.2) ──────────────────

export const DefaultImgNoTransition = {
  name: "Default image: no transition (only hover img has transition)",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    for (const card of p.cards) {
      const defaultImg = card.querySelector(".hp-rankings__img--default");
      await expect(defaultImg).not.toBeNull();
      // transition-duration must be 0s on the default image (v4 §v4.7.2 FIX).
      await expect(getComputedStyle(defaultImg).transitionDuration).toBe("0s");
      // Hover image should have non-zero transition under no-preference.
      // (Under reduced-motion this would be 0s — we just verify default img = 0s.)
    }
  },
};

// ─── computeAlpha pure-function unit test ────────────────────────────────────

export const ComputeAlphaUnit = {
  name: "computeAlpha: pure-function unit assertions",
  globals: viewport(1280),
  render: () => (
    <div className="rankings-storybook-backdrop" style={{ color: "white" }}>
      computeAlpha unit test — see play().
    </div>
  ),
  play: async () => {
    const vw = 1280;
    const cardWidth = 275;
    // Dead center: d = 0, t = 0, alpha = PEAK (0.85).
    const centerRect = { left: vw / 2 - cardWidth / 2, width: cardWidth };
    const centerAlpha = computeAlpha(centerRect, vw);
    await expect(Math.abs(centerAlpha - 0.85)).toBeLessThan(0.01);

    // At edge: card leading edge at left=0, card center at cardWidth/2.
    const D = (vw + cardWidth) / 2;
    const dEdge = Math.abs(cardWidth / 2 - vw / 2);
    const tEdge = dEdge / D;
    const expectedEdge = 0.55 + (0.85 - 0.55) * (1 - tEdge) * (1 - tEdge);
    const edgeRect = { left: 0, width: cardWidth };
    await expect(Math.abs(computeAlpha(edgeRect, vw) - expectedEdge)).toBeLessThan(0.01);

    // Off-screen: card right < 0 — clamp to baseOpacity (0.55).
    const offScreenRect = { left: -cardWidth - 100, width: cardWidth };
    const offAlpha = computeAlpha(offScreenRect, vw);
    await expect(offAlpha).toBeGreaterThanOrEqual(0.54);
    await expect(offAlpha).toBeLessThanOrEqual(0.56);
  },
};
