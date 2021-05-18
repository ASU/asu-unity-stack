// @ts-check
import PropTypes from "prop-types";

const imagePropType = PropTypes.shape({
  url: PropTypes.string,
  altText: PropTypes.string,
  cssClass: PropTypes.arrayOf(PropTypes.string),
});

const contentPropType = PropTypes.shape({
  text: PropTypes.string,
  cssClass: PropTypes.arrayOf(PropTypes.string),
});

export { imagePropType, contentPropType };
