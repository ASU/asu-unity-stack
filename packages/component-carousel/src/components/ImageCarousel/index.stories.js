// @ts-check
/** @jsx h */

import { h, Fragment } from "preact";
import { ImageCarousel } from ".";

const myCarouselItems = [
  {
    id: 1,
    imageSource: "https://source.unsplash.com/random/800x400?a=1",
    altText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
  {
    id: 2,
    imageSource: "https://source.unsplash.com/random/800x400?a=2",
    altText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
  {
    id: 3,
    imageSource: "https://source.unsplash.com/random/800x400?a=3",
    altText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
  {
    id: 4,
    imageSource: "https://source.unsplash.com/random/800x400?a=4",
    altText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
  {
    id: 5,
    imageSource: "https://source.unsplash.com/random/800x400?a=5",
    altText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
];

const mockItemWithContent = () => {
  return myCarouselItems.map(item => ({
    ...item,
    content: `
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium …
  `,
  }));
};

const mockItemWithMoreContent = () => {
  return myCarouselItems.map((item, index) => ({
    ...item,
    content: (
      <>

          <h3>Content {index + 1}</h3>

          <p>
            Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua eiusmod tempo.
          </p>

      </>
    ),
  }));
};

export default {
  component: ImageCarousel,
  title: "Image Carousel",
};

export const ImageCarouselDefault = () => (
  <ImageCarousel perView="1" maxWidth="800px" imageItems={myCarouselItems} />
);

export const ImageCarouselWithContent = () => (
  <ImageCarousel
    perView="1"
    maxWidth="800px"
    imageItems={mockItemWithContent()}
  />
);

export const ImageCarouselWithMoreContent = () => (
  <ImageCarousel
    perView="1"
    maxWidth="800px"
    imageItems={mockItemWithMoreContent()}
  />
);
