/* eslint-disable quote-props */
// @ts-check
import React from "react";
import { createRoot } from "react-dom/client";

import {
  CardCarousel,
  TestimonialCarousel,
  ImageCarousel,
  ImageGalleryCarousel,
} from "../../components";

const RenderPreact = (component, props, target) => {
  const root = createRoot(target);
  root.render(React.createElement(component, props));
};

/**
 * @typedef {Object} CarouselProps
 * @property {"card" | "testimonial" | "image" | "image-gallery"} typeCarousel
 * @property {string} targetSelector - The CSS selector (#id or .class)
 * which identify the <div> element where the header should be either hydrated or rendered.
 * @property {object} props - Properties to initialize the carousel with.
 * Should only be set to true if the header has been completely rendered server-side.
 */

/**
 * @param {CarouselProps} props
 */
const createCarousel = ({ typeCarousel, targetSelector, props }) => {
  const carousels = {
    "card": CardCarousel,
    "testimonial": TestimonialCarousel,
    "image": ImageCarousel,
    "image-gallery": ImageGalleryCarousel,
  };

  const Carousel = carousels[typeCarousel];
  if (!Carousel) return;

  RenderPreact(Carousel, props, document.querySelector(targetSelector));
};

/**
 * @param {CarouselProps} props
 */
const initCardCarousel = ({ targetSelector, props }) =>
  createCarousel({
    typeCarousel: "card",
    targetSelector,
    props,
  });

/**
 * @param {CarouselProps} props
 */
const initTestimonialCarousel = ({ targetSelector, props }) => {
  createCarousel({
    typeCarousel: "testimonial",
    targetSelector,
    props,
  });
};

/**
 * @param {CarouselProps} props
 */
const initImageCarousel = ({ targetSelector, props }) => {
  createCarousel({ typeCarousel: "image", targetSelector, props });
};

/**
 * @param {CarouselProps} props
 */
const initImageGalleryCarousel = ({ targetSelector, props }) => {
  createCarousel({
    typeCarousel: "image-gallery",
    targetSelector,
    props,
  });
};

export {
  initCardCarousel,
  initTestimonialCarousel,
  initImageCarousel,
  initImageGalleryCarousel,
};
