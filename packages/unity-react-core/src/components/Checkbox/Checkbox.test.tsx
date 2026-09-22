import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

import { MultiCheckboxTest } from "./Checkbox";
import { checkboxAllExamples } from "./Checkbox.stories";

describe("Checkboxes component", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<form className="uds-form"><MultiCheckboxTest checkboxesList={checkboxAllExamples}/></form>);
  });

  afterEach(() => {
    cleanup();
  });

  // This test seems unnecessary. The component is for use inside forms, but the component is not a form itself.
  // It is assumed that the component would be rendered within a <form class="uds-form">
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
    // The id values have changed with the component parameter updates
    // which now automatically add the correct id and aria-describedby values
    // where needed using the primary id of each group to id the sub elements.
    // Lone checkboxes use the same group format but with only one element
    // in the options array.

    // Previous values used
    // "#validLoneCheckbox" and "#invalidLoneCheckbox"
    //
    // with aria-describedby for
    // "myValidCheckMsg" and "myInvalidCheckMsg"
    const validCheckbox =
      component.container.querySelector("#successCheckedCheckbox_option_1");
    const invalidCheckbox = component.container.querySelector(
      "#invalidCheckbox_option_1"
    );
    expect(validCheckbox).toHaveAttribute(
      "aria-describedby",
      "successCheckedCheckboxValidCheckMsg"
    );
    expect(invalidCheckbox).toHaveAttribute(
      "aria-describedby",
      "invalidCheckboxInvalidCheckMsg"
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
