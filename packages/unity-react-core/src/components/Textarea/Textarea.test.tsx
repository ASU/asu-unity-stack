import { render, cleanup, RenderResult } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach } from "vitest";

import { Textarea, TextareaProps, propDefaults } from "./Textarea";

describe("Textarea component", () => {
  let renderResult: RenderResult;

  const defaultProps: TextareaProps = {
    ...propDefaults,
    id: "textarea-id",
    label: "Test Label",
    placeholder: "Textarea Placeholder",
  };

  afterEach(() => {
    cleanup();
  });

  it("should render without crashing", () => {
    renderResult = render(<Textarea {...defaultProps} />);
    expect(renderResult.getByLabelText("Test Label")).toBeInTheDocument();
  });

  it("should display the correct label", () => {
    renderResult = render(<Textarea {...defaultProps} />);
    expect(renderResult.getByText("Test Label")).toBeInTheDocument();
  });

  it("should apply the correct display size class", () => {
    renderResult = render(<Textarea {...defaultProps} displaySize="lg" />);
    expect(renderResult.getByLabelText("Test Label")).toHaveClass(
      "form-control-lg"
    );
  });

  it("should show valid feedback message", () => {
    renderResult = render(<Textarea {...defaultProps} feedback="valid" />);
    expect(renderResult.getByText("Success")).toBeInTheDocument();
  });

  it("should show invalid feedback message", () => {
    renderResult = render(<Textarea {...defaultProps} feedback="invalid" />);
    expect(renderResult.getByText("Error")).toBeInTheDocument();
  });

  it("should display the required icon when the required prop is true", () => {
    cleanup();
    renderResult = render(<Textarea {...defaultProps} required />);
    const { getByTitle } = renderResult;
    const requiredIcon = getByTitle("Required");
    expect(requiredIcon).toBeInTheDocument();
  });

  it("should apply disabled attribute when disabled", () => {
    renderResult = render(<Textarea {...defaultProps} disabled />);
    expect(renderResult.getByLabelText("Test Label")).toBeDisabled();
  });
});
