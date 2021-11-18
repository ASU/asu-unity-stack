/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, cleanup, fireEvent } from "@testing-library/react";
import React from "react";

import { ImageGalleryCarousel } from "./index";

// eslint-disable-next-line jest/no-mocks-import
import { imageGalleryCarouselProps } from "../../../__mocks__/data/props-mock";

const imageItems = imageGalleryCarouselProps.imageItems.length;

const renderImageGalleryCarousel = props => {
  return render(<ImageGalleryCarousel {...{ ...props }} />);
};

const mockItemWithContent = () =>
  imageGalleryCarouselProps.imageItems.map(item => ({
    ...item,
    content: "Lorem ipsum dolor sit amet",
  }));

describe("#Image Gallery Carousel", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderImageGalleryCarousel(imageGalleryCarouselProps);
  });
  afterEach(cleanup);

  it("should define the component", () => {
    expect(component).toBeDefined();
  });

  it("should render arrow buttons", () => {
    const arrowsElement = component.queryByTestId("arrows-container");
    expect(arrowsElement).toBeInTheDocument();
  });

  it("should render specified items on slide track", () => {
    const renderedItems =
      component.container.querySelectorAll("li.glide__slide").length;
    expect(imageItems).toBe(renderedItems);
  });

  it("should render specified items on navigation track", () => {
    const bulletsElement = component.queryByTestId("bullets-container");
    const renderedItems = component.container.querySelectorAll(
      "button.bullet-image-container"
    ).length;
    expect(bulletsElement).toBeInTheDocument();
    expect(imageItems).toBe(renderedItems);
  });

  it("should scroll the slider on arrow button click", () => {
    const arrowButton = component
      .queryByTestId("arrows-container")
      .getElementsByClassName("glide__arrow--next")[0];
    fireEvent.click(arrowButton);
    setTimeout(() => {
      const targetElement =
        component.container.querySelectorAll("li.glide__slide")[1];
      expect(targetElement.getAttribute("class")).toContain(
        "glide__slide--active"
      );
    });
  });
});

describe("Image Gallery Carousel with content", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;
  const props = {
    ...imageGalleryCarouselProps,
    imageItems: mockItemWithContent(),
    hasContent: true,
  };

  beforeEach(() => {
    component = renderImageGalleryCarousel(props);
  });
  afterEach(cleanup);

  it("should define the component", () => {
    expect(component).toBeDefined();
  });

  it("should render content section", () => {
    expect(
      component.queryByTestId("image-gallery-content-container")
    ).toBeInTheDocument();
  });
});
