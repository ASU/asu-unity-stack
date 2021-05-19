/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

import { Hero } from ".";

export default {
  component: Hero,
  title: "UDS/Heroes",
};

/**
 * @type {import('.').HeroProps}
 */
const sharedArgs = {
  image: {
    url: "https://source.unsplash.com/random/800x400?a=1",
    altText: "Hero image",
    cssClass: ["uds-hero-sm"],
  },
  title: {
    text: "Heading 1",
    cssClass: ["highlight", "highlight-gold", "highlight-heading-one"],
  },
  content: {
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
};

/**
 * @param {object} props
 * @returns {JSX.Element}
 */
const Template = ({ image, title, content }) => (
  <Hero title={title} image={image} content={content} />
);

export const HeroSmall = Template.bind({});
HeroSmall.args = {
  image: { ...sharedArgs.image, cssClass: ["uds-hero-sm"] },
  title: sharedArgs.title,
};

export const HeroMedium = Template.bind({});
HeroMedium.args = {
  image: { ...sharedArgs.image, cssClass: ["uds-hero-md"] },
  title: sharedArgs.title,
  content: sharedArgs.content,
};

export const HeroLarge = Template.bind({});
HeroLarge.args = {
  image: { ...sharedArgs.image, cssClass: ["uds-hero-lg"] },
  title: sharedArgs.title,
  content: sharedArgs.content,
};
