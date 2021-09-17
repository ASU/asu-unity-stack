// @ts-check
import React from "react";

import { CardCarousel } from ".";
import { Basic as Header } from '../../../../bootstrap4-theme/stories/components/global-header/global-header.components.js';



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
      ? "Only two lines of text here, to show our fixed height."
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
  <div className="container">
    <div className="row">
      <div className="col-12">
        {Header}
        <CardCarousel perView="3" cardItems={myCarouselItems} width="1400px" />
      </div>
    </div>
  </div>
);

export const TwoItemCarousel = () => (
  <div className="container">
    <CardCarousel perView="2" cardItems={myCarouselItems} />
  </div>
);

export const OneItemCarousel = () => (
  <div className="container">
    <CardCarousel perView="1" cardItems={myCarouselItems} />
  </div>
);

export const MultipleCarousels = () => (
  <div className="container">
    <CardCarousel perView="3" cardItems={myCarouselItems} />
    <CardCarousel perView="1" cardItems={myCarouselItems} />
    <CardCarousel perView="2" cardItems={myCarouselItems} />
  </div>
);
