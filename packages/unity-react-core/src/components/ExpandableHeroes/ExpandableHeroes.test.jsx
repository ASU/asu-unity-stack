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
  image: {
    url: imgUrl || `https://example.com/img${n}.jpg`,
    altText: `Alt ${n}`,
  },
  title: { text: `Pane ${n} Title` },
});

const THREE_PANES = [makePane(1), makePane(2), makePane(3)];

const FIXED_PANES = [makePane(1, IMG1), makePane(2, IMG2), makePane(3, IMG3)];

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
      const span = tabs[i].querySelector(
        ".uds-expandable-heroes__rotated-title"
      );
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

  it("only the active panel lacks the HTML hidden attribute; inactive have hidden set", () => {
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const panels = getAllByRole("tabpanel", { hidden: true });
    // Active panel (index 0): no hidden attribute
    expect(panels[0]).not.toHaveAttribute("hidden");
    // Inactive panels: HTML hidden attribute set
    expect(panels[1]).toHaveAttribute("hidden");
    expect(panels[2]).toHaveAttribute("hidden");
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
      <ExpandableHeroes
        panes={THREE_PANES}
        gaRegion="main content"
        gaSection="hero"
      />
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
// (amended cycle 5: updated for Option C dual-render DOM structure)
// The outer .uds-expandable-heroes-container wraps:
//   1. The tablist (.uds-expandable-heroes) with 3 __item children (each with
//      1 tab button + 1 aria-hidden decorative __panel)
//   2. Three semantic tabpanel siblings of the tablist (outside it)

describe("T28 — HTML-parity DOM equivalence", () => {
  it("React component DOM and HTML-parity story DOM have the same structural shape", () => {
    // Render the React component with fixed images
    const { container: reactContainer } = render(
      <ExpandableHeroes panes={FIXED_PANES} initialActiveIndex={0} />
    );

    // Render the HTML-parity tree (hand-written) with the same fixed images
    // Option C DOM: outer container > tablist (3 __item wrappers) + 3 semantic tabpanels
    const htmlParityTree = (
      <div className="uds-expandable-heroes-container">
        <div
          className="uds-expandable-heroes"
          role="tablist"
          aria-orientation="horizontal"
          aria-label="Expandable hero panes"
        >
          {/* Item 0 — ACTIVE */}
          <div className="uds-expandable-heroes__item is-active">
            <button
              type="button"
              className="uds-expandable-heroes__pane is-active"
              role="tab"
              id="expandable-heroes-tab-0"
              aria-label="Pane 1 Title"
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
              <span className="uds-expandable-heroes__rotated-title">
                Pane 1 Title
              </span>
            </button>
            <div className="uds-expandable-heroes__panel" aria-hidden="true">
              <div className="uds-hero uds-hero-lg" />
            </div>
          </div>
          {/* Item 1 — COLLAPSED */}
          <div className="uds-expandable-heroes__item">
            <button
              type="button"
              className="uds-expandable-heroes__pane uds-expandable-heroes__pane--collapsed"
              role="tab"
              id="expandable-heroes-tab-1"
              aria-label="Pane 2 Title"
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
              <span className="uds-expandable-heroes__rotated-title">
                Pane 2 Title
              </span>
            </button>
            <div
              className="uds-expandable-heroes__panel is-hidden"
              aria-hidden="true"
            >
              <div className="uds-hero uds-hero-lg" />
            </div>
          </div>
          {/* Item 2 — COLLAPSED */}
          <div className="uds-expandable-heroes__item">
            <button
              type="button"
              className="uds-expandable-heroes__pane uds-expandable-heroes__pane--collapsed"
              role="tab"
              id="expandable-heroes-tab-2"
              aria-label="Pane 3 Title"
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
              <span className="uds-expandable-heroes__rotated-title">
                Pane 3 Title
              </span>
            </button>
            <div
              className="uds-expandable-heroes__panel is-hidden"
              aria-hidden="true"
            >
              <div className="uds-hero uds-hero-lg" />
            </div>
          </div>
        </div>

        {/* Outside semantic tabpanels — siblings of the tablist */}
        {/* Panel 0 — ACTIVE: no hidden attr, class visually-hidden */}
        <div
          role="tabpanel"
          id="expandable-heroes-panel-0"
          aria-labelledby="expandable-heroes-tab-0"
          tabIndex={0}
          className="visually-hidden"
        >
          <div className="uds-hero uds-hero-lg" />
        </div>
        {/* Panel 1 — INACTIVE: hidden attr set */}
        <div
          role="tabpanel"
          id="expandable-heroes-panel-1"
          aria-labelledby="expandable-heroes-tab-1"
          tabIndex={-1}
          hidden
          className="visually-hidden"
        >
          <div className="uds-hero uds-hero-lg" />
        </div>
        {/* Panel 2 — INACTIVE: hidden attr set */}
        <div
          role="tabpanel"
          id="expandable-heroes-panel-2"
          aria-labelledby="expandable-heroes-tab-2"
          tabIndex={-1}
          hidden
          className="visually-hidden"
        >
          <div className="uds-hero uds-hero-lg" />
        </div>
      </div>
    );
    const { container: htmlContainer } = render(htmlParityTree);

    // ── Compare outer container ────────────────────────────────────────────
    const reactOuterContainer = reactContainer.firstElementChild;
    const htmlOuterContainer = htmlContainer.firstElementChild;

    expect(reactOuterContainer?.tagName).toBe("DIV");
    expect(htmlOuterContainer?.tagName).toBe("DIV");
    expect(reactOuterContainer).toHaveClass("uds-expandable-heroes-container");
    expect(htmlOuterContainer).toHaveClass("uds-expandable-heroes-container");

    // ── Outer container has 4 children: 1 tablist + 3 semantic tabpanels ──
    expect(reactOuterContainer?.children.length).toBe(4);
    expect(htmlOuterContainer?.children.length).toBe(4);

    // ── First child is the tablist ─────────────────────────────────────────
    const reactTablist = reactOuterContainer?.children[0];
    const htmlTablist = htmlOuterContainer?.children[0];
    expect(reactTablist?.getAttribute("role")).toBe("tablist");
    expect(htmlTablist?.getAttribute("role")).toBe("tablist");

    // Tablist has 3 __item children
    expect(reactTablist?.children.length).toBe(3);
    expect(htmlTablist?.children.length).toBe(3);

    // Each __item: 1 tab button + 1 decorative __panel (aria-hidden, no role)
    Array.from(reactTablist?.children ?? []).forEach((item, i) => {
      expect(item).toHaveClass("uds-expandable-heroes__item");
      const htmlItem = htmlTablist?.children[i];
      expect(item.children.length).toBe(2);
      expect(htmlItem?.children.length).toBe(2);
      // First child is tab button
      expect(item.children[0].getAttribute("role")).toBe("tab");
      expect(htmlItem?.children[0].getAttribute("role")).toBe("tab");
      // Second child is decorative __panel: aria-hidden=true, no role
      expect(item.children[1]).toHaveAttribute("aria-hidden", "true");
      expect(item.children[1]).not.toHaveAttribute("role");
      expect(htmlItem?.children[1]).toHaveAttribute("aria-hidden", "true");
      expect(htmlItem?.children[1]).not.toHaveAttribute("role");
    });

    // ── Children 1-3 of outer container are semantic tabpanels ────────────
    for (let i = 1; i <= 3; i++) {
      const reactPanel = reactOuterContainer?.children[i];
      const htmlPanel = htmlOuterContainer?.children[i];
      expect(reactPanel?.getAttribute("role")).toBe("tabpanel");
      expect(htmlPanel?.getAttribute("role")).toBe("tabpanel");
      expect(reactPanel).toHaveAttribute(
        "id",
        `expandable-heroes-panel-${i - 1}`
      );
      expect(htmlPanel).toHaveAttribute(
        "id",
        `expandable-heroes-panel-${i - 1}`
      );
    }
  });
});

// ── T09b: Enter fires dataLayer.push EXACTLY once (no double-fire) ────────────

describe("T09b — Enter key fires GA exactly once (no double-fire)", () => {
  it("userEvent.keyboard Enter on focused tab calls dataLayer.push exactly once", async () => {
    window.dataLayer = [];
    const user = userEvent.setup();
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    tabs[1].focus();
    await user.keyboard("{Enter}");
    // Must be exactly 1, not 2 (no double-fire from synthetic click)
    expect(window.dataLayer).toHaveLength(1);
    expect(window.dataLayer[0]).toHaveProperty("action", "keypress");
  });
});

// ── T10b: Space fires dataLayer.push EXACTLY once (no double-fire) ────────────

describe("T10b — Space key fires GA exactly once", () => {
  it("userEvent.keyboard Space on focused tab calls dataLayer.push exactly once", async () => {
    window.dataLayer = [];
    const user = userEvent.setup();
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    tabs[1].focus();
    await user.keyboard(" ");
    expect(window.dataLayer).toHaveLength(1);
    expect(window.dataLayer[0]).toHaveProperty("action", "keypress");
  });
});

// ── T29c: Every tab button has a non-empty aria-label matching its pane title ─

describe("T29c — aria-label on every tab button", () => {
  it("default state: all three tabs have non-empty aria-label matching their pane title", () => {
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    THREE_PANES.forEach((pane, i) => {
      expect(tabs[i]).toHaveAttribute("aria-label", pane.title.text);
      expect(tabs[i].getAttribute("aria-label")).not.toBe("");
    });
  });

  it("after activating each pane in turn, aria-label still matches the pane title", () => {
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    // Activate pane 1 and re-check all labels
    fireEvent.click(tabs[1]);
    THREE_PANES.forEach((pane, i) => {
      expect(tabs[i]).toHaveAttribute("aria-label", pane.title.text);
    });
    // Activate pane 2 and re-check all labels
    fireEvent.click(tabs[2]);
    THREE_PANES.forEach((pane, i) => {
      expect(tabs[i]).toHaveAttribute("aria-label", pane.title.text);
    });
  });
});

// ── T29d: tablist has NO aria-owns attribute (regression guard) ──────────────
// aria-owns was empirically proven non-viable in cycle-5: axe-core 4.10.2 does
// not use aria-owns to re-scope aria-required-children. Option C (dual-render)
// is used instead. This test guards against re-introducing the dead approach.

describe("T29d — tablist has no aria-owns attribute", () => {
  it("tablist has no aria-owns attribute", () => {
    const { getByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tablist = getByRole("tablist");
    expect(tablist).not.toHaveAttribute("aria-owns");
  });
});

// ── T29e: in-tablist __panel divs are decorative (aria-hidden, no tabpanel role) ─
// Option C: inside panels carry aria-hidden="true" and NO role="tabpanel",
// no id="expandable-heroes-panel-*", no aria-labelledby.

describe("T29e — in-tablist __panel divs are decorative", () => {
  it("inside __panel divs have aria-hidden=true and no role=tabpanel", () => {
    const { container } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tablist = container.querySelector('[role="tablist"]');
    expect(tablist).not.toBeNull();
    // All __panel divs inside the tablist
    const insidePanels = tablist.querySelectorAll(
      ".uds-expandable-heroes__panel"
    );
    expect(insidePanels).toHaveLength(3);
    insidePanels.forEach((panel, i) => {
      expect(panel).toHaveAttribute("aria-hidden", "true");
      expect(panel).not.toHaveAttribute("role");
      expect(panel).not.toHaveAttribute("id");
      expect(panel).not.toHaveAttribute("aria-labelledby");
      expect(panel).not.toHaveAttribute("tabindex");
    });
  });
});

// ── T29f: three outside semantic tabpanels exist as DOM siblings of the tablist ─

describe("T29f — outside semantic tabpanels are siblings of the tablist", () => {
  it("three role=tabpanel elements exist outside the tablist as siblings", () => {
    const { container, getAllByRole } = render(
      <ExpandableHeroes panes={THREE_PANES} />
    );
    // The outer container wraps tablist + tabpanels
    const outerContainer = container.querySelector(
      ".uds-expandable-heroes-container"
    );
    expect(outerContainer).not.toBeNull();

    // Tabpanels are direct children of the outer container (siblings of tablist)
    const tablist = outerContainer.querySelector('[role="tablist"]');
    expect(tablist).not.toBeNull();

    const panels = getAllByRole("tabpanel", { hidden: true });
    expect(panels).toHaveLength(3);
    panels.forEach((panel, i) => {
      expect(panel).toHaveAttribute("id", `expandable-heroes-panel-${i}`);
      expect(panel).toHaveAttribute(
        "aria-labelledby",
        `expandable-heroes-tab-${i}`
      );
      // Each outside panel must NOT be a descendant of the tablist
      expect(tablist.contains(panel)).toBe(false);
      // Each outside panel must be a direct child of the outer container
      expect(panel.parentElement).toBe(outerContainer);
    });
  });
});

// ── T29g: outside tabpanels — active has tabIndex=0 and no hidden attr;
//          inactive have tabIndex=-1 and hidden attr set ──────────────────────

describe("T29g — outside tabpanel active/inactive states", () => {
  it("active outside tabpanel (index 0) has tabIndex=0 and no hidden attr; inactive have tabIndex=-1 and hidden", () => {
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const panels = getAllByRole("tabpanel", { hidden: true });
    // Active panel (index 0): tabIndex=0, no hidden attribute
    expect(panels[0]).toHaveAttribute("tabindex", "0");
    expect(panels[0]).not.toHaveAttribute("hidden");
    // Inactive panels: tabIndex=-1 and hidden attribute set
    expect(panels[1]).toHaveAttribute("tabindex", "-1");
    expect(panels[1]).toHaveAttribute("hidden");
    expect(panels[2]).toHaveAttribute("tabindex", "-1");
    expect(panels[2]).toHaveAttribute("hidden");
  });

  it("after activating index 2, only index-2 outside tabpanel lacks hidden", () => {
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    fireEvent.click(tabs[2]);
    const panels = getAllByRole("tabpanel", { hidden: true });
    expect(panels[0]).toHaveAttribute("hidden");
    expect(panels[1]).toHaveAttribute("hidden");
    expect(panels[2]).not.toHaveAttribute("hidden");
    expect(panels[2]).toHaveAttribute("tabindex", "0");
  });
});

// ── T29h: tab buttons have aria-controls matching the OUTSIDE tabpanel id ────

describe("T29h — aria-controls on tabs matches outside tabpanel ids", () => {
  it("each tab button aria-controls matches the outside tabpanel id", () => {
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    const panels = getAllByRole("tabpanel", { hidden: true });
    tabs.forEach((tab, i) => {
      expect(tab).toHaveAttribute(
        "aria-controls",
        `expandable-heroes-panel-${i}`
      );
      expect(panels[i]).toHaveAttribute("id", `expandable-heroes-panel-${i}`);
    });
  });
});

// ── T29i: active outside tabpanel has class visually-hidden ──────────────────

describe("T29i — active outside tabpanel has class visually-hidden", () => {
  it("active outside tabpanel has class visually-hidden", () => {
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const panels = getAllByRole("tabpanel", { hidden: true });
    expect(panels[0]).toHaveClass("visually-hidden");
  });

  it("after activating index 1, panel 1 has visually-hidden", () => {
    const { getAllByRole } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const tabs = getAllByRole("tab");
    fireEvent.click(tabs[1]);
    const panels = getAllByRole("tabpanel", { hidden: true });
    expect(panels[1]).toHaveClass("visually-hidden");
  });
});

// ── T29b: Active panel structural layout hints (Finding D regression guard) ───
// jsdom does not compute CSS layout, so we assert the structural invariants that
// the wrapper-per-pane (option β) layout depends on:
//   1. The active __item carries .is-active class.
//   2. The active __panel is the direct child of .uds-expandable-heroes__item.is-active
//   3. The active panel lacks is-hidden class.
//   4. Inactive items do NOT have is-active; their panels have is-hidden.
// These invariants mean the CSS selector
//   `.uds-expandable-heroes__item.is-active .uds-expandable-heroes__panel`
// will match (display: block), keeping the panel visible and in flow.
// (amended after cycle 2: updated for wrapper-per-pane DOM)
// (amended after cycle 5: inside __panel divs are decorative, no role/id; use
//  container queries rather than getAllByRole for the structural check)

describe("T29b — active panel structural layout invariants (wrapper-per-pane)", () => {
  it("active item has is-active; its inside __panel is a direct child and lacks is-hidden", () => {
    const { container } = render(<ExpandableHeroes panes={THREE_PANES} />);
    const activeItem = container.querySelector(
      ".uds-expandable-heroes__item.is-active"
    );
    expect(activeItem).not.toBeNull();
    // The inside __panel must be a direct child of the active item
    const panel = activeItem?.querySelector(
      ":scope > .uds-expandable-heroes__panel"
    );
    expect(panel).not.toBeNull();
    expect(panel).not.toHaveClass("is-hidden");
    // Inactive items' inside panels carry is-hidden
    const allInsidePanels = container.querySelectorAll(
      ".uds-expandable-heroes__panel"
    );
    // There should be 3 inside panels (inside __item wrappers)
    expect(allInsidePanels).toHaveLength(3);
    expect(allInsidePanels[1]).toHaveClass("is-hidden");
    expect(allInsidePanels[2]).toHaveClass("is-hidden");
  });

  it("after committing pane 1, item 1 becomes active and its inside __panel lacks is-hidden", () => {
    const { container, getAllByRole } = render(
      <ExpandableHeroes panes={THREE_PANES} />
    );
    const tabs = getAllByRole("tab");
    fireEvent.click(tabs[1]);
    const activeItem = container.querySelector(
      ".uds-expandable-heroes__item.is-active"
    );
    // The active item must contain the tab for pane 1
    const activeTab = activeItem?.querySelector(".uds-expandable-heroes__pane");
    expect(activeTab?.id).toBe("expandable-heroes-tab-1");
    // Its inside __panel must be visible (no is-hidden)
    const panel = activeItem?.querySelector(
      ":scope > .uds-expandable-heroes__panel"
    );
    expect(panel).not.toHaveClass("is-hidden");
    // Inside panel is decorative (no id in Option C)
    expect(panel).not.toHaveAttribute("id");
  });
});
