// @ts-check
/** @jsx h */
import { h, Fragment } from "preact";

import { CardCarousel } from ".";

const imageFormats = [
  "500x400",
  "300x400",
  "400x400",
  "200x200",
  "300x400",
  "300x400",
  "400x400",
  "300x400",
];

const getImageFormat = index => imageFormats[index];

const myCarouselItems = [];
for (let index = 0; index < 8; index++) {
  myCarouselItems.push({
    id: index,
    imageSource: `https://source.unsplash.com/random/${getImageFormat(
      index
    )}?a=${index - 1}`,
    altText: "Card image cap",
    title: `Card ${index + 1}`,
    content: `Body ${
      index + 1
    } copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua eiusmod tempo.`,
    buttonLink: {
      url: "#",
      text: `Button ${index + 1} link here`,
    },
  });
}

export default {
  component: CardCarousel,
  title: "Card Carousel",
};

export const ThreeItemCarousel = () => (
  <CardCarousel perView="3" cardItems={myCarouselItems} />
);

export const TwoItemCarousel = () => (
  <CardCarousel perView="2" cardItems={myCarouselItems} />
);

export const OneItemCarousel = () => (
  <CardCarousel perView="1" cardItems={myCarouselItems} />
);

export const MultipleCarousels = () => (
  <>
    <CardCarousel perView="3" cardItems={myCarouselItems} />
    <CardCarousel perView="1" cardItems={myCarouselItems} />
    <CardCarousel perView="2" cardItems={myCarouselItems} />
  </>
);

