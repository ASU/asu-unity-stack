import PropTypes from "prop-types";

export const profileCardType = PropTypes.shape({
  id: PropTypes.string,
  imgURL: PropTypes.string,
  name: PropTypes.string,
  titles: PropTypes.arrayOf(PropTypes.string),
  email: PropTypes.string,
  telephone: PropTypes.string,
  addressLink: PropTypes.string,
  addressLine1: PropTypes.string,
  addressLine2: PropTypes.string,
  description: PropTypes.string,
  facebookLink: PropTypes.string,
  linkedinLink: PropTypes.string,
  twitterLink: PropTypes.string,
  size: PropTypes.string,
  fill: PropTypes.bool,
});

export const resultsShape = PropTypes.shape({
  acres: PropTypes.shape({
    raw: PropTypes.number,
  }),
  date_established: PropTypes.shape({
    raw: PropTypes.string,
  }),
  description: PropTypes.shape({
    raw: PropTypes.string,
  }),
  id: PropTypes.shape({
    raw: PropTypes.string,
  }),
  location: PropTypes.shape({
    raw: PropTypes.string,
  }),
  nps_link: PropTypes.shape({
    raw: PropTypes.string,
  }),
  square_km: PropTypes.shape({
    raw: PropTypes.number,
  }),
  states: PropTypes.shape({
    raw: PropTypes.arrayOf(PropTypes.string),
  }),
  title: PropTypes.shape({
    raw: PropTypes.string,
  }),
  visitors: PropTypes.shape({
    raw: PropTypes.number,
  }),
  world_heritage_site: PropTypes.shape({
    raw: PropTypes.string,
  }),
  _meta: PropTypes.shape({
    raw: PropTypes.string,
  }),
});
