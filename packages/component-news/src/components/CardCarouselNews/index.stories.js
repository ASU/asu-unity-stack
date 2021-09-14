// @ts-check
import React from "react";
import withMock from "storybook-addon-mock";

import { CardCarouselNews } from "./index";

import { createMockParam } from "../../core/utils";

/** @typedef {import("@asu-design-system/components-core/src/components/FeedAnatomy/feed-types").FeedType } FeedType */
export default {
  title: "UDS/CarouselCardNews",
  component: CardCarouselNews,
  decorators: [withMock],
};

const Template = args => <CardCarouselNews {...args} />;

/**
 * @type {{ args: FeedType, parameters: object}}
 */
export const Default = Template.bind({});
Default.args = {
  ctaButton: {
    url: "https://news.asu.edu",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
  },
};
Default.parameters = {
  mockData: createMockParam(),
};

/**
 * @type {{ args: FeedType, parameters: object}}
 */
export const WithProps = Template.bind({});
WithProps.args = {
  header: {
    color: "dark",
    text: "News Carousel",
  },
  ctaButton: {
    color: "maroon", // "gold", "maroon", "gray", "dark"
    url: "https://news.asu.edu",
    text: "Click to see more news",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
    filters:
      "nursing_and_health_care,School of Mathematical and Natural Sciences,Student",
    // filters: "Nursing and Health Care",
    // filters: "Health,Journalism",
  },
  maxItems: 7,
  cardButton: {
    color: "gold",
    text: "Read news",
    size: "default", //   "default" | "small" | "medium" | "large"
  },
};
WithProps.parameters = {
  mockData: createMockParam(),
};
