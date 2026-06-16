import React from "react";

import { CardsListEvents } from ".";

import { createMockHandlers } from "../../core/utils";

/** @typedef {import("@asu/unity-react-core/src/core/types/feed-types").FeedType } FeedType */

export default {
  title: "Events component/Cards List",
  component: CardsListEvents,
  parameters: {
    msw: { handlers: createMockHandlers() },
  },
};

const Template = args => <CardsListEvents {...args} />;

/**
 * @type {{ args: FeedType, parameters: object}}
 */
export const Default = Template.bind({});
Default.args = {
  header: { color: "dark", text: "Events List" },
  ctaButton: {
    color: "gold",
    url: "https://asuevents.asu.edu/",
    text: "Click to see more events",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
  },
};

/**
 * @type {{ args: FeedType, parameters: object}}
 */
export const WithFilters = Template.bind({});
WithFilters.args = {
  header: { color: "dark", text: "Events List Filtered" },
  ctaButton: {
    color: "gold",
    url: "https://asuevents.asu.edu/",
    text: "Click to see more events",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
    filters: "easy_on_the_wallet,alumni_association,staff,sports",
  },
};
WithFilters.parameters = {
  msw: { handlers: createMockHandlers() },
};

/**
 * @type {{ args: FeedType, parameters: object}}
 */
export const WithMaxItems = Template.bind({});
WithMaxItems.args = {
  header: { color: "dark", text: "Events List" },
  ctaButton: {
    color: "gold",
    url: "https://asuevents.asu.edu/",
    text: "Click to see more events",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
  },
  maxItems: 4,
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

/**
 * Demonstrates a custom "no results" message. The empty data source forces the
 * feed to render the `noFeedText` instead of cards.
 * @type {{ args: FeedType, parameters: object}}
 */
export const WithCustomNoFeedText = Template.bind({});
WithCustomNoFeedText.args = {
  header: { color: "dark", text: "Events List" },
  dataSource: {
    url: "/api/mocks/empty-feeds-json",
  },
  noFeedText: "There are no upcoming events at this time.",
};
WithCustomNoFeedText.parameters = {
  msw: { handlers: createMockHandlers({ empty: true }) },
};
