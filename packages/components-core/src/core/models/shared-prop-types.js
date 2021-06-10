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

const accordionCardPropTypes = PropTypes.shape({
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  content: PropTypes.shape({
    icon: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string,
  }),
});

export { imagePropType, contentPropType, accordionCardPropTypes };
