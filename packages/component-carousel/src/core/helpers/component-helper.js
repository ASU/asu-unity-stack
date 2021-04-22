// @ts-check
/** @jsx h */
/** @jsxFrag Fragment */
/* eslint-disable react/prop-types */
import { h, hydrate, render } from "preact";
import { AsuCarousel } from "../../components/AsuCarousel";

const HydratePreact = (component, props, target) => {
  return hydrate(h(component, props), target);
};

const RenderPreact = (component, props, target) => {
  return render(h(component, props), target);
};

/**
 * Initialize the Carousel.
 *
 * @param {object} props - Properties to initialize the carousel with. See the
 * component definiton src/components/AsuCarousel/index.js for more details.
 * @param {boolean} hydrate - If true, will run Preact's hydrate function instead of render.
 * Should only be set to true if the header has been completely rendered server-side.
 * @param {string} target - The ID of the containing <div> where the header should
 * be either hydrated or rendered.
 */
const initCarousel = (props, target = "carouselContainer", hydrate = false) => {
  if (hydrate) {
    HydratePreact(AsuCarousel, props, document.getElementById(target));
  } else {
    RenderPreact(AsuCarousel, props, document.getElementById(target));
  }
};

export { HydratePreact, RenderPreact, initCarousel };
