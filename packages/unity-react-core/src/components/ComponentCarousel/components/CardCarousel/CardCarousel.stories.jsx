// @ts-check
import React from "react";

import { cardCarouselItems } from "../../../../../__mocks__/data/props-mock";
import { CardCarousel } from "./CardCarousel";

const cardCarouselBgColorClassName = {
  "None": "",
  "Gray 1": "gray-faint-bg",
  "Gray 2": "gray-light-bg",
  "Gray 7": "gray-dark-bg",
};

export default {
  title: "Components/Card Carousel",
  component: CardCarousel,
  parameters: {
    /*controls: { disable: true }*/
  },
  argTypes: {
    bgColor: {
      name: "Background color of the section",
      description:
        "Background color is not applied to the component, but to the section wrapper.",
      options: Object.keys(cardCarouselBgColorClassName),
      control: {
        type: "radio",
      },
    },
  },
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

export const ThreeItemCarousel = ({ bgColor }) => (
  <Wrapper>
    <CardCarousel
      perView="3"
      cardItems={cardCarouselItems}
      bgColor={cardCarouselBgColorClassName[bgColor]}
    />
  </Wrapper>
);

export const TwoItemCarousel = ({ bgColor }) => (
  <Wrapper>
    <CardCarousel
      perView="2"
      cardItems={cardCarouselItems}
      bgColor={cardCarouselBgColorClassName[bgColor]}
    />
  </Wrapper>
);
