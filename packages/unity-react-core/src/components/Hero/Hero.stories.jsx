/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

// @ts-ignore
import img1 from "../../../../../shared/assets/img/named/hero01.jpg";
import { Hero } from "./Hero";

/**
 * @typedef {import('./Hero').HeroProps} HeroProps
 */

export default {
  title: "Components/Heroes",
  component: Hero,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
  argTypes: {
    title: {
      control: {
        type: "object",
      },
      description: "Options for highlightColor are gold, white, black, or none",
    },
  },
};

/**
 * @param {HeroProps} props
 * @returns {JSX.Element}
 */
const Template = ({ image, title, contents, contentsColor }) => (
  <Hero
    title={title}
    image={image}
    contents={contents}
    contentsColor={contentsColor}
  />
);

/**
 * @type {{ args: HeroProps, parameters: object }}
 */
export const HeroSmall = Template.bind({});

HeroSmall.args = {
  image: {
    url: img1,
    altText: "Hero image",
    size: "small",
  },
  title: {
    text: "Heading with a long title 1",
    highlightColor: "none",
  },
};
HeroSmall.parameters = {
  docs: {
    description: {
      story: " ",
    },
  },
};

/**
 * @type {{ args: HeroProps, parameters: object }}
 */
export const HeroLongTitle = Template.bind({});

HeroLongTitle.args = {
  image: {
    url: img1,
    altText: "Hero image",
    size: "small",
  },
  title: {
    text: "Heading with a long title 2",
    highlightColor: "gold",
    maxWidth: "100%",
  },
};
HeroLongTitle.parameters = {
  docs: {
    description: {
      story: " ",
    },
  },
};

/**
 * @type {{ args: HeroProps, parameters: object }}
 */
export const HeroMedium = Template.bind({});

HeroMedium.args = {
  image: {
    url: img1,
    altText: "Hero image",
    size: "medium",
  },
  title: {
    text: "Heading 1",
    highlightColor: "black",
  },
  contentsColor: "white",
  contents: [
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ],
};
HeroMedium.parameters = {
  docs: {
    description: {
      story: " ",
    },
  },
};

/**
 * @type {{ args: HeroProps, parameters: object }}
 */
export const HeroLarge = Template.bind({});

HeroLarge.args = {
  image: {
    url: img1,
    altText: "Hero image",
    size: "large",
  },
  title: {
    text: "Heading 1",
    color: "white",
  },
  contentsColor: "white",
  contents: [
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ],
};
HeroLarge.parameters = {
  docs: {
    description: {
      story: " ",
    },
  },
};
