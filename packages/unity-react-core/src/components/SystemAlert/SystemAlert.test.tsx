import { render, cleanup } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach, vi } from 'vitest';

import { SystemAlert } from "./SystemAlert";

const defaultProps = {
  title: "Header",
  children: "Content",
};

const renderComponent = props => {
  return render(<SystemAlert {...props} />);
};

describe("SystemAlert tests", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderComponent(defaultProps);
  });

  afterEach(cleanup);

  it("calls x when y", () => {
    expect(1).toBe(1);
  });

  it("should do  x when y", () => {
    expect(2).toBe(2);
  });

  it("should define component", () => {
    expect(component).toBeDefined();
  });
});
