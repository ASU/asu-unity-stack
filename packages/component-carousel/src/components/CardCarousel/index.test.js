/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, cleanup, fireEvent } from "@testing-library/react";
import React from "react";

import { CardCarousel } from "./index";

// eslint-disable-next-line jest/no-mocks-import
import { cardCarouselProps } from "../../../__mocks__/data/props-mock";

const renderCardCarousel = props => {
  return render(<CardCarousel {...{ ...props }} />);
};

describe("#Card Carousel", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderCardCarousel(cardCarouselProps);
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

  it("should render specified items", () => {
    const expectedItems = cardCarouselProps.cardItems.length;
    const renderedItems =
      component.container.querySelectorAll("li.glide__slide").length;
    expect(expectedItems).toBe(renderedItems);
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
