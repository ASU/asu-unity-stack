import React from "react";
import withMock from "storybook-addon-mock";

import { CardsListEvents } from ".";

import { createMockParam } from "../../core/utils";

export default {
  title: "D8 Events/Cards List",
  component: CardsListEvents,
  decorators: [withMock],
};

const Template = args => <CardsListEvents {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: { color: "dark", text: "Events list" },
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

export const WithFilters = Template.bind({});
WithFilters.args = {
  header: { color: "dark", text: "Events list filtered" },
  ctaButton: {
    color: "gold",
    url: "https://news.asu.edu",
    text: "Click to see more events",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
    filters: "easy_on_the_wallet,alumni_association,staff,sports",
  },
};
WithFilters.parameters = {
  mockData: createMockParam(),
};

export const MaxItems = Template.bind({});
MaxItems.args = {
  header: { color: "dark", text: "Events list" },
  ctaButton: {
    color: "gold",
    url: "https://news.asu.edu",
    text: "Click to see more events",
  },
  dataSource: {
    url: "/api/mocks/feeds-json",
  },
  maxItems: 10,
};
MaxItems.parameters = {
  mockData: createMockParam(),
};

export const WithNoHeader = Template.bind({});
WithNoHeader.args = {
  dataSource: {
    url: "/api/mocks/feeds-json",
  },
};
WithNoHeader.parameters = {
  mockData: createMockParam(),
};
