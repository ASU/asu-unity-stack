import { render, cleanup } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach } from "vitest";
import { ImageBasedCard } from "./ImageBasedCard";

const defaultProps = {
  orientation: "portrait" as const,
  size: "md" as const,
  image: "test-image.jpg",
  title: "Test Card",
  buttonText: "Learn More",
  buttonHref: "/test",
  gaSection: "Test Section",
};

const renderComponent = (props = {}) => {
  return render(<ImageBasedCard {...defaultProps} {...props} />);
};

describe("ImageBasedCard tests", () => {
  afterEach(cleanup);

  it("should render with default props", () => {
    const { getByText, getByRole } = renderComponent();
    expect(getByText("Test Card")).toBeInTheDocument();
    expect(getByText("Learn More")).toBeInTheDocument();
    expect(getByRole("img")).toHaveAttribute("src", "test-image.jpg");
  });

  it("should apply correct classes for portrait-md", () => {
    const { container } = renderComponent();
    expect(container.firstChild).toHaveClass("uds-image-based-card portrait-md");
  });

  it("should apply correct classes for landscape-sm", () => {
    const { container } = renderComponent({
      orientation: "landscape",
      size: "sm"
    });
    expect(container.firstChild).toHaveClass("uds-image-based-card landscape-sm");
  });

  it("should apply correct classes for square-lg", () => {
    const { container } = renderComponent({
      orientation: "square",
      size: "lg"
    });
    expect(container.firstChild).toHaveClass("uds-image-based-card square-lg");
  });

  it("should use btn-sm for landscape small button", () => {
    const { getByText } = renderComponent({
      orientation: "landscape",
      size: "sm"
    });
    const button = getByText("Learn More").closest("a");
    expect(button).toHaveClass("btn-sm");
  });

  it("should use btn-sm for landscape medium button", () => {
    const { getByText } = renderComponent({
      orientation: "landscape",
      size: "md"
    });
    const button = getByText("Learn More").closest("a");
    expect(button).toHaveClass("btn-sm");
  });

  it("should use btn-sm for square small button", () => {
    const { getByText } = renderComponent({
      orientation: "square",
      size: "sm"
    });
    const button = getByText("Learn More").closest("a");
    expect(button).toHaveClass("btn-sm");
  });

  it("should use btn-md for portrait medium button", () => {
    const { getByText } = renderComponent({
      orientation: "portrait",
      size: "md"
    });
    const button = getByText("Learn More").closest("a");
    expect(button).toHaveClass("btn-md");
  });

  it("should set correct image attributes", () => {
    const { getByRole } = renderComponent();
    const img = getByRole("img");
    expect(img).toHaveAttribute("loading", "lazy");
    expect(img).toHaveAttribute("decoding", "async");
    expect(img).toHaveAttribute("alt", "Card image cap");
  });

  it("should set button href correctly", () => {
    const { getByText } = renderComponent({
      buttonHref: "/custom-link"
    });
    const button = getByText("Learn More").closest("a");
    expect(button).toHaveAttribute("href", "/custom-link");
  });
});
