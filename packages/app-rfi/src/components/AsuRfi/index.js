// @ts-check
/* eslint react/jsx-props-no-spreading: "off" */
import PropTypes from "prop-types";
import React from "react";

// Requires peer dependency of @asu-design-system/bootstrap4-theme
// We import the styles in .storybook/preview-head.html for Storybook
// rendering, but otherwise, we only worry about using the correct markup and
// tweaking a few styles

import { RfiMainForm } from "../stepper/RfiMainForm";
import "./index.css";

/**
 * @typedef {import("../../core/types/rfi-types").RFIProps} RFIProps
 */

/**
 * @param {RFIProps} props
 * @return {JSX.Element}
 */
const AsuRfi = ({
  appPathFolder,
  campus,
  actualCampus,
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
  dataSourceDegreeSearch,
  dataSourceAsuOnline,
  dataSourceCountriesStates,
  submissionUrl,
}) => (
  <div>
    <RfiMainForm
      appPathFolder={appPathFolder}
      campus={campus}
      actualCampus={actualCampus}
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
      dataSourceDegreeSearch={dataSourceDegreeSearch}
      dataSourceAsuOnline={dataSourceAsuOnline}
      dataSourceCountriesStates={dataSourceCountriesStates}
      submissionUrl={submissionUrl}
    />
  </div>
);

export { AsuRfi };

// Props
AsuRfi.defaultProps = {
  campus: undefined,
  actualCampus: undefined,
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
  dataSourceDegreeSearch:
    "https://degreesearch-proxy.apps.asu.edu/degreesearch/",
  dataSourceAsuOnline:
    "https://cms.asuonline.asu.edu/lead-submissions-v3.5/programs",
  dataSourceCountriesStates:
    "https://api.myasuplat-dpl.asu.edu/api/codeset/countries",
};

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
  dataSourceDegreeSearch: PropTypes.string,
  dataSourceAsuOnline: PropTypes.string,
  dataSourceCountriesStates: PropTypes.string,
  submissionUrl: PropTypes.string.isRequired,
};
