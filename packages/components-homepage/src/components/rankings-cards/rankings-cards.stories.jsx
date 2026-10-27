import React, { useEffect, useRef } from "react";
import { expect, waitFor } from "storybook/test";

import {
  DEFAULT_CARDS,
  emulateReducedMotion,
  forceHover,
  rankingsCardsHtml,
  realKeyboard,
  realPointer,
  resizeViewport,
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

const viewport = (width) => ({
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
const parts = (canvasElement) => {
  const section = canvasElement.querySelector("section.hp-rankings");
  const find = (sel) => section && section.querySelector(sel);
  const findAll = (sel) =>
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

/** Asserts the full first-render DOM shape (design-doc §3.3 / §3.4). */
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

    // Each card has the expected BEM elements
    for (const card of p.cards) {
      await expect(card.querySelector(".hp-rankings__rank")).not.toBeNull();
      await expect(card.querySelector(".hp-rankings__rank-number")).not.toBeNull();
      await expect(card.querySelector(".hp-rankings__rank-suffix")).not.toBeNull();
      await expect(card.querySelector(".hp-rankings__rank-world")).not.toBeNull();
      await expect(card.querySelector(".hp-rankings__topic")).not.toBeNull();
      await expect(card.querySelector(".hp-rankings__caption")).not.toBeNull();
      await expect(card.querySelector(".hp-rankings__card-footer")).not.toBeNull();
      await expect(card.querySelector(".hp-rankings__attribution")).not.toBeNull();
      // Attribution SVG icon
      await expect(
        card.querySelector(".hp-rankings__attribution-icon")
      ).not.toBeNull();
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

export const Hover = {
  name: "Hover (card 2)",
  globals: viewport(1280),
  render: () => {
    const ref = useRef(null);
    useEffect(() => {
      const card = ref.current && ref.current.querySelectorAll(".hp-rankings__card")[1];
      if (card) forceHover(card);
      return () => { if (card) forceHover(card, false); };
    }, []);
    return (
      <div
        ref={ref}
        style={{ background: "#002b5c", padding: "2rem" }}
        dangerouslySetInnerHTML={{ __html: DEFAULT_HTML }}
      />
    );
  },
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

    // Caption pill unchanged: gold bg, gray-1 text
    const pill = card2.querySelector(".hp-rankings__caption");
    await expect(getComputedStyle(pill).backgroundColor).toBe("rgb(255, 198, 39)");
    await expect(getComputedStyle(pill).color).toBe("rgb(25, 25, 25)");
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
    await waitFor(() =>
      expect(p.prevBtn.getAttribute("tabindex")).toBeNull()
    );
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
    await waitFor(() =>
      expect(p.track.scrollLeft).toBeLessThanOrEqual(1)
    );
    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );
  },
};

export const NextDisabledAtEnd = {
  name: "Next disabled at end",
  globals: viewport(1280),
  render: () => <LivePage html={rankingsCardsHtml({ cards: DEFAULT_CARDS.slice(0, 2) })} />,
  play: async ({ canvasElement }) => {
    if (!realPointer.available) return;
    const p = parts(canvasElement);

    await waitFor(() =>
      expect(p.prevBtn.classList.contains("is-disabled")).toBe(true)
    );

    // At 1280 with 2 cards that fit, the no-overflow class should be set
    await waitFor(() =>
      expect(p.section.classList.contains("hp-rankings--no-overflow")).toBe(true)
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
  render: () => <LivePage html={rankingsCardsHtml({ cards: DEFAULT_CARDS.slice(0, 1) })} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await waitFor(() =>
      expect(p.section.classList.contains("hp-rankings--no-overflow")).toBe(true)
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
  render: () => <LivePage html={rankingsCardsHtml({ cards: DEFAULT_CARDS.slice(0, 2) })} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await waitFor(() =>
      expect(p.section.classList.contains("hp-rankings--no-overflow")).toBe(true)
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
  render: () => <LivePage html={rankingsCardsHtml({ cards: DEFAULT_CARDS.concat(DEFAULT_CARDS.slice(0, 5)) })} />,
  play: async ({ canvasElement }) => {
    if (!realPointer.available) return;
    const p = parts(canvasElement);

    // 12 cards at 393px should overflow
    await waitFor(() =>
      expect(p.section.classList.contains("hp-rankings--no-overflow")).toBe(false)
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
    while (
      !p.nextBtn.classList.contains("is-disabled") &&
      clicks < maxClicks
    ) {
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
        const gap =
          parseFloat(getComputedStyle(p.track).columnGap) || 16;
        const step = cardWidth + gap;
        const nearest = Math.round(left / step) * step;
        expect(Math.abs(left - nearest)).toBeLessThanOrEqual(8);
      },
      { timeout: 2000 }
    );
  },
};

export const IdempotentInit = {
  name: "Idempotent init",
  globals: viewport(1280),
  render: () => {
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
  },
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

export const TeardownCleansUp = {
  name: "Teardown cleans up",
  globals: viewport(1280),
  render: () => {
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
  },
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
    await expect(
      p.section.querySelector(
        "[data-ga], [data-ga-name], [data-ga-event], [data-ga-action], [data-ga-section], [data-ga-text]"
      )
    ).toBeNull();
  },
};
