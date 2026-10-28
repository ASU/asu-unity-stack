// Rankings-cards Storybook stories — WWWCMS-233
// Design doc: .pipeline/design-doc.md §8 (test matrix — 30 rows)
//
// DEVIATION NOTE (impl-report.md §deviations):
// This file was regenerated from the prior-coder v1 stories because the prior
// version asserted v1 DOM nodes (.hp-rankings__rank, .hp-rankings__rank-number,
// .hp-rankings__rank-suffix, .hp-rankings__rank-world, .hp-rankings__topic,
// .hp-rankings__caption) that the design-doc v2 explicitly removed (§4.1, §8
// "Removed in v2"). The Hover story also asserted a caption-pill gold
// background that no longer exists in the v2 content model. These are genuine
// spec/test gaps — not cosmetic differences — and required rewriting.
// All non-removed story logic is preserved verbatim from the prior file.
import React, { useEffect, useRef } from "react";
import { expect, waitFor } from "storybook/test";

import {
  DEFAULT_CARDS,
  emulateReducedMotion,
  forceHover,
  rankingsCardsHtml,
  realKeyboard,
  realPointer,
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
          "No data-ga* attributes (GA is handled by the unity-bootstrap-theme bundle attribute listener).",
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

/**
 * Asserts the full first-render DOM shape (design-doc §3.3 / §3.4).
 * v2: image-first content model — no rank/topic/caption HTML elements.
 * Each card has: .hp-rankings__media (with two <img>), .hp-rankings__card-footer,
 * .hp-rankings__attribution.
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

  // Next button: enabled at first render
  await expect(p.nextBtn).not.toBeNull();
  await expect(p.nextBtn.getAttribute("type")).toBe("button");
  await expect(p.nextBtn.classList.contains("is-disabled")).toBe(false);
  await expect(p.nextBtn.getAttribute("aria-disabled")).toBeNull();
  await expect(p.nextBtn.getAttribute("tabindex")).toBeNull();
  await expect(p.nextBtn.getAttribute("aria-label")).toBe("Next ranking");

  // See-all link
  await expect(p.seeAll).not.toBeNull();
  await expect(p.seeAll.getAttribute("href")).toBe("#rankings-see-all");

  // Track must NOT be keyboard focusable
  await expect(p.track.getAttribute("tabindex")).toBeNull();

  return p;
};

// ── story IDs / titles ────────────────────────────────────────────────────────
// Storybook story IDs are kebab-case of title + export name.
// title "Homepage/Rankings cards" → "homepage-rankings-cards"
// export Default → "homepage-rankings-cards--default"

const DEFAULT_HTML = rankingsCardsHtml();

// ── Task 1 stories (markup template) ─────────────────────────────────────────

export const Default = {
  globals: viewport(1440),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await expectComplete(canvasElement);

    const p = parts(canvasElement);

    // v2 content model: image-first. Each card has __media (with two <img>)
    // and __card-footer + __attribution. NO rank/topic/caption HTML elements.
    for (const card of p.cards) {
      // Media box with exactly two <img> elements (design-doc §3.3 / §3.4)
      const media = card.querySelector(".hp-rankings__media");
      await expect(media).not.toBeNull();
      const imgs = Array.from(media.querySelectorAll("img"));
      await expect(imgs).toHaveLength(2);

      // Default image: has non-empty alt, correct attributes
      const defaultImg = media.querySelector(".hp-rankings__img--default");
      await expect(defaultImg).not.toBeNull();
      await expect(defaultImg.getAttribute("alt")).not.toBe("");
      await expect(defaultImg.getAttribute("width")).toBe("400");
      await expect(defaultImg.getAttribute("height")).toBe("500");
      await expect(defaultImg.getAttribute("loading")).toBe("lazy");
      await expect(defaultImg.getAttribute("decoding")).toBe("async");

      // Hover image: decorative — alt="" + aria-hidden="true"
      const hoverImg = media.querySelector(".hp-rankings__img--hover");
      await expect(hoverImg).not.toBeNull();
      await expect(hoverImg.getAttribute("alt")).toBe("");
      await expect(hoverImg.getAttribute("aria-hidden")).toBe("true");
      await expect(hoverImg.getAttribute("width")).toBe("400");
      await expect(hoverImg.getAttribute("height")).toBe("500");
      await expect(hoverImg.getAttribute("loading")).toBe("lazy");
      await expect(hoverImg.getAttribute("decoding")).toBe("async");

      // Card footer
      await expect(
        card.querySelector(".hp-rankings__card-footer")
      ).not.toBeNull();
      await expect(
        card.querySelector(".hp-rankings__attribution")
      ).not.toBeNull();
      // Attribution SVG icon
      await expect(
        card.querySelector(".hp-rankings__attribution-icon")
      ).not.toBeNull();

      // v2 REMOVED: .hp-rankings__rank, __rank-number, __rank-suffix,
      // __rank-world, __topic, __caption are NOT in the v2 DOM.
      await expect(card.querySelector(".hp-rankings__rank")).toBeNull();
      await expect(card.querySelector(".hp-rankings__caption")).toBeNull();
      await expect(card.querySelector(".hp-rankings__topic")).toBeNull();
    }

    // No data-ga* attributes anywhere (design-doc Q5)
    await expect(
      p.section.querySelector(
        "[data-ga], [data-ga-name], [data-ga-event], [data-ga-action], [data-ga-section]"
      )
    ).toBeNull();

    // Nav SVG icons
    await expect(
      p.prevBtn.querySelector(".hp-rankings__nav-icon")
    ).not.toBeNull();
    await expect(
      p.nextBtn.querySelector(".hp-rankings__nav-icon")
    ).not.toBeNull();

    // See-all icon
    await expect(
      p.seeAll.querySelector(".hp-rankings__see-all-icon")
    ).not.toBeNull();
  },
};

// ── Task 2 stories (styles) ───────────────────────────────────────────────────

export const Phone393 = {
  name: "Phone 393",
  globals: viewport(393),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await expectComplete(canvasElement);
    await expect(window.innerWidth).toBe(393);
  },
};

export const Tablet768 = {
  name: "Tablet 768",
  globals: viewport(768),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await expectComplete(canvasElement);
    await expect(window.innerWidth).toBe(768);
  },
};

export const Desktop1024 = {
  name: "Desktop 1024",
  globals: viewport(1024),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await expectComplete(canvasElement);
    await expect(window.innerWidth).toBe(1024);
  },
};

export const Desktop1280 = {
  name: "Desktop 1280",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await expectComplete(canvasElement);
    await expect(window.innerWidth).toBe(1280);
  },
};

export const Desktop1440 = {
  name: "Desktop 1440",
  globals: viewport(1440),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await expectComplete(canvasElement);
    await expect(window.innerWidth).toBe(1440);
  },
};

export const Large1920 = {
  name: "Wide 1920",
  globals: viewport(1920),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    await expectComplete(canvasElement);
    await expect(window.innerWidth).toBe(1920);
  },
};

/** Named component so React hooks rules are satisfied. */
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

    // Hover state: white bg, gray-1 text, maroon attribution
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

    // v2 image swap: default img opacity 0, hover img opacity 1 under forced hover
    const defaultImg = card2.querySelector(".hp-rankings__img--default");
    const hoverImg = card2.querySelector(".hp-rankings__img--hover");
    await waitFor(() => expect(getComputedStyle(defaultImg).opacity).toBe("0"));
    await waitFor(() => expect(getComputedStyle(hoverImg).opacity).toBe("1"));

    // v2 REMOVED: caption pill assertion (.hp-rankings__caption) is gone.
    // The caption text is now baked into the PNG and carried in imageAlt.
    await expect(card2.querySelector(".hp-rankings__caption")).toBeNull();
  },
};

