import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

import { Checkboxes } from "./Checkbox";

describe("Checkboxes component", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Checkboxes />);
  });

  afterEach(() => {
    cleanup();
  });

  it("should render the form", () => {
    const form = component.container.querySelector("form.uds-form");
    expect(form).toBeInTheDocument();
  });

  it("should render all checkboxes", () => {
    const checkboxes = component.container.querySelectorAll(
      "input[type='checkbox']"
    );
    expect(checkboxes.length).toBe(13);
  });

  it("should render the correct labels", () => {
    const labels = component.container.querySelectorAll("label");
    expect(labels[0].textContent).toBe("I like checkboxes");
    expect(labels[1].textContent).toContain("Multi-line content");
    expect(labels[2].textContent).toBe("I accept");
    expect(labels[3].textContent).toBe("I also accept");
    expect(labels[4].textContent).toBe("1");
    expect(labels[5].textContent).toBe("2");
    expect(labels[6].textContent).toBe("3 (disabled)");
    expect(labels[7].textContent).toBe("1");
    expect(labels[8].textContent).toBe("2");
    expect(labels[9].textContent).toBe("3 (disabled)");
    expect(labels[10].textContent).toBe("1");
    expect(labels[11].textContent).toBe("2");
    expect(labels[12].textContent).toBe("3 (disabled)");
  });

  it("should render the correct aria-describedby attributes", () => {
    const validCheckbox =
      component.container.querySelector("#validLoneCheckbox");
    const invalidCheckbox = component.container.querySelector(
      "#invalidLoneCheckbox"
    );
    expect(validCheckbox).toHaveAttribute(
      "aria-describedby",
      "myValidCheckMsg"
    );
    expect(invalidCheckbox).toHaveAttribute(
      "aria-describedby",
      "myInvalidCheckMsg"
    );
  });

  it("should render the correct checked attributes", () => {
    const checkedCheckboxes = component.container.querySelectorAll(
      "input[type='checkbox']:checked"
    );
    expect(checkedCheckboxes.length).toBe(4);
  });

  it("should render the correct disabled attributes", () => {
    const disabledCheckboxes = component.container.querySelectorAll(
      "input[type='checkbox']:disabled"
    );
    expect(disabledCheckboxes.length).toBe(3);
  });
});
