// @ts-check
/* eslint react/jsx-props-no-spreading: "off" */
import React from "react";

import { AsuRfi } from ".";

export default {
  title: "UDS/AsuRfi",
  component: AsuRfi,
  parameters: {
    docs: {
      description: {
        component: `TODO Put the AsuRfi docs here. Empower all the people!
        `,
      },
    },
  },
};

const Template = args => {
  const { label } = args;

  return (
    <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <AsuRfi {...args}>{label}</AsuRfi>
      </div>
    </div>
  );
};

const testSubmissionUrl = "https://httpbin.org/post";

export const RfiDefault = Template.bind({});
RfiDefault.args = {
  variant: undefined,
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
  test: true,
  dataSourceDegreeSearch: undefined, // "https://degrees.apps.asu.edu/t5/service",
  dataSourceAsuOnline: undefined, // "https://cms.asuonline.asu.edu/lead-submissions-v3.5/programs",
  dataSourceCountriesStates: undefined, // "https://api.myasuplat-dpl.asu.edu/api/codeset/countries",
  submissionUrl: testSubmissionUrl, // Should point to host site's API Proxy endpoint so Source value can be added and submitted from backend.
};

export const RfiOnCollegePage = Template.bind({});
RfiOnCollegePage.args = {
  variant: "rfiVariant1",
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: "CHI", // CHI
  department: undefined,
  studentType: undefined, // graduate, undergrad
  areaOfInterest: undefined,
  areaOfInterestOptional: false,
  programOfInterest: undefined,
  programOfInterestOptional: false,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined, // Only US states or CA provinces
  successMsg: undefined,
  test: true,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

export const RfiOnCollegePageWithAreaOfInterest = Template.bind({});
RfiOnCollegePageWithAreaOfInterest.args = {
  variant: "rfiVariant1",
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: "CES",
  department: undefined,
  studentType: undefined, // graduate, undergrad
  areaOfInterest: "STEM",
  areaOfInterestOptional: false,
  programOfInterest: undefined,
  programOfInterestOptional: false,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined, // Only US states or CA provinces
  successMsg: undefined,
  test: true,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

// Important note: At current, only supports Degree Search REST API degrees.
// Assumption: Degree page use case doesn't need to support ASUOnline degrees.
// Also, DS REST API returns degrees with ONLNE status, so perhaps it's covered.
export const RfiOnDegreePageUndergraduate = Template.bind({});
RfiOnDegreePageUndergraduate.args = {
  variant: "rfiVariant1",
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: undefined,
  department: undefined,
  studentType: undefined, // graduate, undergrad
  areaOfInterest: undefined,
  areaOfInterestOptional: false,
  programOfInterest: "TEESTEMBAE",
  programOfInterestOptional: false,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined, // Only US states or CA provinces
  successMsg: undefined,
  test: true,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

export const RfiOnDegreePageGraduate = Template.bind({});
RfiOnDegreePageGraduate.args = {
  variant: "rfiVariant1",
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: undefined,
  department: undefined,
  studentType: undefined, // graduate, undergrad
  areaOfInterest: undefined,
  areaOfInterestOptional: false,
  programOfInterest: "TBGMCIDMGM",
  programOfInterestOptional: false,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined, // Only US states or CA provinces
  successMsg: undefined,
  test: true,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

export const RfiOnCollegeDepartmentPage = Template.bind({});
RfiOnCollegeDepartmentPage.args = {
  variant: "rfiVariant1",
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: "CES",
  department: "CINFOTECH",
  studentType: undefined, // graduate, undergrad
  areaOfInterest: undefined,
  areaOfInterestOptional: false,
  programOfInterest: undefined,
  programOfInterestOptional: false,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined, // Only US states or CA provinces
  successMsg: undefined,
  test: true,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

export const RfiOnNonAcademicUnitPage = Template.bind({});
RfiOnNonAcademicUnitPage.args = {
  variant: "rfiVariant1",
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: undefined,
  department: undefined,
  studentType: undefined, // graduate, undergrad
  areaOfInterest: "Health and Wellness",
  areaOfInterestOptional: false,
  programOfInterest: undefined,
  programOfInterestOptional: true,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined, // Only US states or CA provinces
  successMsg: undefined,
  test: true,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

export const RfiOnCertOrMinorPage = Template.bind({});
RfiOnCertOrMinorPage.args = {
  variant: "rfiVariant1",
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: undefined,
  department: undefined,
  studentType: undefined, // graduate, undergrad
  areaOfInterest: undefined,
  areaOfInterestOptional: false,
  programOfInterest: "LAINSCERT",
  programOfInterestOptional: false,
  isCertMinor: true,
  country: undefined,
  stateProvince: undefined, // Only US states or CA provinces
  successMsg: `<div>A custom <strong>SuccessMsg</strong> supplied by you displays here.</div>`,
  test: true,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

export const RfiOnCampaignLandingPage = Template.bind({});
RfiOnCampaignLandingPage.args = {
  variant: "rfiVariant1",
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: undefined,
  department: undefined,
  studentType: "graduate",
  areaOfInterest: undefined,
  areaOfInterestOptional: false,
  programOfInterest: "BAGLSMS",
  programOfInterestOptional: false,
  isCertMinor: false,
  country: "US",
  stateProvince: "New Mexico", // Only US states or CA provinces
  successMsg: undefined,
  test: true,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

export const RfiTestMode = Template.bind({});
RfiTestMode.args = {
  variant: "rfiVariant1",
  campus: "GROUND", // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: undefined,
  department: undefined,
  studentType: "graduate",
  areaOfInterest: "STEM",
  areaOfInterestOptional: false,
  programOfInterest: "TSSMACSPHD",
  programOfInterestOptional: false,
  isCertMinor: false,
  country: "US",
  stateProvince: "California", // Only US states or CA provinces
  successMsg: undefined,
  test: true,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

export const RfiDevTester = Template.bind({});
RfiDevTester.args = {
  variant: "rfiVariant1",
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: "POLY", // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: undefined,
  department: undefined,
  studentType: "undergrad",
  areaOfInterest: undefined,
  areaOfInterestOptional: false,
  programOfInterest: undefined,
  programOfInterestOptional: false,
  isCertMinor: false,
  country: "DZ",
  stateProvince: undefined, // Only US states or CA provinces
  successMsg: "Success. <strong>You made it.</strong>",
  test: true,
  dataSourceDegreeSearch: "https://api.myasuplat-dpl.asu.edu/api/codeset",
  dataSourceAsuOnline:
    "https://cms.asuonline.asu.edu/lead-submissions-v3.5/programs",
  dataSourceCountriesStates:
    "https://api.myasuplat-dpl.asu.edu/api/codeset/countries",
  submissionUrl: testSubmissionUrl,
};
