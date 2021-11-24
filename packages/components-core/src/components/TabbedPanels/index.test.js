/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";

import { TabbedPanels } from ".";

import { panels } from "./test-content";

const tabbedPanelsDefaultArgs = {
  panels,
  bgColor: "bg-dark",
};

const renderTabbedPanels = props => {
  return render(<TabbedPanels {...{ ...props }} />);
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
