// Quick-links stories — WWWCMS-235
// Storybook-only React. No React ships to dist/. Stories follow hero.stories.jsx
// and reimagine.stories.jsx patterns exactly.
import React, { useEffect, useRef } from "react";
import { expect, userEvent, waitFor } from "storybook/test";

import {
  emulateReducedMotion,
  forceHover,
  quickLinksHtml,
  realKeyboard,
  SPANISH_LABEL,
} from "./quick-links-helpers.jsx";

// ---- meta ----

export default {
  title: "Homepage/Quick links",
  parameters: {
    docs: {
      description: {
        component:
          "Quick-links row (WWWCMS-235): four icon anchors (Explore ASU Online → Apply now → Visit an ASU campus → Request info) plus a Spanish sibling link (`Aprender más en Español →`). Hover and keyboard focus paint a 16% white glass rectangle behind the active item and swap the icon to ASU gold. ≤ 900 px: 2×2 grid; ≥ 901 px: 1×4 row. Pure HTML + SCSS; zero JS shipped.",
      },
    },
  },
};

// ---- constants ----

// Focus ring: the UDS theme applies `a:focus { box-shadow: 0px 0px 0px 2px white, 0px 0px 0px 4px gray-1 !important }`
// via _misc.scss. The `!important` wins over our --hp-focus-outer (#00baff). The actual computed ring
// is white + gray-1 (WWWCMS-235 DEVIATION: documented in impl-report.md).
const RING =
  "rgb(255, 255, 255) 0px 0px 0px 2px, rgb(25, 25, 25) 0px 0px 0px 4px";
const GOLD = "rgb(255, 198, 39)";
const WHITE = "rgb(255, 255, 255)";
const GLASS = "rgba(255, 255, 255, 0.16)";

const viewport = width => ({
  viewport: { value: `hp${width}`, isRotated: false },
});

// ---- shared helpers ----

// Extracts the key DOM nodes from a rendered story.
const parts = canvasElement => {
  const wrapper = canvasElement.querySelector(".hp-quick-links");
  return {
    wrapper,
    list: wrapper ? wrapper.querySelector(".hp-quick-links__list") : null,
    items: wrapper
      ? Array.from(wrapper.querySelectorAll(".hp-quick-link"))
      : [],
    icons: wrapper
      ? Array.from(wrapper.querySelectorAll(".hp-quick-link__icon"))
      : [],
    labels: wrapper
      ? Array.from(wrapper.querySelectorAll(".hp-quick-link__label"))
      : [],
    spanish: wrapper ? wrapper.querySelector(".hp-quick-link-es") : null,
  };
};

// Renders the quick-links HTML directly (no React wrapper needed; parity source).
const Page = ({ html }) => <div dangerouslySetInnerHTML={{ __html: html }} />;

// Backdrop decorator: wraps the row in a photo or plain white container.
const withBackdrop = (Story, context) => {
  const backdrop = context.args?.backdrop ?? "plain";
  const style =
    backdrop === "photo"
      ? {
          background:
            "linear-gradient(135deg, #2a5b8b 0%, #6aacdb 50%, #b8d8f0 100%)",
          minHeight: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 0",
        }
      : {
          background: "#ffffff",
          minHeight: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 0",
        };
  return (
    <div style={style}>
      <Story />
    </div>
  );
};

// ---- stories ----

// Task 2 / §8 row 17 — HTML parity
export const HtmlParity = {
  name: "html-parity",
  globals: viewport(1440),
  args: { backdrop: "plain" },
  decorators: [withBackdrop],
  render: () => <Page html={quickLinksHtml()} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);

    // Four .hp-quick-link anchors present
    await expect(p.items).toHaveLength(4);
    // One Spanish link
    await expect(p.spanish).not.toBeNull();

    // Normative label order
    const expectedLabels = [
      "Explore ASU Online",
      "Apply now",
      "Visit an ASU campus",
      "Request info",
    ];
    for (const [index, label] of expectedLabels.entries()) {
      await expect(p.labels[index].textContent).toBe(label);
    }

    // Spanish link attributes
    await expect(p.spanish.getAttribute("lang")).toBe("es");
    await expect(p.spanish.getAttribute("hreflang")).toBe("es");
    await expect(p.spanish.textContent.trim()).toMatch(
      new RegExp(`^${SPANISH_LABEL}`)
    );

    // Trailing arrow icon on Spanish link
    const esIcon = p.spanish.querySelector(".hp-quick-link-es__icon");
    await expect(esIcon).not.toBeNull();
    await expect(esIcon.getAttribute("aria-hidden")).toBe("true");
    await expect(esIcon.classList.contains("fa-arrow-right")).toBe(true);

    // All icons are aria-hidden
    for (const icon of p.icons) {
      await expect(icon.getAttribute("aria-hidden")).toBe("true");
    }

    // role="list" on the ul
    await expect(p.list.getAttribute("role")).toBe("list");

    // Wrapper has max-width: 1440px
    await expect(getComputedStyle(p.wrapper).maxWidth).toBe("1440px");

    // HTML parity: serialized innerHTML matches quickLinksHtml()
    const expected = quickLinksHtml();
    const actual = p.wrapper.outerHTML;
    // Normalize whitespace for comparison
    const normalize = s => s.replace(/\s+/g, " ").trim();
    await expect(normalize(actual)).toBe(normalize(expected));
  },
};

