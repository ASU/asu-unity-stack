import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from 'vitest';

import { Tooltip, TooltipProps } from "./Tooltip";

const defaultProps: TooltipProps = {
  title: "Header",
  content: "This is a tooltip",
  triggerElement: <button>Hover me</button>
};

const renderComponent = (props: TooltipProps) => {
  return render(<Tooltip {...props} />);
};

describe("Tooltip tests", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = renderComponent(defaultProps);
  });

  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });

  it("should render the title", () => {
    const { getByText } = component;
    expect(getByText("Header")).toBeInTheDocument();
  });

  it("should render the content", () => {
    const { getByText } = component;
    expect(getByText("This is a tooltip")).toBeInTheDocument();
  });

  it("should have aria-describedby attribute on trigger element", () => {
    const { getByText } = component;
    const triggerElement = getByText("Hover me");
    expect(triggerElement).toHaveAttribute("aria-describedby");
  });

  it("should have role tooltip on tooltip element", () => {
    const { getByRole } = component;
    const tooltipElement = getByRole("tooltip");
    expect(tooltipElement).toBeInTheDocument();
  });
});
