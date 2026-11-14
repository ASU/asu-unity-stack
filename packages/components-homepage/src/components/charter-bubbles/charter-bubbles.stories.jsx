import React, { useEffect, useRef } from "react";
import { expect, userEvent, waitFor, within } from "storybook/test";

import { emulateForcedColors } from "../rankings-cards/rankings-cards-helpers.jsx";
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
  render: () => <StaticPage enhance={false} />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    await expect(root).not.toHaveAttribute("data-layout");
    await expect(root).not.toHaveClass("is-enhanced");
    await expect(
      root.querySelectorAll("[data-charter-bubble-item]")
    ).toHaveLength(5);
    await expect(
      root.querySelectorAll("[data-charter-bubble-panel]")
    ).toHaveLength(5);
    for (const panel of root.querySelectorAll("[data-charter-bubble-panel]")) {
      await expect(panel).not.toHaveAttribute("aria-hidden");
      await expect(panel).not.toHaveAttribute("inert");
    }
    await expect(
      getComputedStyle(root.querySelector("[data-charter-bubble-open]")).display
    ).toBe("none");
    await expect(
      getComputedStyle(root.querySelector("[data-charter-bubble-nav]")).display
    ).toBe("none");
    for (const link of root.querySelectorAll(".hp-charter-bubble__link")) {
      await expect(link.tabIndex).toBeGreaterThanOrEqual(0);
      await expect(getComputedStyle(link).display).not.toBe("none");
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
  tags: ["!dev", "!test", "!autodocs"],
  ...viewport(1280),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    const fronts = root.querySelectorAll("[data-charter-bubble-open]");
    await userEvent.click(fronts[0]);
    const firstPanel = root.querySelector(
      '[data-charter-bubble-id="employability"] [data-charter-bubble-panel]'
    );
    const firstLink = firstPanel.querySelector(".hp-charter-bubble__link");
    const firstClose = root.querySelector(
      '[data-charter-bubble-id="employability"] [data-charter-bubble-close]'
    );
    await expect(firstPanel).toHaveFocus();
    await expect(firstPanel).not.toHaveAttribute("tabindex");
    await expect(fronts[0]).toHaveAttribute("aria-expanded", "true");
    await userEvent.tab();
    await expect(firstLink).toHaveFocus();
    await userEvent.tab();
    await expect(firstClose).toHaveFocus();

    await userEvent.click(fronts[1]);
    const secondPanel = root.querySelector(
      '[data-charter-bubble-id="fortune-500"] [data-charter-bubble-panel]'
    );
    const secondClose = root.querySelector(
      '[data-charter-bubble-id="fortune-500"] [data-charter-bubble-close]'
    );
    await expect(secondPanel).toHaveFocus();
    await expect(secondPanel).not.toHaveAttribute("tabindex");
    await expect(root.querySelectorAll(".is-open")).toHaveLength(1);
    await expect(getComputedStyle(secondClose).borderRadius).toBe("50%");

    const openBack = root.querySelector(".is-open .hp-charter-bubble__back");
    const openLink = openBack.querySelector(".hp-charter-bubble__link");
    await expect(getComputedStyle(openBack).rowGap).toBe("16px");
    for (const child of openBack.children) {
      const style = getComputedStyle(child);
      await expect(style.marginBlockStart).toBe("0px");
      await expect(style.marginBlockEnd).toBe("0px");
    }
    const backBox = openBack.getBoundingClientRect();
    const linkBox = openLink.getBoundingClientRect();
    const closeBox = secondClose.getBoundingClientRect();
    await expect(closeBox.top).toBeGreaterThanOrEqual(linkBox.bottom);
    await expect(
      Math.abs(
        closeBox.left + closeBox.width / 2 - (backBox.left + backBox.width / 2)
      )
    ).toBeLessThanOrEqual(1);

    const closeTarget = secondClose.getBoundingClientRect();
    await expect(closeTarget.width).toBeGreaterThanOrEqual(44);
    await expect(closeTarget.height).toBeGreaterThanOrEqual(44);

    await userEvent.click(
      openBack.querySelector(".hp-charter-bubble__heading")
    );
    await expect(root).toHaveAttribute("data-open-id", "fortune-500");

    await userEvent.click(secondClose);
    await expect(fronts[1]).toHaveFocus();

    await userEvent.click(fronts[1]);
    await userEvent.click(
      root.querySelector(".hp-charter-bubbles__cluster-shell")
    );
    await expect(root).not.toHaveAttribute("data-open-id");
    await expect(fronts[1]).toHaveFocus();
    await expect(root).not.toHaveAttribute("data-open-id");
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

    farBubbleButton.focus();
    await expect(farBubbleButton).toHaveFocus();
    await expect(farBubble).toHaveClass("is-opening");
    await expect(root).not.toHaveAttribute("data-open-id");
  },
};

export const BreakpointPreservesOpen = {
  name: "Breakpoint resets cluster to closed",
  ...viewport(768),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector("[data-charter-bubbles]");
    const front = root.querySelector(
      '[data-charter-bubble-id="faculty"] [data-charter-bubble-open]'
    );
    await userEvent.click(front);
    await waitFor(() =>
      expect(root).toHaveAttribute("data-open-id", "faculty")
    );
    await resizeViewport(769);
    await waitFor(() => expect(root).toHaveAttribute("data-layout", "cluster"));
    await expect(root).toHaveClass("is-enhanced", "is-cluster");
    await expect(root).not.toHaveAttribute("data-open-id");
    await expect(root.querySelectorAll(".is-open, .is-opening")).toHaveLength(
      0
    );
    await resizeViewport(768);
    await waitFor(() =>
      expect(root).toHaveAttribute("data-layout", "carousel")
    );
    await expect(root).toHaveClass("is-enhanced", "is-carousel");
    await expect(root).toHaveAttribute("data-open-id", "employability");
    await expect(root.querySelectorAll(".is-open")).toHaveLength(1);
  },
};

export const ReducedMotion = {
  ...viewport(393),
  render: () => <ReactPage />,
  play: async ({ canvasElement }) => {
    await emulateReducedMotion(true);
    try {
      const bubble = canvasElement.querySelector(".hp-charter-bubble");
      const front = bubble.querySelector(".hp-charter-bubble__front");
      const back = bubble.querySelector(".hp-charter-bubble__back");
      const carousel = canvasElement.querySelector(
        ".hp-charter-bubbles__viewport"
      );
      await waitFor(() => {
        expect(getComputedStyle(bubble).transitionDuration).toBe("0s");
        expect(getComputedStyle(front).transitionDuration).toBe("0s");
        expect(getComputedStyle(back).transitionDuration).toBe("0s");
        expect(getComputedStyle(carousel).scrollBehavior).toBe("auto");
      });
    } finally {
      await emulateReducedMotion(false);
    }
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
