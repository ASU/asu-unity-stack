// @ts-check
import React from "react";

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
/**
 * @type import(".").CardItem []
 */
const myCarouselItems = [];
for (let index = 0; index < 8; index += 1) {
  const content =
    index === 3
      ? "Short Body Content"
      : `Body ${index + 1}
    copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua eiusmod tempo.`;

  const imageSource =
    index === 5
      ? "https://br0ken"
      : `https://source.unsplash.com/random/${getImageFormat(index)}?a=${
          index - 1
        }`;

  myCarouselItems.push({
    id: index,
    imageSource,
    imageAltText: "Card image cap",
    title: `Card ${index + 1}`,
    content,
    buttons: [
      {
        ariaLabel: "dummy button",
        color: "maroon",
        href: "#",
        label: `Button ${index + 1} link here`,
        size: "default",
        onClick: () => {
          // eslint-disable-next-line no-alert
          window.alert("Hola Amigo 😃.");
          return false;
        },
      },
    ],
  });
}

export default {
  component: CardCarousel,
  title: "Card Carousel",
};

export const ThreeItemCarousel = () => (
  <CardCarousel perView="3" cardItems={myCarouselItems} width="1400px" />
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
