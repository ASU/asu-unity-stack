// @ts-check
import PropTypes from "prop-types";

const imagePropTypes = {
  url: PropTypes.string,
  altText: PropTypes.string,
  cssClass: PropTypes.arrayOf(PropTypes.string),
};

const contentPropTypes = {
  text: PropTypes.string,
  cssClass: PropTypes.arrayOf(PropTypes.string),
};

const imagePropType = PropTypes.shape({
  ...imagePropTypes,
});

const contentPropType = PropTypes.shape({
  ...contentPropTypes,
});

export { imagePropType, contentPropType, imagePropTypes, contentPropTypes };
