// @ts-check
import PropTypes from "prop-types";

const accordionCardPropTypes = PropTypes.shape({
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  content: PropTypes.shape({
    icon: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string,
  }),
});

const buttonPropTypes = PropTypes.shape({
  ariaLabel: PropTypes.string,
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  icon: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["default", "small", "xsmall"]),
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

const videoPropTypes = {
  url: PropTypes.string,
  altText: PropTypes.string,
  vttUrl: PropTypes.string,
};

const linkPropTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  isActive: PropTypes.bool,
};

const imagePropType = PropTypes.shape({
  ...imagePropTypes,
});

const contentPropType = PropTypes.shape({
  ...contentPropTypes,
});

const videoPropType = PropTypes.shape({
  ...videoPropTypes,
});

const linkPropType = PropTypes.shape({
  ...linkPropTypes,
});

const dataSourcePropType = PropTypes.shape({
  id: PropTypes.string,
  sourceType: PropTypes.oneOf(["api", "shared-data-source", "static-json"]), // default `api`
  sharedDataSourceId: PropTypes.string, // only if `dataSourceType == "shared-data-source"``
  data: PropTypes.arrayOf(PropTypes.object), // only if `dataSourceType == "static-json"``
  apiUrl: PropTypes.string, // only if `dataSourceType == "api"``
});

const glanceItemPropType = PropTypes.shape({
  text: PropTypes.string,
  url: PropTypes.string,
});

const cardPropTypes = PropTypes.shape({
  icon: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  buttonLink: buttonPropTypes,
});

const flexibleDegreeOptionsLinks = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  })
);

export {
  accordionCardPropTypes,
  buttonPropTypes,
  linkPropType,
  videoPropType,
  imagePropType,
  contentPropType,
  imagePropTypes,
  contentPropTypes,
  dataSourcePropType,
  glanceItemPropType,
  cardPropTypes,
  flexibleDegreeOptionsLinks,
};
