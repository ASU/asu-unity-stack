// @ts-check
import PropTypes from "prop-types";

const componentHeaderShape = PropTypes.shape({
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  text: PropTypes.string,
});
const componentCtaButtonShape = PropTypes.shape({
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  text: PropTypes.string,
});

export { componentHeaderShape, componentCtaButtonShape };
