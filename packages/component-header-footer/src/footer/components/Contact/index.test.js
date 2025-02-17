/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jest/no-mocks-import */
// @ts-check
import { render, cleanup } from "@testing-library/react";
import React from "react";

import { ContactComponent } from ".";

import { contactWithColumn } from "../../../../__mocks__/data/props-mock";

const renderContact = props => {
  return render(<ContactComponent {...{ ...props }} />);
};

describe("#Contact", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderContact(contactWithColumn);
  });
  afterAll(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  it("should render contribution link", () => {
    expect(
      component.queryByTestId("contact-contribution-link")
    ).toBeInTheDocument();
  });

  it("should render columns", () => {
    const columnsContainer = component.queryByTestId("columns-container");
    const columns = columnsContainer
      ? columnsContainer.querySelectorAll(".col-xl.flex-footer.testname-column")
      : [];
    expect(columns.length).toBe(contactWithColumn.contact.columns.length);
  });
});