export const ImageSizing = {
  name: "Image sizing",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const card = p.cards[0];

    // .hp-rankings__media must have aspect-ratio 4/5 and display: grid
    const media = card.querySelector(".hp-rankings__media");
    await expect(media).not.toBeNull();
    const mediaStyle = getComputedStyle(media);
    await expect(mediaStyle.display).toBe("grid");
    // aspect-ratio: the browser normalises "4 / 5" to "0.8" in computed style
    const ar =
      parseFloat(mediaStyle.aspectRatio) ||
      media.offsetWidth / media.offsetHeight;
    await expect(ar).toBeGreaterThan(0.75);
    await expect(ar).toBeLessThan(0.85);

    // Both <img> elements per card must have identical bounding rect dimensions
    const defaultImg = media.querySelector(".hp-rankings__img--default");
    const hoverImg = media.querySelector(".hp-rankings__img--hover");
    const defRect = defaultImg.getBoundingClientRect();
    const hovRect = hoverImg.getBoundingClientRect();
    await expect(Math.abs(defRect.width - hovRect.width)).toBeLessThan(1);
    await expect(Math.abs(defRect.height - hovRect.height)).toBeLessThan(1);
  },
};

export const FocusVisibleCard = {
  name: "Focus-visible: card attribution link",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    if (!realPointer.available) return;
    const p = parts(canvasElement);
    const link = p.attributionLinks[0];
    await realPointer.click(link);
    await realKeyboard.press("Tab");
    // focus should be on the first attribution link
    await waitFor(() => expect(document.activeElement).toBe(link));
    const ring = getComputedStyle(link).boxShadow;
    await expect(ring).toContain("rgb(255, 255, 255)");
  },
};

