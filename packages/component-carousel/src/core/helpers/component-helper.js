/* eslint-disable quote-props */
// @ts-check
import { h, hydrate, render } from "preact";

import {
  CardCarousel,
  TestimonialCarousel,
  ImageCarousel,
  ImageGalleryCarousel,
} from "../../components";

const HydratePreact = (component, props, target) => {
  return hydrate(h(component, props), target);
};

const RenderPreact = (component, props, target) => {
  return render(h(component, props), target);
};

/**
 * @typedef {Object} CarouselProps
 * @property {"card" | "testimonial" | "image" | "image-gallery"} typeCarousel
 * @property {string} targetSelector - The CSS selector (#id or .class)
 * which identify the <div> element where the header should be either hydrated or rendered.
 * @property {object} props - Properties to initialize the carousel with.
 * @property {boolean} hydrate - If true, will run Preact's hydrate function instead of render.
 * Should only be set to true if the header has been completely rendered server-side.
 */

/**
 * @param {CarouselProps} props
 */
const createCarousel = ({
  typeCarousel,
  targetSelector,
  props,
  hydrate = false,
}) => {
  const carousels = {
    "card": CardCarousel,
    "testimonial": TestimonialCarousel,
    "image": ImageCarousel,
    "image-gallery": ImageGalleryCarousel,
  };

  const Carousel = carousels[typeCarousel];
  if (!Carousel) return;

  if (hydrate) {
    HydratePreact(Carousel, props, document.querySelector(targetSelector));
  } else {
    RenderPreact(Carousel, props, document.querySelector(targetSelector));
  }
};

/**
 * @param {CarouselProps} props
 */
const initCardCarousel = ({ targetSelector, props, hydrate = false }) => {
  return createCarousel({
    typeCarousel: "card",
    targetSelector,
    props,
    hydrate,
  });
};

/**
 * @param {CarouselProps} props
 */
const initTestimonialCarousel = ({
  targetSelector,
  props,
  hydrate = false,
}) => {
  createCarousel({
    typeCarousel: "testimonial",
    targetSelector,
    props,
    hydrate,
  });
};

/**
 * @param {CarouselProps} props
 */
const initImageCarousel = ({ targetSelector, props, hydrate = false }) => {
  createCarousel({ typeCarousel: "image", targetSelector, props, hydrate });
};

/**
 * @param {CarouselProps} props
 */
const initImageGalleryCarousel = ({
  targetSelector,
  props,
  hydrate = false,
}) => {
  createCarousel({
    typeCarousel: "image-gallery",
    targetSelector,
    props,
    hydrate,
  });
};

export {
  HydratePreact,
  RenderPreact,
  initCardCarousel,
  initTestimonialCarousel,
  initImageCarousel,
  initImageGalleryCarousel,
};
