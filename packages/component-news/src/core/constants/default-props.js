// @ts-check

/** @type {import("../models/news-types").FeedsType} */
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
  dataSource: {
    url: "https://asunow.asu.edu/feeds-json",
  },
};

export { defaultProps };
