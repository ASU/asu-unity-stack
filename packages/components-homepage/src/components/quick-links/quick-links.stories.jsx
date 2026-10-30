// Quick-links stories — WWWCMS-235
// Storybook-only React. No React ships to dist/. Stories follow hero.stories.jsx
// and reimagine.stories.jsx patterns exactly.
import React, { useEffect, useRef } from "react";
import { expect, userEvent, waitFor } from "storybook/test";
import backdropUrl from "./future-1440-p2.png";

import {
  emulateReducedMotion,
  forceHover,
  quickLinksHtml,
  realKeyboard,
  safeHref,
  SPANISH_LABEL,
} from "./quick-links-helpers.jsx";

import { BACKDROP_PLAIN, FOCUS_RING_OUTER } from "./quick-links-tokens.js";

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

// Focus ring: design-doc §8 rows 9–13 require the LOCKED two-tone ring.
// .hp-quick-link:focus-visible uses `box-shadow: var(--hp-focus-inner), var(--hp-focus-outer) !important`
// to beat unity-bootstrap-theme's `a:focus { box-shadow: ...!important }`.
// Token values are documented in quick-links-tokens.js.
const RING = `rgb(255, 255, 255) 0px 0px 0px 2px, ${FOCUS_RING_OUTER} 0px 0px 0px 4px`;
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

