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

const flexibleDegreeOptionsLinks = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  })
);

export {
  linkPropType,
  videoPropType,
  imagePropType,
  contentPropType,
  imagePropTypes,
  contentPropTypes,
  dataSourcePropType,
  glanceItemPropType,
  flexibleDegreeOptionsLinks,
};
