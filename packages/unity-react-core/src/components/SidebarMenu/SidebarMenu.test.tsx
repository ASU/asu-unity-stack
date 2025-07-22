import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

import { SidebarMenu, SidebarProps } from "./SidebarMenu";

const defaultProps: SidebarProps = {
  title: "Header",
  links: [
    {
      href: "https://example.com",
      text: "Link 1",
      isActive: true,
    },
    {
      text: "Link 2 dropdown",
      items: [
        {
          href: "https://example.com",
          text: "Link 2.1",
        },
        {
          href: "https://example.com",
          text: "Link 2.2",
        },
      ],
    },
  ],
};

const defaultProps2 = JSON.parse(JSON.stringify(defaultProps));
delete defaultProps2.links[0].isActive;
defaultProps2.links[1].items[0].isActive = true;

const renderComponent = (props: SidebarProps) => {
  return render(<SidebarMenu {...props} />);
};

describe("SidebarMenu tests", () => {
  let component: RenderResult;

  afterEach(cleanup);

  it("should have top level active link", () => {
    component = renderComponent(defaultProps);
    expect(component.getByText("Link 1")).toHaveClass("is-active");
    expect(component.queryByText("Link 2 dropdown")).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });

  it("should have nested level active link", () => {
    component = renderComponent(defaultProps2);
    expect(component.getByText("Link 2.1")).toBeVisible();
    expect(component.getByText("Link 2 dropdown")).toHaveClass("is-active");
    expect(component.queryByText("Link 2 dropdown")).toHaveAttribute(
      "aria-expanded",
      "true"
    );
  });
});
