/**
 * Regression: the React TabbedPanels overflow "More" button must recalculate
 * whenever the tab strip's size settles, not just on window "resize" events.
 *
 * Previously the component only listened for window "resize". Because
 * `.nav-tabs` animates its width (`transition: all 0.25s`), a resize handler
 * could read a stale pre-transition width, hide the More button, and never
 * recalculate once the size settled — the "More disappears, never to return"
 * bug reported in review. The fix subscribes to a ResizeObserver on the
 * container so the calc re-runs when the box size actually settles.
 */
import React from "react";
import { render, act, cleanup } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { TabbedPanels, Tab } from "./TabbedPanels";

const TAB_W = 200;
const MORE_W = 83;
let navWidth = 2000;

// Minimal ResizeObserver stub that lets tests drive the observer callback.
const roCallbacks = new Set<ResizeObserverCallback>();
class MockResizeObserver {
  private cb: ResizeObserverCallback;

  constructor(cb: ResizeObserverCallback) {
    this.cb = cb;
    roCallbacks.add(cb);
  }

  observe(): void {}

  unobserve(): void {}

  disconnect(): void {
    roCallbacks.delete(this.cb);
  }
}

function triggerResizeObserver(width: number) {
  navWidth = width;
  act(() => {
    roCallbacks.forEach(cb =>
      cb([] as unknown as ResizeObserverEntry[], {} as ResizeObserver)
    );
  });
}

beforeEach(() => {
  roCallbacks.clear();
  navWidth = 2000;
  (
    globalThis as unknown as { ResizeObserver: typeof MockResizeObserver }
  ).ResizeObserver = MockResizeObserver;

  Object.defineProperty(HTMLDivElement.prototype, "clientWidth", {
    configurable: true,
    get(this: HTMLDivElement) {
      return this.classList?.contains("nav-tabs") ? navWidth : 0;
    },
  });

  HTMLElement.prototype.getBoundingClientRect = function (this: HTMLElement) {
    let w = 0;
    if (this.getAttribute?.("role") === "tab") w = TAB_W;
    else if (this.classList?.contains("more-dropdown-button")) w = MORE_W;
    else if (this.classList?.contains("uds-more-dropdown")) w = MORE_W;
    return {
      width: w,
      height: 40,
      top: 0,
      left: 0,
      right: w,
      bottom: 40,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    } as DOMRect;
  };
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

function moreVisible(container: HTMLElement): boolean {
  const wrap = container.querySelector<HTMLElement>(".uds-more-dropdown");
  return !!wrap && wrap.style.visibility !== "hidden";
}

describe("TabbedPanels — overflow recalculation via ResizeObserver", () => {
  const renderPanels = () =>
    render(
      <TabbedPanels>
        <Tab id="t1" title="Tab One">
          A
        </Tab>
        <Tab id="t2" title="Tab Two">
          B
        </Tab>
        <Tab id="t3" title="Tab Three">
          C
        </Tab>
        <Tab id="t4" title="Tab Four">
          D
        </Tab>
        <Tab id="t5" title="Tab Five">
          E
        </Tab>
      </TabbedPanels>
    );

  it("subscribes to a ResizeObserver on the tab container", () => {
    renderPanels();
    expect(roCallbacks.size).toBeGreaterThan(0);
  });

  it("shows the More button again when the container shrinks after growing", () => {
    const { container } = renderPanels();

    // Wide: everything fits, no More button.
    triggerResizeObserver(2000);
    expect(moreVisible(container)).toBe(false);

    // Narrow: tabs overflow, More appears.
    triggerResizeObserver(600);
    expect(moreVisible(container)).toBe(true);

    // Wide again: More hides.
    triggerResizeObserver(2000);
    expect(moreVisible(container)).toBe(false);

    // Narrow again: More must return (regression guard).
    triggerResizeObserver(600);
    expect(moreVisible(container)).toBe(true);
  });
});
