import React, { useEffect, useRef } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";

import {
  emulateForcedColors,
  realPointer,
} from "../rankings-cards/rankings-cards-helpers.jsx";
import {
  emulateReducedMotion,
  resizeViewport,
} from "../reimagine/reimagine-helpers.jsx";
import { CharterBubbles } from "./CharterBubbles.jsx";
import { DEFAULT_CHARTER_BUBBLES } from "./charter-bubbles-data.js";
import { initCharterBubbles } from "./charter-bubbles.js";
import {
  captureCharterBubblesContract,
  charterBubblesStaticHtml,
} from "./charter-bubbles.test-fixture.js";
import { circlesOverlap } from "./charter-bubbles-geometry.js";

import "./_charter-bubbles.storybook.scss";

export default {
  title: "Homepage/Charter bubbles",
  component: CharterBubbles,
  parameters: {
    docs: {
      description: {
        component:
          "Five ASU Charter facts rendered as one HTML-first list. Above 768px the list is a 3+2 overlapping bubble cluster; at 768px and below the same list becomes a center-snapped carousel. During a drag, the current bubble remains open until the user releases it. A swipe or continuous wheel gesture advances at most one neighboring bubble; directly selecting any closed bubble scrolls it to center. Even a small wheel delta activates the neighboring bubble, while the rest of that uninterrupted wheel stream is ignored. If the carousel settles on a different bubble, the current bubble closes, the row aligns, and the centered destination bubble opens. If the same bubble remains active, its open state is left untouched. The standalone component follows the Charter image/statement section and owns its overlap reservation. No accordion markup or behavior is used. Links remain reviewed # placeholders until content owners supply destinations.",
      },
    },
  },
};

const viewport = width => ({
  globals: {
    viewport: { value: `hp${width}`, isRotated: false },
  },
});

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const REDUCED_MOTION_STORY_ATTRIBUTE =
  "data-charter-bubbles-reduced-motion-story";

const installReducedMotionStoryEnvironment = async () => {
  const nativeMatchMedia = window.matchMedia;
  const root = document.documentElement;
  const hadMarker = root.hasAttribute(REDUCED_MOTION_STORY_ATTRIBUTE);
  const previousMarker = root.getAttribute(REDUCED_MOTION_STORY_ATTRIBUTE);
  let cleaned = false;

  await emulateReducedMotion(true);

  const listeners = new Set();
  const reducedMotionList = {
    matches: true,
    media: REDUCED_MOTION_QUERY,
    onchange: null,
    addEventListener(type, listener) {
      if (type === "change") listeners.add(listener);
    },
    removeEventListener(type, listener) {
      if (type === "change") listeners.delete(listener);
    },
    addListener(listener) {
      listeners.add(listener);
    },
    removeListener(listener) {
      listeners.delete(listener);
    },
    dispatchEvent(event) {
      for (const listener of listeners) listener.call(this, event);
      if (typeof this.onchange === "function") this.onchange(event);
      return !event.defaultPrevented;
    },
  };

  window.matchMedia = query =>
    query === REDUCED_MOTION_QUERY
      ? reducedMotionList
      : nativeMatchMedia.call(window, query);
  root.setAttribute(REDUCED_MOTION_STORY_ATTRIBUTE, "");

  return async () => {
    if (cleaned) return;
    cleaned = true;
    window.matchMedia = nativeMatchMedia;
    if (hadMarker) {
      root.setAttribute(REDUCED_MOTION_STORY_ATTRIBUTE, previousMarker ?? "");
    } else {
      root.removeAttribute(REDUCED_MOTION_STORY_ATTRIBUTE);
    }
    await emulateReducedMotion(false);
  };
};

const assertMinimumBubbleTextSize = root => {
  const selectors = [
    ".hp-charter-bubble__front-label",
    ".hp-charter-bubble__heading",
    ".hp-charter-bubble__detail",
    ".hp-charter-bubble__link",
  ];

  for (const selector of selectors) {
    const elements = root.querySelectorAll(selector);
    expect(elements).toHaveLength(5);
    for (const element of elements) {
      expect(
        parseFloat(getComputedStyle(element).fontSize),
        `${selector} must be at least 16px`
      ).toBeGreaterThanOrEqual(16);
    }
  }
};

const TypographyPage = () => (
  <>
    <div data-typography-enhanced="">
      <ReactPage initialOpenId="employability" />
    </div>
    <div data-typography-unenhanced="">
      <StaticPage
        enhance={false}
        html={charterBubblesStaticHtml({
          instanceId: "typography-unenhanced",
          openId: "employability",
        })}
      />
    </div>
  </>
);

const assertTypographyBoundary = async (
  canvasElement,
  layout,
  { checkContentFit = false } = {}
) => {
  const root = canvasElement.querySelector(
    "[data-typography-enhanced] [data-charter-bubbles]"
  );
  const unenhancedRoot = canvasElement.querySelector(
    "[data-typography-unenhanced] [data-charter-bubbles]"
  );
  await waitFor(() => {
    expect(root).toHaveAttribute("data-enhanced", "true");
    expect(root).toHaveAttribute("data-layout", layout);
  });
  expect(unenhancedRoot).not.toHaveAttribute("data-enhanced");
  assertMinimumBubbleTextSize(root);
  assertMinimumBubbleTextSize(unenhancedRoot);
  if (!checkContentFit) return;

  if (!root.hasAttribute("data-open-id")) {
    root.querySelector("[data-charter-bubble-open]").click();
  }
  await waitFor(() =>
    expect(root).toHaveAttribute("data-open-id", "employability")
  );

  await waitFor(() => {
    const panel = root.querySelector(".is-open [data-charter-bubble-panel]");
    expect(panel).not.toBeNull();
    for (const content of panel.querySelectorAll(
      ".hp-charter-bubble__heading, .hp-charter-bubble__detail, .hp-charter-bubble__link"
    )) {
      const bounds = content.getBoundingClientRect();
      expect(bounds.left).toBeGreaterThanOrEqual(0);
      expect(bounds.right).toBeLessThanOrEqual(
        document.documentElement.clientWidth
      );
    }
  });
};

const StoryFrame = ({ children }) => (
  <div className="charter-bubbles-story">
    <a
      id="charter-bubbles-focus-start"
      className="charter-bubbles-story__focus-probe"
      href="#charter-bubbles-focus-end"
    >
      Focus test: page start
    </a>
    <section className="charter-bubbles-story__main">
      <div>
        <p className="charter-bubbles-story__eyebrow">The ASU Charter</p>
        <h2>Measured by whom we include and how they succeed</h2>
      </div>
    </section>
    {children}
    <section className="charter-bubbles-story__following">
      <div>Following content begins after the reserved expansion area.</div>
      <a
        id="charter-bubbles-focus-end"
        className="charter-bubbles-story__focus-probe"
        href="#charter-bubbles-focus-start"
      >
        Focus test: page end
      </a>
    </section>
  </div>
);

const ReactPage = props => (
  <StoryFrame>
    <CharterBubbles instanceId="storybook-charter" {...props} />
  </StoryFrame>
);

const EnhancedMarkup = ({
  html = charterBubblesStaticHtml(),
  enhance = true,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!enhance) return undefined;
    return initCharterBubbles(ref.current);
  }, [enhance, html]);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
};

const StaticPage = props => (
  <StoryFrame>
    <EnhancedMarkup {...props} />
  </StoryFrame>
);

const NoScriptThresholdPage = () => (
  <div>
    {[
      ["t2-below", 776, [1, 1, 1, 1, 1]],
      ["t2-at", 777, [2, 1, 2]],
      ["t3-below", 1129, [2, 1, 2]],
      ["t3-at", 1130, [3, 2]],
      ["t5-below", 1834, [3, 2]],
      ["t5-at", 1835, [5]],
    ].map(([id, width, rows]) => (
      <div
        key={id}
        data-threshold-case={id}
        data-expected-rows={rows.join(",")}
        style={{ width }}
      >
        <EnhancedMarkup
          enhance={false}
          html={charterBubblesStaticHtml({ instanceId: `threshold-${id}` })}
        />
      </div>
    ))}
  </div>
);

const NoScriptZoomPage = () => (
  <div data-no-script-zoom-harness="" style={{ width: "100%" }}>
    <a id="charter-bubbles-focus-start" href="#charter-bubbles-zoom-end">
      Focus test: page start
    </a>
    <EnhancedMarkup
      enhance={false}
      html={charterBubblesStaticHtml({ instanceId: "no-script-zoom" })}
    />
    <span id="charter-bubbles-zoom-end" />
  </div>
);

const ParityPage = ({ openId = null }) => (
  <StoryFrame>
    <div data-parity-react="">
      <CharterBubbles instanceId="parity-react" initialOpenId={openId} />
    </div>
    <div data-parity-static="">
      <EnhancedMarkup
        html={charterBubblesStaticHtml({
          instanceId: "parity-static",
          openId,
        })}
      />
    </div>
  </StoryFrame>
);

