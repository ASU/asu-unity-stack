// @ts-check
import { render, screen } from "@testing-library/react";
import React from "react";
import { expect, describe, test, afterEach } from "vitest";

import { ContentSpotlight } from "./ContentSpotlight.jsx";

const defaultArgs = {
  backgroundImage: "https://example.com/image.jpg",
  icon: "graduation-cap",
  title: "Test Title",
  highlightText: "Highlight",
  description: "Test description",
  button: {
    label: "Test Button",
    href: "#",
    color: "gold",
  },
};

describe("ContentSpotlight", () => {
  test("renders with title and highlight", () => {
    render(<ContentSpotlight {...defaultArgs} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Highlight")).toBeInTheDocument();
  });

  test("renders button", () => {
    render(<ContentSpotlight {...defaultArgs} />);
    const button = screen.getByRole("link", { name: "Test Button" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "#");
  });

  test("renders icon", () => {
     const { container } = render(<ContentSpotlight {...defaultArgs} />);
     expect(container.querySelector(".fa-graduation-cap")).toBeInTheDocument();
  });
});
