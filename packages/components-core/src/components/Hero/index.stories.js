/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

import { Hero } from ".";

import { imageName } from "../../../../../shared/assets";

/**
 * @typedef {import('.').HeroProps} HeroProps
 */

export default {
  component: Hero,
  title: "UDS/Heroes",
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
const Template = props => <Hero {...props} />;

/**
 * @type {{ args: HeroProps, parameters: object }}
 */
export const HeroSmall = Template.bind({});

HeroSmall.args = {
  image: {
    url: imageName.hero01,
    altText: "Hero image",
    size: "small",
  },
  subTitle: {
    text: "Sub title",
    highlightColor: "black",
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
    url: imageName.hero01,
    altText: "Hero image",
    size: "small",
  },
  title: {
    text: "Heading with a long title 2",
    highlightColor: "gold",
    maxWidth: "100%",
  },
  subTitle: {
    text: "Sub title",
    highlightColor: "black",
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
    url: imageName.hero01,
    altText: "Hero image",
    size: "medium",
  },
  title: {
    text: "Heading 1",
    highlightColor: "black",
  },
  subTitle: {
    text: "Sub title",
    highlightColor: "gold",
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
    url: imageName.hero01,
    altText: "Hero image",
    size: "large",
  },
  title: {
    text: "Heading 1",
    color: "white",
  },
  subTitle: {
    text: "Sub title",
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
HeroLarge.parameters = {
  docs: {
    description: {
      story: " ",
    },
  },
};
