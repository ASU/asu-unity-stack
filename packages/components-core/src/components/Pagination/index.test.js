/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, cleanup, fireEvent } from "@testing-library/react";
import React from "react";

import { Pagination } from ".";

const onChangeSpy = jest.fn();
const totalPages = 4;

const defaultArgs = {
  type: "default",
  background: "white",
  totalPages,
  onChange: onChangeSpy,
};

const renderPagination = props => {
  return render(<Pagination {...{ ...props }} />);
};

describe("#Pagination", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderPagination(defaultArgs);
  });
  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  it("should call 'onChange' method on pagination item change", () => {
    const clickableElement = component.queryAllByTestId("page-link")[0];
    fireEvent.click(clickableElement);
    expect(onChangeSpy).toHaveBeenCalled();
  });

  it("should 'active' selected item", () => {
    const clickableElement = component.queryAllByTestId("page-link")[0];
    fireEvent.click(clickableElement);
    setTimeout(() =>
      expect(clickableElement.parentElement.className).toContain("active")
    );
  });

  it("should disable prev button at the beginning of the pagination elements list", () => {
    const element = component.queryAllByTestId("page-link")[0].parentElement;
    expect(element.className).toContain("disabled");
  });

  it("should disable next button at the end of the pagination elements list", () => {
    const clickableElement =
      component.queryAllByTestId("page-link")[totalPages];
    const nextButton = component.queryByText("Next");
    fireEvent.click(clickableElement);
    setTimeout(() =>
      expect(nextButton.parentElement.className).toContain("disabled")
    );
  });
});

describe("#Pagination variations", () => {
  it("should render first and last button", () => {
    const props = {
      ...defaultArgs,
      showFirstButton: true,
      showLastButton: true,
    };

    const component = renderPagination(props);

    expect(component.queryByText("First")).toBeInTheDocument();
    expect(component.queryByText("Last")).toBeInTheDocument();
  });
  it("should set active currentPage", () => {
    const currentPage = 3;
    const props = {
      ...defaultArgs,
      currentPage,
    };

    const component = renderPagination(props);
    const paginationItem =
      component.queryAllByTestId("page-link")[currentPage].parentElement;

    expect(paginationItem.className).toContain("active");
  });
});
