import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from 'vitest';

import { List, ListProps } from "./List";
import { ItemListStyleColor, ListBackgroundColor, ListComponentType } from "./ListConstants";

const defaultProps: ListProps = {
  listType: ListComponentType.UNORDERED,
  backgroundColor: ListBackgroundColor.NONE,
  listItemStyleColor: ItemListStyleColor.DEFAULT,
  items: [
    { content: "Item 1" },
    { content: "Item 2" },
    { content: "Item 3" },
  ],
};

const renderComponent = (props: ListProps) => {
  return render(<List {...props} />);
};

describe("List tests", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = renderComponent(defaultProps);
  });

  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  it("should render the correct number of items", () => {
    const items = component.container.querySelectorAll("li");
    expect(items.length).toBe(defaultProps.items.length);
  });

  it("should apply the correct class for unordered list", () => {
    expect(component.container.firstChild).toHaveClass("uds-list");
  });

  it("should apply the correct background color class", () => {
    const { rerender } = component;
    rerender(<List {...defaultProps} backgroundColor={ListBackgroundColor.DARK} />);
    expect(component.container.firstChild).toHaveClass("darkmode");
  });

  it("should apply the correct list item style color class", () => {
    const { rerender } = component;
    rerender(<List {...defaultProps} listItemStyleColor={ItemListStyleColor.PRIMARY} />);
    expect(component.container.firstChild).toHaveClass("maroon");
  });
});
