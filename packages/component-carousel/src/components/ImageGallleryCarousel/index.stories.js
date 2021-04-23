// @ts-check
/** @jsx h */
import { h, Fragment } from "preact";

import { ImageGalleryCarousel } from ".";

const myCarouselItems = [];

for (let index = 1; index < 10; index++) {
  myCarouselItems.push({
    id: index,
    imageSource: `https://source.unsplash.com/random/800x400?a=${  index}`,
    altText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  });
}

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
          Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua eiusmod tempo.
        </p>
      </>
    ),
  }));
};

export default {
  component: ImageGalleryCarousel,
  title: "Image Gallery Carousel",
};

export const ImageGalleryCarouselDefault = () => (
  <ImageGalleryCarousel
    perView="1"
    maxWidth="800px"
    imageItems={myCarouselItems}
  />
);

export const ImageGalleryCarouselWithContent = () => (
  <ImageGalleryCarousel
    perView="1"
    maxWidth="800px"
    imageItems={mockItemWithContent()}
    hasContent={true}
  />
);

export const ImageCarouselWithMoreContent = () => (
  <ImageGalleryCarousel
    perView="1"
    maxWidth="800px"
    imageItems={mockItemWithMoreContent()}
    hasContent={true}
  />
);
