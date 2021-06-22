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
 * @type {{ args: HeroProps}}
 */
export const HeroSmall = Template.bind({});

HeroSmall.args = {
  image: {
    url: "https://source.unsplash.com/random/800x400?a=1",
    altText: "Hero image",
    size: "small",
  },
  title: {
    text: "Heading 1",
    highlightColor: "gold",
  },
};

/**
 * @type {{ args: HeroProps}}
 */
export const HeroMedium = Template.bind({});

HeroMedium.args = {
  image: {
    url: "https://source.unsplash.com/random/800x400?a=1",
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

/**
 * @type {{ args: HeroProps}}
 */
export const HeroLarge = Template.bind({});

HeroLarge.args = {
  image: {
    url: "https://source.unsplash.com/random/800x400?a=1",
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
