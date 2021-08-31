import React from "react";

import { CardsGridEvents } from ".";

export default {
  title: "D8 Events/Cards Grid",
  component: CardsGridEvents,
};

const Template = args => <CardsGridEvents {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: { color: "dark", text: "Events list" },
  ctaButton: {
    color: "gold",
    url: "https://news.asu.edu",
    text: "Click to see more events",
  },
  dataSource: {
    url: "https://cors-anywhere.herokuapp.com/https://asuevents.asu.edu/feed-json/college_liberal_arts_and_sciences",
  },
};
