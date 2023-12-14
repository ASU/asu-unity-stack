// @ts-check
/* eslint-disable no-unused-vars, react/no-unused-prop-types */
import { createContext } from "react";

/**
 * @typedef {import("../types/rfi-types").RFIContextProps} RFIContextProps
 */

/**
 * @type {RFIContextProps}
 */

const rfiDefaultProps = {
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
  dataSourcePotLuck: "https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plans",
  dataSourceDegreeSearch: "https://degrees.apps.asu.edu/t5/service",
  dataSourceAsuOnline:
    "https://cms.asuonline.asu.edu/lead-submissions-v3.5/programs",
  dataSourceCountriesStates:
    "https://api.myasuplat-dpl.asu.edu/api/codeset/countries",
  submissionUrl: undefined,
};

const RfiContext = createContext(rfiDefaultProps);

export { RfiContext, rfiDefaultProps };
