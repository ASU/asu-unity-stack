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
  maxWidth: PropTypes.string,
  cssClass: PropTypes.arrayOf(PropTypes.string),
  highlightColor: PropTypes.oneOf(["gold", "black"]),
});

const accordionCardPropTypes = PropTypes.shape({
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  content: PropTypes.shape({
    icon: PropTypes.arrayOf(PropTypes.string),
    header: PropTypes.string,
    body: PropTypes.string,
  }),
});

const gaDataType = PropTypes.shape({
  text: PropTypes.string,
  name: PropTypes.string,
  event: PropTypes.string,
  action: PropTypes.string,
  type: PropTypes.string,
  region: PropTypes.string,
  section: PropTypes.string,
  component: PropTypes.string,
});

export { imagePropType, contentPropType, accordionCardPropTypes, gaDataType };
