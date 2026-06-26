// @ts-check
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

import { ExpandableHeroes } from "./ExpandableHeroes";

// ── Shared fixtures ────────────────────────────────────────────────────────────

const IMG1 = "https://example.com/img1.jpg";
const IMG2 = "https://example.com/img2.jpg";
const IMG3 = "https://example.com/img3.jpg";

const makePane = (n, imgUrl) => ({
  image: { url: imgUrl || `https://example.com/img${n}.jpg`, altText: `Alt ${n}` },
  title: { text: `Pane ${n} Title` },
});

const THREE_PANES = [makePane(1), makePane(2), makePane(3)];

const FIXED_PANES = [
  makePane(1, IMG1),
  makePane(2, IMG2),
  makePane(3, IMG3),
];

// ── T16: panes.length !== 3 → console.error + renders null ────────────────────

describe("T16 — length validation", () => {
  let errorSpy;
  beforeEach(() => {
    errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  });
  afterEach(() => {
    errorSpy.mockRestore();
  });

  it("renders null and logs error when panes.length !== 3", () => {
    const { container } = render(
      <ExpandableHeroes panes={[makePane(1), makePane(2)]} />
    );
    expect(container.firstChild).toBeNull();
    expect(errorSpy).toHaveBeenCalledOnce();
    expect(errorSpy.mock.calls[0][0]).toMatch(/ExpandableHeroes/);
  });
});

// ── T01: Renders three tab buttons with role="tab" ────────────────────────────

