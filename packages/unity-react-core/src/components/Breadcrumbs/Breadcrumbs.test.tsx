import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

import { Breadcrumbs, BreadcrumbsProps } from "./Breadcrumbs";

const defaultProps: BreadcrumbsProps = {
  linkItems: [
    {
      label: "Home",
      active: false,
      href: "#",
    },
    {
      label: "Library",
      active: false,
      href: "#",
    },
    {
      label: "Data",
      active: true,
      href: "#",
    },
  ],
};

const renderComponent = (props?: BreadcrumbsProps) => {
  return render(<Breadcrumbs {...defaultProps} {...props} />);
};

describe("Breadcrumbs tests", () => {
  it("should define component", () => {
    const screen = renderComponent();
    expect(screen).toBeDefined();
  });
  const linkItems = [
    { label: "Home", active: false, href: "/" },
    { label: "Library", active: false, href: "/library" },
    { label: "Data", active: true, href: "/data" },
  ];

  it("renders the correct number of breadcrumb items", () => {
    const screen = renderComponent();
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(linkItems.length);
  });

  it("applies the active class to the active item", () => {
    const screen = renderComponent();
    const activeItem = screen.getByText("Data").closest("li");
    expect(activeItem).toHaveClass("active");
  });

  it("does not render when linkItems is empty", () => {
    const { container } = renderComponent({ linkItems: [] });
    expect(container.firstChild).toBeNull();
  });

  it("applies the correct background color", () => {
    const screen = renderComponent({
      ...defaultProps,
      backgroundColor: "bg-gray-1",
    });
    const nav = screen.getByRole("navigation");
    expect(nav.firstChild).toHaveClass("bg-gray-1");
  });
});
