/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

import { CardCarousel } from ".";

// eslint-disable-next-line jest/no-mocks-import
import { cardCarouselItems } from "../../../__mocks__/data/props-mock";
import { Basic as Header } from "../../../../bootstrap4-theme/stories/organisms/global-header/global-header.templates";

export default {
  component: CardCarousel,
  title: "Card Carousel",
};

/**
 *
 * @param {{ children: JSX.Element}} props
 * @returns { JSX.Element}
 */
const Wrapper = ({ children }) => (
  <div>
    {Header}
    {children}
  </div>
);

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
