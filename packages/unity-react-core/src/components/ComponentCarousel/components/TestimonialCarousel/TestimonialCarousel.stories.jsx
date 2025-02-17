/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

import {
  testimonialNoImage,
  testimonialWithImage,
  testimonialNoImage2,
  testimonialWithImage2,
  testimonialNoCitation,
} from "./examples";
import { TestimonialCarousel } from "./TestimonialCarousel";

export default {
  title: "Components/Testimonial Carousel",
  component: TestimonialCarousel,
  globals: {
    framework: "react",
  },
  tags: ["!bootstrap"],
  args: {
    itemColor: "None",
    itemTitleColor: "None",
    itemQuoteColor: "None",
    backgroundColor: "White",
    testimonial: "NoImage",
    hasNavButtons: true,
    hasPositionIndicators: true,
  },
  argTypes: {
    itemColor: {
      name: "Item Color",
      options: ["Gold", "Maroon", "Gold White Text", "None"],
      control: { type: "radio" },
      mapping: {
        "Gold": ["accent-gold"],
        "Maroon": ["accent-maroon"],
        "Gold White Text": ["text-white", "accent-gold"],
        "None": [],
      },
    },
    itemTitleColor: {
      name: "Item Title Color",
      options: ["Highlight gold", "Highlight black", "None"],
      control: { type: "radio" },
      mapping: {
        "Highlight gold": ["highlight-gold"],
        "Highlight black": ["highlight-black"],
        "None": [],
      },
    },
    itemQuoteColor: {
      name: "Item Quote Color",
      options: ["White", "Maroon", "None"],
      control: { type: "radio" },
      mapping: {
        White: ["text-white"],
        Maroon: ["text-maroon"],
        None: [],
      },
    },
    backgroundColor: {
      name: "Background Color",
      options: ["White", "Gray", "Black"],
      control: { type: "radio" },
      mapping: {
        White: [],
        Gray: ["bg-gray-2"],
        Black: ["bg-gray-7"],
      },
    },
    testimonial: {
      name: "Testimonial",
      options: ["NoImage", "WithImage", "NoImage2", "WithImage2", "NoCitation"],
      control: { type: "select" },
      mapping: {
        NoImage: testimonialNoImage,
        WithImage: testimonialWithImage,
        NoImage2: testimonialNoImage2,
        WithImage2: testimonialWithImage2,
        NoCitation: testimonialNoCitation,
      },
    },
    hasNavButtons: {
      control: { type: "boolean" },
    },
    hasPositionIndicators: {
      control: { type: "boolean" },
    },
  },
};

/**
 *
 * @param {{
 * itemColor: Array,
 * itemTitleColor: Array,
 * itemQuoteColor: Array,
 * backgroundColor: Array,
 * testimonial: import("./TestimonialCarousel").TestimonialItem[],
 * hasNavButtons: boolean,
 * hasPositionIndicators: boolean,
 * }} props
 * @returns { JSX.Element}
 */
const Template = ({
  itemColor,
  itemTitleColor,
  itemQuoteColor,
  backgroundColor,
  testimonial,
  hasNavButtons,
  hasPositionIndicators,
}) => (
  <div className={[`container`, ...backgroundColor].join(" ")}>
    <TestimonialCarousel
      itemStyle={{
        containerCssClass: itemColor,
        contentCssClass: itemQuoteColor,
        titleCssClass: itemTitleColor,
      }}
      maxWidth="500px"
      hasNavButtons={hasNavButtons}
      hasPositionIndicators={hasPositionIndicators}
      testimonialItems={testimonial}
    />
  </div>
);

export const TestimonialCarouselDefault = Template.bind({});
TestimonialCarouselDefault.args = {
  itemColor: "Gold",
  testimonial: "WithImage",
};

export const TestimonialCarouselWithNoImage = Template.bind({});
TestimonialCarouselWithNoImage.args = {
  itemColor: "Gold",
  testimonial: "NoImage",
};

export const TestimonialCarouselWithSlider = Template.bind({});
TestimonialCarouselWithSlider.args = {
  itemColor: "Gold",
  testimonial: "WithImage2",
  hasPositionIndicators: false,
};

export const TestimonialCarouselWithSliderAndPositionIndicatorDots =
  Template.bind({});
TestimonialCarouselWithSliderAndPositionIndicatorDots.args = {
  testimonial: "NoImage2",
};

export const TestimonialCarouselWithNoCitation = Template.bind({});
TestimonialCarouselWithNoCitation.args = {
  itemColor: "Gold",
  itemQuoteColor: "",
  itemTitleColor: "Highlight gold",
  testimonial: "NoCitation",
};
