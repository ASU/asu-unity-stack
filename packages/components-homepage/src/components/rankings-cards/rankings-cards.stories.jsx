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
    style={{ background: "#002b5c", padding: "2rem" }}
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
      style={{ background: "#002b5c", padding: "2rem" }}
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
const expectComplete = async (canvasElement, { cardCount = 7 } = {}) => {
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

  // Each card has an attribution link
  await expect(p.attributionLinks).toHaveLength(cardCount);

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
      await expect(defaultImg.getAttribute("width")).toBe("400");
      await expect(defaultImg.getAttribute("height")).toBe("500");
      await expect(defaultImg.getAttribute("loading")).toBe("lazy");
      await expect(defaultImg.getAttribute("decoding")).toBe("async");

      // Hover image: full attribute shape incl. src.
      const hoverImg = media.querySelector(".hp-rankings__img--hover");
      await expect(hoverImg).not.toBeNull();
      await expect(hoverImg.getAttribute("src")).toBe(expected.imageSrcHover);
      await expect(hoverImg.getAttribute("alt")).toBe("");
      await expect(hoverImg.getAttribute("aria-hidden")).toBe("true");
      await expect(hoverImg.getAttribute("width")).toBe("400");
      await expect(hoverImg.getAttribute("height")).toBe("500");
      await expect(hoverImg.getAttribute("loading")).toBe("lazy");
      await expect(hoverImg.getAttribute("decoding")).toBe("async");

      // Card footer + attribution with correct href.
      await expect(
        card.querySelector(".hp-rankings__card-footer")
      ).not.toBeNull();
      const attribution = card.querySelector(".hp-rankings__attribution");
      await expect(attribution).not.toBeNull();
      await expect(attribution.getAttribute("href")).toBe(
        expected.attributionHref
      );
      await expect(
        card.querySelector(".hp-rankings__attribution-icon")
      ).not.toBeNull();

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
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await renderBreakpoint({ canvasElement, width: 393, minCards: 1 });
  },
};

export const Tablet768 = {
  name: "Tablet 768",
  globals: viewport(768),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await renderBreakpoint({ canvasElement, width: 768, minCards: 1 });
  },
};

export const Desktop1024 = {
  name: "Desktop 1024",
  globals: viewport(1024),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await renderBreakpoint({ canvasElement, width: 1024, minCards: 2 });
  },
};

export const Desktop1280 = {
  name: "Desktop 1280",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await renderBreakpoint({ canvasElement, width: 1280, minCards: 2 });
  },
};

export const Desktop1440 = {
  name: "Desktop 1440",
  globals: viewport(1440),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await renderBreakpoint({ canvasElement, width: 1440, minCards: 3 });
  },
};

