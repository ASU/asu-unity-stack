import { render } from "@testing-library/react";
import React from "react";

import { ProfileCard } from "./index";

const defaultProps = {
  name: "John Smith",
  matchedAffiliationTitle: "Regents Professor",
  imgURL: "/test-image.jpg",
  profileURL: "https://search.asu.edu/profile/12345",
  email: "email@asu.edu",
  size: "default",
  GASource: "profile card",
};

describe("ProfileCard social media list", () => {
  it("should not render the social media list when there are no social links", () => {
    const { container } = render(
      <ProfileCard {...defaultProps} shortBio="A short bio with no socials" />
    );
    expect(container.querySelector("ul.person-social-medias")).toBeNull();
    expect(container.querySelector(".person-description")).toHaveTextContent(
      "A short bio with no socials"
    );
  });

  it("should render the social media list when at least one social link exists", () => {
    const { container } = render(
      <ProfileCard {...defaultProps} linkedinLink="https://linkedin.com/in/x" />
    );
    const list = container.querySelector("ul.person-social-medias");
    expect(list).toBeInTheDocument();
    expect(list.querySelectorAll("li")).toHaveLength(1);
  });
});