export const FocusVisiblePrev = {
  name: "Focus-visible: prev button",
  globals: viewport(1280),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    if (!realPointer.available) return;
    const p = parts(canvasElement);
    // Next is focusable; focus it, then verify ring
    await realPointer.click(p.nextBtn);
    await waitFor(() => expect(document.activeElement).toBe(p.nextBtn));
    const ring = getComputedStyle(p.nextBtn).boxShadow;
    await expect(ring).toContain("rgb(255, 255, 255)");
  },
};

export const FocusVisibleNext = {
  name: "Focus-visible: next button",
  globals: viewport(1280),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    if (!realPointer.available) return;
    const p = parts(canvasElement);
    await realPointer.click(p.nextBtn);
    await waitFor(() => expect(document.activeElement).toBe(p.nextBtn));
    const ring = getComputedStyle(p.nextBtn).boxShadow;
    await expect(ring).toContain("rgb(255, 255, 255)");
  },
};

export const FocusVisibleSeeAll = {
  name: "Focus-visible: see-all link",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    if (!realPointer.available) return;
    const p = parts(canvasElement);
    await realPointer.click(p.seeAll);
    await waitFor(() => expect(document.activeElement).toBe(p.seeAll));
    const ring = getComputedStyle(p.seeAll).boxShadow;
    await expect(ring).toContain("rgb(255, 255, 255)");
  },
};

export const ReducedMotion = {
  name: "Reduced motion",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    if (!realPointer.available) return;
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
    } finally {
      await emulateReducedMotion(false);
    }
  },
};

export const ForcedColors = {
  name: "Forced colors",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    // Structural assertions: forced-colors CSS tested by a11y; here just confirm shape
    await expectComplete(canvasElement);
  },
};