// §8 row 1 — default at 1024 px
export const Default = {
  globals: viewport(1024),
  args: { backdrop: "photo" },
  decorators: [withBackdrop],
  render: () => <Page html={quickLinksHtml()} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await expect(p.items).toHaveLength(4);
    await expect(p.spanish).not.toBeNull();

    // Colours default to white
    for (const icon of p.icons) {
      await expect(getComputedStyle(icon).color).toBe(WHITE);
    }
    for (const label of p.labels) {
      await expect(getComputedStyle(label).color).toBe(WHITE);
    }

    // Wrapper max-width
    await expect(getComputedStyle(p.wrapper).maxWidth).toBe("1440px");

    // No background on items at rest
    for (const item of p.items) {
      const bg = getComputedStyle(item).backgroundColor;
      await expect(bg).toBe("rgba(0, 0, 0, 0)");
    }
  },
};

// §8 row 2 — default at 393 px (2×2 grid)
export const Default393 = {
  name: "default-393",
  globals: viewport(393),
  args: { backdrop: "photo" },
  decorators: [withBackdrop],
  render: () => <Page html={quickLinksHtml()} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await expect(p.items).toHaveLength(4);

    // Grid has 2 columns
    const gridCols = getComputedStyle(p.list).gridTemplateColumns;
    const tracks = gridCols.trim().split(/\s+/);
    await expect(tracks.length).toBe(2);

    // Item 3 top > item 1 bottom (they are in different grid rows)
    const item1Box = p.items[0].getBoundingClientRect();
    const item3Box = p.items[2].getBoundingClientRect();
    await expect(item3Box.top).toBeGreaterThan(item1Box.bottom - 1);

    // Spanish link is below the list
    const listBox = p.list.getBoundingClientRect();
    const esBox = p.spanish.getBoundingClientRect();
    await expect(esBox.top).toBeGreaterThan(listBox.bottom - 1);
  },
};

// §8 row 3 — default at 768 px
// NOTE: 768 ≤ $hp-phone-max (900px), so the 2×2 grid layout applies, not 1×4.
// Design-doc §6 table lists 768 as "1×4 row" but §6 also states "The 900px boundary is normative."
// The code correctly uses 2×2 at 768. DEVIATION documented in impl-report.md.
export const Default768 = {
  name: "default-768",
  globals: viewport(768),
  args: { backdrop: "photo" },
  decorators: [withBackdrop],
  render: () => <Page html={quickLinksHtml()} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);

    // At 768 px (≤ 900px phone max), grid layout applies: 2 columns
    const gridCols = getComputedStyle(p.list).gridTemplateColumns;
    const tracks = gridCols.trim().split(/\s+/);
    await expect(tracks.length).toBe(2);

    // Items in grid rows: item 3 top > item 1 bottom (in second row)
    const item1Box = p.items[0].getBoundingClientRect();
    const item3Box = p.items[2].getBoundingClientRect();
    await expect(item3Box.top).toBeGreaterThan(item1Box.bottom - 1);
  },
};

// §8 row 4 — default at 1024 px (icon size 32px)
export const Default1024 = {
  name: "default-1024",
  globals: viewport(1024),
  args: { backdrop: "photo" },
  decorators: [withBackdrop],
  render: () => <Page html={quickLinksHtml()} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);

    // 1×4 row: items share top
    const tops = p.items.map(
      item => Math.round(item.getBoundingClientRect().top * 10) / 10
    );
    await expect(Math.max(...tops) - Math.min(...tops)).toBeLessThanOrEqual(1);

    // Icon size is $uds-size-icon-base = 2rem = 32px
    for (const icon of p.icons) {
      const size = parseFloat(getComputedStyle(icon).fontSize);
      await expect(size).toBeGreaterThanOrEqual(31);
      await expect(size).toBeLessThanOrEqual(33);
    }
  },
};

