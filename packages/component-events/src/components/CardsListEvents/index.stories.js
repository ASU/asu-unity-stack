import React from "react";

import { CardsListEvents } from ".";

export default {
  title: "D8 Events/Cards List",
  component: CardsListEvents,
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
    url:
      "https://cors-anywhere.herokuapp.com/" +
      "https://asuevents.asu.edu/feed-json/",
  },
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
    url:
      "https://cors-anywhere.herokuapp.com/" +
      "https://asuevents.asu.edu/feed-json/",
    filters: "easy_on_the_wallet,alumni_association,staff,sports",
  },
};