const circleCenter = rect => ({
  x: rect.left + rect.width / 2,
  y: rect.top + rect.height / 2,
});

const groupCircleRows = entries => {
  const rows = [];
  [...entries]
    .sort((left, right) =>
      Math.abs(left.center.y - right.center.y) > 2
        ? left.center.y - right.center.y
        : left.center.x - right.center.x
    )
    .forEach(entry => {
      const row = rows.find(
        candidate => Math.abs(candidate[0].center.y - entry.center.y) <= 2
      );
      if (row) row.push(entry);
      else rows.push([entry]);
    });
  return rows.map(row => row.sort((a, b) => a.center.x - b.center.x));
};

const circleEdgeGap = (left, right) =>
  Math.hypot(left.center.x - right.center.x, left.center.y - right.center.y) -
  left.rect.width / 2 -
  right.rect.width / 2;

const focusPaint = style => {
  const outlineWidth = parseFloat(style.outlineWidth) || 0;
  const outlineOffset = parseFloat(style.outlineOffset) || 0;
  const outlineVisible =
    outlineWidth > 0 &&
    style.outlineStyle !== "none" &&
    style.outlineStyle !== "hidden" &&
    style.outlineColor !== "transparent";
  const outlineExtent = outlineVisible
    ? Math.max(0, outlineWidth + outlineOffset)
    : 0;
  const shadowExtent =
    style.boxShadow === "none"
      ? 0
      : Math.max(
          ...style.boxShadow.split(/,(?![^()]*(?:\)|$))/).map(shadow => {
            const lengths = Array.from(
              shadow.matchAll(/-?\d*\.?\d+px/g),
              match => Math.abs(parseFloat(match[0]))
            );
            const [offsetX = 0, offsetY = 0, blur = 0, spread = 0] = lengths;
            return Math.max(offsetX, offsetY) + blur + spread;
          })
        );
  return {
    extent: Math.max(outlineExtent, shadowExtent),
    signature: [
      style.outlineStyle,
      style.outlineWidth,
      style.outlineColor,
      style.boxShadow,
    ].join("|"),
  };
};

const assertLinkFocusClearance = (link, entries, links) => {
  const linkRect = link.getBoundingClientRect();
  const { extent } = focusPaint(getComputedStyle(link));
  expect(
    extent,
    `focused link must have nonzero visible focus paint: ${
      focusPaint(getComputedStyle(link)).signature
    }`
  ).toBeGreaterThan(0);
  const focusRect = {
    left: linkRect.left - extent,
    right: linkRect.right + extent,
    top: linkRect.top - extent,
    bottom: linkRect.bottom + extent,
  };
  expect(focusRect.left).toBeGreaterThanOrEqual(-1);
  expect(focusRect.right).toBeLessThanOrEqual(
    document.documentElement.clientWidth + 1
  );
  const ownIndex = links.indexOf(link);
  for (const neighbor of entries.filter(entry => entry.index !== ownIndex)) {
    const closestX = Math.max(
      focusRect.left,
      Math.min(neighbor.center.x, focusRect.right)
    );
    const closestY = Math.max(
      focusRect.top,
      Math.min(neighbor.center.y, focusRect.bottom)
    );
    expect(
      Math.hypot(neighbor.center.x - closestX, neighbor.center.y - closestY)
    ).toBeGreaterThan(neighbor.rect.width / 2);
  }
};

const trustedTab = async () => {
  if (!realPointer.available) {
    await userEvent.tab();
    return;
  }
  const { userEvent: browserUserEvent } = await import("vitest/browser");
  await browserUserEvent.keyboard("{Tab}");
};

const assertNoScriptLayout = async (
  canvasElement,
  expectedRows,
  { checkPageOverflow = true, checkTabOrder = true } = {}
) => {
  const root = canvasElement.querySelector("[data-charter-bubbles]");
  const items = Array.from(root.querySelectorAll("[data-charter-bubble-item]"));
  const panels = items.map(item =>
    item.querySelector("[data-charter-bubble-panel]")
  );
  const links = items.map(item =>
    item.querySelector(".hp-charter-bubble__link")
  );
  const entries = panels.map((panel, index) => {
    const rect = panel.getBoundingClientRect();
    return { center: circleCenter(rect), index, panel, rect };
  });
  const rows = groupCircleRows(entries);

  expect(root).not.toHaveAttribute("data-layout");
  expect(root).not.toHaveClass("is-enhanced");
  expect(items).toHaveLength(5);
  expect(rows.map(row => row.length)).toEqual(expectedRows);
  expect(rows.flat().map(entry => entry.index)).toEqual([0, 1, 2, 3, 4]);

  const rootCenter = circleCenter(root.getBoundingClientRect()).x;
  for (const row of rows) {
    const rowCenter =
      row.reduce((sum, entry) => sum + entry.center.x, 0) / row.length;
    expect(rowCenter).toBeCloseTo(rootCenter, 0);
  }

  for (const entry of entries) {
    expect(entry.rect.width).toBeGreaterThan(0);
    expect(entry.rect.width).toBeCloseTo(entry.rect.height, 0);
    expect(getComputedStyle(entry.panel).borderRadius).toBe("50%");
    expect(getComputedStyle(entry.panel).overflow).not.toBe("hidden");
    expect(entry.panel).not.toHaveAttribute("aria-hidden");
    expect(entry.panel).not.toHaveAttribute("inert");

    for (const content of entry.panel.querySelectorAll(
      ".hp-charter-bubble__heading, .hp-charter-bubble__detail, .hp-charter-bubble__link"
    )) {
      const contentRect = content.getBoundingClientRect();
      expect(contentRect.left).toBeGreaterThanOrEqual(entry.rect.left);
      expect(contentRect.right).toBeLessThanOrEqual(entry.rect.right);
      expect(contentRect.top).toBeGreaterThanOrEqual(entry.rect.top);
      expect(contentRect.bottom).toBeLessThanOrEqual(entry.rect.bottom);
    }
  }

  const renderedScale = root.getBoundingClientRect().width / root.offsetWidth;
  const expectedGap = 24 * renderedScale;
  for (const row of rows) {
    for (let index = 1; index < row.length; index += 1) {
      expect(circleEdgeGap(row[index - 1], row[index])).toBeCloseTo(
        expectedGap,
        0
      );
    }
  }
  for (let rowIndex = 1; rowIndex < rows.length; rowIndex += 1) {
    const previous = rows[rowIndex - 1];
    const current = rows[rowIndex];
    for (const entry of current) {
      const nearest = [...previous]
        .sort(
          (left, right) =>
            Math.abs(left.center.x - entry.center.x) -
            Math.abs(right.center.x - entry.center.x)
        )
        .slice(0, entry.center.x === previous[0].center.x ? 1 : 2);
      for (const neighbor of nearest) {
        expect(circleEdgeGap(entry, neighbor)).toBeCloseTo(expectedGap, 0);
      }
    }
  }
  for (const selector of [
    "[data-charter-bubble-open]",
    "[data-charter-bubble-close]",
    "[data-charter-bubble-nav]",
  ]) {
    for (const control of root.querySelectorAll(selector)) {
      expect(getComputedStyle(control).display).toBe("none");
    }
  }
  for (const link of links) {
    expect(link).toBeVisible();
    expect(link.tabIndex).toBeGreaterThanOrEqual(0);
  }
  if (checkTabOrder) {
    const start = canvasElement.querySelector("#charter-bubbles-focus-start");
    start.focus();
    for (const link of links) {
      const unfocusedPaint = focusPaint(getComputedStyle(link));
      await trustedTab();
      expect(link).toHaveFocus();
      const focusedPaint = focusPaint(getComputedStyle(link));
      expect(focusedPaint.signature).not.toBe(unfocusedPaint.signature);
      assertLinkFocusClearance(link, entries, links);
    }
  }
  if (checkPageOverflow) {
    expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(
      document.documentElement.clientWidth + 1
    );
  }
  expect(
    getComputedStyle(root.querySelector(".hp-charter-bubble"))
      .transitionDuration
  ).toBe("0s");
  expect(
    getComputedStyle(root.querySelector("[data-charter-bubble-viewport]"))
      .scrollBehavior
  ).toBe("auto");

  return { entries, links, root, rows };
};

export const Default = {
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    await waitFor(() => expect(root).toHaveAttribute("data-enhanced", "true"));
    const contract = captureCharterBubblesContract(root);
    await expect(contract.itemCount).toBe(5);
    await expect(contract.listCount).toBe(1);
    await expect(contract.listLabel).toBe("ASU by the numbers");
    await expect(
      root.querySelectorAll("[data-charter-bubble-list]")
    ).toHaveLength(1);
    const firstClose = root.querySelector("[data-charter-bubble-close]");
    const closeIcon = firstClose.querySelector(
      ".hp-charter-bubble__close-icon"
    );
    await expect(firstClose).toHaveAccessibleName(
      "Close: #2 public university in the U.S. for employability"
    );
    await expect(firstClose).toHaveTextContent("");
    await expect(closeIcon).toHaveAttribute("aria-hidden", "true");
    await expect(closeIcon).toHaveAttribute("focusable", "false");
  },
};

