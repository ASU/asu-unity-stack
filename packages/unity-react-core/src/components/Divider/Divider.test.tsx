import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach } from 'vitest';

import { Divider, DividerType } from "./Divider";

const renderComponent = (props = {}) => {
  return render(<Divider {...props} />);
};

describe("Divider tests", () => {
  let component: RenderResult;

  afterEach(cleanup);

  it("should define component", () => {
    component = renderComponent();
    expect(component).toBeDefined();
  });

  it("should render default divider", () => {
    component = renderComponent();
    const hrElement = component.container.querySelector("hr");
    expect(hrElement).toBeInTheDocument();
    expect(hrElement).not.toHaveClass("copy-divider");
  });

  it("should render copy divider", () => {
    component = renderComponent({ type: DividerType.COPY });
    const hrElement = component.container.querySelector("hr");
    expect(hrElement).toBeInTheDocument();
    expect(hrElement).toHaveClass("copy-divider");
  });
});
