// @ts-check
/** @jsx h */
import { h } from "preact";

import { ImageCarousel } from ".";

const myCarouselItems = [
  {
    id: 1,
    imageSource: "https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210105-HomepageLocations-Poly.png",
    altText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
    caption: "Polytechnic campus",
  },
  {
    id: 2,
    imageSource: "https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210105-HomepageLocations-Tempe.png",
    altText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
    caption: "Tempe campus",
  },
  {
    id: 3,
    imageSource: "https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210105-HomepageLocations-West.png",
    altText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
    caption: "West campus",
  },
  {
    id: 4,
    imageSource: "https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210105-HomepageLocations-DowntownPhoenix.png",
    altText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
    caption: "Downtown Phoenix Campus",
  },
  {
    id: 5,
    imageSource: "https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210105-HomepageLocations-Skysong.png",
    altText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
    caption: "Skysong",
  },
  {
    id: 6,
    imageSource: "https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210105-HomepageLocations-Washington.png",
    altText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
    caption: "Washington D.C.",
  },
  {
    id: 7,
    imageSource: "https://ux-annual-report.ws.asu.edu/sites/all/libraries/Prototype/images/210105-HomepageLocations-Havasu.png",
    altText:
      "Random image with caption below. REPLACE with appropriate alt text for accessibility.",
    caption: "Lake Havasu",
  },
];

export default {
  component: ImageCarousel,
  title: "ASU CMS Image Carousel",
};

export const ImageCarouselDefault = () => (
  <ImageCarousel perView="1" imageItems={myCarouselItems} />
);

