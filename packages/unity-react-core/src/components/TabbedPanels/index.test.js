/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, cleanup } from "@testing-library/react";
import React from "react";

import { TabbedPanels, Tab } from ".";

const tabbedPanelsDefaultArgs = {
  bgColor: "bg-dark",
};

const renderTabbedPanels = props => {
  return render(
    <TabbedPanels {...{ ...props }}>
      <Tab id="one" title="One">
        <div>One</div>
      </Tab>
      <Tab id="two" title="Two">
        <div>Two</div>
      </Tab>
    </TabbedPanels>
  );
};

describe("#TabbedPanels", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderTabbedPanels(tabbedPanelsDefaultArgs);
  });
  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });
});
