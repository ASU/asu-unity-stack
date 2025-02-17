/* eslint-disable react/jsx-props-no-spreading */
// @ts-check
import { render, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import { expect, describe, it, afterEach, beforeEach } from "vitest";

// eslint-disable-next-line jest/no-mocks-import
import { testimonialCarouselProps } from "../../../../../__mocks__/data/props-mock";
import { TestimonialCarousel } from "./TestimonialCarousel";

const renderTestimonialCarousel = props => {
  return render(<TestimonialCarousel {...{ ...props }} />);
};

describe("#Testimonial Carousel", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  beforeEach(() => {
    component = renderTestimonialCarousel(testimonialCarouselProps);
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
    const expectedItems = testimonialCarouselProps.testimonialItems.length;
    const renderedItems =
      component.container.querySelectorAll("li.glide__slide").length;
    expect(expectedItems).toBe(renderedItems);
  });

  it("should scroll the slider on arrow button click", async () => {
    const arrowButton = component
      ?.queryByTestId("arrows-container")
      ?.getElementsByClassName("glide__arrow--next")[0];
    if (arrowButton) {
      fireEvent.click(arrowButton);
    }
    await new Promise(resolve => setTimeout(resolve, 400));
    const targetElement =
      component.container.querySelectorAll("li.glide__slide")[1];
    expect(targetElement.getAttribute("class")).toContain(
      "glide__slide--active"
    );
  });
});
