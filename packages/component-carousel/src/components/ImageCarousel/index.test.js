/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, cleanup, fireEvent } from "@testing-library/react";
import React from "react";

import { ImageCarousel } from "./index";

// eslint-disable-next-line jest/no-mocks-import
import { imageCarouselProps } from "../../../__mocks__/data/props-mock";

const mockItemWithContent = () =>
  imageCarouselProps.imageItems.map(item => ({
    ...item,
    content: "Lorem ipsum dolor sit amet.",
  }));

const renderImageCarousel = props => {
  return render(<ImageCarousel {...{ ...props }} />);
};

describe("#Image Carousel", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderImageCarousel(imageCarouselProps);
  });
  afterEach(cleanup);

  it("should define the component", () => {
    expect(component).toBeDefined();
  });

  it("should render bullet buttons", () => {
    const bulletsElement = component.queryByTestId("bullets-container");
    expect(bulletsElement).toBeInTheDocument();
  });

  it("should render arrow buttons", () => {
    const arrowsElement = component.queryByTestId("arrows-container");
    expect(arrowsElement).toBeInTheDocument();
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

  it("should render specified items", () => {
    const expectedItems = imageCarouselProps.imageItems.length;
    const renderedItems =
      component.container.querySelectorAll("li.glide__slide").length;
    expect(expectedItems).toBe(renderedItems);
  });
});

describe("Image Carousel with content", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;
  const props = { ...imageCarouselProps, imageItems: mockItemWithContent() };

  beforeEach(() => {
    component = renderImageCarousel(props);
  });
  afterEach(cleanup);

  it("should define the component", () => {
    expect(component).toBeDefined();
  });

  it("should render content section", () => {
    expect(
      component.queryAllByTestId("image-content-container").length
    ).toBeGreaterThan(0);
  });
});
