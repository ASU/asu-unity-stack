// @ts-check
import PropTypes from "prop-types";

const buttonPropTypes = PropTypes.shape({
  ariaLabel: PropTypes.string,
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  icon: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["default", "small", "xsmall"]),
});

const accordionCardPropTypes = PropTypes.shape({
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  content: PropTypes.shape({
    icon: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string,
  }),
});

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

const dataSourcePropType = PropTypes.shape({
  id: PropTypes.string,
  sourceType: PropTypes.oneOf(["api", "shared-data-source", "static-json"]), // default `api`
  sharedDataSourceId: PropTypes.string, // only if `dataSourceType == "shared-data-source"``
  data: PropTypes.arrayOf(PropTypes.object), // only if `dataSourceType == "static-json"``
  apiUrl: PropTypes.string, // only if `dataSourceType == "api"``
});

export {
  buttonPropTypes,
  accordionCardPropTypes,
  imagePropType,
  contentPropType,
  imagePropTypes,
  contentPropTypes,
  dataSourcePropType,
};
