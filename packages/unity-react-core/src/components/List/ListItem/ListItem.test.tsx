import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from 'vitest';

import { CustomPropType, ListItem, ListItemProps } from "./ListItem";

const defaultProps: ListItemProps = {
  title: "Header",
  customProp: CustomPropType.GR,
  children: "Content",
};

const renderComponent = (props:ListItemProps) => {
  return render(<ListItem {...props} />);
};

describe("ListItem tests", () => {
  let component:RenderResult;

  beforeEach(() => {
    component = renderComponent(defaultProps);
  });

  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });
});