export const StaticContract = {
  render: () => <StaticPage />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    await expect(captureCharterBubblesContract(root).itemCount).toBe(5);
    await waitFor(() => expect(root).toHaveAttribute("data-layout"));
  },
};

export const OpenResearch = {
  render: () => <ReactPage initialOpenId="undergraduate-research" />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    await expect(root).toHaveAttribute(
      "data-open-id",
      "undergraduate-research"
    );
    await expect(root.querySelectorAll(".is-open")).toHaveLength(1);
    await expect(
      root.querySelector('[data-charter-bubble-id="undergraduate-research"]')
    ).toHaveAttribute("data-charter-bubble-state", "open");
  },
};

export const NoScript = {
  name: "No script — ONE",
  tags: ["!dev", "!autodocs"],
  ...viewport(320),
  render: () => <StaticPage enhance={false} />,
  play: async ({ canvasElement }) =>
    assertNoScriptLayout(canvasElement, [1, 1, 1, 1, 1]),
};

export const NoScriptTwo = {
  name: "No script — TWO (2 / 1 / 2)",
  tags: ["!dev", "!autodocs"],
  ...viewport(768),
  render: () => <StaticPage enhance={false} />,
  play: async ({ canvasElement }) =>
    assertNoScriptLayout(canvasElement, [2, 1, 2]),
};

export const NoScriptThree = {
  name: "No script — THREE (3 / 2)",
  tags: ["!dev", "!autodocs"],
  ...viewport(1280),
  render: () => <StaticPage enhance={false} />,
  play: async ({ canvasElement }) =>
    assertNoScriptLayout(canvasElement, [3, 2]),
};

export const NoScriptFive = {
  name: "No script — FIVE",
  tags: ["!dev", "!autodocs"],
  ...viewport(1920),
  render: () => <StaticPage enhance={false} />,
  play: async ({ canvasElement }) => assertNoScriptLayout(canvasElement, [5]),
};

export const NoScriptThresholds = {
  name: "No script — threshold edges",
  tags: ["!dev", "!autodocs"],
  ...viewport(1920),
  render: () => <NoScriptThresholdPage />,
  play: async ({ canvasElement }) => {
    for (const thresholdCase of canvasElement.querySelectorAll(
      "[data-threshold-case]"
    )) {
      const root = thresholdCase.querySelector("[data-charter-bubbles]");
      const entries = Array.from(
        root.querySelectorAll("[data-charter-bubble-panel]")
      ).map((panel, index) => {
        const rect = panel.getBoundingClientRect();
        return { center: circleCenter(rect), index, panel, rect };
      });
      expect(groupCircleRows(entries).map(row => row.length)).toEqual(
        thresholdCase.dataset.expectedRows.split(",").map(Number)
      );
    }
  },
};

export const NoScriptZoom = {
  name: "No script — 200% zoom",
  tags: ["!dev", "!autodocs"],
  ...viewport(1280),
  render: () => <NoScriptZoomPage />,
  play: async ({ canvasElement }) => {
    const harness = canvasElement.querySelector(
      "[data-no-script-zoom-harness]"
    );
    const previousZoom = harness.style.zoom;
    try {
      harness.style.zoom = "2";
      await assertNoScriptLayout(canvasElement, [1, 1, 1, 1, 1], {
        checkPageOverflow: false,
      });
    } finally {
      harness.style.zoom = previousZoom;
    }
  },
};

export const NoScriptForcedColors = {
  name: "No script — forced colors",
  tags: ["!dev", "!autodocs"],
  ...viewport(1280),
  render: () => <StaticPage enhance={false} />,
  play: async ({ canvasElement }) => {
    await emulateForcedColors(true);
    try {
      const { entries } = await assertNoScriptLayout(canvasElement, [3, 2]);
      for (const { panel } of entries) {
        expect(parseFloat(getComputedStyle(panel).outlineWidth)).toBe(2);
      }
      const focusedLink = canvasElement.querySelector(
        ".hp-charter-bubble__link:focus-visible"
      );
      expect(focusedLink).not.toBeNull();
      const focusedStyle = getComputedStyle(focusedLink);
      expect(focusedStyle.outlineStyle).not.toBe("none");
      expect(parseFloat(focusedStyle.outlineWidth)).toBeGreaterThan(0);
    } finally {
      await emulateForcedColors(false);
    }
  },
};

export const HtmlParity = {
  render: () => <ParityPage />,
  play: async ({ canvasElement }) => {
    await waitFor(() =>
      expect(
        canvasElement.querySelectorAll('[data-enhanced="true"]')
      ).toHaveLength(2)
    );
    const reactContract = captureCharterBubblesContract(
      canvasElement.querySelector("[data-parity-react]")
    );
    const staticContract = captureCharterBubblesContract(
      canvasElement.querySelector("[data-parity-static]")
    );
    await expect(reactContract).toEqual(staticContract);
  },
};

export const Phone320 = {
  ...viewport(320),
  render: () => <StaticPage />,
};

export const TypographyMinimum = {
  tags: ["!dev", "!autodocs"],
  ...viewport(320),
  render: () => <TypographyPage />,
  play: async ({ canvasElement }) =>
    assertTypographyBoundary(canvasElement, "carousel", {
      checkContentFit: true,
    }),
};

export const TypographyMinimum768 = {
  tags: ["!dev", "!autodocs"],
  ...viewport(768),
  render: () => <TypographyPage />,
  play: async ({ canvasElement }) =>
    assertTypographyBoundary(canvasElement, "carousel"),
};

export const TypographyMinimum769 = {
  tags: ["!dev", "!autodocs"],
  ...viewport(769),
  render: () => <TypographyPage />,
  play: async ({ canvasElement }) =>
    assertTypographyBoundary(canvasElement, "cluster"),
};

export const HoverSizing = {
  tags: ["!dev", "!autodocs"],
  ...viewport(1440),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    const front = root.querySelector("[data-charter-bubble-open]");
    const paintedWidth = () => front.getBoundingClientRect().width;

    await expect(realPointer.available).toBe(true);
    await waitFor(() => expect(root).toHaveAttribute("data-layout", "cluster"));
    expect(
      Number(getComputedStyle(root).getPropertyValue("--hp-charter-emphasis"))
    ).toBeCloseTo(200 / 180, 5);
    await waitFor(() => expect(paintedWidth()).toBeCloseTo(180, 0));
    await realPointer.hover(front);
    await waitFor(() => expect(paintedWidth()).toBeCloseTo(200, 0));
    await realPointer.unhover(front);
    await waitFor(() => expect(paintedWidth()).toBeCloseTo(180, 0));
  },
};

export const Phone393 = {
  ...viewport(393),
  render: () => <StaticPage />,
};

export const Tablet768 = {
  ...viewport(768),
  render: () => <StaticPage />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    await waitFor(() =>
      expect(root).toHaveAttribute("data-layout", "carousel")
    );
    for (const item of root.querySelectorAll("[data-charter-bubble-item]")) {
      const styles = getComputedStyle(item);
      // At carousel layout, items are in flexbox with position: relative
      await expect(styles.position).toBe("relative");
    }

    const viewportElement = root.querySelector(
      "[data-charter-bubble-viewport]"
    );
    const horizontalCenterDifference = element => {
      const viewportRect = viewportElement.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      return Math.abs(
        elementRect.left +
          elementRect.width / 2 -
          (viewportRect.left + viewportRect.width / 2)
      );
    };
    await waitFor(() =>
      expect(
        horizontalCenterDifference(
          root.querySelector(".is-open [data-charter-bubble-panel]")
        )
      ).toBeLessThanOrEqual(1)
    );

    viewportElement.scrollLeft = viewportElement.scrollWidth;
    viewportElement.dispatchEvent(new Event("scroll"));
    viewportElement.dispatchEvent(new Event("scrollend"));
    await waitFor(() => {
      // After scrolling, an item should be open (snapped to view)
      expect(root).toHaveAttribute("data-open-id");
      expect(
        horizontalCenterDifference(
          root.querySelector(".is-open [data-charter-bubble-panel]")
        )
      ).toBeLessThanOrEqual(1);
    });
  },
};

export const Desktop769 = {
  ...viewport(769),
  render: () => <StaticPage />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    await waitFor(() => expect(root).toHaveAttribute("data-layout", "cluster"));
  },
};

export const Desktop1280 = {
  ...viewport(1280),
  render: () => <StaticPage />,
};

export const Wide1920 = {
  ...viewport(1920),
  render: () => <StaticPage />,
};

export const UltraWide2560 = {
  ...viewport(2560),
  render: () => <StaticPage />,
};

