// @ts-check
import React from "react";

import { CardCarouselNews } from "./index";

/** @typedef {import("@asu-design-system/components-core/src/components/FeedAnatomy/feed-types").FeedType } FeedType */
export default {
  title: "UDS/CarouselCardNews",
  component: CardCarouselNews,
};

const Template = args => <CardCarouselNews {...args} />;

/**
 * @type {{ args: FeedType}}
 */
export const Default = Template.bind({});
Default.args = {
  header: { color: "dark", text: "News list - card carousel" },
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
  maxItems: 10,
};
