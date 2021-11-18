/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

import { CardCarousel } from ".";

// eslint-disable-next-line jest/no-mocks-import
import { cardCarouselItems } from "../../../__mocks__/data/props-mock";

export default {
  component: CardCarousel,
  title: "Card Carousel",
};

export const ThreeItemCarousel = () => (
  <CardCarousel perView="3" cardItems={cardCarouselItems} />
);

export const TwoItemCarousel = () => (
  <CardCarousel perView="2" cardItems={cardCarouselItems} />
);
