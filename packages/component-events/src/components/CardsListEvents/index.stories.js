import React from "react";

import { CardsListEvents } from ".";

import { createMockParam } from "../../core/utils";

/** @typedef {import("@asu/components-core/src/core/types/feed-types").FeedType } FeedType */

export default {
  title: "Events component/Cards List",
  component: CardsListEvents,
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
    filters: "easy_on_the_wallet,alumni_association,staff,sports",
  },
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
  maxItems: 4,
};

/**
 * @type {{ args: FeedType, parameters: object}}
 */
export const WithNoHeader = Template.bind({});