export const DesktopBoundaryContract = {
  ...viewport(1280),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    const preceding = canvasElement.querySelector(
      ".charter-bubbles-story__main"
    );
    const clusterShell = root.querySelector(
      ".hp-charter-bubbles__cluster-shell"
    );
    const fronts = Array.from(
      root.querySelectorAll("[data-charter-bubble-open]")
    );
    await waitFor(() => expect(root).toHaveAttribute("data-layout", "cluster"));

    const closedBottom = Math.max(
      ...fronts.map(front => front.getBoundingClientRect().bottom)
    );
    const clusterParentBottom = clusterShell.getBoundingClientRect().bottom;
    // The cluster may overlap the preceding page section, but closed bubbles
    // must remain inside the component's own cluster parent. One device pixel
    // is allowed for fractional layout rounding at the parent's lower edge.
    await expect(closedBottom).toBeLessThanOrEqual(clusterParentBottom + 1);

    window.scrollTo(
      0,
      window.scrollY + preceding.getBoundingClientRect().bottom - 400
    );
    await waitFor(() =>
      expect(
        Math.abs(preceding.getBoundingClientRect().bottom - 400)
      ).toBeLessThanOrEqual(2)
    );

    for (const front of fronts) {
      await userEvent.click(front);
      const boundary = preceding.getBoundingClientRect().bottom;
      const surfaces = [
        root.querySelector(".is-open [data-charter-bubble-panel]"),
        ...root.querySelectorAll(
          ".hp-charter-bubble:not(.is-open) [data-charter-bubble-open]"
        ),
      ];
      await waitFor(() =>
        expect(
          Math.max(
            ...surfaces.map(surface => surface.getBoundingClientRect().bottom)
          )
        ).toBeLessThanOrEqual(boundary + 193)
      );
      await userEvent.click(
        root.querySelector(".is-open [data-charter-bubble-close]")
      );
    }

    window.scrollTo(
      0,
      window.scrollY + preceding.getBoundingClientRect().bottom - 160
    );
    await waitFor(() =>
      expect(preceding.getBoundingClientRect().bottom).toBeLessThanOrEqual(170)
    );

    await userEvent.click(fronts[1]);
    const boundary = preceding.getBoundingClientRect().bottom;
    const surfaces = [
      root.querySelector(".is-open [data-charter-bubble-panel]"),
      ...root.querySelectorAll(
        ".hp-charter-bubble:not(.is-open) [data-charter-bubble-open]"
      ),
    ];
    await waitFor(() => {
      const boxes = surfaces.map(surface => surface.getBoundingClientRect());
      for (let first = 0; first < boxes.length; first += 1) {
        for (let second = first + 1; second < boxes.length; second += 1) {
          expect(circlesOverlap(boxes[first], boxes[second], 1)).toBe(false);
        }
      }
      expect(Math.max(...boxes.map(box => box.bottom))).toBeGreaterThan(
        boundary + 193
      );
    });
    await userEvent.click(
      root.querySelector(".is-open [data-charter-bubble-close]")
    );
  },
};

const assertRenderedDesktopSlots = async canvasElement => {
  const root = canvasElement.querySelector("[data-charter-bubbles]");
  const clusterShell = root.querySelector("[data-charter-bubble-cluster]");
  const fronts = root.querySelectorAll("[data-charter-bubble-open]");
  const viewportLabel = `${document.documentElement.clientWidth}px viewport`;
  const describeSurface = control => {
    const item = control.closest("[data-charter-bubble-item]");
    const id = item?.getAttribute("data-charter-bubble-id") ?? "unknown bubble";
    const type = control.matches("[data-charter-bubble-panel]")
      ? "expanded panel"
      : "closed trigger";
    return `${id} ${type}`;
  };
  for (const front of fronts) {
    await userEvent.click(front);
    await waitFor(() =>
      expect(root.querySelectorAll(".is-open")).toHaveLength(1)
    );
    const active = root.querySelector(".is-open");
    const controls = [active.querySelector("[data-charter-bubble-panel]")];
    root.querySelectorAll(".hp-charter-bubble:not(.is-open)").forEach(item => {
      controls.push(item.querySelector("[data-charter-bubble-open]"));
    });
    const assertControlSurfaces = () =>
      waitFor(() => {
        // Re-measure on every retry because opening and neighbor placement
        // continue animating after the is-open class changes.
        const boxes = controls.map(control => control.getBoundingClientRect());
        const clusterBounds = clusterShell.getBoundingClientRect();
        for (let index = 0; index < boxes.length; index += 1) {
          const box = boxes[index];
          const label = describeSurface(controls[index]);
          expect(
            box.left,
            `${viewportLabel}: ${label} left edge ${box.left.toFixed(2)}px is outside cluster left edge ${clusterBounds.left.toFixed(2)}px`
          ).toBeGreaterThanOrEqual(clusterBounds.left - 1);
          expect(
            box.right,
            `${viewportLabel}: ${label} right edge ${box.right.toFixed(2)}px is outside cluster right edge ${clusterBounds.right.toFixed(2)}px`
          ).toBeLessThanOrEqual(clusterBounds.right + 1);
        }
        for (let first = 0; first < boxes.length; first += 1) {
          for (let second = first + 1; second < boxes.length; second += 1) {
            const firstBox = boxes[first];
            const secondBox = boxes[second];
            const centerDistance = Math.hypot(
              firstBox.left +
                firstBox.width / 2 -
                (secondBox.left + secondBox.width / 2),
              firstBox.top +
                firstBox.height / 2 -
                (secondBox.top + secondBox.height / 2)
            );
            const requiredDistance =
              Math.min(firstBox.width, firstBox.height) / 2 +
              Math.min(secondBox.width, secondBox.height) / 2;
            const overlapDepth = requiredDistance - centerDistance;
            expect(
              circlesOverlap(firstBox, secondBox, 1),
              `${viewportLabel}: ${describeSurface(controls[first])} overlaps ${describeSurface(controls[second])} by ${overlapDepth.toFixed(2)}px (center distance ${centerDistance.toFixed(2)}px; required ${requiredDistance.toFixed(2)}px)`
            ).toBe(false);
          }
        }
      });

    await assertControlSurfaces();
    for (const neighbor of controls.slice(1)) {
      await userEvent.hover(neighbor);
      await waitFor(() =>
        expect(
          neighbor.getBoundingClientRect().width,
          `${viewportLabel}: hovered ${describeSurface(neighbor)} exceeded the 181px closed-size allowance`
        ).toBeLessThanOrEqual(181)
      );
      await assertControlSurfaces();
      await userEvent.unhover(neighbor);

      await userEvent.keyboard("{Tab}");
      neighbor.focus();
      await waitFor(() =>
        expect(
          neighbor.getBoundingClientRect().width,
          `${viewportLabel}: focused ${describeSurface(neighbor)} exceeded the 181px closed-size allowance`
        ).toBeLessThanOrEqual(181)
      );
      const focusStyle = getComputedStyle(neighbor);
      await expect(
        focusStyle.outlineStyle,
        `${viewportLabel}: ${describeSurface(neighbor)} should not add a component-specific browser outline`
      ).toBe("none");
      await assertControlSurfaces();
    }
    await expect(
      document.documentElement.scrollWidth,
      `${viewportLabel}: desktop slot interaction created horizontal page overflow`
    ).toBeLessThanOrEqual(document.documentElement.clientWidth + 1);
  }
};

export const DesktopSlots769 = {
  tags: ["!dev", "!test", "!autodocs"],
  ...viewport(769),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => assertRenderedDesktopSlots(canvasElement),
};

export const DesktopSlots1280 = {
  tags: ["!dev", "!test", "!autodocs"],
  ...viewport(1280),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => assertRenderedDesktopSlots(canvasElement),
};

export const DesktopSlots1920 = {
  tags: ["!dev", "!test", "!autodocs"],
  ...viewport(1920),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => assertRenderedDesktopSlots(canvasElement),
};

export const DesktopSlots2560 = {
  tags: ["!dev", "!test", "!autodocs"],
  ...viewport(2560),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => {
    const clusterShell = canvasElement.querySelector(
      "[data-charter-bubble-cluster]"
    );
    const clusterBounds = clusterShell.getBoundingClientRect();
    await expect(clusterBounds.width).toBeCloseTo(1920, 0);
    for (const textFrame of canvasElement.querySelectorAll(
      ".charter-bubbles-story__main > div, .charter-bubbles-story__following > div"
    )) {
      const textBounds = textFrame.getBoundingClientRect();
      await expect(textBounds.width).toBeCloseTo(1920, 0);
      await expect(textBounds.left).toBeCloseTo(clusterBounds.left, 0);
    }
    await assertRenderedDesktopSlots(canvasElement);
  },
};

