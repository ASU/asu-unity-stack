// DISABLED@ts-check
/* eslint react/jsx-props-no-spreading: "off" */
import PropTypes from "prop-types";
import React from "react";

// Requires peer dependency of @asu-design-system/bootstrap4-theme
// We import the styles in .storybook/preview-head.html for Storybook
// rendering, but otherwise, we only worry about using the correct markup and
// tweaking a few styles.

import { RfiMainForm } from "../stepper/RfiMainForm";
import "./AsuRfi.css";

const AsuRfi = ({
  campus,
  college,
  department,
  studentType,
  areaOfInterest,
  programOfInterest,
  programOfInterestOptional,
  isCertMinor,
  country,
  stateProvince,
  successMsg,
  test,
}) => {
  return (
    <div>
      <RfiMainForm
        campus={campus}
        college={college}
        department={department}
        studentType={studentType}
        areaOfInterest={areaOfInterest}
        programOfInterest={programOfInterest}
        programOfInterestOptional={programOfInterestOptional}
        isCertMinor={isCertMinor}
        country={country}
        stateProvince={stateProvince}
        successMsg={successMsg}
        test={test}
      />
    </div>
  );
};

export { AsuRfi };

// Props
AsuRfi.defaultProps = {
  campus: undefined,
  college: undefined,
  department: undefined,
  studentType: undefined,
  areaOfInterest: undefined,
  programOfInterest: undefined,
  programOfInterestOptional: false,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined,
  successMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  test: false,
};

AsuRfi.propTypes = {
  campus: PropTypes.string,
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
};
