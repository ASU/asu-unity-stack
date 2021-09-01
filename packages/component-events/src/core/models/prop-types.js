// @ts-check
import PropTypes from "prop-types";

const layoutHeaderPropTypes = PropTypes.shape({
  color: PropTypes.oneOf(["white", "dark"]),
  text: PropTypes.string,
});

const layoutCTAPropTypes = PropTypes.shape({
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  text: PropTypes.string,
  url: PropTypes.string,
});

const dataSourcePropTypes = PropTypes.shape({
  url: PropTypes.string.isRequired,
  filters: PropTypes.string,
}).isRequired;

const eventsPropTypes = {
  header: layoutHeaderPropTypes,
  ctaButton: layoutCTAPropTypes,
  dataSource: dataSourcePropTypes,
};

export {
  layoutHeaderPropTypes,
  layoutCTAPropTypes,
  dataSourcePropTypes,
  eventsPropTypes,
};
