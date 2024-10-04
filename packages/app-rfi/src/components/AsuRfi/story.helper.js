// @ts-check
/* eslint react/jsx-props-no-spreading: "off" */
import React from "react";

import { AsuRfi } from "..";

import { KEY } from "../../core/utils/constants";

/** @type {import("../../core/types/rfi-types").RFIProps} */
export const defaultArgs = {
  variant: KEY.VARIANT1,
  appPathFolder: ".", // Optional
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: undefined,
  department: undefined,
  studentType: undefined, // graduate, undergrad
  areaOfInterest: undefined,
  areaOfInterestOptional: false,
  programOfInterest: undefined,
  programOfInterestOptional: false,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined, // Only US states or CA provinces - use full name.
  successMsg: undefined,
  test: false,
  dataSourceDegreeSearch: undefined, // "https://degrees.apps.asu.edu/t5/service",
  dataSourceAsuOnline: undefined, // "https://cms.asuonline.asu.edu/lead-submissions-v3.5/programs",
  dataSourceCountriesStates: undefined, // "https://api.myasuplat-dpl.asu.edu/api/codeset/countries",
  submissionUrl: "https://httpbin.org/post", // Should point to host site's API Proxy endpoint so Source value can be added and submitted from backend.
};

/**
 *
 * @param {import("../../core/types/rfi-types").RFIProps} args
 * @returns
 */
export const Template = args => (
  <div className="container-fluid">
    <div className="col col-sm-12 p-3">
      <AsuRfi {...args} />
    </div>
  </div>
);
