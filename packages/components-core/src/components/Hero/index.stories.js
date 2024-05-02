/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

import { Hero } from ".";

/**
 * @typedef {import('.').HeroProps} HeroProps
 */

export default {
  component: Hero,
  title: "UDS/Heroes",
  parameters: {
    docs: {
      description: {
        component: ' ',
      },
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
    url: "https://source.unsplash.com/WLUHO9A_xik/800x400?a=1",
    altText: "Hero image",
    size: "small",
  },
  title: {
    text: "Heading with a long title 1",
    highlightColor: "gold",
  },
};
HeroSmall.parameters = {
  docs: {
    description: {
      story: ' '
    }
  }
};

/**
 * @type {{ args: HeroProps, parameters: object }}
 */
export const HeroLongTitle = Template.bind({});

HeroLongTitle.args = {
  image: {
    url: "https://source.unsplash.com/WLUHO9A_xik/800x400?a=1",
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
      story: ' '
    }
  }
};

/**
 * @type {{ args: HeroProps, parameters: object }}
 */
export const HeroMedium = Template.bind({});

HeroMedium.args = {
  image: {
    url: "https://source.unsplash.com/WLUHO9A_xik/800x400?a=1",
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
      story: ' '
    }
  }
};

/**
 * @type {{ args: HeroProps, parameters: object }}
 */
export const HeroLarge = Template.bind({});

HeroLarge.args = {
  image: {
    url: "https://source.unsplash.com/WLUHO9A_xik/800x400?a=1",
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
      story: ' '
    }
  }
};