export const OpenToOpenGeometry = {
  tags: ["!dev", "!test", "!autodocs"],
  ...viewport(1280),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    const items = Array.from(
      root.querySelectorAll("[data-charter-bubble-item]")
    );
    const fronts = items.map(item =>
      item.querySelector("[data-charter-bubble-open]")
    );
    const readOffsets = () =>
      items.map(item => [
        item.style.getPropertyValue("--hp-charter-translate-x"),
        item.style.getPropertyValue("--hp-charter-translate-y"),
      ]);
    const closeOpenBubble = async () => {
      await userEvent.click(
        root.querySelector(".is-open [data-charter-bubble-close]")
      );
      await waitFor(() => expect(root).not.toHaveAttribute("data-open-id"));
    };

    const directLayouts = [];
    for (let target = 0; target < fronts.length; target += 1) {
      await userEvent.click(fronts[target]);
      await waitFor(() =>
        expect(root).toHaveAttribute(
          "data-open-id",
          items[target].getAttribute("data-charter-bubble-id")
        )
      );
      directLayouts[target] = readOffsets();
      await closeOpenBubble();
    }

    for (let previous = 0; previous < fronts.length; previous += 1) {
      for (let target = 0; target < fronts.length; target += 1) {
        if (previous === target) continue;
        await userEvent.click(fronts[previous]);
        await userEvent.click(fronts[target]);
        await waitFor(() =>
          expect(root).toHaveAttribute(
            "data-open-id",
            items[target].getAttribute("data-charter-bubble-id")
          )
        );
        await expect(readOffsets()).toEqual(directLayouts[target]);
        await closeOpenBubble();
      }
    }
  },
};

const assertExpandedContentFits = async canvasElement => {
  const root = canvasElement.querySelector("[data-charter-bubbles]");
  const back = root.querySelector(".is-open [data-charter-bubble-panel]");
  const link = back.querySelector(".hp-charter-bubble__link");
  const close = back.querySelector("[data-charter-bubble-close]");
  const following = canvasElement.querySelector(
    ".charter-bubbles-story__following"
  );
  const backRect = back.getBoundingClientRect();
  const controls =
    root.getAttribute("data-layout") === "carousel" ? [link] : [link, close];
  for (const control of controls) {
    const controlRect = control.getBoundingClientRect();
    if (control === close) {
      await expect(controlRect.width).toBeGreaterThanOrEqual(44);
      await expect(controlRect.height).toBeGreaterThanOrEqual(44);
    }
    await expect(controlRect.left).toBeGreaterThanOrEqual(backRect.left - 1);
    await expect(controlRect.right).toBeLessThanOrEqual(backRect.right + 1);
    await expect(controlRect.top).toBeGreaterThanOrEqual(backRect.top - 1);
    await expect(controlRect.bottom).toBeLessThanOrEqual(backRect.bottom + 1);
  }
  if (root.getAttribute("data-layout") === "carousel") {
    await expect(getComputedStyle(close).display).toBe("none");
  }
  await expect(back.scrollHeight).toBeLessThanOrEqual(back.clientHeight + 1);
  await expect(root.getBoundingClientRect().bottom).toBeLessThanOrEqual(
    following.getBoundingClientRect().top + 1
  );
  await expect(document.documentElement.scrollWidth).toBeLessThanOrEqual(
    document.documentElement.clientWidth + 1
  );
};

export const Phone320Expanded = {
  tags: ["!dev", "!test", "!autodocs"],
  ...viewport(320),
  render: () => <ReactPage initialOpenId="employability" />,
  play: async ({ canvasElement }) => {
    await waitFor(() =>
      expect(
        canvasElement.querySelector("[data-charter-bubbles]")
      ).toHaveAttribute("data-enhanced", "true")
    );
    await assertExpandedContentFits(canvasElement);
    const openBubble = canvasElement.querySelector(
      ".hp-charter-bubble.is-open"
    );
    const openBack = openBubble.querySelector("[data-charter-bubble-panel]");
    const viewportWidth = document.documentElement.clientWidth;
    await expect(openBubble.getBoundingClientRect().width).toBeGreaterThan(
      viewportWidth
    );
    for (const content of openBack.children) {
      const box = content.getBoundingClientRect();
      await expect(box.left).toBeGreaterThanOrEqual(0);
      await expect(box.right).toBeLessThanOrEqual(viewportWidth);
    }
  },
};

export const OpenCloseFocus = {
  tags: ["!dev", "!autodocs"],
  ...viewport(1280),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    const fronts = root.querySelectorAll("[data-charter-bubble-open]");
    await resizeViewport(1280);
    await waitFor(() => expect(root).toHaveAttribute("data-layout", "cluster"));
    await userEvent.click(fronts[0]);
    const firstPanel = root.querySelector(
      '[data-charter-bubble-id="employability"] [data-charter-bubble-panel]'
    );
    const firstLink = firstPanel.querySelector(".hp-charter-bubble__link");
    const firstClose = root.querySelector(
      '[data-charter-bubble-id="employability"] [data-charter-bubble-close]'
    );
    const closedPanel = root.querySelector(
      '[data-charter-bubble-id="degree-programs"] [data-charter-bubble-panel]'
    );
    const closedLink = closedPanel.querySelector(".hp-charter-bubble__link");
    const closedClose = closedPanel.querySelector(
      "[data-charter-bubble-close]"
    );
    await expect(closedPanel).toHaveAttribute("inert");
    await expect(closedLink).toHaveAttribute("tabindex", "-1");
    await expect(closedClose).toHaveAttribute("tabindex", "-1");
    await waitFor(() => expect(firstClose).toHaveFocus());
    await expect(firstPanel).not.toHaveAttribute("tabindex");
    await expect(firstPanel).not.toHaveAttribute("role");
    await expect(fronts[0]).toHaveAttribute("aria-expanded", "true");
    firstLink.focus();
    await expect(firstLink).toHaveFocus();
    firstClose.focus();
    await expect(firstClose).toHaveFocus();

    await userEvent.click(fronts[1]);
    const secondPanel = root.querySelector(
      '[data-charter-bubble-id="fortune-500"] [data-charter-bubble-panel]'
    );
    const secondClose = root.querySelector(
      '[data-charter-bubble-id="fortune-500"] [data-charter-bubble-close]'
    );
    await waitFor(() => expect(secondClose).toHaveFocus());
    await expect(secondPanel).not.toHaveAttribute("tabindex");
    await expect(secondPanel).not.toHaveAttribute("role");
    await expect(root.querySelectorAll(".is-open")).toHaveLength(1);
    await expect(getComputedStyle(secondClose).borderRadius).toBe("50%");
    await userEvent.click(secondClose);
    await expect(fronts[1]).toHaveFocus();
  },
};

export const FocusLifecycle = {
  tags: ["!dev", "!autodocs"],
  ...viewport(1280),
  render: () => (
    <StaticPage
      enhance={false}
      html={charterBubblesStaticHtml({
        instanceId: "focus-lifecycle",
        openId: "employability",
      })}
    />
  ),
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    const front = root.querySelector("[data-charter-bubble-open]");
    const close = root.querySelector("[data-charter-bubble-close]");
    const startProbe = canvasElement.querySelector(
      "#charter-bubbles-focus-start"
    );
    const endProbe = canvasElement.querySelector("#charter-bubbles-focus-end");
    const waitForFrames = () =>
      new Promise(resolve =>
        requestAnimationFrame(() => requestAnimationFrame(resolve))
      );

    const teardown = initCharterBubbles(root);
    await waitFor(() => {
      expect(root).toHaveAttribute("data-layout", "cluster");
      expect(root).toHaveAttribute("data-open-id", "employability");
    });
    close.click();
    expect(root).not.toHaveAttribute("data-open-id");
    startProbe.focus();
    front.click();
    teardown();
    // The unenhanced fallback hides Close after teardown. Reveal only that
    // authored control so a stale queued callback remains observable without
    // changing focus or creating another controller.
    close.style.display = "grid";
    await waitForFrames();
    expect(startProbe).toHaveFocus();
    expect(close).not.toHaveFocus();
    close.style.removeProperty("display");

    const teardownAgain = initCharterBubbles(root);
    await waitFor(() => {
      expect(root).toHaveAttribute("data-layout", "cluster");
      expect(root).toHaveAttribute("data-open-id", "employability");
    });
    close.click();
    expect(root).not.toHaveAttribute("data-open-id");
    startProbe.focus();
    front.click();
    endProbe.focus();
    await waitForFrames();
    expect(endProbe).toHaveFocus();
    expect(close).not.toHaveFocus();
    teardownAgain();
  },
};

export const SecondClickCloses = {
  tags: ["!dev", "!autodocs"],
  ...viewport(1280),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    const item = root.querySelector('[data-charter-bubble-id="employability"]');
    const front = item.querySelector("[data-charter-bubble-open]");
    const panel = item.querySelector("[data-charter-bubble-panel]");
    const heading = panel.querySelector(".hp-charter-bubble__heading");
    const detail = panel.querySelector(".hp-charter-bubble__detail");
    const link = panel.querySelector(".hp-charter-bubble__link");
    const close = panel.querySelector("[data-charter-bubble-close]");
    const open = () => {
      front.click();
      expect(root).toHaveAttribute("data-open-id", "employability");
    };
    const expectClosed = () => {
      expect(root).not.toHaveAttribute("data-open-id");
      expect(panel).toHaveAttribute("inert");
      expect(front).toHaveFocus();
    };

    await waitFor(() => expect(root).toHaveAttribute("data-layout", "cluster"));
    open();

    link.addEventListener("click", event => event.preventDefault(), {
      once: true,
    });
    link.click();
    expect(root).toHaveAttribute("data-open-id", "employability");

    heading.click();
    expectClosed();

    open();
    panel.click();
    expectClosed();

    open();
    detail.click();
    expectClosed();

    open();
    close.click();
    expectClosed();
  },
};

