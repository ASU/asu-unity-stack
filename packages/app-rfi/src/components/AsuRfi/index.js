// @ts-check
/* eslint react/jsx-props-no-spreading: "off" */
import { Form, FormikProvider, useFormik } from "formik";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

// Requires peer dependency of @asu/unity-bootstrap-theme
// We import the styles in .storybook/preview-head.html for Storybook
// rendering, but otherwise, we only worry about using the correct markup and
// tweaking a few styles

import { Progress } from "reactstrap";

import trackReactComponent from "../../../../../shared/services/componentDatalayer";
import { betterPropNames, useRfiState } from "../../core/utils/appState";
import { DATA_SOURCE } from "../../core/utils/constants";
import { RfiContext } from "../../core/utils/rfiContext";
import { RfiMainForm } from "../stepper/RfiMainForm";
import "./index.css";
import { getCurrentScriptPath } from "../../../../../shared";
import { Debug } from "../../Debug";
import { RfiStepperButtons } from "../stepper/RfiStepperButtons";

const currentScriptPath = getCurrentScriptPath();

/**
 * @param {import("../../core/types/rfi-types").RFIProps} props
 * @return {JSX.Element}
 */
const AsuRfi = props => {
  const {
    appPathFolder,
    variant,
    campus,
    actualCampus,
    college,
    department,
    studentType,
    areaOfInterest,
    areaOfInterestOptional,
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

  const rfiState = useRfiState(betterPropNames(props));

  const noRfiAvailable = `RFI form not displayed. ${programOfInterest} has rfiDisplay set to false or does not exist`;
  useEffect(() => {
    if (!rfiState.showForm) {
      console.log(noRfiAvailable);
    }
  }, [rfiState.showForm]);
  if (!rfiState.showForm) {
    return <div style={{display: "none"}}>{noRfiAvailable}</div>;
  }

  return (
    <RfiContext.Provider
      value={{
        ...rfiState,
        variant,
        appPathFolder,
        campusType: campus,
        filterByCampusCode: actualCampus,
        filterByCollegeCode: college,
        filterByDepartmentCode: department,
        studentType,
        areaOfInterest,
        areaOfInterestOptional,
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
        <FormikProvider value={rfiState.formik}>
          <RfiMainForm
            rfiImage={`${
              appPathFolder || currentScriptPath
            }/assets/img/WS2-DefaultImagev01-Final.png`}
          >
            <div>
              <div className="uds-rfi-form-wrapper">
                {/* noValidate - disable browser validation and use Formik */}
                <Form className="uds-form uds-rfi" noValidate>
                  {rfiState.step}
                  {rfiState.showStepButtons && (
                    <RfiStepperButtons {...rfiState} />
                  )}
                </Form>
              </div>
            </div>
          </RfiMainForm>
        </FormikProvider>
      </div>
      {test && <Debug />}
    </RfiContext.Provider>
  );
};

export { AsuRfi };

// Props
AsuRfi.defaultProps = {
  variant: undefined, // default set in appState
  campus: undefined,
  actualCampus: undefined,
  college: undefined,
  department: undefined,
  studentType: undefined,
  areaOfInterest: undefined,
  areaOfInterestOptional: false,
  programOfInterest: undefined,
  programOfInterestOptional: false,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined,
  successMsg: undefined,
  test: false,
  dataSourceDegreeSearch: DATA_SOURCE.DEGREE_SEARCH,
  dataSourceAsuOnline: DATA_SOURCE.ASU_ONLINE,
  dataSourceCountriesStates: DATA_SOURCE.COUNTRIES_STATES,
};

AsuRfi.propTypes = {
  appPathFolder: PropTypes.string,
  variant: PropTypes.oneOf(["rfiVariant1", "rfiVariant2"]),
  campus: PropTypes.oneOf(["GROUND", "ONLNE", "NOPREF"]),
  /** Not be a complete list: "AWC", "CAC", "EAC", "LOSAN", "MESA", "POLY", "TEMPE", "WEST" */
  actualCampus: PropTypes.string,
  /** Not be a complete list: "CAS", "CBA", "CES", "CHI", "CHL", "CLA", "CLW", "CUC" */
  college: PropTypes.string,
  /** Not be a complete list: "CACCOUNTAN", "CBA", "CCIVIL", "CCRIMJUS", "CENGLISH", "CMARKET", "CSOFTENG", "CTHEATRE" */
  department: PropTypes.string,
  studentType: PropTypes.oneOf(["graduate", "undergrad"]),
  areaOfInterest: PropTypes.string,
  areaOfInterestOptional: PropTypes.bool,
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
