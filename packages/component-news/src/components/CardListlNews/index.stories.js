// @ts-check
import React from "react";

import { CardListlNews } from "./index";

/** @typedef {import("@asu-design-system/components-core/src/components/FeedAnatomy/feed-types").FeedType } FeedType */

export default {
  title: "UDS/CardListlNews",
  component: CardListlNews,
};

const Template = args => <CardListlNews {...args} />;
/**
 * @type {{ args: FeedType}}
 */
export const Default = Template.bind({});
Default.args = {
  header: { color: "dark", text: "News list" },
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
