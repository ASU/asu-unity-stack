// @ts-check

/** @type {import("../types/events-types").FeedType} */

const defaultProps = {
  header: {
    color: "dark",
    text: "Events list",
  },
  ctaButton: {
    color: "gold",
    text: "Click to see more events",
    url: "https://asuevents.asu.edu/",
  },
  dataSource: {
    url: "https://asuevents.asu.edu/feed-json/",
  },
};

export { defaultProps };