export const SecondClickClosesCarouselExclusion = {
  tags: ["!dev", "!autodocs"],
  ...viewport(393),
  render: () => <ReactPage initialOpenId="employability" />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    const panel = root.querySelector(
      '[data-charter-bubble-id="employability"] [data-charter-bubble-panel]'
    );
    const detail = panel.querySelector(".hp-charter-bubble__detail");
    await waitFor(() => {
      expect(root).toHaveAttribute("data-layout", "carousel");
      expect(root).toHaveAttribute("data-open-id", "employability");
    });
    panel.click();
    detail.click();
    expect(root).toHaveAttribute("data-open-id", "employability");
  },
};

export const EscapeAndOutside = {
  tags: ["!dev", "!test", "!autodocs"],
  ...viewport(1280),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    const fronts = root.querySelectorAll("[data-charter-bubble-open]");
    await userEvent.click(fronts[2]);
    await userEvent.keyboard("{Escape}");
    await expect(fronts[2]).toHaveFocus();
    await expect(root).not.toHaveAttribute("data-open-id");

    await userEvent.click(fronts[3]);
    await userEvent.click(canvas.getByText(/Following content begins/));
    await expect(root).not.toHaveAttribute("data-open-id");
  },
};

export const CarouselNavigation = {
  ...viewport(393),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    const viewportElement = root.querySelector(
      "[data-charter-bubble-viewport]"
    );
    const previous = root.querySelector("[data-charter-bubble-previous]");
    const next = root.querySelector("[data-charter-bubble-next]");
    const chevrons = root.querySelectorAll(".hp-charter-bubble__chevron");
    const closeButtons = root.querySelectorAll("[data-charter-bubble-close]");
    await waitFor(() => {
      expect(previous).toBeDisabled();
      expect(root).toHaveAttribute("data-open-id", "employability");
      expect(root.querySelectorAll(".is-open")).toHaveLength(1);
    });
    await expect(
      getComputedStyle(root.querySelector("[data-charter-bubble-item]"))
        .transitionProperty
    ).toContain("flex-basis");
    const initialOpenItem = root.querySelector(".hp-charter-bubble.is-open");
    const initialOpenBack = initialOpenItem.querySelector(
      ".hp-charter-bubble__back"
    );
    const initialClosedItem = root.querySelector(
      ".hp-charter-bubble:not(.is-open)"
    );
    await expect(initialOpenItem.getBoundingClientRect().width).toBeGreaterThan(
      initialClosedItem.getBoundingClientRect().width
    );
    await expect(
      initialOpenBack.getBoundingClientRect().width
    ).toBeLessThanOrEqual(initialOpenItem.getBoundingClientRect().width + 1);
    for (const control of [...chevrons, ...closeButtons]) {
      await expect(getComputedStyle(control).display).toBe("none");
    }

    const nextItem = root.querySelector(
      '[data-charter-bubble-id="fortune-500"]'
    );
    const pointerFront = nextItem.querySelector("[data-charter-bubble-open]");
    const pointerLink = nextItem.querySelector(".hp-charter-bubble__link");
    await expect(realPointer.available).toBe(true);
    await realPointer.click(pointerFront);
    viewportElement.dispatchEvent(new Event("scrollend"));
    await waitFor(() =>
      expect(root).toHaveAttribute("data-open-id", "fortune-500")
    );
    expect(pointerLink).not.toHaveFocus();
    await userEvent.click(previous);
    viewportElement.dispatchEvent(new Event("scrollend"));
    await waitFor(() =>
      expect(root).toHaveAttribute("data-open-id", "employability")
    );

    await userEvent.click(next);
    viewportElement.dispatchEvent(new Event("scroll"));
    viewportElement.dispatchEvent(new Event("scrollend"));
    const initialFront = initialOpenItem.querySelector(
      "[data-charter-bubble-open]"
    );
    const nextFront = nextItem.querySelector("[data-charter-bubble-open]");
    const nextBack = nextItem.querySelector("[data-charter-bubble-panel]");
    await waitFor(() => {
      // Closing is complete when the former trigger/panel expose their closed
      // accessibility state and the item no longer owns the open class.
      expect(initialOpenItem).not.toHaveClass("is-open");
      expect(initialFront).toHaveAttribute("aria-expanded", "false");
      expect(initialOpenBack).toHaveAttribute("aria-hidden", "true");
      expect(initialOpenBack).toHaveAttribute("inert");

      // Opening is complete when the destination has both its final visual
      // class and its final accessibility state.
      expect(root).toHaveAttribute("data-open-id", "fortune-500");
      expect(root.querySelectorAll(".is-open")).toHaveLength(1);
      expect(nextItem).toHaveClass("is-open");
      expect(nextItem).not.toHaveClass("is-opening");
      expect(nextFront).toHaveAttribute("aria-expanded", "true");
      expect(nextBack).toHaveAttribute("aria-hidden", "false");
      expect(nextBack).not.toHaveAttribute("inert");
    });
    const farBubble = root.querySelector(
      '[data-charter-bubble-id="undergraduate-research"]'
    );
    const viewportRect = viewportElement.getBoundingClientRect();
    const farBubbleRect = farBubble.getBoundingClientRect();
    viewportElement.dispatchEvent(new Event("touchstart", { bubbles: true }));
    viewportElement.scrollLeft +=
      farBubbleRect.left +
      farBubbleRect.width / 2 -
      (viewportRect.left + viewportRect.width / 2);
    viewportElement.dispatchEvent(new Event("scroll"));
    await expect(root).toHaveAttribute("data-open-id", "fortune-500");
    await expect(root.querySelectorAll(".is-open")).toHaveLength(1);
    viewportElement.ownerDocument.defaultView.dispatchEvent(
      new Event("touchend")
    );
    await expect(root).toHaveAttribute("data-open-id", "fortune-500");
    await expect(root.querySelectorAll(".is-open")).toHaveLength(1);
    viewportElement.dispatchEvent(new Event("scrollend"));
    await waitFor(() => {
      expect(root).toHaveAttribute("data-open-id", "faculty");
      expect(root.querySelectorAll(".is-open")).toHaveLength(1);
    });

    viewportElement.dispatchEvent(new Event("touchstart", { bubbles: true }));
    viewportElement.scrollLeft += 1;
    viewportElement.dispatchEvent(new Event("scroll"));
    viewportElement.ownerDocument.defaultView.dispatchEvent(
      new Event("touchend")
    );
    viewportElement.dispatchEvent(new Event("scrollend"));
    await expect(root).toHaveAttribute("data-open-id", "faculty");
    await expect(root.querySelectorAll(".is-open")).toHaveLength(1);

    const farBubbleButton = farBubble.querySelector(
      "[data-charter-bubble-open]"
    );
    const farBubbleLink = farBubble.querySelector(".hp-charter-bubble__link");
    await userEvent.click(farBubbleButton);
    await waitFor(() => {
      expect(root).toHaveAttribute("data-open-id", "undergraduate-research");
      expect(root.querySelectorAll(".is-open")).toHaveLength(1);
      const viewportBox = viewportElement.getBoundingClientRect();
      const bubbleBox = farBubble.getBoundingClientRect();
      expect(
        Math.abs(
          bubbleBox.left +
            bubbleBox.width / 2 -
            (viewportBox.left + viewportBox.width / 2)
        )
      ).toBeLessThanOrEqual(1);
      expect(next).toBeDisabled();
    });

    const verticalWheel = new WheelEvent("wheel", {
      bubbles: true,
      cancelable: true,
      deltaX: 0,
      deltaY: -120,
      shiftKey: false,
    });
    viewportElement.dispatchEvent(verticalWheel);
    await expect(
      verticalWheel.defaultPrevented,
      "ordinary vertical wheel input should retain native page scrolling"
    ).toBe(false);
    await expect(root).toHaveAttribute(
      "data-open-id",
      "undergraduate-research"
    );

    viewportElement.dispatchEvent(
      new WheelEvent("wheel", {
        bubbles: true,
        cancelable: true,
        deltaY: -1,
        shiftKey: true,
      })
    );
    for (let index = 0; index < 4; index += 1) {
      viewportElement.dispatchEvent(
        new WheelEvent("wheel", {
          bubbles: true,
          cancelable: true,
          deltaY: -120,
          shiftKey: true,
        })
      );
    }
    await expect(root).not.toHaveAttribute("data-open-id");
    await expect(
      root.querySelector('[data-charter-bubble-id="degree-programs"]')
    ).toHaveClass("is-opening");
    viewportElement.dispatchEvent(new Event("scrollend"));
    await waitFor(() => {
      expect(root).toHaveAttribute("data-open-id", "degree-programs");
      expect(root.querySelectorAll(".is-open")).toHaveLength(1);
      expect(next).not.toBeDisabled();
    });
    viewportElement.dispatchEvent(
      new WheelEvent("wheel", {
        bubbles: true,
        cancelable: true,
        deltaY: -120,
        shiftKey: true,
      })
    );
    viewportElement.dispatchEvent(new Event("scrollend"));
    await expect(root).toHaveAttribute("data-open-id", "degree-programs");

    canvasElement.querySelector("#charter-bubbles-focus-start").focus();
    farBubbleButton.focus();
    await expect(farBubbleButton).toHaveFocus();
    await expect(farBubble).toHaveClass("is-opening");
    await expect(root).not.toHaveAttribute("data-open-id");
    viewportElement.dispatchEvent(new Event("scrollend"));
    await waitFor(() => {
      expect(root).toHaveAttribute("data-open-id", "undergraduate-research");
      expect(farBubbleLink).toHaveFocus();
    });
  },
};