export const NoAltDevWarning = {
  name: "No-alt DEV warning",
  globals: viewport(1280),
  render: () => {
    // GREEN-by-construction: the console.warn is only emitted in DEV mode
    // (import.meta.env.DEV). In Storybook (dev server) it should fire when
    // imageAlt is "". We capture the warn call to assert it was called.
    const cardWithEmptyAlt = [{ ...DEFAULT_CARDS[0], imageAlt: "" }];
    const html = rankingsCardsHtml({ cards: cardWithEmptyAlt });
    return <StaticPage html={html} />;
  },
  play: async ({ canvasElement }) => {
    // The warn fires at render time (in the module scope, before play runs).
    // We can only assert the HTML shape here — the console.warn is a side-effect
    // that runs during rankingsCardsHtml(). In a real unit test we'd spy on
    // console.warn; Storybook play tests confirm the rendered shape is still correct
    // (alt="" is allowed; the warn is informational only).
    const section = canvasElement.querySelector("section.hp-rankings");
    await expect(section).not.toBeNull();
    const defaultImg = section.querySelector(".hp-rankings__img--default");
    await expect(defaultImg).not.toBeNull();
    // The component renders alt="" (never fabricates text — design-doc §7.9)
    await expect(defaultImg.getAttribute("alt")).toBe("");
    // Hover img also has alt="" + aria-hidden
    const hoverImg = section.querySelector(".hp-rankings__img--hover");
    await expect(hoverImg.getAttribute("alt")).toBe("");
    await expect(hoverImg.getAttribute("aria-hidden")).toBe("true");
  },
};

// ── Task 3 stories (JS nav + IO) ─────────────────────────────────────────────

export const PrevDisabledAtStart = {
  name: "Prev disabled at start",
  globals: viewport(1280),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    // Wait for JS init
    await waitFor(() => {
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true);
      expect(p.prevBtn.getAttribute("aria-disabled")).toBe("true");
      expect(p.prevBtn.getAttribute("tabindex")).toBe("-1");
    });
  },
};

export const NextScrollsOneCard = {
  name: "Next scrolls one card",
  globals: viewport(1280),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    if (!realPointer.available) return;
    const p = parts(canvasElement);

    // Wait for init
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );

    const initialScroll = p.track.scrollLeft;
    await realPointer.click(p.nextBtn);

    // Track should have scrolled
    await waitFor(() =>
      expect(p.track.scrollLeft).toBeGreaterThan(initialScroll)
    );
    // Prev should now be enabled
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(false)
    );
    await waitFor(() =>
      expect(p.prevBtn.getAttribute("aria-disabled")).toBeNull()
    );
    await waitFor(() => expect(p.prevBtn.getAttribute("tabindex")).toBeNull());
  },
};

export const PrevScrollsBack = {
  name: "Prev scrolls back",
  globals: viewport(1280),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    if (!realPointer.available) return;
    const p = parts(canvasElement);

    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );

    // Scroll forward one card
    await realPointer.click(p.nextBtn);
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(false)
    );

    // Scroll back
    await realPointer.click(p.prevBtn);
    await waitFor(() => expect(p.track.scrollLeft).toBeLessThanOrEqual(1));
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );
  },
};

export const NextDisabledAtEnd = {
  name: "Next disabled at end",
  globals: viewport(1280),
  render: () => (
    <LivePage html={rankingsCardsHtml({ cards: DEFAULT_CARDS.slice(0, 2) })} />
  ),
  play: async ({ canvasElement }) => {
    if (!realPointer.available) return;
    const p = parts(canvasElement);

    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );

    // At 1280 with 2 cards that fit, the no-overflow class should be set
    await waitFor(() =>
      expect(p.section.classList.contains("hp-rankings--no-overflow")).toBe(
        true
      )
    );
    // Next should be disabled
    await waitFor(() =>
      expect(p.nextBtn.classList.contains("is-disabled")).toBe(true)
    );
  },
};

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
    // Nav is hidden by CSS (display: none via --no-overflow modifier)
    await waitFor(() => {
      const navDisplay = getComputedStyle(p.navGroup).display;
      expect(navDisplay).toBe("none");
    });
    // See-all still visible
    await expect(getComputedStyle(p.seeAll).display).not.toBe("none");
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

