// @ts-check
import PropTypes from "prop-types";

const degreeListPropTypes = {
  programs: PropTypes.arrayOf(PropTypes.object),
  totalRows: PropTypes.number,
  loading: PropTypes.bool,
  actionUrls: PropTypes.shape({
    applyNowUrl: PropTypes.string,
    majorInfoUrl: PropTypes.string,
    majorInfoOnlineUrl: PropTypes.string,
  }),
};

export { degreeListPropTypes };
