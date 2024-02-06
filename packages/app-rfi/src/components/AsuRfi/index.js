// @ts-check
/* eslint react/jsx-props-no-spreading: "off" */
import PropTypes from "prop-types";
import React, { useEffect } from "react";

// Requires peer dependency of @asu/unity-bootstrap-theme
// We import the styles in .storybook/preview-head.html for Storybook
// rendering, but otherwise, we only worry about using the correct markup and
// tweaking a few styles

import trackReactComponent from "../../../../../shared/services/componentDatalayer";
import { DATA_SOURCE } from "../../core/utils/constants";
import { RfiContext } from "../../core/utils/rfiContext";
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
  const {
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
  } = props;

  useEffect(() => {
    if (typeof window !== "undefined") {
      trackReactComponent({
        packageName: "app-rfi",
        component: "AsuRfi",
        type: "NA",
        configuration: {
          ...props,
        },
      });
    }
  }, []);

  if (typeof submissionUrl === "undefined") {
    return <></>;
  }

  return (
    <RfiContext.Provider
      value={{
        appPathFolder,
        campusType: campus,
        filterByCampusCode: actualCampus,
        filterByCollegeCode: college,
        filterByDepartmentCode: department,
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
      }}
    >
      <div>
        <RfiMainForm />
      </div>
    </RfiContext.Provider>
  );
};

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
  dataSourceDegreeSearch: DATA_SOURCE.DEGREE_SEARCH,
  dataSourceAsuOnline: DATA_SOURCE.ASU_ONLINE,
  dataSourceCountriesStates: DATA_SOURCE.COUNTRIES_STATES,
};

AsuRfi.propTypes = {
  appPathFolder: PropTypes.string,
  campus: PropTypes.oneOf(["GROUND", "ONLNE", "NOPREF"]),
  /** Not be a complete list: "AWC", "CAC", "EAC", "LOSAN", "MESA", "POLY", "TEMPE", "WEST" */
  actualCampus: PropTypes.string,
  /** Not be a complete list: "CAS", "CBA", "CES", "CHI", "CHL", "CLA", "CLW", "CUC" */
  college: PropTypes.string,
  /** Not be a complete list: "CACCOUNTAN", "CBA", "CCIVIL", "CCRIMJUS", "CENGLISH", "CMARKET", "CSOFTENG", "CTHEATRE" */
  department: PropTypes.string,
  studentType: PropTypes.oneOf(["graduate", "undergrad"]),
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
