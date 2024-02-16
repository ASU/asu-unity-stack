// @ts-check
import React from "react";

import { CardGridNews } from "./index";

import { createMockParam } from "../../core/utils";

/** @typedef {import("@asu/components-core/src/core/types/feed-types").FeedType } FeedType */

export default {
  title: "News component/Card Grid News",
  component: CardGridNews,
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
  cardButton: {
    color: "gold",
    text: "Read news",
    size: "default", //   "default" | "small" | "medium" | "large"
  },
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
    filters:
      "nursing_and_health_care,School of Mathematical and Natural Sciences,Student",
    // filters: "Nursing and Health Care",
    // filters: "Health,Journalism",
  },
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
  maxItems: 3,
};

/**
 * @type {{ args: FeedType, parameters: object}}
 */
export const WithNoHeader = Template.bind({});
