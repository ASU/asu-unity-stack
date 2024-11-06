import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

import { RankingCard } from "./RankingCard";

const rankingCardLarge = {
  imageSize: "large",
  image: "https://source.unsplash.com/WLUHO9A_xik/600x400",
  imageAlt: "Image alt text",
  heading: "Ranking title goes here, under the photo",
  body: "ASU has topped U.S. News & World Report’s “Most Innovative Schools list since the inception of the category in 2016. ASU again placed ahead of Stanford and MIT on the list, based on a survey of peers. College presidents, provosts and admissions deans around the country nominated up to 10 colleges or universities that are making the most innovative improvements.",
  readMoreLink: "https://www.asu.edu/",
};

const rankingCardSmall = {
  imageSize: "small",
  image: "https://source.unsplash.com/WLUHO9A_xik/600x400",
  imageAlt: "Image alt text",
  heading: "Ranking title goes here, under the photo",
  body: "ASU has topped U.S. News & World Report’s “Most Innovative Schools list since the inception of the category in 2016. ASU again placed ahead of Stanford and MIT on the list, based on a survey of peers. College presidents, provosts and admissions deans around the country nominated up to 10 colleges or universities that are making the most innovative improvements.",
  readMoreLink: "https://www.asu.edu/",
  citation:
    "Citation of the ranking should go under the headline, regular body style text",
};

const renderRankingCard = args => {
  return render(<RankingCard {...args} />);
};

describe("RankingCard large layout", () => {
  let component;

  beforeEach(() => {
    component = renderRankingCard(rankingCardLarge);
  });

  afterEach(cleanup);

  it("should define the component", () => {
    expect(component).toBeDefined();
  });

  it("should expand the description box", () => {
    const buttonChevron = component.getByRole("button");
    const infoLayer = component.getByTestId("info-layer");
    fireEvent.click(buttonChevron);
    expect(infoLayer).toHaveClass("active");
  });
});

describe("RankingCard small layout", () => {
  let component;

  beforeEach(() => {
    component = renderRankingCard(rankingCardSmall);
  });

  afterEach(cleanup);

  it("should define the component", () => {
    expect(component).toBeDefined();
  });

  it("should expand the description box", () => {
    const buttonChevron = component.getByRole("button");
    const infoLayer = component.getByTestId("info-layer");
    fireEvent.click(buttonChevron);
    expect(infoLayer).toHaveClass("active");
  });
});