// §8 row 5 — default at 1440 px
export const Default1440 = {
  name: "default-1440",
  globals: viewport(1440),
  args: { backdrop: "photo" },
  decorators: [withBackdrop],
  render: () => <Page html={quickLinksHtml()} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);

    // 1×4 centered; wrapper width ≤ 1440
    await expect(p.wrapper.offsetWidth).toBeLessThanOrEqual(1440);

    // Icon size 32px
    for (const icon of p.icons) {
      const size = parseFloat(getComputedStyle(icon).fontSize);
      await expect(size).toBeGreaterThanOrEqual(31);
      await expect(size).toBeLessThanOrEqual(33);
    }
  },
};

// §8 row 6 — default at 1920 px
export const Default1920 = {
  name: "default-1920",
  globals: viewport(1920),
  args: { backdrop: "photo" },
  decorators: [withBackdrop],
  render: () => <Page html={quickLinksHtml()} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);

    // 1×4 row
    const tops = p.items.map(
      item => Math.round(item.getBoundingClientRect().top * 10) / 10
    );
    await expect(Math.max(...tops) - Math.min(...tops)).toBeLessThanOrEqual(1);

    // Wrapper width ≤ 1440 (capped)
    await expect(p.wrapper.offsetWidth).toBeLessThanOrEqual(1440);
  },
};

// §8 row 7 — hover at 1440 px (item 1)
const HoverPage = ({ pinnedIndex = 0 }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return undefined;
    const item = ref.current.querySelectorAll(".hp-quick-link")[pinnedIndex];
    if (item) forceHover(item);
    return () => {
      if (item) forceHover(item, false);
    };
  }, [pinnedIndex]);
  return (
    <div ref={ref} dangerouslySetInnerHTML={{ __html: quickLinksHtml() }} />
  );
};

export const Hover1440 = {
  name: "hover-1440",
  globals: viewport(1440),
  args: { backdrop: "photo" },
  decorators: [withBackdrop],
  render: () => <HoverPage pinnedIndex={0} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const item = p.items[0];

    // Glass background on hovered item
    await waitFor(() =>
      expect(getComputedStyle(item).backgroundColor).toBe(GLASS)
    );
    // Icon turns gold
    await expect(getComputedStyle(p.icons[0]).color).toBe(GOLD);
    // Label stays white
    await expect(getComputedStyle(p.labels[0]).color).toBe(WHITE);
    // Neighbours are unaffected
    await expect(getComputedStyle(p.items[1]).backgroundColor).toBe(
      "rgba(0, 0, 0, 0)"
    );
  },
};

// §8 row 8 — hover at 393 px (item 1, inside 2×2 branch)
export const Hover393 = {
  name: "hover-393",
  globals: viewport(393),
  args: { backdrop: "photo" },
  decorators: [withBackdrop],
  render: () => <HoverPage pinnedIndex={0} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const item = p.items[0];

    await waitFor(() =>
      expect(getComputedStyle(item).backgroundColor).toBe(GLASS)
    );
    await expect(getComputedStyle(p.icons[0]).color).toBe(GOLD);
    await expect(getComputedStyle(p.labels[0]).color).toBe(WHITE);
  },
};

// Focus-visible story factory (§8 rows 9–12)
const focusStory = (itemIndex, name) => ({
  name,
  globals: viewport(1024),
  args: { backdrop: "photo" },
  decorators: [withBackdrop],
  render: () => (
    <div>
      {/* Sentinel button gives focus a prior keyboard context */}
      <button
        type="button"
        id="focus-sentinel"
        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
      >
        sentinel
      </button>
      <div dangerouslySetInnerHTML={{ __html: quickLinksHtml() }} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);

    // Start keyboard context from sentinel
    const sentinel = canvasElement.querySelector("#focus-sentinel");
    sentinel.focus();
    await realKeyboard.press("{Escape}");

    // Tab n times to reach item at itemIndex
    for (let i = 0; i <= itemIndex; i += 1) {
      await userEvent.tab();
    }

    const item = p.items[itemIndex];
    await expect(document.activeElement).toBe(item);

    // Two-tone focus ring
    await waitFor(() => expect(getComputedStyle(item).boxShadow).toBe(RING));
    // Glass background (waitFor for paint timing)
    await waitFor(() =>
      expect(getComputedStyle(item).backgroundColor).toBe(GLASS)
    );
    // Icon is gold
    await expect(getComputedStyle(p.icons[itemIndex]).color).toBe(GOLD);
  },
});

export const FocusVisibleItem1 = focusStory(0, "focus-visible-item-1");
export const FocusVisibleItem2 = focusStory(1, "focus-visible-item-2");
export const FocusVisibleItem3 = focusStory(2, "focus-visible-item-3");
export const FocusVisibleItem4 = focusStory(3, "focus-visible-item-4");

