import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import { ProfileCard } from "./index";

const IMG_URL = "https://example.com/photo.jpg";
const ANON_IMG_URL = "https://example.com/anon.png";

describe("ProfileCard", () => {
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
