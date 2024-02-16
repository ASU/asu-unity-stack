import React from "react";

import { CardsGridEvents } from ".";

import { createMockParam } from "../../core/utils";

/** @typedef {import("@asu/components-core/src/core/types/feed-types").FeedType } FeedType */

export default {
  title: "Events component/Cards Grid",
  component: CardsGridEvents,
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
    url: "https://asuevents.asu.edu/",
    text: "Click to see more events",
  },
};

/**
 * @type {{ args: FeedType, parameters: object}}
 */
export const WithFilters = Template.bind({});
WithFilters.args = {
  header: { color: "dark", text: "Events Cards Filtered" },
  ctaButton: {
    color: "gold",
    url: "https://asuevents.asu.edu/",
    text: "Click to see more events",
  },
  dataSource: {
    filters: "easy_on_the_wallet,alumni_association",
  },
};

/**
 * @type {{ args: FeedType, parameters: object}}
 */
export const WithMaxItems = Template.bind({});
WithMaxItems.args = {
  header: { color: "dark", text: "Events Cards" },
  ctaButton: {
    color: "gold",
    url: "https://asuevents.asu.edu/",
    text: "Click to see more events",
  },
  maxItems: 3,
};

/**
 * @type {{ args: FeedType, parameters: object}}
 */
export const WithNoHeader = Template.bind({});
