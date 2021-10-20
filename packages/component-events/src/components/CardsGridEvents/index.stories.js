import React from "react";
import withMock from "storybook-addon-mock";

import { CardsGridEvents } from ".";

import { createMockParam } from "../../core/utils";

/** @typedef {import("@asu-design-system/components-core/src/core/types/feed-types").FeedType } FeedType */

export default {
  title: "Component Events/Cards Grid",
  component: CardsGridEvents,
  decorators: [withMock],
};

const Template = args => <CardsGridEvents {...args} />;

/**
 * @type {{ args: FeedType, parameters: object}}
 */
export const Default = Template.bind({});
Default.args = {
  header: { color: "dark", text: "Events Cards" },
  ctaButton: {
    color: "gold",
    url: "https://news.asu.edu",
    text: "Click to see more events",
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
export const WithFilters = Template.bind({});
WithFilters.args = {
  header: { color: "dark", text: "Events Cards Filtered" },
  ctaButton: {
    color: "gold",
    url: "https://news.asu.edu",
    text: "Click to see more events",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
    filters: "easy_on_the_wallet,alumni_association",
  },
};
WithFilters.parameters = {
  mockData: createMockParam(),
};

/**
 * @type {{ args: FeedType, parameters: object}}
 */
export const MaxItems = Template.bind({});
MaxItems.args = {
  header: { color: "dark", text: "Events Cards" },
  ctaButton: {
    color: "gold",
    url: "https://news.asu.edu",
    text: "Click to see more events",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
  },
  maxItems: 5,
};
MaxItems.parameters = {
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
