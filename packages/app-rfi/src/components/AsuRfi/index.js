// @ts-check
/* eslint react/jsx-props-no-spreading: "off" */
/* eslint-disable react/no-unused-prop-types */
import PropTypes from "prop-types";
import React from "react";

// Requires peer dependency of @asu/unity-bootstrap-theme
// We import the styles in .storybook/preview-head.html for Storybook
// rendering, but otherwise, we only worry about using the correct markup and
// tweaking a few styles

import { RfiContext, rfiDefaultProps } from "../../core/utils/rfiContext";
import { RfiMainForm } from "../stepper/RfiMainForm";
import "./index.css";

/**
 * @typedef {import("../../core/types/rfi-types").RFIProps} RFIProps
 */

/**
 * @param {RFIProps} props
 * @return {JSX.Element}
 */
const AsuRfi = props => {
  if (typeof props?.submissionUrl === "undefined") {
    return <></>;
  }
  return (
    <RfiContext.Provider value={props}>
      <div>
        <RfiMainForm />
      </div>
    </RfiContext.Provider>
  );
};

export { AsuRfi };

AsuRfi.defaultProps = rfiDefaultProps;

AsuRfi.propTypes = {
  appPathFolder: PropTypes.string,
  campus: PropTypes.string,
  actualCampus: PropTypes.string,
  college: PropTypes.string,
  department: PropTypes.string,
  studentType: PropTypes.string,
  areaOfInterest: PropTypes.string,
  programOfInterest: PropTypes.string,
  programOfInterestOptional: PropTypes.bool,
  isCertMinor: PropTypes.bool,
  country: PropTypes.string,
  stateProvince: PropTypes.string,
  successMsg: PropTypes.string,
  test: PropTypes.bool,
  dataSourcePotLuck: PropTypes.string,
  dataSourceDegreeSearch: PropTypes.string,
  dataSourceAsuOnline: PropTypes.string,
  dataSourceCountriesStates: PropTypes.string,
  submissionUrl: PropTypes.string.isRequired,
};
