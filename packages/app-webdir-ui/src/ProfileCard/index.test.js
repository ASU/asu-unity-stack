import { render, screen } from "@testing-library/react";
import React from "react";

import { ProfileCard } from "./index";

const defaultProps = {
  name: "John Smith",
  matchedAffiliationTitle: "Regents Professor",
  matchedAffiliationDept: "Edplus at ASU",
  imgURL: "/test-image.jpg",
  profileURL: "https://search.asu.edu/profile/12345",
  email: "email@asu.edu",
  size: "default",
  GASource: "profile card",
};

describe("ProfileCard", () => {
  it("should render the name and title", () => {
    render(<ProfileCard {...defaultProps} />);
    expect(screen.getByText("John Smith")).toBeInTheDocument();
    expect(screen.getByText("Regents Professor")).toBeInTheDocument();
  });

  it("should not render the title as a heading", () => {
    const { container } = render(<ProfileCard {...defaultProps} />);
    expect(container.querySelector(".person-profession h4")).toBeNull();
    expect(
      screen.queryByRole("heading", { name: "Regents Professor" })
    ).toBeNull();
  });

  it("should render the title as bold text in a paragraph", () => {
    const { container } = render(<ProfileCard {...defaultProps} />);
    const title = container.querySelector(
      ".person-profession p.person-profession-title strong"
    );
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Regents Professor");
  });
});
