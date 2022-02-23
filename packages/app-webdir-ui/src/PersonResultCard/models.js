import PropTypes from "prop-types";

export const PersonResultCardType = {
  id: PropTypes.string,
  imgURL: PropTypes.string,
  name: PropTypes.string,
  titles: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      org: PropTypes.string,
    })
  ),
  email: PropTypes.string,
  telephone: PropTypes.string,
  odd: PropTypes.bool,
};
