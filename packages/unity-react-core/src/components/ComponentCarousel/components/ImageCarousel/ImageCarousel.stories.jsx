/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

// eslint-disable-next-line jest/no-mocks-import
import { imageCarouselItems } from "../../../../../__mocks__/data/props-mock";
import { ImageCarousel } from "./ImageCarousel";

const mockItemWithContent = () =>
  imageCarouselItems.map(item => ({
    ...item,
    content: `
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium …
  `,
  }));

const mockItemWithMoreContent = () =>
  imageCarouselItems.map((item, index) => ({
    ...item,
    title: `Content ${index + 1}`,
    content: `<p>Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua eiusmod tempo.</p>
    <p>Another line of content</p>`,
  }));

export default {
  title: "Components/Image Carousel",
  component: ImageCarousel,
  globals: {
    framework: "react",
  },
  tags: ["!bootstrap"],
  args: {
    imageItems: [],
    perView: 1,
  },
  argTypes: {
    imageItems: {
      table: { disable: true },
    },
    perView: {
      control: { type: "range", min: 1, max: 3, step: 1 },
    },
  },
};

const maxWidth = "800px";
// const maxHeight = "600px";

/**
 * @param {{ imageItems: Array, perView: number}} props
 * @returns { JSX.Element}
 */
const Wrapper = ({ imageItems, perView }) => (
  <div
    style={
      {
        // setting display flex the 'maxHeight' gets applied but the carousel squashes
        // display: "flex",
        // maxHeight: text("Max Height", maxHeight, GROUP_STYLE),
      }
    }
  >
    <ImageCarousel
      perView={perView}
      maxWidth={maxWidth}
      imageItems={imageItems}
    />
  </div>
);

export const ImageCarouselDefault = Wrapper.bind({});
ImageCarouselDefault.args = {
  imageItems: imageCarouselItems,
};

export const ImageCarouselWithCaption = Wrapper.bind({});
ImageCarouselWithCaption.args = {
  imageItems: mockItemWithContent(),
};

export const ImageCarouselWithMoreCaptionContent = Wrapper.bind({});
ImageCarouselWithMoreCaptionContent.args = {
  imageItems: mockItemWithMoreContent(),
};
