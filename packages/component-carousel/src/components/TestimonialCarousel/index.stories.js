/* eslint-disable react/prop-types */
// @ts-check
import {
  withKnobs,
  text,
  boolean,
  object,
  select,
} from "@storybook/addon-knobs";
import React from "react";

import { TestimonialCarousel } from ".";

import {
  testimonialNoImage,
  testimonialWithImage,
  testimonialNoImage2,
  testimonialWithImage2,
  testimonialNoCitation,
} from "./examples";

export default {
  component: TestimonialCarousel,
  title: "Testimonial Carousel",
  decorators: [withKnobs],
};

const maxWidth = "500px";
const itemColorCombinations = {
  Gold: ["accent-gold"],
  Maroon: ["accent-maroon"],
  Gold_White_Text: ["text-white", "accent-gold"],
  // eslint-disable-next-line quote-props
  None: null,
};

const itemTitleColorCombinations = {
  "Highlight gold": ["highlight-gold"],
  "Highlight black": ["highlight-black"],
  // eslint-disable-next-line quote-props
  "None": null,
};

const itemQuoteColorCombinations = {
  White: ["text-white"],
  Maroon: ["text-maroon"],
  None: null,
};

const backgroundColors = {
  White: "",
  Gray: "bg-gray-2",
  Black: "bg-gray-7",
};

const GROUP_STYLE = "Styles";

/**
 *
 * @param {{ children: JSX.Element}} props
 * @returns { JSX.Element}
 */
const Wrapper = ({ children }) => (
  <div
    className={`container ${select(
      "Background color",
      backgroundColors,
      backgroundColors.White,
      GROUP_STYLE
    )}`}
  >
    {children}
  </div>
);

export const TestimonialCarouselDefault = () => (
  <Wrapper>
    <TestimonialCarousel
      itemStyle={{
        containerCssClass: select(
          "Item Color Combination",
          itemColorCombinations,
          itemColorCombinations.Gold,
          GROUP_STYLE
        ),
        contentCssClass: select(
          "Quote Content Color Combination",
          itemQuoteColorCombinations,
          itemQuoteColorCombinations.None,
          GROUP_STYLE
        ),
      }}
      maxWidth={text("Max Width", maxWidth, GROUP_STYLE)}
      hasNavButtons={boolean("Has Nav Buttons", true, GROUP_STYLE)}
      hasPositionIndicators={boolean("Has Indicators", true, GROUP_STYLE)}
      testimonialItems={object(
        "Testimonials",
        testimonialWithImage,
        GROUP_STYLE
      )}
    />
  </Wrapper>
);

export const TestimonialCarouselWithNoImage = () => (
  <div className="container">
    <TestimonialCarousel
      itemStyle={{
        containerCssClass: select(
          "Item Color Combination",
          itemColorCombinations,
          itemColorCombinations.Gold
        ),
      }}
      maxWidth={text("Max Width", maxWidth)}
      hasNavButtons={boolean("Has Nav Buttons", true)}
      hasPositionIndicators={boolean("Has Indicators", true)}
      testimonialItems={object("Testimonials", testimonialNoImage)}
    />
  </div>
);

export const TestimonialCarouselWithSlider = () => (
  <div className="container">
    <TestimonialCarousel
      maxWidth={text("Max Width", maxWidth)}
      hasNavButtons={boolean("Has Nav Buttons", true)}
      hasPositionIndicators={boolean("Has Indicators", false)}
      testimonialItems={object("Testimonials", testimonialWithImage2)}
      itemStyle={{
        containerCssClass: ["accent-gold"],
      }}
    />
  </div>
);

export const TestimonialCarouselWithSliderAndPositionIndicatorDots = () => (
  <div className="container">
    <TestimonialCarousel
      maxWidth={text("Max Width", maxWidth)}
      hasNavButtons={boolean("Has Nav Buttons", true)}
      hasPositionIndicators={boolean("Has Indicators", true)}
      testimonialItems={object("Testimonials", testimonialNoImage2)}
    />
  </div>
);

export const TestimonialCarouselWithNoCitation = () => (
  <div className="container">
    <TestimonialCarousel
      itemStyle={{
        containerCssClass: select(
          "Item Color Combination",
          itemColorCombinations,
          itemColorCombinations.Gold
        ),
        titleCssClass: select(
          "Title Color Combination",
          itemTitleColorCombinations,
          itemTitleColorCombinations["Highlight gold"]
        ),
      }}
      maxWidth={text("Max Width", maxWidth)}
      hasNavButtons={boolean("Has Nav Buttons", true)}
      hasPositionIndicators={boolean("Has Indicators", true)}
      testimonialItems={object("Testimonials", testimonialNoCitation)}
    />
  </div>
);
