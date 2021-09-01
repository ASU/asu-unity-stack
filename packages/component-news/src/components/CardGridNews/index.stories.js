// @ts-check
import React from "react";

import { CardGridNews } from "./index";

export default {
  title: "UDS/GridCardNews",
  component: CardGridNews,
};

const Template = args => <CardGridNews {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: { color: "dark", text: "News list - card grid" },
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
