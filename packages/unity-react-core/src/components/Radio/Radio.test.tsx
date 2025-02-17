import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

import { Radios } from "./Radio";

describe("Radios Component", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Radios />);
  });

  afterEach(() => {
    cleanup();
  });

  it("should render the Radios component", () => {
    expect(component).toBeTruthy();
  });

  it("should have a group of radios with legend 'A Group of Radios'", () => {
    const legend = component.getByText("A Group of Radios");
    expect(legend).toBeInTheDocument();
  });

  it("should have a group of invalid radios with legend 'A Group of Invalid Radios'", () => {
    const legend = component.getByText("A Group of Invalid Radios");
    expect(legend).toBeInTheDocument();
  });

  it("should have a default checked radio button in the invalid group", () => {
    const radio = component.getByLabelText("Default radio", {
      selector: 'input[name="invalidRadios"]',
    }) as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });

  it("should have a group of valid radios with legend 'A Group of Valid Radios'", () => {
    const legend = component.getByText("A Group of Valid Radios");
    expect(legend).toBeInTheDocument();
  });

  it("should have a default checked radio button in the valid group", () => {
    const radio = component.getByLabelText("Default radio", {
      selector: 'input[name="validRadios"]',
    }) as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });
});
