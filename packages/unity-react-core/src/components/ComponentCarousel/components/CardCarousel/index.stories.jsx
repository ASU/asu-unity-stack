/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

import { CardCarousel } from ".";

// eslint-disable-next-line jest/no-mocks-import
import { cardCarouselItems } from "../../../../../__mocks__/data/props-mock";

export default {
  component: CardCarousel,
  title: "Card Carousel",
  parameters: { controls: { disable: true } },
};

/**
 *
 * @param {{ children: JSX.Element}} props
 * @returns { JSX.Element}
 */
const Wrapper = ({ children }) => <div>{children}</div>;

export const ThreeItemCarousel = () => (
  <Wrapper>
    <CardCarousel perView="3" cardItems={cardCarouselItems} />
  </Wrapper>
);

export const TwoItemCarousel = () => (
  <Wrapper>
    <CardCarousel perView="2" cardItems={cardCarouselItems} />
  </Wrapper>
);
