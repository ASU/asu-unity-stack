import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from 'vitest';

import { Modal } from "./Modal";


const renderComponent = () => {
  return render(<Modal />);
};

describe("Modal tests", () => {
  let component:RenderResult;

  beforeEach(() => {
    component = renderComponent();
  });

  afterEach(cleanup);

  it("should define component", () => {
    expect(component).toBeDefined();
  });
});
