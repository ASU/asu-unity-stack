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
  header: { color: "dark", text: "News carousel" },
  ctaButton: {
    color: "gold",
    url: "https://news.asu.edu",
    text: "Click to see more news",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
  },
  maxItems: 10,
};
Default.parameters = {
  mockData: createMockParam(),
};

/**
 * @type {{ args: FeedType}}
 */
export const WithFilters = Template.bind({});
WithFilters.args = {
  ...Default.args,
  dataSource: {
    ...Default.args.dataSource,
    filters:
      "nursing_and_health_care,School of Mathematical and Natural Sciences,Student",
    // filters: "Nursing and Health Care",
    // filters: "Health,Journalism",
  },
};
