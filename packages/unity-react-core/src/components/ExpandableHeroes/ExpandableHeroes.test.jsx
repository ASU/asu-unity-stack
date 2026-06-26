// @ts-check
import { render } from "@testing-library/react";
import React from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

import { ExpandableHeroes } from "./ExpandableHeroes";

// ── Shared fixtures ────────────────────────────────────────────────────────────

const makePane = (n) => ({
  image: { url: `https://example.com/img${n}.jpg`, altText: `Alt ${n}` },
  title: { text: `Pane ${n} Title` },
});

const THREE_PANES = [makePane(1), makePane(2), makePane(3)];

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
