// @ts-check
/** @jsx h */

import { h } from "preact";
import { dispatchDOMContentLoaded } from "../../core/story-helper";

import { ImageCarousel } from ".";

const myCarouselItems = [
  {
    id: 1,
    imageSource: "https://source.unsplash.com/random/800x400?a=1",
  },
  {
    id: 2,
    imageSource: "https://source.unsplash.com/random/800x400?a=2",
  },
  {
    id: 3,
    imageSource: "https://source.unsplash.com/random/800x400?a=3",
  },
  {
    id: 4,
    imageSource: "https://source.unsplash.com/random/800x400?a=4",
  },
  {
    id: 5,
    imageSource: "https://source.unsplash.com/random/800x400?a=5",
  },
];

export default {
  component: ImageCarousel,
  title: "Image Carousel",
};

export const ThreeItemCarousel = () => (
  dispatchDOMContentLoaded(),
  (<ImageCarousel perView="1" imageItems={myCarouselItems} />)
);
