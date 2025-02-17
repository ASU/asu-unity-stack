import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

import { TextInput, TextInputProps } from "./TextInput";

describe("TextInput Component", () => {
  let renderResult: RenderResult;

  const defaultProps: TextInputProps = {
    id: "test-input",
    label: "Test Label",
    placeholder: "Enter text",
    disabled: false,
    required: false,
  };

  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    renderResult = render(<TextInput {...defaultProps} />);
  });

  it("should render the input element", () => {
    const { getByLabelText } = renderResult;
    const inputElement = getByLabelText(defaultProps.label);
    expect(inputElement).toBeInTheDocument();
  });

  it("should display the correct placeholder", () => {
    const { getByPlaceholderText } = renderResult;
    const inputElement = getByPlaceholderText(defaultProps.placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be disabled when the disabled prop is true", () => {
    cleanup();
    renderResult = render(<TextInput {...defaultProps} disabled />);
    const { getByLabelText } = renderResult;
    const inputElement = getByLabelText(defaultProps.label);
    expect(inputElement).toBeDisabled();
  });

  it("should display the required icon when the required prop is true", () => {
    cleanup();
    renderResult = render(<TextInput {...defaultProps} required />);
    const { getByTitle } = renderResult;
    const requiredIcon = getByTitle("Required");
    expect(requiredIcon).toBeInTheDocument();
  });
});