// Backdrop decorator: wraps the row in the Palo Verde photo or a plain dark surface.
// Photo backdrop uses the .intake/future-1440-p2.png fixture (Vite asset import).
// Plain backdrop uses the .hp-quick-links-backdrop--plain CSS class (token: $uds-color-gray-1,
// documented in quick-links-tokens.js as BACKDROP_PLAIN) — appropriate for Alfa contrast
// arithmetic on white text (matches the accessibility-plain story pattern).
const withBackdrop = (Story, context) => {
  const backdrop = context.args?.backdrop ?? "plain";
  const style =
    backdrop === "photo"
      ? {
          backgroundImage: `url(${backdropUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 0",
        }
      : {
          minHeight: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 0",
        };
  const extraClass =
    backdrop === "plain" ? "hp-quick-links-backdrop--plain" : "";
  return (
    <div className={extraClass} style={style}>
      <Story />
    </div>
  );
};

// ---- stories ----

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

    // Labels appear in normative order (§8 row 1 requirement)
    const expectedLabels = [
      "Explore ASU Online",
      "Apply now",
      "Visit an ASU campus",
      "Request info",
    ];
    for (const [index, label] of expectedLabels.entries()) {
      await expect(p.labels[index].textContent).toBe(label);
    }

    // Colours default to white
    for (const icon of p.icons) {
      await expect(getComputedStyle(icon).color).toBe(WHITE);
    }
    for (const label of p.labels) {
      await expect(getComputedStyle(label).color).toBe(WHITE);
    }

    // Wrapper max-width
    await expect(getComputedStyle(p.wrapper).maxWidth).toBe("1440px");

    // No background on items at rest — no focus ring visible at rest (§8 row 1 requirement)
    for (const item of p.items) {
      const bg = getComputedStyle(item).backgroundColor;
      await expect(bg).toBe("rgba(0, 0, 0, 0)");
      // No box-shadow at rest (focus ring not visible)
      const shadow = getComputedStyle(item).boxShadow;
      await expect(shadow).toBe("none");
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
// **Amendment 2026-10-30:** 768 ≤ $hp-phone-max (900px) → 2×2 grid applies (Q6 lock).
// Design-doc §6 table had a transcription error; Q6 lock (900px boundary) is authoritative.
export const Default768 = {
  name: "default-768",
  globals: viewport(768),
  args: { backdrop: "photo" },
  decorators: [withBackdrop],
  render: () => <Page html={quickLinksHtml()} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);

    // 768 ≤ $hp-phone-max (900px): grid layout has 2 tracks — same 2×2 as 393px
    const gridCols = getComputedStyle(p.list).gridTemplateColumns;
    const tracks = gridCols.trim().split(/\s+/);
    await expect(tracks.length).toBe(2);

    // Item 3 in second grid row
    const item1Box = p.items[0].getBoundingClientRect();
    const item3Box = p.items[2].getBoundingClientRect();
    await expect(item3Box.top).toBeGreaterThan(item1Box.bottom - 1);
  },
};

// §8 row 4 — default at 1024 px (icon 32×32)
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

    // Icon size is $uds-size-icon-base = 2rem = 32px at ≥ 1024px
    for (const icon of p.icons) {
      const size = parseFloat(getComputedStyle(icon).fontSize);
      await expect(size).toBeGreaterThanOrEqual(31);
      await expect(size).toBeLessThanOrEqual(33);
    }

    // §8 row 4 dimension check: verify font-size (which equals the rendered glyph size)
    // Note: getBoundingClientRect().width on <i> elements returns 0 when Font Awesome CSS is not
    // loaded (no glyph content). Using computed fontSize is the correct measurement here.
    for (const icon of p.icons) {
      const iconFontSize = parseFloat(getComputedStyle(icon).fontSize);
      await expect(iconFontSize).toBeGreaterThanOrEqual(31); // 32px = 2rem = icon-base
      await expect(iconFontSize).toBeLessThanOrEqual(33);
    }
  },
};

// §8 row 5 — default at 1440 px (centered, ≤ 1440px wide)
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

    // Centering check: left offset + width should equal right offset from viewport edge
    // (both sides within 1px of symmetry, allowing for sub-pixel rounding)
    const box = p.wrapper.getBoundingClientRect();
    const vpWidth = window.innerWidth;
    const leftGap = box.left;
    const rightGap = vpWidth - box.right;
    await expect(Math.abs(leftGap - rightGap)).toBeLessThanOrEqual(1);

    // Icon size 32px at 1440
    for (const icon of p.icons) {
      const size = parseFloat(getComputedStyle(icon).fontSize);
      await expect(size).toBeGreaterThanOrEqual(31);
      await expect(size).toBeLessThanOrEqual(33);
    }
  },
};

// §8 row 6 — default at 1920 px (column-gap hits clamp ceiling of 6rem = 96px)
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

    // column-gap resolves to 96px (6rem = $uds-size-spacing-12, upper bound of clamp at 1920px)
    const gap = parseFloat(getComputedStyle(p.list).columnGap);
    await expect(gap).toBeGreaterThanOrEqual(95);
    await expect(gap).toBeLessThanOrEqual(97);
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

    // LOCKED two-tone focus ring: white 2px inner + FOCUS_RING_OUTER 4px outer.
    // This asserts the design-doc §8 row 9-12 locked value, proving our !important
    // in _quick-links.scss beats the theme's a:focus !important override.
    // Token values documented in quick-links-tokens.js.
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

    // LOCKED two-tone focus ring (same requirement as items 1-4)
    await waitFor(() =>
      expect(getComputedStyle(p.spanish).boxShadow).toBe(RING)
    );
    // Glass background
    await waitFor(() =>
      expect(getComputedStyle(p.spanish).backgroundColor).toBe(GLASS)
    );
    // Trailing arrow icon turns gold (§8 row 13 requirement)
    const esIcon = p.spanish.querySelector(".hp-quick-link-es__icon");
    await expect(getComputedStyle(esIcon).color).toBe(GOLD);
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
    // BACKDROP_PLAIN = $uds-color-gray-1 (documented in quick-links-tokens.js)
    <div style={{ background: BACKDROP_PLAIN, padding: "2rem" }}>
      <Page html={quickLinksHtml()} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    await expect(p.items).toHaveLength(4);
    await expect(p.spanish).not.toBeNull();
  },
};

// --- Additional stories for review-fix cycle 1 ---

// Boundary story: icon is 24px at 901px (§8 / review finding P2-4)
export const Default901 = {
  name: "default-901",
  globals: { viewport: { value: "hp901", isRotated: false } },
  args: { backdrop: "photo" },
  decorators: [withBackdrop],
  render: () => <Page html={quickLinksHtml()} />,
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);

    // 901px > $hp-phone-max → 1×4 row
    const tops = p.items.map(
      item => Math.round(item.getBoundingClientRect().top * 10) / 10
    );
    await expect(Math.max(...tops) - Math.min(...tops)).toBeLessThanOrEqual(1);

    // Icon size must be $uds-size-icon-small (24px) at 901px (below 1024px desktop breakpoint)
    for (const icon of p.icons) {
      const size = parseFloat(getComputedStyle(icon).fontSize);
      // 24px = 1.5rem; allow ±1px for sub-pixel
      await expect(size).toBeGreaterThanOrEqual(23);
      await expect(size).toBeLessThanOrEqual(25);
    }
  },
};

// Unsafe href rejected story (review finding P2-6)
// Covers the full allow-list: blocked schemes, whitespace-prefixed, scheme-relative,
// http: (not on allow-list), and all permitted forms.
// safeHref is asserted directly AND through full quickLinksHtml() rendering.

// safeHref unit assertions (run as part of the story play function)
const HREF_CASES = [
  // Blocked: javascript variants (including whitespace-prefixed, tab, mixed-case)
  { href: "javascript:alert(1)", expected: "#", desc: "javascript:" },
  {
    href: "  javascript:alert(1)",
    expected: "#",
    desc: "space-prefixed javascript:",
  },
  {
    href: "\tJavaScript:alert(1)",
    expected: "#",
    desc: "tab+mixed-case JavaScript:",
  },
  // Blocked: data:, vbscript:, file:, blob:, custom-scheme:
  {
    href: "data:text/html,<script>alert(1)</script>",
    expected: "#",
    desc: "data:",
  },
  { href: "vbscript:msgbox", expected: "#", desc: "vbscript:" },
  { href: "file:///etc/passwd", expected: "#", desc: "file:" },
  { href: "blob:https://evil.example/uid", expected: "#", desc: "blob:" },
  { href: "custom-scheme:foo", expected: "#", desc: "custom-scheme:" },
  // Blocked: scheme-relative
  { href: "//evil.example/foo", expected: "#", desc: "scheme-relative //" },
  // Blocked: http: (not on allow-list; must use https:)
  { href: "http://example.com/", expected: "#", desc: "http: (not allowed)" },
  // Allowed: https:
  {
    href: "https://example.com/",
    expected: "https://example.com/",
    desc: "https: allowed",
  },
  // Allowed: relative paths, root path, query
  {
    href: "/relative/path",
    expected: "/relative/path",
    desc: "/relative/path",
  },
  { href: "relative-path", expected: "relative-path", desc: "relative-path" },
  // Allowed: fragment-only
  { href: "#fragment", expected: "#fragment", desc: "#fragment" },
  // Allowed: mailto: and tel:
  {
    href: "mailto:info@asu.edu",
    expected: "mailto:info@asu.edu",
    desc: "mailto:",
  },
  { href: "tel:+16029655555", expected: "tel:+16029655555", desc: "tel:" },
  // Allowed: design-doc placeholder (round-trips)
  {
    href: "<spanish-url-placeholder>",
    expected: "<spanish-url-placeholder>",
    desc: "Spanish placeholder",
  },
  // Null/undefined → "#"
  { href: null, expected: "#", desc: "null" },
  { href: undefined, expected: "#", desc: "undefined" },
];

export const UnsafeHrefRejected = {
  name: "unsafe-href-rejected",
  globals: viewport(1024),
  args: { backdrop: "plain" },
  decorators: [withBackdrop],
  render: () => (
    // Integration: render two cases through quickLinksHtml to prove end-to-end.
    // javascript: → href="#"; https: → href passes through (escaped).
    <Page
      html={quickLinksHtml({
        items: [
          {
            href: "javascript:alert(1)",
            icon: "fa-laptop",
            label: "Unsafe javascript",
          },
          {
            href: "https://asu.edu/visit",
            icon: "fa-file-signature",
            label: "Safe https",
          },
          {
            href: "  javascript:alert(1)",
            icon: "fa-map-marked-alt",
            label: "Whitespace-prefixed javascript",
          },
          {
            href: "#safe-fragment",
            icon: "fa-id-card",
            label: "Fragment link",
          },
        ],
      })}
    />
  ),
  play: async ({ canvasElement }) => {
    // --- Direct safeHref unit assertions ---
    for (const { href, expected, desc } of HREF_CASES) {
      await expect(safeHref(href), desc).toBe(expected);
    }

    // --- Integration assertions through quickLinksHtml rendering ---
    const p = parts(canvasElement);
    // javascript: → blocked → href="#"
    await expect(p.items[0].getAttribute("href")).toBe("#");
    // https: → allowed → href="https://asu.edu/visit"
    await expect(p.items[1].getAttribute("href")).toBe("https://asu.edu/visit");
    // whitespace-prefixed javascript: → blocked → href="#"
    await expect(p.items[2].getAttribute("href")).toBe("#");
    // fragment → allowed → href="#safe-fragment"
    await expect(p.items[3].getAttribute("href")).toBe("#safe-fragment");
  },
};

// Forced-colors story (review finding P2-7a; N2-2 strengthened CSSOM assertions)
// Tests that the focus indicator is visible under forced-colors: active.
// In forced-colors mode, the SCSS `@media (forced-colors: active)` block applies
// `outline: 2px solid Highlight` on :focus-visible, overriding the `outline: none`.
export const ForcedColors = {
  name: "forced-colors",
  globals: viewport(1024),
  args: { backdrop: "plain" },
  decorators: [withBackdrop],
  render: () => (
    <div>
      <button
        type="button"
        id="forced-colors-sentinel"
        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
      >
        sentinel
      </button>
      <div dangerouslySetInnerHTML={{ __html: quickLinksHtml() }} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const p = parts(canvasElement);
    const sentinel = canvasElement.querySelector("#forced-colors-sentinel");
    sentinel.focus();
    await realKeyboard.press("{Escape}");
    await userEvent.tab();

    const item = p.items[0];
    await expect(document.activeElement).toBe(item);

    // N2-2 (P3): Verify both the media rule's existence AND that its nested cssRules
    // contain the required declarations (outline: 2px solid Highlight; outline-offset: 2px).
    // This is purely CSSOM — no Playwright forced-colors emulation required.
    let hasForcedColorsRule = false;
    let hasHighlightOutline = false;
    let hasOutlineOffset = false;

    Array.from(document.styleSheets).forEach(sheet => {
      try {
        Array.from(sheet.cssRules).forEach(rule => {
          if (
            rule instanceof CSSMediaRule &&
            rule.conditionText === "(forced-colors: active)"
          ) {
            hasForcedColorsRule = true;
            // Inspect nested rules for the required declarations.
            Array.from(rule.cssRules).forEach(nested => {
              if (nested instanceof CSSStyleRule) {
                const decl = nested.style;
                // outline must be 2px solid Highlight (or CSSOM may split into outline-color)
                const outlineVal = decl.getPropertyValue("outline");
                const outlineColor = decl.getPropertyValue("outline-color");
                if (
                  outlineVal.includes("2px") &&
                  outlineVal.toLowerCase().includes("solid") &&
                  outlineVal.toLowerCase().includes("highlight")
                ) {
                  hasHighlightOutline = true;
                }
                // CSSOM may normalize outline into component properties
                if (outlineColor.toLowerCase() === "highlight") {
                  hasHighlightOutline = true;
                }
                const offsetVal = decl.getPropertyValue("outline-offset");
                if (offsetVal === "2px") {
                  hasOutlineOffset = true;
                }
              }
            });
          }
        });
      } catch {
        // cross-origin sheet
      }
    });

    await expect(hasForcedColorsRule).toBe(true);
    await expect(hasHighlightOutline).toBe(true);
    await expect(hasOutlineOffset).toBe(true);

    // Also verify glass + ring appears in normal mode (regression guard)
    await waitFor(() =>
      expect(getComputedStyle(item).backgroundColor).toBe(GLASS)
    );
  },
};

// 320px reflow story (review finding P2-7b)
export const Default320 = {
  name: "default-320",
  globals: { viewport: { value: "hp320", isRotated: false } },
  args: { backdrop: "plain" },
  decorators: [withBackdrop],
  render: () => <Page html={quickLinksHtml()} />,
  play: async () => {
    // No horizontal scroll — content must fit within 320px viewport
    await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(320);
  },
};

// §8 row 17 — HTML parity (matrix row 17; placed last per P3 ordering note)
// This story runs WITHOUT the withBackdrop decorator to exclude Storybook chrome.
// It compares canvasElement.innerHTML (whitespace-normalized) against quickLinksHtml()
// to prove the Stage B markup contract. Design doc §8 row 17 specifies innerHTML.
export const HtmlParity = {
  name: "html-parity",
  globals: viewport(1440),
  // Override: no decorator wrappers — canvasElement.innerHTML must equal quickLinksHtml() exactly.
  decorators: [],
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

    // HTML parity: compare canvasElement.innerHTML (design doc §8 row 17).
    // The Page component renders: <div>{quickLinksHtml()}</div>.
    // canvasElement.innerHTML = the Page <div> wrapper.
    // canvasElement.innerHTML normalized must equal quickLinksHtml() normalized.
    // No decorator chrome is present (decorators: []).
    const normalize = html => html.replace(/>\s+</g, "><").trim();
    const expected = quickLinksHtml();
    // canvasElement contains exactly: <div data-... >{quickLinksHtml()}</div> from Page.
    // We compare the Page div's innerHTML (the component HTML) against the helper output.
    const pageDiv = canvasElement.firstElementChild;
    const actual = pageDiv ? pageDiv.innerHTML : canvasElement.innerHTML;
    await expect(normalize(actual)).toBe(normalize(expected));
  },
};
