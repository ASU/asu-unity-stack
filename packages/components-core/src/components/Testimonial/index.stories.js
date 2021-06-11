// @ts-nocheck
import React from "react";

import { Testimonial } from ".";

export default {
  title: "UDS/Testimonial",
  component: Testimonial,
  decorators: [
    (Story, context) => {
      const { backgroundColor, ...props } = context.args;
      return (
        <div
          className={`p-6 ${backgroundColor}`}
          style={{ width: "fit-content" }}
        >
          <Story props={props} />
        </div>
      );
    },
  ],
  argTypes: {
    backgroundColor: {
      defaultValue: "",
      options: ["", "bg-gray-2", "bg-gray-7"],
      control: {
        type: "radio",
        labels: {
          "": "White",
          "bg-gray-2": "Gray",
          "bg-gray-7": "Black",
        },
      },
    },
  },
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

// eslint-disable-next-line react/prop-types, react/jsx-props-no-spreading
const Template = args => <Testimonial {...args} />;

export const Default = Template.bind({});
Default.args = {
  quote: {
    content: `We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.`,
    cite: {
      name: `Thomas Jefferson`,
      description: `The Declaration of Independence`,
    },
  },
};

export const WithImage = Template.bind({});
WithImage.args = {
  quote: {
    content: `I used to wonder about that myself. Thought it was a bunch of mumbo-jumbo. A magical power holding together good and evil, the dark side and the light? Crazy thing is, it’s true. The Force, the Jedi — all of it. It’s all true.`,
    cite: {
      name: `Han Solo`,
    },
  },
  imageSource: "https://placeimg.com/400/400/tech",
  altText: "Pretend this is Han Solo",
  itemStyle: {
    containerCssClass: itemColorCombinations.Gold,
    contentCssClass: itemQuoteColorCombinations.none,
  },
};

export const NoImage = Template.bind({});
NoImage.args = {
  quote: {
    content: `Computers make excellent and efficient servants, but I have no wish to serve under them.`,
    cite: {
      name: `Spock`,
      description: `First officer, USS Enterprise`,
    },
  },
  itemStyle: {
    containerCssClass: itemColorCombinations.Gold,
  },
};

export const WithCitation = Template.bind({});
WithCitation.args = {
  quote: {
    content: `ASU is a comprehensive public research university, measured not by whom we exclude, but rather by whom we include and how they succeed; advancing research and discovery of public value; and assuming fundamental responsibility for the economic, social, cultural and overall health of the communities it serves.`,
    cite: {
      name: `Michael M. Crow`,
      description: `ASU Charter`,
    },
  },
  imageSource: "https://placeimg.com/400/400/any",
  altText: "Pretend this is Michael M. Crow, President of ASU",
  itemStyle: {
    containerCssClass: itemColorCombinations.Gold,
  },
};

export const HightlightGold = Template.bind({});
HightlightGold.args = {
  quote: {
    title: "Walt Disney",
    content:
      "Laughter is timeless, imagination has no age, dreams are forever.",
  },
  imageSource: "https://placeimg.com/300/300/nature",
  altText: "Image of Walt DisneyImage of Walt Disney",
  itemStyle: {
    containerCssClass: itemColorCombinations.Gold,
    titleCssClass: itemTitleColorCombinations["Highlight gold"],
  },
};
