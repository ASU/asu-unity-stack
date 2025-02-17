import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

import { GridLinks, GridLinksProps } from "./GridLinks";
import { gridLinksNumColumns, gridLinksTextColor } from "./GridLinksConstants";

const gridLinkItems = [
  {
    label: "Item 1 label",
    icon: "fa-university",
    href: "https://example.com/1",
  },
  {
    label: "Item 2 label",
    icon: "fa-desktop",
    href: "https://example.com/2",
  },
  {
    label: "Item 3 label",
    icon: "fa-lightbulb",
    href: "https://example.com/3",
  },
  {
    label: "Item 4 label",
    icon: "fa-rocket",
    href: "https://example.com/4",
  },
];
const defaultProps = {
  numColumns: gridLinksNumColumns.TWO_COLUMNS,
  textColor: gridLinksTextColor.NONE,
  gridLinkItems,
  // children: "Content to be displayed",
};

const renderComponent = (props: GridLinksProps) => {
  return render(<GridLinks {...props} />);
};

describe("GridLinks tests", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = renderComponent(defaultProps);
  });

  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });
});
