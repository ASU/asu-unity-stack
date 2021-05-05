// @ts-check
/** @jsx h */
import { number, text } from "@storybook/addon-knobs";
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
    imageSource: "https://source.unsplash.com/random/400x200?a=2",
    altText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
  {
    id: 3,
    imageSource: "https://source.unsplash.com/random/600x400?a=3",
    altText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
  {
    id: 4,
    imageSource: "https://source.unsplash.com/random/600x600?a=4",
    altText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
  },
  {
    id: 5,
    imageSource: "https://source.unsplash.com/random/600x500?a=5",
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
          Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua eiusmod tempo.
        </p>
      </>
    ),
  }));
};

export default {
  component: ImageCarousel,
  title: "Image Carousel",
};

const maxWidth = "800px";
// const maxHeight = "600px";

const GROUP_STYLE = "Styles";

/**
 *
 * @param {{ children: JSX.Element}} props
 * @returns { h.JSX.Element}
 */
const Wrapper = ({ children }) => (
  <div
    style={{
      // setting display flex the 'maxHeight' gets applied but the carousel squashes
      // display: "flex",
      // maxHeight: text("Max Height", maxHeight, GROUP_STYLE),
    }}
  >
    {children}
  </div>
);

export const ImageCarouselDefault = () => (
  <Wrapper>
    <ImageCarousel
      perView={number("Image per view", 1, { min: 0, max: 99 }, GROUP_STYLE)}
      maxWidth={text("Max Width", maxWidth, GROUP_STYLE)}
      imageItems={myCarouselItems}
    />
  </Wrapper>
);

export const ImageCarouselWithContent = () => (
  <Wrapper>
    <ImageCarousel
      perView={number("Image per view", 1, { min: 0, max: 99 }, GROUP_STYLE)}
      maxWidth={text("Max Width", maxWidth, GROUP_STYLE)}
      imageItems={mockItemWithContent()}
    />
  </Wrapper>
);

export const ImageCarouselWithMoreContent = () => (
  <Wrapper>
    <ImageCarousel
      perView={number("Image per view", 1, { min: 0, max: 99 }, GROUP_STYLE)}
      maxWidth={text("Max Width", maxWidth, GROUP_STYLE)}
      imageItems={mockItemWithMoreContent()}

    />
  </Wrapper>
);