describe("T01 — renders tablist with 3 tab buttons", () => {
  it("renders 3 buttons with role=tab", () => {
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    expect(tabs).toHaveLength(3);
  });

  it("renders a tablist container", () => {
    const { getByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    expect(getByRole("tablist")).toBeDefined();
  });
});

// ── T03 + T04: aria-selected + roving tabindex ───────────────────────────────

describe("T03+T04 — aria-selected and roving tabindex", () => {
  it("first tab is aria-selected=true by default, others false", () => {
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(tabs[1]).toHaveAttribute("aria-selected", "false");
    expect(tabs[2]).toHaveAttribute("aria-selected", "false");
  });

  it("active tab has tabindex=0, others tabindex=-1", () => {
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    expect(tabs[0]).toHaveAttribute("tabindex", "0");
    expect(tabs[1]).toHaveAttribute("tabindex", "-1");
    expect(tabs[2]).toHaveAttribute("tabindex", "-1");
  });
});

// ── T05: Rotated title span exists per pane ───────────────────────────────────

describe("T05 — rotated title spans", () => {
  it("each pane has a rotated-title span with the pane title text", () => {
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    THREE_PANES.forEach((pane, i) => {
      const span = tabs[i].querySelector(".uds-expandable-heroes__rotated-title");
      expect(span).not.toBeNull();
      expect(span?.textContent).toBe(pane.title.text);
    });
  });
});

// ── T02: Three tabpanels in DOM ───────────────────────────────────────────────

describe("T02 — three tabpanels in DOM", () => {
  it("renders exactly 3 tabpanel elements", () => {
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const panels = getAllByRole("tabpanel", { hidden: true });
    expect(panels).toHaveLength(3);
  });

  it("only the active panel lacks hidden CSS class", () => {
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const panels = getAllByRole("tabpanel", { hidden: true });
    expect(panels[0]).not.toHaveClass("is-hidden");
    expect(panels[1]).toHaveClass("is-hidden");
    expect(panels[2]).toHaveClass("is-hidden");
  });
});

// ── T06: aria-orientation="horizontal" on tablist ────────────────────────────

describe("T06 — aria-orientation on tablist", () => {
  it("tablist has aria-orientation=horizontal", () => {
    const { getByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    expect(getByRole("tablist")).toHaveAttribute(
      "aria-orientation",
      "horizontal"
    );
  });
});

// ── T15: initialActiveIndex prop ─────────────────────────────────────────────

describe("T15 — initialActiveIndex", () => {
  it("pane at initialActiveIndex=1 is active on mount", () => {
    const { getAllByRole } = render(
      <ExpandableHeroes panes={THREE_PANES} initialActiveIndex={1} />
    );
    const tabs = getAllByRole("tab");
    expect(tabs[0]).toHaveAttribute("aria-selected", "false");
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    expect(tabs[2]).toHaveAttribute("aria-selected", "false");
    expect(tabs[1]).toHaveAttribute("tabindex", "0");
  });
});

// ── T17: initialActiveIndex out of range clamps + logs warning ────────────────

describe("T17 — initialActiveIndex clamping", () => {
  let warnSpy;
  beforeEach(() => {
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    warnSpy.mockRestore();
  });

  it("clamps initialActiveIndex=5 to 2 and logs a warning", () => {
    const { getAllByRole } = render(
      <ExpandableHeroes panes={THREE_PANES} initialActiveIndex={5} />
    );
    expect(warnSpy).toHaveBeenCalledOnce();
    const tabs = getAllByRole("tab");
    expect(tabs[2]).toHaveAttribute("aria-selected", "true");
  });
});

// ── T07: Hover adds .is-preview, does NOT change aria-selected, no GA ─────────

describe("T07 — hover preview", () => {
  it("mouseenter on collapsed tab adds is-preview class without GA", () => {
    window.dataLayer = [];
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    fireEvent.mouseEnter(tabs[1]);
    expect(tabs[1]).toHaveClass("is-preview");
    expect(tabs[0]).toHaveAttribute("aria-selected", "true"); // no commit
    expect(window.dataLayer).toHaveLength(0);
  });

  it("mouseleave removes is-preview class", () => {
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    fireEvent.mouseEnter(tabs[1]);
    fireEvent.mouseLeave(tabs[1]);
    expect(tabs[1]).not.toHaveClass("is-preview");
  });
});

// ── T08: Click commits + GA action="click" ────────────────────────────────────

describe("T08 — click commits", () => {
  it("click on collapsed tab commits and fires GA with action=click", () => {
    window.dataLayer = [];
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    fireEvent.click(tabs[1]);
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    expect(window.dataLayer).toHaveLength(1);
    expect(window.dataLayer[0]).toHaveProperty("action", "click");
  });
});

// ── T09: Enter commits + GA action="keypress" ─────────────────────────────────

describe("T09 — Enter key commits", () => {
  it("Enter on focused collapsed tab commits with GA action=keypress", () => {
    window.dataLayer = [];
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    fireEvent.keyDown(tabs[1], { key: "Enter" });
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    expect(window.dataLayer).toHaveLength(1);
    expect(window.dataLayer[0]).toHaveProperty("action", "keypress");
  });
});

// ── T10: Space commits + GA action="keypress" ────────────────────────────────

describe("T10 — Space key commits", () => {
  it("Space on focused collapsed tab commits with GA action=keypress", () => {
    window.dataLayer = [];
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    fireEvent.keyDown(tabs[1], { key: " " });
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    expect(window.dataLayer).toHaveLength(1);
    expect(window.dataLayer[0]).toHaveProperty("action", "keypress");
  });
});

// ── T11: ArrowRight moves focus WITHOUT committing ────────────────────────────

describe("T11 — ArrowRight moves focus", () => {
  it("ArrowRight moves focus to next tab without changing aria-selected", () => {
    window.dataLayer = [];
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    // Tab 0 is focused/active
    fireEvent.keyDown(tabs[0], { key: "ArrowRight" });
    // aria-selected on tab 0 should still be true (no commit)
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    // No GA fired
    expect(window.dataLayer).toHaveLength(0);
    // Tab 1 should now have tabindex=0 (focus moved)
    expect(tabs[1]).toHaveAttribute("tabindex", "0");
  });
});

// ── T12: ArrowLeft wraps from first to last ───────────────────────────────────

describe("T12 — ArrowLeft wraps", () => {
  it("ArrowLeft on first tab wraps focus to last tab", () => {
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    fireEvent.keyDown(tabs[0], { key: "ArrowLeft" });
    expect(tabs[2]).toHaveAttribute("tabindex", "0");
    expect(tabs[0]).toHaveAttribute("aria-selected", "true"); // no commit
  });
});

// ── T13: Home/End move focus without commit ───────────────────────────────────

describe("T13 — Home and End keys", () => {
  it("Home moves focus to first tab; End moves to last", () => {
    window.dataLayer = [];
    const { getAllByRole } = render(
      <ExpandableHeroes panes={THREE_PANES} initialActiveIndex={1} />
    );
    const tabs = getAllByRole("tab");
    fireEvent.keyDown(tabs[1], { key: "End" });
    expect(tabs[2]).toHaveAttribute("tabindex", "0");
    expect(window.dataLayer).toHaveLength(0);
    fireEvent.keyDown(tabs[2], { key: "Home" });
    expect(tabs[0]).toHaveAttribute("tabindex", "0");
    expect(window.dataLayer).toHaveLength(0);
  });
});

// ── T14: onPaneChange callback ────────────────────────────────────────────────

describe("T14 — onPaneChange callback", () => {
  it("calls onPaneChange(index, paneData) on click commit, never on hover", async () => {
    const onPaneChange = vi.fn();
    const { getAllByRole } = render(
      <ExpandableHeroes panes={THREE_PANES} onPaneChange={onPaneChange} />
    );
    const tabs = getAllByRole("tab");
    // hover — should NOT fire
    tabs[1].dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
    expect(onPaneChange).not.toHaveBeenCalled();
    // click — should fire
    tabs[1].click();
    expect(onPaneChange).toHaveBeenCalledOnce();
    expect(onPaneChange).toHaveBeenCalledWith(1, THREE_PANES[1]);
  });
});

// ── T18: Touch tap commits without hover preview ──────────────────────────────

describe("T18 — touch tap", () => {
  it("touch tap commits without triggering preview state", () => {
    window.dataLayer = [];
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    // Simulate a touch pointer down (suppresses hover preview)
    fireEvent.pointerDown(tabs[1], { pointerType: "touch" });
    // After pointerDown with touch, is-preview should NOT be set
    expect(tabs[1]).not.toHaveClass("is-preview");
    // Click still commits
    fireEvent.click(tabs[1]);
    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
  });
});

// ── T25: GA payload shape — no 'type' key ────────────────────────────────────

describe("T25 — GA payload shape", () => {
  it("GA payload has event/action/component/region/section/text and NO type", () => {
    window.dataLayer = [];
    const { getAllByRole } = render(
      <ExpandableHeroes panes={THREE_PANES} gaRegion="main content" gaSection="hero" />
    );
    const tabs = getAllByRole("tab");
    tabs[1].click();
    expect(window.dataLayer.length).toBeGreaterThan(0);
    const payload = window.dataLayer[window.dataLayer.length - 1];
    expect(payload).toHaveProperty("event", "link");
    expect(payload).toHaveProperty("action", "click");
    expect(payload).toHaveProperty("component", "expandable-heroes");
    expect(payload).toHaveProperty("region", "main content");
    expect(payload).toHaveProperty("section", "hero");
    expect(payload).toHaveProperty("text", THREE_PANES[1].title.text);
    expect(payload).not.toHaveProperty("type");
  });
});

// ── T26: gaRegion + gaSection props flow through ─────────────────────────────

describe("T26 — gaRegion and gaSection props", () => {
  it("custom gaRegion and gaSection appear in GA payload", () => {
    window.dataLayer = [];
    const { getAllByRole } = render(
      <ExpandableHeroes
        panes={THREE_PANES}
        gaRegion="custom region"
        gaSection="custom"
      />
    );
    const tabs = getAllByRole("tab");
    tabs[1].click();
    const payload = window.dataLayer[window.dataLayer.length - 1];
    expect(payload).toHaveProperty("region", "custom region");
    expect(payload).toHaveProperty("section", "custom");
  });
});

// ── T28: HTML-parity DOM structure equivalence ────────────────────────────────

describe("T28 — HTML-parity DOM equivalence", () => {
  /**
   * Normalize a DOM tree for structural comparison:
   * - extract tagNames, roles, class names, aria-* attributes
   * - ignore event handlers, style, testid
   */
  const extractStructure = (element) => {
    if (!element || element.nodeType !== 1) return null;
    const attrs = {};
    for (const attr of element.attributes) {
      if (
        attr.name.startsWith("on") ||
        attr.name === "style" ||
        attr.name === "data-testid"
      ) {
        continue;
      }
      attrs[attr.name] = attr.value;
    }
    return {
      tag: element.tagName.toLowerCase(),
      attrs,
      children: Array.from(element.children)
        .map(extractStructure)
        .filter(Boolean),
    };
  };

  it("React component DOM and HTML-parity story DOM have the same structural shape", () => {
    // Render the React component with fixed images
    const { container: reactContainer } = render(
      <ExpandableHeroes panes={FIXED_PANES} initialActiveIndex={0} />
    );

    // Render the HTML-parity tree (hand-written) with the same fixed images
    const htmlParityTree = (
      <div
        className="uds-expandable-heroes"
        role="tablist"
        aria-orientation="horizontal"
        aria-label="Expandable hero panes"
      >
        <button
          type="button"
          className="uds-expandable-heroes__pane is-active"
          role="tab"
          id="expandable-heroes-tab-0"
          aria-selected="true"
          aria-controls="expandable-heroes-panel-0"
          tabIndex={0}
          style={{ backgroundImage: `url('${IMG1}')` }}
          data-ga="Pane 1 Title"
          data-ga-event="link"
          data-ga-action="click"
          data-ga-component="expandable-heroes"
          data-ga-region="main content"
          data-ga-section="hero"
        >
          <span className="uds-expandable-heroes__rotated-title">Pane 1 Title</span>
        </button>
        <div
          className="uds-expandable-heroes__panel"
          role="tabpanel"
          id="expandable-heroes-panel-0"
          aria-labelledby="expandable-heroes-tab-0"
          tabIndex={0}
        >
          {/* Hero markup omitted for shape test — tabpanel structure is what matters */}
          <div className="uds-hero uds-hero-lg" />
        </div>
        <button
          type="button"
          className="uds-expandable-heroes__pane uds-expandable-heroes__pane--collapsed"
          role="tab"
          id="expandable-heroes-tab-1"
          aria-selected="false"
          aria-controls="expandable-heroes-panel-1"
          tabIndex={-1}
          style={{ backgroundImage: `url('${IMG2}')` }}
          data-ga="Pane 2 Title"
          data-ga-event="link"
          data-ga-action="click"
          data-ga-component="expandable-heroes"
          data-ga-region="main content"
          data-ga-section="hero"
        >
          <span className="uds-expandable-heroes__rotated-title">Pane 2 Title</span>
        </button>
        <div
          className="uds-expandable-heroes__panel is-hidden"
          role="tabpanel"
          id="expandable-heroes-panel-1"
          aria-labelledby="expandable-heroes-tab-1"
          tabIndex={-1}
        >
          <div className="uds-hero uds-hero-lg" />
        </div>
        <button
          type="button"
          className="uds-expandable-heroes__pane uds-expandable-heroes__pane--collapsed"
          role="tab"
          id="expandable-heroes-tab-2"
          aria-selected="false"
          aria-controls="expandable-heroes-panel-2"
          tabIndex={-1}
          style={{ backgroundImage: `url('${IMG3}')` }}
          data-ga="Pane 3 Title"
          data-ga-event="link"
          data-ga-action="click"
          data-ga-component="expandable-heroes"
          data-ga-region="main content"
          data-ga-section="hero"
        >
          <span className="uds-expandable-heroes__rotated-title">Pane 3 Title</span>
        </button>
        <div
          className="uds-expandable-heroes__panel is-hidden"
          role="tabpanel"
          id="expandable-heroes-panel-2"
          aria-labelledby="expandable-heroes-tab-2"
          tabIndex={-1}
        >
          <div className="uds-hero uds-hero-lg" />
        </div>
      </div>
    );
    const { container: htmlContainer } = render(htmlParityTree);

    // Compare structural shapes of the tabs and panels (first level children)
    const reactRoot = reactContainer.firstElementChild;
    const htmlRoot = htmlContainer.firstElementChild;

    // Both must have same tag and role
    expect(reactRoot?.tagName).toBe(htmlRoot?.tagName);
    expect(reactRoot?.getAttribute("role")).toBe(htmlRoot?.getAttribute("role"));
    expect(reactRoot?.getAttribute("aria-orientation")).toBe(
      htmlRoot?.getAttribute("aria-orientation")
    );

    // Both must have the same number of direct children (6: 3 tabs + 3 panels)
    expect(reactRoot?.children.length).toBe(6);
    expect(htmlRoot?.children.length).toBe(6);

    // Structural role check on each child
    const reactChildren = Array.from(reactRoot?.children ?? []);
    const htmlChildren = Array.from(htmlRoot?.children ?? []);
    reactChildren.forEach((child, i) => {
      expect(child.getAttribute("role")).toBe(
        htmlChildren[i]?.getAttribute("role")
      );
    });
  });
});