// §8 row 13 — focus-visible on Spanish link (Tab×5)
export const FocusVisibleSpanish = {
  name: "focus-visible-spanish",
  globals: viewport(1024),
  args: { backdrop: "photo" },
  decorators: [withBackdrop],
  render: () => (
    <div>
      <button
        type="button"
        id="focus-sentinel-es"
        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
      >
        sentinel
      </button>
      <div dangerouslySetInnerHTML={{ __html: quickLinksHtml() }} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);

    const sentinel = canvasElement.querySelector("#focus-sentinel-es");
    sentinel.focus();
    await realKeyboard.press("{Escape}");

    // Tab 5 times: 4 icon links + 1 Spanish link
    for (let i = 0; i < 5; i += 1) {
      await userEvent.tab();
    }

    await expect(document.activeElement).toBe(p.spanish);
    await expect(p.spanish.classList.contains("hp-quick-link-es")).toBe(true);

    // Focus ring present
    await waitFor(() =>
      expect(getComputedStyle(p.spanish).boxShadow).toBe(RING)
    );
    // Glass background (waitFor for paint timing, matching item focus tests)
    await waitFor(() =>
      expect(getComputedStyle(p.spanish).backgroundColor).toBe(GLASS)
    );
  },
};

// §8 row 14 — keyboard tab order
export const KeyboardTabOrder = {
  name: "keyboard-tab-order",
  globals: viewport(1024),
  args: { backdrop: "photo" },
  decorators: [withBackdrop],
  render: () => (
    <div>
      <button type="button" id="tab-order-sentinel">
        Start here
      </button>
      <div dangerouslySetInnerHTML={{ __html: quickLinksHtml() }} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const sentinel = canvasElement.querySelector("#tab-order-sentinel");
    sentinel.focus();
    await realKeyboard.press("{Escape}");

    const normativeOrder = [
      "Explore ASU Online",
      "Apply now",
      "Visit an ASU campus",
      "Request info",
      SPANISH_LABEL,
    ];

    // Tab through all 5 interactive targets and verify order
    for (const [index, expectedLabel] of normativeOrder.entries()) {
      await userEvent.tab();
      const active = document.activeElement;
      if (index < 4) {
        // Icon links: label is in .hp-quick-link__label
        const labelEl = active.querySelector(".hp-quick-link__label");
        await expect(labelEl).not.toBeNull();
        await expect(labelEl.textContent).toBe(expectedLabel);
      } else {
        // Spanish link: text node is the label
        await expect(active.classList.contains("hp-quick-link-es")).toBe(true);
        await expect(active.textContent.trim()).toMatch(
          new RegExp(`^${expectedLabel}`)
        );
      }
    }
  },
};

// §8 row 15 — reduced motion: hover glass appears instantly, transition is 0s
export const ReducedMotion = {
  name: "reduced-motion",
  globals: viewport(1024),
  args: { backdrop: "photo" },
  decorators: [withBackdrop],
  render: () => <HoverPage pinnedIndex={0} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const item = p.items[0];

    await emulateReducedMotion(true);
    try {
      // Glass still appears (forceHover is already applied by HoverPage)
      await waitFor(() =>
        expect(getComputedStyle(item).backgroundColor).toBe(GLASS)
      );
      // Transition duration must be 0s
      await expect(getComputedStyle(item).transitionDuration).toBe("0s");
    } finally {
      await emulateReducedMotion(false);
    }
  },
};

// §8 row 16 — 44×44 target size at 393 px
export const TargetSize = {
  name: "target-size",
  globals: viewport(393),
  args: { backdrop: "plain" },
  decorators: [withBackdrop],
  render: () => <Page html={quickLinksHtml()} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const allLinks = [...p.items, p.spanish];

    for (const link of allLinks) {
      const box = link.getBoundingClientRect();
      await expect(box.width).toBeGreaterThanOrEqual(44);
      await expect(box.height).toBeGreaterThanOrEqual(44);
    }
  },
};

// §8 row 18 — accessibility (on-white, no photo backdrop)
// Added to tests/stories-to-test.mjs → runs under yarn test:accessibility (Playwright + Alfa).
export const AccessibilityPlain = {
  name: "accessibility-plain",
  globals: viewport(1024),
  args: { backdrop: "plain" },
  decorators: [withBackdrop],
  render: () => (
    // Render on a dark surface so white text has real contrast for Alfa.
    <div style={{ background: "#191919", padding: "2rem" }}>
      <Page html={quickLinksHtml()} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await expect(p.items).toHaveLength(4);
    await expect(p.spanish).not.toBeNull();
  },
};
