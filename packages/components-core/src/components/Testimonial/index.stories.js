// @ts-nocheck
import { withKnobs, object, select } from "@storybook/addon-knobs";
import React from "react";

import { Testimonial } from ".";

export default {
  title: "UDS/Testimonial",
  component: Testimonial,
  decorators: [withKnobs],
};

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
// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
  <div
    className={`p-6 ${select(
      "Background color",
      backgroundColors,
      backgroundColors.White,
      GROUP_STYLE
    )}`}
    style={{
      width: "fit-content",
    }}
  >
    {children}
  </div>
);

export const TestimonialDefault = () => (
  <Wrapper>
    <Testimonial
      quote={object("Quote", {
        content: `We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.`,
        cite: {
          name: `Thomas Jefferson`,
          description: `The Declaration of Independence`,
        },
      })}
    />
  </Wrapper>
);

export const TestimonialWithImage = () => (
  <Wrapper>
    <Testimonial
      quote={object("Quote", {
        content: `I used to wonder about that myself. Thought it was a bunch of mumbo-jumbo. A magical power holding together good and evil, the dark side and the light? Crazy thing is, it’s true. The Force, the Jedi — all of it. It’s all true.`,
        cite: {
          name: `Han Solo`,
        },
      })}
      imageSource="https://placeimg.com/400/400/tech"
      altText="Pretend this is Han Solo"
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
    />
  </Wrapper>
);

export const TestimonialWithNoImage = () => (
  <Wrapper>
    <Testimonial
      quote={object("Quote", {
        content: `Computers make excellent and efficient servants, but I have no wish to serve under them.`,
        cite: {
          name: `Spock`,
          description: `First officer, USS Enterprise`,
        },
      })}
      itemStyle={{
        containerCssClass: select(
          "Item Color Combination",
          itemColorCombinations,
          itemColorCombinations.Gold
        ),
      }}
    />
  </Wrapper>
);

export const TestimonialWithCitation = () => (
  <Wrapper>
    <Testimonial
      quote={object("Quote", {
        content: `ASU is a comprehensive public research university, measured not by whom we exclude, but rather by whom we include and how they succeed; advancing research and discovery of public value; and assuming fundamental responsibility for the economic, social, cultural and overall health of the communities it serves.`,
        cite: {
          name: `Michael M. Crow`,
          description: `ASU Charter`,
        },
      })}
      imageSource="https://placeimg.com/400/400/any"
      altText="Pretend this is Michael M. Crow, President of ASU"
      itemStyle={{
        containerCssClass: ["accent-gold"],
      }}
    />
  </Wrapper>
);

export const TestimonialHighlightGold = () => (
  <Wrapper>
    <Testimonial
      quote={object("Quote", {
        title: "Walt Disney",
        content:
          "Laughter is timeless, imagination has no age, dreams are forever.",
      })}
      imageSource="https://placeimg.com/300/300/nature"
      altText="Image of Walt DisneyImage of Walt Disney"
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
    />
  </Wrapper>
);
