// @ts-check

/** @type {import("../types/news-types").FeedType} */
const defaultProps = {
  header: {
    color: "dark",
    text: "Knowledge and enterprise news",
  },
  ctaButton: {
    color: "gold",
    text: "More stories and videos",
    url: "https://news.asu.edu",
  },
  cardButton: {
    color: "maroon",
    text: "Read at ASU News",
    size: "default",
  },
  dataSource: {
    url: "https://asunow.asu.edu/feeds-json",
  },
  maxItems: 3,
};

export { defaultProps };
