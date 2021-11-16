/* eslint-disable react/prop-types */
// @ts-check
import { text } from "@storybook/addon-knobs";
import React from "react";

import { ImageGalleryCarousel } from ".";

// eslint-disable-next-line jest/no-mocks-import
import { imageGalleryCarouselItems } from "../../../__mocks__/data/props-mock";

const mockItemWithContent = () =>
  imageGalleryCarouselItems.map((item, index) => {
    const content =
      index === 2
        ? `
    Content ${index + 1}

    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium,
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium,
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium
  `
        : `
  Content ${index + 1}
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  `;
    return {
      ...item,
      content,
    };
  });

const mockItemWithMoreContent = () => {
  const shortContent = `Body copy goes <span style="font-weight: bold; display: inline;">here in bold!</span>. Then there's a <a href="https://google.com">link!!!!</a>
  Limit to 5 lines max`;
  const longContent = `
  <div>
    <p>
      <strong>Lorem ipsum is </strong>
    </p>
    <br />
    <p>
      <strong>p</strong>laceholder text commonly used in the graphic,
      print, and publishing industries for previewing layouts and visual
      mockups. Lorem ipsum is placeholder text commonly used in the graphic,
      print, and publishing industries for previewing layouts and visual
      mockups. Lorem ipsum is placeholder text commonly used in the graphic,
      print, and publishing industries for previewing layouts and visual
      mockups.&nbsp;<a href="https://packagist.org/packages/asuwebplatforms/webspark-module-webspark_blocks">
      https://packagist.org/packages/asuwebplatforms/webspark-module-webspark_blocks</a></p>
  </div>
  `;
  return imageGalleryCarouselItems.map((item, index) => ({
    ...item,
    title: `Content ${index + 1}`,
    content: index % 2 === 1 ? shortContent : longContent,
  }));
};

export default {
  component: ImageGalleryCarousel,
  title: "Image Gallery Carousel",
};

const maxWidth = "600px";
const maxHeight = "600px";

const GROUP_STYLE = "Styles";

/**
 *
 * @param {{ children: JSX.Element}} props
 * @returns {JSX.Element}
 */
const Wrapper = ({ children = null }) => (
  <div
    className="container"
    style={{
      display: "flex",
      maxHeight: text("Max Height", maxHeight, GROUP_STYLE),
    }}
  >
    {children}
  </div>
);

export const ImageGalleryCarouselDefault = () => (
  <Wrapper>
    <ImageGalleryCarousel
      maxWidth={text("Max Width", maxWidth, GROUP_STYLE)}
      imageItems={imageGalleryCarouselItems}
    />
  </Wrapper>
);

export const ImageGalleryCarouselWithContent = () => (
  <Wrapper>
    <ImageGalleryCarousel
      maxWidth={text("Max Width", maxWidth, GROUP_STYLE)}
      imageItems={mockItemWithContent()}
      hasContent
    />
  </Wrapper>
);

export const ImageCarouselWithMoreContent = () => (
  <Wrapper>
    <ImageGalleryCarousel
      maxWidth={text("Max Width", maxWidth, GROUP_STYLE)}
      imageItems={mockItemWithMoreContent()}
      hasContent
    />
  </Wrapper>
);
