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

const eventsPropTypes = {
  header: layoutHeaderPropTypes,
  ctaButton: layoutCTAPropTypes,
};

export { layoutHeaderPropTypes, layoutCTAPropTypes, eventsPropTypes };
