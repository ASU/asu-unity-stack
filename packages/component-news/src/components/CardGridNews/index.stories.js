// @ts-check
import React from "react";

import { CardGridNews } from "./index";

/** @typedef {import("@asu-design-system/components-core/src/components/FeedAnatomy/feed-types").FeedType } FeedType */

export default {
  title: "UDS/GridCardNews",
  component: CardGridNews,
};

const Template = args => <CardGridNews {...args} />;
/**
 * @type {{ args: FeedType}}
 */
export const Default = Template.bind({});
Default.args = {
  header: { color: "dark", text: "News grid" },
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
  maxItems: 7,
};
