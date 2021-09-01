// @ts-check
import React from "react";

import { CardListlNews } from "./index";

export default {
  title: "UDS/CardListlNews",
  component: CardListlNews,
};

const Template = args => <CardListlNews {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: { color: "dark", text: "News list - card list" },
  ctaButton: {
    color: "gold",
    url: "https://news.asu.edu",
    text: "Click to see more news",
  },
  dataSource: {
    url:
      "https://cors-anywhere.herokuapp.com/" +
      "https://asunow.asu.edu/feeds-json/",
  },
};
