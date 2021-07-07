// @ts-check
import PropTypes from "prop-types";

const degreeListPropTypes = {
  programms: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  actionUrls: PropTypes.shape({
    applyNowUrl: PropTypes.string,
    majorInfoUrl: PropTypes.string,
    majorInfoOnlineUrl: PropTypes.string,
  }),
};

export { degreeListPropTypes };
