import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from 'vitest';

import { ListItem, ListItemProps } from "./ListItem";
import { ListComponentType } from "../ListConstants";

const defaultProps: ListItemProps = {
  content: "Header",
  listType: ListComponentType.UNORDERED,
  icon: ["fas", "check"],
  nestedItems: [
    { content: "Nested Item 1" },
    { content: "Nested Item 2" }
  ],
};

const renderComponent = (props: ListItemProps) => {
  return render(<ListItem {...props} />);
};

describe("ListItem tests", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = renderComponent(defaultProps);
  });

  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  it("should render content", () => {
    const { getByText } = component;
    expect(getByText("Header")).toBeInTheDocument();
  });

  it("should render icon", () => {
    const { container } = component;
    const iconElement = container.querySelector(".fa-li.fas.fa-check");
    expect(iconElement).toBeInTheDocument();
  });

  it("should render nested items", () => {
    const { getByText } = component;
    expect(getByText("Nested Item 1")).toBeInTheDocument();
    expect(getByText("Nested Item 2")).toBeInTheDocument();
  });

  it("should render subtitle span", () => {
    const multipleContentProps: ListItemProps = {
      ...defaultProps,
      content: ["Header", "Subheader"]
    };
    component = renderComponent(multipleContentProps);
    const { getByText } = component;
    expect(getByText("Subheader")).toBeInTheDocument();
  });
});