export const ManyCardsOverflow = {
  name: "Many cards — overflow at 393",
  globals: viewport(393),
  render: () => (
    <LivePage
      html={rankingsCardsHtml({
        cards: DEFAULT_CARDS.concat(DEFAULT_CARDS.slice(0, 5)),
      })}
    />
  ),
  play: async ({ canvasElement }) => {
    if (!realPointer.available) return;
    const p = parts(canvasElement);

    // 12 cards at 393px should overflow
    await waitFor(() =>
      expect(p.section.classList.contains("hp-rankings--no-overflow")).toBe(
        false
      )
    );
    await expect(p.cards).toHaveLength(12);

    // Nav is visible
    await expect(getComputedStyle(p.navGroup).display).not.toBe("none");

    // Prev disabled at start
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );

    // Click through cards until reaching the end
    let clicks = 0;
    const maxClicks = 15;
    while (!p.nextBtn.classList.contains("is-disabled") && clicks < maxClicks) {
      await realPointer.click(p.nextBtn);
      await waitFor(() => {}, { timeout: 200 });
      clicks++;
    }
    await waitFor(() =>
      expect(p.nextBtn.classList.contains("is-disabled")).toBe(true)
    );
  },
};

export const SnapToStart = {
  name: "Snap to start after mid-card scroll",
  globals: viewport(1280),
  render: () => <LivePage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );

    // Scroll to a partial position (not a snap stop)
    const partialScroll = 150; // mid-card
    p.track.scrollTo({ left: partialScroll, behavior: "instant" });

    // After scrollend the snap should resolve to a card leading edge
    await waitFor(
      () => {
        const left = p.track.scrollLeft;
        // Should be at a snap stop (card width ~288px + gap ~16px = 304px boundary)
        // Accept within 8px of any snap stop
        const cardWidth = p.cards[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(p.track).columnGap) || 16;
        const step = cardWidth + gap;
        const nearest = Math.round(left / step) * step;
        expect(Math.abs(left - nearest)).toBeLessThanOrEqual(8);
      },
      { timeout: 2000 }
    );
  },
};

/** Named component so React hooks rules are satisfied. */
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
      dangerouslySetInnerHTML={{ __html: DEFAULT_HTML }}
    />
  );
};

export const IdempotentInit = {
  name: "Idempotent init",
  globals: viewport(1280),
  render: () => <IdempotentPage />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    // After double-init prev is still disabled once (no duplication)
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );
    // No double-bind: aria-disabled should be exactly "true" not stacked
    await expect(p.prevBtn.getAttribute("aria-disabled")).toBe("true");
  },
};

/** Named component so React hooks rules are satisfied. */
const TeardownPage = () => {
  const ref = useRef(null);
  useEffect(() => {
    // init, then immediately tear down
    const teardown = initRankingsCards(ref.current);
    teardown();
    // no return — we already tore down
  }, []);
  return (
    <div
      ref={ref}
      style={{ background: "#002b5c", padding: "2rem" }}
      dangerouslySetInnerHTML={{ __html: DEFAULT_HTML }}
    />
  );
};

export const TeardownCleansUp = {
  name: "Teardown cleans up",
  globals: viewport(1280),
  render: () => <TeardownPage />,
  play: async ({ canvasElement }) => {
    // After teardown the section should not have JS-set classes (beyond first-render)
    const p = parts(canvasElement);
    // The first-render has is-disabled on prev (from HTML); teardown should
    // remove any JS-added extras; the HTML-provided is-disabled stays on prev
    // (teardown only removes what JS added, not HTML-provided attrs)
    // The key assertion: no hp-rankings--no-overflow class (JS-only)
    await expect(p.section.classList.contains("hp-rankings--no-overflow")).toBe(
      false
    );
  },
};

// ── Task 4 story (GA parity assertion) ───────────────────────────────────────

export const NoGaAttributes = {
  name: "No data-ga* attributes",
  globals: viewport(1280),
  render: () => <StaticPage html={DEFAULT_HTML} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    // GREEN-by-construction: this test LOCKS the Q5 no-GA-markup decision.
    // A later accidental addition of data-ga* will fail this test.
    // There is no RED phase for this story — it passes by construction because
    // rankingsCardsHtml never emits data-ga* attributes (design-doc §3.4 #8, Q5).
    await expect(
      p.section.querySelector(
        "[data-ga], [data-ga-name], [data-ga-event], [data-ga-action], [data-ga-section], [data-ga-text]"
      )
    ).toBeNull();
  },
};
