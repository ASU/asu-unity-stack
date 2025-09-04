import { imageAny } from "@asu/shared";
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

const img = imageAny();

// @ts-ignore
import { RankingCard } from "./RankingCard";

const rankingCardLarge = {
  imageSize: "large",
  image: img,
  imageAlt: "Image alt text",
  heading: "Ranking title goes here, under the photo",
  body: "ASU has topped U.S. News & World Report’s “Most Innovative Schools list since the inception of the category in 2016. ASU again placed ahead of Stanford and MIT on the list, based on a survey of peers. College presidents, provosts and admissions deans around the country nominated up to 10 colleges or universities that are making the most innovative improvements.",
  readMoreLink: "https://www.asu.edu/",
};

const rankingCardSmall = {
  imageSize: "small",
  image: img,
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
    expect(infoLayer).toHaveClass("show");
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
    expect(infoLayer).toHaveClass("show");
  });
});

describe("Multiple RankingCards", () => {
  const multipleRankingCardsArgs = {
    columns: "2",
    cards: [
      {
        imageSize: "large",
        image: img,
        imageAlt: "First ranking image",
        heading: "Most Innovative University",
        body: "ASU has topped U.S. News & World Report's Most Innovative Schools list since 2016.",
        readMoreLink: "https://www.asu.edu/",
      },
      {
        imageSize: "small",
        image: img,
        imageAlt: "Second ranking image",
        heading: "Top Online Programs",
        body: "ASU Online is ranked #1 for innovation.",
        readMoreLink: "https://www.asu.edu/",
        citation: "U.S. News & World Report 2023",
      },
    ],
  };

  let component;

  beforeEach(() => {
    component = renderRankingCard(multipleRankingCardsArgs);
  });

  afterEach(cleanup);

  it("should render multiple ranking cards container", () => {
    const parentContainer = component.container.querySelector(".uds-card-arrangement");
    const cardContainer = component.container.querySelector(".uds-card-arrangement-card-container");
    expect(parentContainer).toBeInTheDocument();
    expect(cardContainer).toBeInTheDocument();
  });

  it("should render correct number of ranking cards", () => {
    const cards = component.container.querySelectorAll(".card-ranking");
    expect(cards).toHaveLength(2);
  });

  it("should apply auto-arrangement class", () => {
    const container = component.container.querySelector(".auto-arrangement");
    expect(container).toBeInTheDocument();
  });

  it("should apply four-columns class when columns is 4", () => {
    const fourColumnArgs = { ...multipleRankingCardsArgs, columns: "4" };
    component = renderRankingCard(fourColumnArgs);
    const container = component.container.querySelector(".four-columns");
    expect(container).toBeInTheDocument();
  });
});
