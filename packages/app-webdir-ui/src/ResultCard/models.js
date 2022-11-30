import PropTypes from "prop-types";

export const resultCardType = {
  id: PropTypes.string,
  name: PropTypes.string,
  area: PropTypes.string,
  description: PropTypes.string,
  cookieTrail: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
  fill: PropTypes.bool,
  GASource: PropTypes.string,
};
