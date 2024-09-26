// @ts-check
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach, vi } from "vitest";

import { AnchorMenu } from "./AnchorMenu";
import { Containers } from "./AnchorMenu.stories";

const defaultArgs = {
  items: [
    { text: "First container", targetIdName: "first-container" },
    { text: "Second container", targetIdName: "second-container" },
    { text: "Third container", targetIdName: "third-container" },
    { text: "Fourth container", targetIdName: "fourth-container" },
  ],
  firstElementId: "first-container",
};

const spyScrollTo = vi.fn();

const renderAnchorMenu = props => {
  return render(
    <>
      <AnchorMenu items={props.items} firstElementId={props.firstElementId} />
      <Containers />
    </>
  );
};

describe("#Anchor Menu", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  // beforeEach(() => {
  //   Object.defineProperty(window, "scrollTo", { value: spyScrollTo });
  //   component = renderAnchorMenu(defaultArgs);
  // });
  // afterEach(cleanup);
  it("TODO", () => {
    expect(true);
  });

  // it("should define the component", () => {
  //   expect(screen.getAllByRole("anchor-menu-container")).toBeDefined();
  // });

  // it("should scroll to the section specified", async () => {
  //   const itemExample = "first-container";
  //   const anchor = await component.findByTestId(`anchor-item-${itemExample}`);
  //   fireEvent.click(anchor);
  //   expect(spyScrollTo).toHaveBeenCalled();
  // });
});
