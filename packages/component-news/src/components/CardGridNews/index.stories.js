// @ts-check
import React from "react";
import withMock from "storybook-addon-mock";

import { CardGridNews } from "./index";

import { createMockParam } from "../../core/utils";

/** @typedef {import("@asu-design-system/components-core/src/core/types/feed-types").FeedType } FeedType */

export default {
  title: "News component/Card Grid News",
  component: CardGridNews,
  decorators: [withMock],
};

const Template = args => <CardGridNews {...args} />;
/**
 * @type {{ args: FeedType, parameters: object}}
 */
export const Default = Template.bind({});
Default.args = {
  header: {
    color: "dark",
    text: "News Cards",
  },
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
export const WithCardButtonProps = Template.bind({});
WithCardButtonProps.args = {
  header: {
    color: "dark",
    text: "News Cards",
  },
  ctaButton: {
    color: "maroon",
    url: "https://news.asu.edu",
    text: "Click to see more news",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
  },
  cardButton: {
    color: "gold",
    text: "Read news",
    size: "default", //   "default" | "small" | "medium" | "large"
  },
};
WithCardButtonProps.parameters = {
  mockData: createMockParam(),
};

/**
 * @type {{ args: FeedType, parameters: object}}
 */
export const WithFilters = Template.bind({});
WithFilters.args = {
  header: {
    color: "dark",
    text: "News Cards Filtered",
  },
  ctaButton: {
    color: "maroon",
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
};
WithFilters.parameters = {
  mockData: createMockParam(),
};

/**
 * @type {{ args: FeedType, parameters: object}}
 */
export const WithMaxItems = Template.bind({});
WithMaxItems.args = {
  header: {
    color: "dark",
    text: "News Cards",
  },
  ctaButton: {
    color: "maroon",
    url: "https://news.asu.edu",
    text: "Click to see more news",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
  },
  maxItems: 3,
};
WithMaxItems.parameters = {
  mockData: createMockParam(),
};

/**
 * @type {{ args: FeedType, parameters: object}}
 */
export const WithNoHeader = Template.bind({});
WithNoHeader.args = {
  dataSource: {
    url: "/api/mocks/feeds-json",
  },
};
WithNoHeader.parameters = {
  mockData: createMockParam(),
};
