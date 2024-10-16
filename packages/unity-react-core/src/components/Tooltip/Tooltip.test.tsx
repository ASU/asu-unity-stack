import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from 'vitest';

import { CustomPropType, Tooltip, TooltipProps } from "./Tooltip";

const defaultProps: TooltipProps = {
  title: "Header",
  customProp: CustomPropType.GR,
  children: "Content",
};

const renderComponent = (props:TooltipProps) => {
  return render(<Tooltip {...props} />);
};

describe("Tooltip tests", () => {
  let component:RenderResult;

  beforeEach(() => {
    component = renderComponent(defaultProps);
  });

  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });
});
