import classNames from "classnames";
import React from "react";

import { RankingCard } from ".";

import { imageAny } from "../../../../../shared/assets";

export default {
  title: "UDS/Ranking Card",
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
  image: imageAny(),
  imageAlt: "Image alt text",
  heading: "Ranking title goes here, under the photo",
  body: "ASU has topped U.S. News & World Report’s “Most Innovative Schools list since the inception of the category in 2016. ASU again placed ahead of Stanford and MIT on the list, based on a survey of peers. College presidents, provosts and admissions deans around the country nominated up to 10 colleges or universities that are making the most innovative improvements.",
  readMoreLink: "https://www.asu.edu/",
};

export const Small = Template.bind({});
Small.args = {
  imageSize: "small",
  image: imageAny(),
  imageAlt: "Image alt text",
  heading: "Ranking title goes here, under the photo",
  body: "ASU has topped U.S. News & World Report’s “Most Innovative Schools list since the inception of the category in 2016. ASU again placed ahead of Stanford and MIT on the list, based on a survey of peers. College presidents, provosts and admissions deans around the country nominated up to 10 colleges or universities that are making the most innovative improvements.",
  readMoreLink: "https://www.asu.edu/",
  citation:
    "Citation of the ranking should go under the headline, regular body style text",
};
