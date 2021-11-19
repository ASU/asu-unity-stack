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
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: undefined,
  department: undefined,
  studentType: undefined, // graduate, undergrad
  areaOfInterest: undefined,
  programOfInterest: undefined,
  programOfInterestOptional: false,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined, // Only US states or CA provinces - use full name.
  successMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  test: false,
  dataSourceDegreeSearch: undefined, // "https://degreesearch-proxy.apps.asu.edu/degreesearch/",
  dataSourceAsuOnline: undefined, // "https://asuonline.asu.edu/lead-submissions-v3.3/programs",
  dataSourceCountriesStates: undefined, // "https://api.myasuplat-dpl.asu.edu/api/codeset/countries",
  submissionUrl: testSubmissionUrl, // Should point to host site's API Proxy endpoint so Source value can be added and submitted from backend.
};

export const RfiOnCollegePage = Template.bind({});
RfiOnCollegePage.args = {
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: "CGM", // CHI
  department: undefined,
  studentType: undefined, // graduate, undergrad
  areaOfInterest: undefined,
  programOfInterest: undefined,
  programOfInterestOptional: false,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined, // Only US states or CA provinces
  successMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  test: false,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

export const RfiOnCollegePageWithAreaOfInterest = Template.bind({});
RfiOnCollegePageWithAreaOfInterest.args = {
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: "CES",
  department: undefined,
  studentType: undefined, // graduate, undergrad
  areaOfInterest: "STEM",
  programOfInterest: undefined,
  programOfInterestOptional: false,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined, // Only US states or CA provinces
  successMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  test: false,
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
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: undefined,
  department: undefined,
  studentType: undefined, // graduate, undergrad
  areaOfInterest: undefined,
  programOfInterest: "TEESTEMBAE",
  programOfInterestOptional: false,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined, // Only US states or CA provinces
  successMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  test: false,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

export const RfiOnDegreePageGraduate = Template.bind({});
RfiOnDegreePageGraduate.args = {
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: undefined,
  department: undefined,
  studentType: undefined, // graduate, undergrad
  areaOfInterest: undefined,
  programOfInterest: "TBGMCIDMGM",
  programOfInterestOptional: false,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined, // Only US states or CA provinces
  successMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  test: false,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

export const RfiOnCollegeDepartmentPage = Template.bind({});
RfiOnCollegeDepartmentPage.args = {
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: "CES",
  department: "CINFOTECH",
  studentType: undefined, // graduate, undergrad
  areaOfInterest: undefined,
  programOfInterest: undefined,
  programOfInterestOptional: false,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined, // Only US states or CA provinces
  successMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  test: false,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

export const RfiOnNonAcademicUnitPage = Template.bind({});
RfiOnNonAcademicUnitPage.args = {
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: undefined,
  department: undefined,
  studentType: undefined, // graduate, undergrad
  areaOfInterest: "Health and Wellness",
  programOfInterest: undefined,
  programOfInterestOptional: true,
  isCertMinor: false,
  country: undefined,
  stateProvince: undefined, // Only US states or CA provinces
  successMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  test: false,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

export const RfiOnCertOrMinorPage = Template.bind({});
RfiOnCertOrMinorPage.args = {
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: undefined,
  department: undefined,
  studentType: undefined, // graduate, undergrad
  areaOfInterest: undefined,
  programOfInterest: "LAINSCERT",
  programOfInterestOptional: false,
  isCertMinor: true,
  country: undefined,
  stateProvince: undefined, // Only US states or CA provinces
  successMsg: `<div>A custom <strong>SuccessMsg</strong> suplied by you displays here.</div>`,
  test: false,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

export const RfiOnCampaignLandingPage = Template.bind({});
RfiOnCampaignLandingPage.args = {
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: undefined,
  department: undefined,
  studentType: "graduate",
  areaOfInterest: undefined,
  programOfInterest: "BAGLSMS",
  programOfInterestOptional: false,
  isCertMinor: false,
  country: "US",
  stateProvince: "New Mexico", // Only US states or CA provinces
  successMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  test: false,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

export const RfiTestMode = Template.bind({});
RfiTestMode.args = {
  campus: "GROUND", // ONLNE, GROUND, NOPREF
  actualCampus: undefined, // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: undefined,
  department: undefined,
  studentType: "graduate",
  areaOfInterest: "STEM",
  programOfInterest: "TSSMACSPHD",
  programOfInterestOptional: false,
  isCertMinor: false,
  country: "US",
  stateProvince: "California", // Only US states or CA provinces
  successMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  test: true,
  dataSourceDegreeSearch: undefined,
  dataSourceAsuOnline: undefined,
  dataSourceCountriesStates: undefined,
  submissionUrl: testSubmissionUrl,
};

export const RfiDevTester = Template.bind({});
RfiDevTester.args = {
  campus: undefined, // ONLNE, GROUND, NOPREF
  actualCampus: "POLY", // TEMPE, DTPHX, POLY, WEST, ONLNE...
  college: undefined,
  department: undefined,
  studentType: "undergrad",
  areaOfInterest: undefined,
  programOfInterest: undefined,
  programOfInterestOptional: false,
  isCertMinor: false,
  country: "DZ",
  stateProvince: undefined, // Only US states or CA provinces
  successMsg: "Success. <strong>You made it.</strong>",
  test: false,
  dataSourceDegreeSearch:
    "https://degreesearch-proxy.apps.asu.edu/degreesearch/",
  dataSourceAsuOnline:
    "https://asuonline.asu.edu/lead-submissions-v3.3/programs",
  dataSourceCountriesStates:
    "https://api.myasuplat-dpl.asu.edu/api/codeset/countries",
  submissionUrl: testSubmissionUrl,
};
