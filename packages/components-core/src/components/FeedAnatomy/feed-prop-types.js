// @ts-check
import PropTypes from "prop-types";

const feedHeaderShape = PropTypes.shape({
  color: PropTypes.oneOf(["white", "dark"]),
  text: PropTypes.string,
});
const feedCtaButtonShape = PropTypes.shape({
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  text: PropTypes.string,
});
const feedDataSourceShape = PropTypes.shape({
  url: PropTypes.string,
  filters: PropTypes.string,
});

const feedComponentShape = PropTypes.shape({
  header: feedHeaderShape,
  ctaButton: feedCtaButtonShape,
  dataSource: feedDataSourceShape,
  maxItems: PropTypes.number,
});

export {
  feedComponentShape,
  feedHeaderShape,
  feedCtaButtonShape,
  feedDataSourceShape,
};