export const KeyboardArrowTransition = {
  name: "Keyboard arrow transition",
  ...viewport(393),
  render: () => <ReactPage initialOpenId="employability" />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    const viewportElement = root.querySelector(
      "[data-charter-bubble-viewport]"
    );
    const itemIds = [
      "employability",
      "fortune-500",
      "faculty",
      "degree-programs",
      "undergraduate-research",
    ];
    const getItem = id =>
      root.querySelector(`[data-charter-bubble-id="${id}"]`);
    const getFront = id =>
      getItem(id).querySelector("[data-charter-bubble-open]");
    const getPanel = id =>
      getItem(id).querySelector("[data-charter-bubble-panel]");
    const getLink = id => getItem(id).querySelector(".hp-charter-bubble__link");
    const dispatchKey = (target, key, modifiers = {}) => {
      const event = new KeyboardEvent("keydown", {
        key,
        bubbles: true,
        cancelable: true,
        ...modifiers,
      });
      target.dispatchEvent(event);
      return event;
    };
    const finishTransition = async id => {
      viewportElement.dispatchEvent(new Event("scrollend"));
      await waitFor(() => {
        expect(root).toHaveAttribute("data-open-id", id);
        expect(root.querySelectorAll(".is-open")).toHaveLength(1);
        expect(getItem(id)).toHaveClass("is-open");
        expect(getItem(id)).not.toHaveClass("is-opening");
        expect(getFront(id)).toHaveAttribute("aria-expanded", "true");
        expect(getPanel(id)).toHaveAttribute("aria-hidden", "false");
        expect(getPanel(id)).not.toHaveAttribute("inert");
      });
    };
    const transitionSnapshot = () => ({
      openId: root.getAttribute("data-open-id"),
      openIds: Array.from(root.querySelectorAll(".is-open"), item =>
        item.getAttribute("data-charter-bubble-id")
      ),
      openingIds: Array.from(root.querySelectorAll(".is-opening"), item =>
        item.getAttribute("data-charter-bubble-id")
      ),
      currentExpanded: getFront("employability").getAttribute("aria-expanded"),
      currentHidden: getPanel("employability").getAttribute("aria-hidden"),
      currentInert: getPanel("employability").hasAttribute("inert"),
      destinationExpanded:
        getFront("fortune-500").getAttribute("aria-expanded"),
      destinationHidden: getPanel("fortune-500").getAttribute("aria-hidden"),
      destinationInert: getPanel("fortune-500").hasAttribute("inert"),
    });
    const currentItem = getItem("employability");
    const currentLink = getLink("employability");
    const destinationItem = getItem("fortune-500");
    const destinationFront = destinationItem.querySelector(
      "[data-charter-bubble-open]"
    );
    const destinationLink = getLink("fortune-500");
    const next = root.querySelector("[data-charter-bubble-next]");

    await waitFor(() => {
      expect(root).toHaveAttribute("data-layout", "carousel");
      expect(root).toHaveAttribute("data-open-id", "employability");
    });
    currentLink.focus();
    expect(currentLink).toHaveFocus();

    const arrowRight = dispatchKey(currentLink, "ArrowRight");

    expect(arrowRight.defaultPrevented).toBe(true);
    expect(root).not.toHaveAttribute("data-open-id");
    expect(currentItem).not.toHaveClass("is-open");
    expect(getFront("employability")).toHaveAttribute("aria-expanded", "false");
    expect(getPanel("employability")).toHaveAttribute("aria-hidden", "true");
    expect(getPanel("employability")).toHaveAttribute("inert");
    expect(destinationItem).toHaveClass("is-opening");
    expect(destinationFront).toHaveAttribute("aria-expanded", "false");
    expect(getPanel("fortune-500")).toHaveAttribute("aria-hidden", "true");
    expect(getPanel("fortune-500")).toHaveAttribute("inert");
    expect(destinationFront).toHaveFocus();

    const arrowSnapshot = transitionSnapshot();
    const repeatedArrow = dispatchKey(destinationFront, "ArrowRight");
    expect(repeatedArrow.defaultPrevented).toBe(true);
    expect(root.querySelectorAll(".is-opening")).toHaveLength(1);
    expect(destinationItem).toHaveClass("is-opening");

    const arrowDown = dispatchKey(destinationFront, "ArrowDown");
    expect(arrowDown.defaultPrevented).toBe(false);
    for (const modifiers of [
      { altKey: true },
      { ctrlKey: true },
      { metaKey: true },
      { shiftKey: true },
    ]) {
      const modifiedArrow = dispatchKey(
        destinationFront,
        "ArrowRight",
        modifiers
      );
      expect(modifiedArrow.defaultPrevented).toBe(false);
    }
    expect(root.querySelectorAll(".is-opening")).toHaveLength(1);

    await finishTransition("fortune-500");
    expect(destinationLink).toHaveFocus();

    const arrowLeft = dispatchKey(destinationLink, "ArrowLeft");
    expect(arrowLeft.defaultPrevented).toBe(true);
    expect(currentItem).toHaveClass("is-opening");
    expect(getFront("employability")).toHaveFocus();
    await finishTransition("employability");
    expect(currentLink).toHaveFocus();

    await userEvent.click(next);
    expect(transitionSnapshot()).toEqual(arrowSnapshot);
    await finishTransition("fortune-500");
    expect(next).toHaveFocus();

    destinationLink.focus();
    const backToStart = dispatchKey(destinationLink, "ArrowLeft");
    expect(backToStart.defaultPrevented).toBe(true);
    await finishTransition("employability");
    expect(currentLink).toHaveFocus();

    const leftEdge = dispatchKey(currentLink, "ArrowLeft");
    expect(leftEdge.defaultPrevented).toBe(true);
    expect(root).toHaveAttribute("data-open-id", "employability");
    expect(root.querySelectorAll(".is-opening")).toHaveLength(0);
    expect(currentLink).toHaveFocus();

    for (let index = 1; index < itemIds.length; index += 1) {
      const sourceLink = getLink(itemIds[index - 1]);
      sourceLink.focus();
      const event = dispatchKey(sourceLink, "ArrowRight");
      expect(event.defaultPrevented).toBe(true);
      expect(getFront(itemIds[index])).toHaveFocus();
      await finishTransition(itemIds[index]);
      expect(getLink(itemIds[index])).toHaveFocus();
    }

    const lastId = itemIds[itemIds.length - 1];
    const lastLink = getLink(lastId);
    const rightEdge = dispatchKey(lastLink, "ArrowRight");
    expect(rightEdge.defaultPrevented).toBe(true);
    expect(root).toHaveAttribute("data-open-id", lastId);
    expect(root.querySelectorAll(".is-opening")).toHaveLength(0);
    expect(lastLink).toHaveFocus();
  },
};

