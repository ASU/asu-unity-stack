// @ts-check
/** @jsx h */
import {
  withKnobs,
  text,
  boolean,
  object,
  select,
} from "@storybook/addon-knobs";
import { h } from "preact";

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
  Gold: ["accent-gold", "with-image"],
  Maroon: ["accent-maroon", "with-image"],
  Gold_White_Text: ["text-white", "accent-gold", "with-image"],
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
  Gray: "p-6 bg-gray-2",
  Black: "p-6 bg-gray-7",
};

const GROUP_STYLE = "Styles";

/**
 *
 * @param {{ children: JSX.Element}} props
 * @returns { h.JSX.Element}
 */
const Wrapper = ({ children }) => (
  <div
    className={select(
      "Background color",
      backgroundColors,
      backgroundColors.White,
      GROUP_STYLE
    )}
    style={{
      width:"fit-content"
    }}
  >
    {children}
  </div>
);

export const TestimonialCarouselDefault = () => (
  <Wrapper>
    <TestimonialCarousel
      itemStyle={{
        itemCssClass: select(
          "Item Color Combination",
          itemColorCombinations,
          itemColorCombinations.Gold,
          GROUP_STYLE
        ),
        itemQuoteContentCssClass: select(
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
  <TestimonialCarousel
    itemStyle={{
      itemCssClass: select(
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
);

export const TestimonialCarouselWithSlider = () => (
  <TestimonialCarousel
    maxWidth={text("Max Width", maxWidth)}
    hasNavButtons={boolean("Has Nav Buttons", true)}
    hasPositionIndicators={boolean("Has Indicators", false)}
    testimonialItems={object("Testimonials", testimonialWithImage2)}
    itemStyle={{
      itemCssClass: ["with-image", "accent-gold"],
    }}
  />
);

export const TestimonialCarouselWithSliderAndPositionIndicatorDots = () => (
  <TestimonialCarousel
    maxWidth={text("Max Width", maxWidth)}
    hasNavButtons={boolean("Has Nav Buttons", true)}
    hasPositionIndicators={boolean("Has Indicators", true)}
    testimonialItems={object("Testimonials", testimonialNoImage2)}
  />
);

export const TestimonialCarouselWithNoCitation = () => (
  <TestimonialCarousel
    itemStyle={{
      itemCssClass: select(
        "Item Color Combination",
        itemColorCombinations,
        itemColorCombinations.Gold
      ),
      itemTitleCssClass: select(
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
);
