import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach, vi } from 'vitest';

import { Divider } from "./Divider";

const defaultProps = {
  title: "Header",
  children: "Content",
};

const renderComponent = props => {
  return render(<Divider {...props} />);
};

describe("Divider tests", () => {
  let component:RenderResult;

  beforeEach(() => {
    component = renderComponent(defaultProps);
  });

  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });
});