export const KeyboardArrowTransitionReducedMotion = {
  name: "Keyboard arrow transition reduced motion",
  tags: ["!dev", "!autodocs"],
  ...viewport(393),
  beforeEach: installReducedMotionStoryEnvironment,
  render: () => <ReactPage initialOpenId="employability" />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    const viewportElement = root.querySelector(
      "[data-charter-bubble-viewport]"
    );
    const currentLink = root.querySelector(
      '[data-charter-bubble-id="employability"] .hp-charter-bubble__link'
    );
    const destinationItem = root.querySelector(
      '[data-charter-bubble-id="fortune-500"]'
    );
    const destinationFront = destinationItem.querySelector(
      "[data-charter-bubble-open]"
    );
    const destinationLink = destinationItem.querySelector(
      ".hp-charter-bubble__link"
    );
    const scrollBehaviors = [];
    const nativeScrollTo = viewportElement.scrollTo;

    await waitFor(() => {
      expect(root).toHaveAttribute("data-layout", "carousel");
      expect(root).toHaveAttribute("data-open-id", "employability");
    });
    expect(window.matchMedia(REDUCED_MOTION_QUERY).matches).toBe(true);
    expect(getComputedStyle(viewportElement).scrollBehavior).toBe("auto");

    viewportElement.scrollTo = options => {
      scrollBehaviors.push(options?.behavior);
      nativeScrollTo.call(viewportElement, options);
    };
    try {
      currentLink.focus();
      const arrowRight = new KeyboardEvent("keydown", {
        key: "ArrowRight",
        bubbles: true,
        cancelable: true,
      });
      currentLink.dispatchEvent(arrowRight);
      expect(arrowRight.defaultPrevented).toBe(true);
      expect(destinationItem).toHaveClass("is-opening");
      expect(destinationFront).toHaveFocus();
      expect(scrollBehaviors).toContain("auto");
      expect(scrollBehaviors).not.toContain("smooth");

      viewportElement.dispatchEvent(new Event("scrollend"));
      await waitFor(() => {
        expect(root).toHaveAttribute("data-open-id", "fortune-500");
        expect(destinationLink).toHaveFocus();
      });
    } finally {
      viewportElement.scrollTo = nativeScrollTo;
    }
  },
};

export const BreakpointPreservesOpen = {
  name: "Breakpoint preserves open item across mode change",
  ...viewport(768),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    const front = root.querySelector(
      '[data-charter-bubble-id="faculty"] [data-charter-bubble-open]'
    );
    await waitFor(() =>
      expect(root).toHaveAttribute("data-layout", "carousel")
    );
    await userEvent.click(front);
    await waitFor(() =>
      expect(root).toHaveAttribute("data-open-id", "faculty")
    );
    await resizeViewport(769);
    await waitFor(() => expect(root).toHaveAttribute("data-layout", "cluster"));
    await expect(root).toHaveClass("is-enhanced", "is-cluster");
    await expect(root).toHaveAttribute("data-open-id", "faculty");
    await expect(root.querySelectorAll(".is-open")).toHaveLength(1);
    await resizeViewport(768);
    await waitFor(() =>
      expect(root).toHaveAttribute("data-layout", "carousel")
    );
    await expect(root).toHaveClass("is-enhanced", "is-carousel");
    await expect(root).toHaveAttribute("data-open-id", "faculty");
    await expect(root.querySelectorAll(".is-open")).toHaveLength(1);
  },
};

export const TwoDefaultInstances = {
  ...viewport(1280),
  // No instanceId: the useId()-derived fallback must keep ARIA ids unique.
  render: () => (
    <div>
      <CharterBubbles />
      <CharterBubbles />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const roots = canvasElement.querySelectorAll("[data-charter-bubbles]");
    await expect(roots).toHaveLength(2);
    for (const root of roots) {
      await waitFor(() =>
        expect(root).toHaveAttribute("data-enhanced", "true")
      );
    }
    const ids = Array.from(roots).flatMap(root =>
      Array.from(root.querySelectorAll("[id]")).map(el => el.id)
    );
    await expect(ids.filter((id, n) => ids.indexOf(id) !== n)).toHaveLength(0);
    for (const root of roots) {
      for (const front of root.querySelectorAll("[data-charter-bubble-open]")) {
        const panel = canvasElement.querySelector(
          `#${CSS.escape(front.getAttribute("aria-controls"))}`
        );
        await expect(root.contains(panel)).toBe(true);
      }
    }
  },
};

export const ReducedMotion = {
  ...viewport(1440),
  beforeEach: installReducedMotionStoryEnvironment,
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => {
    expect(window.matchMedia(REDUCED_MOTION_QUERY).matches).toBe(true);
    expect(document.documentElement).toHaveAttribute(
      REDUCED_MOTION_STORY_ATTRIBUTE
    );
    const bubble = canvasElement.querySelector(".hp-charter-bubble");
    const front = bubble.querySelector(".hp-charter-bubble__front");
    const back = bubble.querySelector(".hp-charter-bubble__back");
    const carousel = canvasElement.querySelector(
      ".hp-charter-bubbles__viewport"
    );
    expect(getComputedStyle(bubble).transitionDuration).toBe("0s");
    expect(getComputedStyle(front).transitionDuration).toBe("0s");
    expect(getComputedStyle(back).transitionDuration).toBe("0s");
    expect(getComputedStyle(carousel).scrollBehavior).toBe("auto");
    if (import.meta.env.MODE !== "test") return;
    await expect(realPointer.available).toBe(true);
    await realPointer.hover(front);
    expect(front.getBoundingClientRect().width).toBeCloseTo(180, 0);
    await realPointer.click(front);
    expect(bubble).toHaveClass("is-open");
    expect(bubble).not.toHaveClass("is-opening");
    expect(back.getBoundingClientRect().width).toBeCloseTo(454, 0);
    await realPointer.unhover(front);
  },
};

export const MotionIsolation = {
  name: "Motion isolation",
  tags: ["!dev", "!autodocs"],
  ...viewport(1440),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => {
    expect(window.matchMedia(REDUCED_MOTION_QUERY).matches).toBe(false);
    expect(document.documentElement).not.toHaveAttribute(
      REDUCED_MOTION_STORY_ATTRIBUTE
    );
    expect(
      parseFloat(
        getComputedStyle(canvasElement.querySelector(".hp-charter-bubble"))
          .transitionDuration
      )
    ).toBeGreaterThan(0);
  },
};

export const ForcedColors = {
  ...viewport(393),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => {
    await emulateForcedColors(true);
    try {
      const front = canvasElement.querySelector(".hp-charter-bubble__front");
      await waitFor(() =>
        expect(Number.parseFloat(getComputedStyle(front).borderTopWidth)).toBe(
          2
        )
      );
    } finally {
      await emulateForcedColors(false);
    }
  },
};

export const LongContent = {
  ...viewport(320),
  render: () => (
    <ReactPage
      items={DEFAULT_CHARTER_BUBBLES.map((item, index) =>
        index === 0
          ? {
              ...item,
              frontHeadline:
                "#2 public university in the United States for graduate employability",
              backHeadline:
                "#2 public university in the United States for graduate employability",
              detail: `${item.detail} This intentionally longer sentence verifies resilient wrapping without changing the five-item contract.`,
            }
          : item
      )}
      initialOpenId="employability"
    />
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() =>
      expect(
        canvasElement.querySelector("[data-charter-bubbles]")
      ).toHaveAttribute("data-enhanced", "true")
    );
    await assertExpandedContentFits(canvasElement);
  },
};

export const InvalidDataFallback = {
  render: () => <ReactPage items={DEFAULT_CHARTER_BUBBLES.slice(0, 4)} />,
  play: async ({ canvasElement }) => {
    await expect(
      canvasElement.querySelectorAll("[data-charter-bubble-item]")
    ).toHaveLength(5);
    await expect(canvasElement).toHaveTextContent(
      "#2 public university in the U.S. for employability"
    );
  },
};

export const UnsafeUrlFallback = {
  render: () => (
    <ReactPage
      items={DEFAULT_CHARTER_BUBBLES.map((item, index) =>
        index === 0 ? { ...item, linkUrl: "javascript:alert(1)" } : item
      )}
    />
  ),
  play: async ({ canvasElement }) => {
    const firstLink = canvasElement.querySelector(".hp-charter-bubble__link");
    await expect(firstLink).toHaveAttribute("href", "#");
  },
};

const validStaticContract = charterBubblesStaticHtml();
const malformedContracts = [
  validStaticContract.replace(
    /<li class="hp-charter-bubble" data-charter-bubble-item data-charter-bubble-id="undergraduate-research"[\s\S]*?<\/li>/,
    ""
  ),
  validStaticContract.replace(
    /<button class="hp-charter-bubble__close"[\s\S]*?<\/button>/,
    ""
  ),
  validStaticContract.replace(
    'aria-controls="storybook-charter-employability-panel"',
    'aria-controls="missing-panel"'
  ),
  validStaticContract.replace(
    /<div class="hp-charter-bubbles__nav"[\s\S]*?<\/div>/,
    ""
  ),
];

export const MalformedContractsStayUnenhanced = {
  render: () => (
    <StoryFrame>
      {malformedContracts.map((html, index) => (
        <div key={index} data-malformed-contract={index}>
          <EnhancedMarkup html={html} />
        </div>
      ))}
    </StoryFrame>
  ),
  play: async ({ canvasElement }) => {
    const roots = canvasElement.querySelectorAll("[data-charter-bubbles]");
    await expect(roots).toHaveLength(4);
    for (const root of roots) {
      await expect(root).not.toHaveClass("is-enhanced");
      await expect(root).not.toHaveAttribute("data-enhanced");
      await expect(
        root.querySelector(".hp-charter-bubble__link")
      ).toBeVisible();
      await expect(
        getComputedStyle(root.querySelector("[data-charter-bubble-open]"))
          .display
      ).toBe("none");
    }
  },
};
