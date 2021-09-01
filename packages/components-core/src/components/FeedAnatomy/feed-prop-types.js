// @ts-check
import PropTypes from "prop-types";

const feedHeaderShape = PropTypes.shape({
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  text: PropTypes.string,
});
const feedCtaButtonShape = PropTypes.shape({
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  text: PropTypes.string,
});
const feedDataSourceShape = PropTypes.shape({
  url: PropTypes.string,
});

const feedComponentShape = PropTypes.shape({
  header: feedCtaButtonShape,
  ctaButton: feedHeaderShape,
  dataSource: feedDataSourceShape,
  maxItems: PropTypes.number,
});

export {
  feedComponentShape,
  feedHeaderShape,
  feedCtaButtonShape,
  feedDataSourceShape,
};
