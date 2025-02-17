/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

// eslint-disable-next-line jest/no-mocks-import
import { cardCarouselItems } from "../../../../../__mocks__/data/props-mock";
import { CardCarousel } from "./CardCarousel";

export default {
  title: "Components/Card Carousel",
  component: CardCarousel,
  parameters: { controls: { disable: true } },
  globals: {
    framework: "react",
  },
  tags: ["!bootstrap"],
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
