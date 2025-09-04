import { imageAny } from "@asu/shared";
import classNames from "classnames";
import React from "react";

const img = imageAny();

// @ts-ignore
import { RankingCard } from "./RankingCard";

export default {
  title: "Components/Ranking Card",
  component: RankingCard,
};

const Template = args => (
  <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12", "col-md-6", "col-lg-4")}>
        <RankingCard {...args} />
      </div>
    </div>
  </div>
);

export const Large = Template.bind({});
Large.args = {
  imageSize: "large",
  image: img,
  imageAlt: "Image alt text",
  heading: "Ranking title goes here, under the photo",
  body: "ASU has topped U.S. News & World Report's \"Most Innovative Schools\" list since the inception of the category in 2016. ASU again placed ahead of Stanford and MIT on the list, based on a survey of peers. College presidents, provosts and admissions deans around the country nominated up to 10 colleges or universities that are making the most innovative improvements.",
  readMoreLink: "https://www.asu.edu/",
};

export const Small = Template.bind({});
Small.args = {
  imageSize: "small",
  image: img,
  imageAlt: "Image alt text",
  heading: "Ranking title goes here, under the photo",
  body: "ASU has topped U.S. News & World Report's \"Most Innovative Schools\" list since the inception of the category in 2016. ASU again placed ahead of Stanford and MIT on the list, based on a survey of peers. College presidents, provosts and admissions deans around the country nominated up to 10 colleges or universities that are making the most innovative improvements.",
  readMoreLink: "https://www.asu.edu/",
  citation:
    "Citation of the ranking should go under the headline, regular body style text",
};

const MultipleRankingCardsTemplate = args => (
  <div className="container">
    <div className={classNames("row", "row-spaced", "pt-2", "pb-2")}>
      <div className={classNames("col", "col-12")}>
        <RankingCard {...args} />
      </div>
    </div>
  </div>
);

export const MultipleRankingCardsTwoColumns = MultipleRankingCardsTemplate.bind({});
MultipleRankingCardsTwoColumns.args = {
  columns: "2",
  cards: [
    {
      imageSize: "large",
      image: img,
      imageAlt: "First ranking image",
      heading: "Most Innovative University",
      body: "ASU has topped U.S. News & World Report's Most Innovative Schools list since the inception of the category in 2016.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "Second ranking image",
      heading: "Top Online Programs",
      body: "ASU Online is ranked #1 for innovation and #2 for best online bachelor's programs by U.S. News & World Report.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "small",
      image: img,
      imageAlt: "Third ranking image",
      heading: "Research Excellence",
      body: "ASU is classified as a Research 1 university by the Carnegie Classification of Institutions of Higher Education.",
      readMoreLink: "https://www.asu.edu/",
      citation: "Carnegie Classification 2021",
    },
    {
      imageSize: "small",
      image: img,
      imageAlt: "Fourth ranking image",
      heading: "Sustainability Leader",
      body: "ASU is recognized as a leader in sustainability and climate action by multiple organizations.",
      readMoreLink: "https://www.asu.edu/",
      citation: "Times Higher Education Impact Rankings 2023",
    },
  ],
};

export const MultipleRankingCardsFourColumns = MultipleRankingCardsTemplate.bind({});
MultipleRankingCardsFourColumns.args = {
  columns: "4",
  cards: [
    {
      imageSize: "large",
      image: img,
      imageAlt: "First ranking image",
      heading: "Most Innovative",
      body: "ASU has topped U.S. News & World Report's Most Innovative Schools list since 2016.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "Second ranking image",
      heading: "Online Excellence",
      body: "ASU Online is ranked #1 for innovation in online education programs.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "Third ranking image",
      heading: "Research Impact",
      body: "ASU is a Carnegie R1 research university with significant research impact.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "Fourth ranking image",
      heading: "Sustainability",
      body: "ASU leads in sustainability and climate action initiatives globally.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "First ranking image",
      heading: "Most Innovative",
      body: "ASU has topped U.S. News & World Report's Most Innovative Schools list since 2016.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "Second ranking image",
      heading: "Online Excellence",
      body: "ASU Online is ranked #1 for innovation in online education programs.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "Third ranking image",
      heading: "Research Impact",
      body: "ASU is a Carnegie R1 research university with significant research impact.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "Fourth ranking image",
      heading: "Sustainability",
      body: "ASU leads in sustainability and climate action initiatives globally.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "First ranking image",
      heading: "Most Innovative",
      body: "ASU has topped U.S. News & World Report's Most Innovative Schools list since 2016.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "Second ranking image",
      heading: "Online Excellence",
      body: "ASU Online is ranked #1 for innovation in online education programs.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "Third ranking image",
      heading: "Research Impact",
      body: "ASU is a Carnegie R1 research university with significant research impact.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "Fourth ranking image",
      heading: "Sustainability",
      body: "ASU leads in sustainability and climate action initiatives globally.",
      readMoreLink: "https://www.asu.edu/",
    },
  ],
};

export const MultipleRankingCardsThreeColumns = MultipleRankingCardsTemplate.bind({});
MultipleRankingCardsThreeColumns.args = {
  columns: "3",
  cards: [
    {
      imageSize: "large",
      image: img,
      imageAlt: "First ranking image",
      heading: "Most Innovative",
      body: "ASU has topped U.S. News & World Report's Most Innovative Schools list since 2016.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "Second ranking image",
      heading: "Online Excellence",
      body: "ASU Online is ranked #1 for innovation in online education programs.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "Third ranking image",
      heading: "Research Impact",
      body: "ASU is a Carnegie R1 research university with significant research impact.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "Fourth ranking image",
      heading: "Sustainability",
      body: "ASU leads in sustainability and climate action initiatives globally.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "Fifth ranking image",
      heading: "Student Success",
      body: "ASU excels in student outcomes and graduation rates across all programs.",
      readMoreLink: "https://www.asu.edu/",
    },
    {
      imageSize: "large",
      image: img,
      imageAlt: "Sixth ranking image",
      heading: "Global Reach",
      body: "ASU's global impact and international partnerships span all continents.",
      readMoreLink: "https://www.asu.edu/",
    },
  ],
};
