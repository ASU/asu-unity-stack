// @ts-check
import PropTypes from "prop-types";

const imagePropType = PropTypes.shape({
  url: PropTypes.string,
  altText: PropTypes.string,
  cssClass: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(["small", "medium", "large"]),
});

const contentPropType = PropTypes.shape({
  text: PropTypes.string,
  cssClass: PropTypes.arrayOf(PropTypes.string),
  highlightColor: PropTypes.oneOf(["gold", "black"]),
});

export { imagePropType, contentPropType };