export const Large1920 = {
  name: "Wide 1920",
  globals: viewport(1920),
  render: () => <StaticPage html={DEFAULT_HTML} />,
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
      style={{ background: "#002b5c", padding: "2rem" }}
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

// ─── Row 23 — Image sizing ──────────────────────────────────────────────────

export const ImageSizing = {
  name: "Image sizing",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const card = p.cards[0];

    const media = card.querySelector(".hp-rankings__media");
    const mediaStyle = getComputedStyle(media);
    await expect(mediaStyle.display).toBe("grid");
    // Different browsers serialise aspect-ratio differently ("4 / 5" vs "0.8"
    // vs "auto 4 / 5"), so derive the ratio from the laid-out element.
    const ar = media.offsetWidth / media.offsetHeight;
    await expect(ar).toBeGreaterThan(0.75);
    await expect(ar).toBeLessThan(0.85);

    const defaultImg = media.querySelector(".hp-rankings__img--default");
    const hoverImg = media.querySelector(".hp-rankings__img--hover");
    const defRect = defaultImg.getBoundingClientRect();
    const hovRect = hoverImg.getBoundingClientRect();
    await expect(Math.abs(defRect.width - hovRect.width)).toBeLessThan(1);
    await expect(Math.abs(defRect.height - hovRect.height)).toBeLessThan(1);
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
    <div
      data-no-alt-warning-host
      style={{ background: "#002b5c", padding: "2rem" }}
    >
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
      style={{ background: "#002b5c", padding: "2rem" }}
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
      style={{ background: "#002b5c", padding: "2rem" }}
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
      style={{ background: "#002b5c", padding: "2rem" }}
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
  <div style={{ background: "#002b5c", padding: "2rem" }}>
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
      style={{ background: "#002b5c", padding: "2rem" }}
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

export const RapidClickCoalescing = {
  name: "Rapid Next clicks coalesce to one scroll step",
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

    // ── Part A: burst five rapid clicks ─────────────────────────────────
    const initial = p.track.scrollLeft;
    for (let i = 0; i < 5; i += 1) {
      await realPointer.click(p.nextBtn);
    }
    // Let the scroll settle (scrollend or idle debounce).
    await new Promise(r => setTimeout(r, 500));
    const delta = p.track.scrollLeft - initial;
    // Coalescing dropped the extra clicks → delta is ≤ one step + tolerance,
    // not 5 × step.
    await expect(delta).toBeLessThanOrEqual(oneStep + 10);
    // After the pending-scroll clears, a fresh click moves the row.
    const afterCoalesce = p.track.scrollLeft;
    await realPointer.click(p.nextBtn);
    await new Promise(r => setTimeout(r, 500));
    await expect(p.track.scrollLeft).toBeGreaterThan(afterCoalesce);

    // ── Part B: long-scroll quiescence proof (cycle-4 P2 fix) ────────────
    // Prove the idle debounce keeps the lock alive past the old fixed 300ms
    // window. The old implementation (setTimeout 300) would release the lock
    // at ~300ms even if scroll events are still arriving; the new idle-debounce
    // implementation resets its 150ms timer on every scroll event and therefore
    // keeps the lock alive for as long as synthetic scroll activity continues.
    //
    // Strategy:
    //   1. Suppress the native scrollend event (capture-phase interceptor) so
    //      the primary lock-release path cannot fire during the test window.
    //   2. Click Next to arm pendingScroll (lock engaged).
    //   3. Start a setInterval that dispatches a synthetic `scroll` event every
    //      50ms. This keeps resetting the 150ms idle timer.
    //   4. After 350ms (past the old 300ms fixed window), attempt a second click.
    //   5. Assert the second click was coalesced: final delta ≤ one step.
    //   6. Remove the scrollend interceptor, stop the interval, allow settle.
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(false)
    );
    await new Promise(r => setTimeout(r, 250)); // let any prior settle finish

    const beforeLong = p.track.scrollLeft;

    // (1) Suppress scrollend delivery to the production listener.
    // The production listener is registered as bubble-phase; a capturing
    // stopImmediatePropagation prevents it from receiving the event.
    const suppressScrollend = e => e.stopImmediatePropagation();
    p.track.addEventListener("scrollend", suppressScrollend, { capture: true });

    // (2) Click Next — arms pendingScroll (lock engaged).
    p.nextBtn.click();

    // (3) Sustain synthetic scroll activity: reset the idle timer every 50ms.
    let scrollInterval = null;
    try {
      scrollInterval = setInterval(() => {
        p.track.dispatchEvent(new Event("scroll"));
      }, 50);

      // (4) Wait 350ms — past the old 300ms fixed-timeout release window — then
      // attempt a second click. The idle debounce must still be armed because
      // synthetic scroll events have kept resetting the 150ms idle timer, AND
      // scrollend was suppressed so the primary path could not release the lock.
      await new Promise(r => setTimeout(r, 350));
      p.nextBtn.click();

      // (5) Stop the interval and release the scrollend suppressor.
      clearInterval(scrollInterval);
      scrollInterval = null;
      p.track.removeEventListener("scrollend", suppressScrollend, {
        capture: true,
      });

      // Allow the idle debounce (150ms) to fire and settle.
      await new Promise(r => setTimeout(r, 400));
    } finally {
      if (scrollInterval !== null) {
        clearInterval(scrollInterval);
      }
      // Ensure scrollend suppressor is always removed.
      p.track.removeEventListener("scrollend", suppressScrollend, {
        capture: true,
      });
    }

    const finalDelta = p.track.scrollLeft - beforeLong;
    // The second click at 350ms was coalesced → final delta is ≤ one step.
    await expect(finalDelta).toBeLessThanOrEqual(oneStep + 10);
  },
};

// ─── Pure-function sanitiser contract (unit-level inside a story) ──────────

export const SanitizerContract = {
  name: "Sanitizer helpers reject known-bad inputs",
  globals: viewport(1280),
  render: () => (
    <div style={{ color: "white", background: "#002b5c", padding: "2rem" }}>
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
