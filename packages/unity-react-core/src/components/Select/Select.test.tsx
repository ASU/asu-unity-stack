import {
  render,
  cleanup,
  RenderResult,
  fireEvent,
} from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach, vi, vitest } from "vitest";

import { Select, SelectProps } from "./Select";

describe("Select Component", () => {
  let props: SelectProps;
  let renderResult: RenderResult;

  beforeEach(() => {
    props = {
      id: "select-id",
      label: "Test Label",
      options: [
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
      ],
      selected: "1",
      validMessage: "Success",
      invalidMessage: "Error",
    };
    renderResult = render(<Select {...props} />);
  });

  afterEach(() => {
    cleanup();
  });

  it("should render the select component", () => {
    const { getByLabelText } = renderResult;
    const selectElement = getByLabelText("Test Label");
    expect(selectElement).toBeInTheDocument();
  });

  it("should render the correct number of options", () => {
    const { getByLabelText } = renderResult;
    const selectElement = getByLabelText("Test Label") as HTMLSelectElement;
    expect(selectElement.options.length).toBe(2);
  });

  it("should select the correct option by default", () => {
    const { getByLabelText } = renderResult;
    const selectElement = getByLabelText("Test Label") as HTMLSelectElement;
    expect(selectElement.value).toBe("1");
  });

  it("should display valid feedback message when feedback is valid", () => {
    props.feedback = "valid";
    renderResult = render(<Select {...props} />);
    const { getByText } = renderResult;
    const validFeedback = getByText("Success");
    expect(validFeedback).toBeInTheDocument();
  });

  it("should display invalid feedback message when feedback is invalid", () => {
    props.feedback = "invalid";
    renderResult = render(<Select {...props} />);
    const { getByText } = renderResult;
    const invalidFeedback = getByText("Error");
    expect(invalidFeedback).toBeInTheDocument();
  });
});
