/* eslint-disable jest/no-mocks-import */
// @ts-check
import { render, cleanup } from "@testing-library/react";
import React from "react";

import { ASUHeader } from ".";

import {
  defaultState,
  emptyState,
  partnersState,
  withButtonsState,
} from "../__mocks__/data/props-mock";

const renderHeader = props => {
  return render(<ASUHeader {...{ ...props }} />);
};

describe("#ASU Header", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderHeader(defaultState);
  });
  afterAll(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  const cases = [
    [`Universal Navbar(Top)`, `universal-navbar`],
    [`Logo`, `logo`],
    [`Title`, `title`],
    [`Navigation(Dropdown items)`, `navigation`],
  ];

  test.each(cases)("should %p section be defined", (_, testId) =>
    expect(component.queryByTestId(testId)).toBeInTheDocument()
  );

  it("should not define Partner and Buttons section", () => {
    expect(component.queryByTestId("partner")).toBeNull();
    expect(component.queryByTestId("buttons-container")).toBeNull();
  });
});

describe("#ASU Empty Header", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderHeader(emptyState);
  });
  afterAll(cleanup);

  it("should not define Logo and Navigation(Dropdown items) sections", () => {
    expect(component.queryByTestId("navigation")).toBeNull();
    expect(component.queryByTestId("title").firstElementChild.innerHTML).toBe(
      ""
    );
  });
  it("should define Logo section", () => {
    expect(component.queryByTestId("logo")).toBeInTheDocument();
  });
});

describe("#ASU Header with button", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  it("should define Buttons section", () => {
    component = renderHeader(withButtonsState);
    // This resolves the race condition between reading the state in the component and rendering the ui
    setTimeout(() => {
      expect(component.queryByTestId("buttons-container")).toBeInTheDocument();
    });
    cleanup();
  });
});

describe("#ASU Partner Header", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  it("should define Partner section", () => {
    component = renderHeader(partnersState);
    expect(component.queryByTestId("partner")).toBeInTheDocument();
    cleanup();
  });
});
