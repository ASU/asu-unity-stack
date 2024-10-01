import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from 'vitest';

import { CustomPropType, List, ListProps } from "./List";

const defaultProps: ListProps = {
  title: "Header",
  customProp: CustomPropType.GR,
  children: "Content",
};

const renderComponent = (props:ListProps) => {
  return render(<List {...props} />);
};

describe("List tests", () => {
  let component:RenderResult;

  beforeEach(() => {
    component = renderComponent(defaultProps);
  });

  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });
});
