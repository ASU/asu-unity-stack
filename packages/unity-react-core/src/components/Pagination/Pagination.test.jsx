/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach, vi } from "vitest";

import { Pagination } from "./Pagination";

const onChangeSpy = vi.fn();
const totalPages = 4;

const defaultArgs = {
  type: "default",
  background: "white",
  totalPages,
  onChange: onChangeSpy,
};

const renderPagination = props => {
  return render(<Pagination {...{ ...props }} />, {});
};

describe("#Pagination", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderPagination(defaultArgs);
  });
  afterEach(cleanup);

  it("should define component", () => {
    expect(screen.getByTestId("pagination")).toBeDefined();
  });

  it("should call 'onChange' method on pagination item change", () => {
    const clickableElement = screen.queryAllByTestId("page-link")[0];
    fireEvent.click(clickableElement);
    expect(onChangeSpy).toHaveBeenCalled();
  });

  it("should 'active' selected item", async () => {
    const clickableElement = screen.queryAllByTestId("page-link")[0];
    await fireEvent.click(clickableElement);
    expect(clickableElement.parentElement.className).toContain("active");
  });

  it("should disable prev button at the beginning of the pagination elements list", () => {
    const element = screen.queryByTestId("pagination-prev").parentElement;
    expect(element.className).toContain("disabled");
  });

  it("should disable next button at the end of the pagination elements list", async () => {
    const clickableElement =
      screen.queryAllByTestId("page-link")[totalPages - 1];
    const nextButton = await screen.getByTestId("pagination-next");
    await fireEvent.click(clickableElement);
    expect(nextButton.parentElement.className).toContain("disabled");
  });
});

describe("#Pagination variations", () => {
  it("should set active currentPage", async () => {
    const currentPage = 3;
    const props = {
      ...defaultArgs,
      currentPage,
    };

    const component = await renderPagination(props);
    const paginationItem =
      screen.queryAllByTestId("page-link")[currentPage - 1].parentElement;
    expect(paginationItem.className).toContain("active");
  });
});
