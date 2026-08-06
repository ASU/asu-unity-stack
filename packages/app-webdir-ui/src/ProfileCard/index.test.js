import { fireEvent, render, screen } from "@testing-library/react";
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

const IMG_URL = "https://example.com/photo.jpg";
const ANON_IMG_URL = "https://example.com/anon.png";

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

  it("uses anonImgURL as a fallback when imgURL is empty", () => {
    render(
      <ProfileCard name="Morgan Denke" imgURL="" anonImgURL={ANON_IMG_URL} />
    );

    expect(screen.getByAltText("Morgan Denke")).toHaveAttribute(
      "src",
      ANON_IMG_URL
    );
  });

  it("swaps to anonImgURL when the profile image fails to load", () => {
    render(
      <ProfileCard
        name="Morgan Denke"
        imgURL={IMG_URL}
        anonImgURL={ANON_IMG_URL}
      />
    );

    const img = screen.getByAltText("Morgan Denke");
    expect(img).toHaveAttribute("src", IMG_URL);

    fireEvent.error(img);

    expect(img).toHaveAttribute("src", ANON_IMG_URL);
    expect(img).toBeVisible();
  });

  it("hides the image instead of looping when the anon image itself fails to load", () => {
    render(
      <ProfileCard
        name="Morgan Denke"
        imgURL={IMG_URL}
        anonImgURL={ANON_IMG_URL}
      />
    );

    const img = screen.getByAltText("Morgan Denke");
    fireEvent.error(img);
    expect(img).toHaveAttribute("src", ANON_IMG_URL);

    fireEvent.error(img);

    expect(img).toHaveAttribute("src", ANON_IMG_URL);
    expect(img).not.toBeVisible();
  });
});
