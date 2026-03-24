import { render, screen } from "@testing-library/react";
import React from "react";
import { expect, describe, it } from "vitest";

import { HighlyRanked } from "./HighlyRanked";

describe("HighlyRanked component", () => {
  const mockProps = {
    title: "ASU is highly ranked",
    description: "Test description",
    ctaText: "CTA Rank",
    ctaUrl: "#",
    rankings: [
      {
        value: "400+",
        title: "faculty",
        description: "description 1",
      },
    ],
  };

  it("should render the title and description", () => {
    render(<HighlyRanked {...mockProps} />);
    expect(screen.getByText("ASU is highly ranked")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("should render the CTA button", () => {
    render(<HighlyRanked {...mockProps} />);
    const cta = screen.getByText("CTA Rank");
    expect(cta).toBeInTheDocument();
    expect(cta.closest("a")).toHaveAttribute("href", "#");
  });

  it("should render the ranking cards", () => {
    render(<HighlyRanked {...mockProps} />);
    expect(screen.getByText("400+")).toBeInTheDocument();
    expect(screen.getByText("faculty")).toBeInTheDocument();
    expect(screen.getByText("description 1")).toBeInTheDocument();
  });
});
