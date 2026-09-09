/**
 * Regression: the React TabbedPanels must expose the `data-react` marker on the
 * `.uds-tabbed-panels` container.
 *
 * The vanilla progressive-enhancement layer (tabbed-panels-v2.js) claims every
 * `.uds-tabbed-panels:not([data-react])` element and runs its own overflow /
 * More-button logic on it. When the marker was placed on the inner
 * `.nav.nav-tabs` element instead of the container, the vanilla script ran on
 * top of the React instance and hid the More button — the "More disappears,
 * never to return" bug. The attribute must live on the same element the vanilla
 * guard queries.
 */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { TabbedPanels, Tab } from "./TabbedPanels";

afterEach(() => cleanup());

describe("TabbedPanels — framework marker", () => {
  it("marks the .uds-tabbed-panels container with data-react so the vanilla enhancer skips it", () => {
    const { container } = render(
      <TabbedPanels>
        <Tab id="t1" title="Tab One">A</Tab>
        <Tab id="t2" title="Tab Two">B</Tab>
      </TabbedPanels>
    );

    const panel = container.querySelector(".uds-tabbed-panels");
    expect(panel).not.toBeNull();
    expect(panel?.hasAttribute("data-react")).toBe(true);

    // The vanilla guard is `.uds-tabbed-panels:not([data-react])`; confirm the
    // rendered container is excluded by that exact selector.
    expect(
      container.querySelector(".uds-tabbed-panels:not([data-react])")
    ).toBeNull();
  });
});
