/* eslint-disable react/prop-types */
// @ts-check
import { number, text } from "@storybook/addon-knobs";
import React from "react";

import { ImageCarousel } from ".";

// eslint-disable-next-line jest/no-mocks-import
import { imageCarouselItems } from "../../../__mocks__/data/props-mock";
import { Basic as Header } from "../../../../bootstrap4-theme/stories/organisms/global-header/global-header.templates";

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
    content: ` Body copy goes here. Limit to 5 lines max. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua eiusmod tempo.`,
  }));

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
 * @returns { JSX.Element}
 */
const Wrapper = ({ children }) => (
  <div
    className="container"
    style={
      {
        // setting display flex the 'maxHeight' gets applied but the carousel squashes
        // display: "flex",
        // maxHeight: text("Max Height", maxHeight, GROUP_STYLE),
      }
    }
  >
    {children}
  </div>
);

export const ImageCarouselDefault = () => (
  <div>
    {Header}
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ImageCarousel
            perView={number(
              "Image per view",
              1,
              { min: 0, max: 99 },
              GROUP_STYLE
            )}
            maxWidth={text("Max Width", maxWidth, GROUP_STYLE)}
            imageItems={imageCarouselItems}
          />
        </div>
      </div>
    </div>
  </div>
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
