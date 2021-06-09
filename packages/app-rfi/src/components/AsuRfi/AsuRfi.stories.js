// @ts-check
/* eslint react/jsx-props-no-spreading: "off" */
import React from "react";

import AsuRfi from ".";

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

export const RfiDefault = Template.bind({});
RfiDefault.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: undefined,
  Department: undefined,
  StudentType: undefined, // Graduate, Undergrad
  AreaOfInterest: undefined,
  ProgramOfInterest: undefined,
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: undefined,
  StateProvince: undefined, // Only US states or CA provinces - use full name.
  SuccessMsg: "Success.",
  Test: false,
};

export const RfiOnCollegePage = Template.bind({});
RfiOnCollegePage.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: "CHI",
  Department: undefined,
  StudentType: undefined, // Graduate, Undergrad
  AreaOfInterest: undefined,
  ProgramOfInterest: undefined,
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: undefined,
  StateProvince: undefined, // Only US states or CA provinces
  SuccessMsg: "Success.",
  Test: false,
};

export const RfiOnCollegePageWithAreaOfInterest = Template.bind({});
RfiOnCollegePageWithAreaOfInterest.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: "CES",
  Department: undefined,
  StudentType: undefined, // Graduate, Undergrad
  AreaOfInterest: "STEM",
  ProgramOfInterest: undefined,
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: undefined,
  StateProvince: undefined, // Only US states or CA provinces
  SuccessMsg: "Success.",
  Test: false,
};

export const RfiOnDegreePage = Template.bind({});
RfiOnDegreePage.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: undefined,
  Department: undefined,
  StudentType: undefined, // Graduate, Undergrad
  AreaOfInterest: undefined,
  ProgramOfInterest: "TEESTEMBAE",
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: undefined,
  StateProvince: undefined, // Only US states or CA provinces
  SuccessMsg: "Success.",
  Test: false,
};

export const RfiOnCollegeDepartmentPage = Template.bind({});
RfiOnCollegeDepartmentPage.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: "CES",
  Department: "CINFOTECH",
  StudentType: undefined, // Graduate, Undergrad
  AreaOfInterest: undefined,
  ProgramOfInterest: undefined,
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: undefined,
  StateProvince: undefined, // Only US states or CA provinces
  SuccessMsg: "Success.",
  Test: false,
};

export const RfiOnNonAcademicUnitPage = Template.bind({});
RfiOnNonAcademicUnitPage.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: undefined,
  Department: undefined,
  StudentType: undefined, // Graduate, Undergrad
  AreaOfInterest: "Health and Wellness",
  ProgramOfInterest: undefined,
  ProgramOfInterestOptional: true, // TODO implement handling
  IsCertMinor: false,
  Country: undefined,
  StateProvince: undefined, // Only US states or CA provinces
  SuccessMsg: "Success.",
  Test: false,
};

export const RfiOnCertOrMinorPage = Template.bind({});
RfiOnCertOrMinorPage.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: undefined,
  Department: undefined,
  StudentType: undefined, // Graduate, Undergrad
  AreaOfInterest: undefined,
  ProgramOfInterest: undefined,
  ProgramOfInterestOptional: false,
  IsCertMinor: true, // TODO implement handling
  Country: undefined,
  StateProvince: undefined, // Only US states or CA provinces
  SuccessMsg: `<div>Request information on this program by sending an email to <a href="mailto:notreal@example.com">notreal@example.com</a></div>`,
  Test: false,
};

export const RfiOnCampaignLandingPage = Template.bind({});
RfiOnCampaignLandingPage.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: undefined,
  Department: undefined,
  StudentType: "Graduate",
  AreaOfInterest: undefined,
  ProgramOfInterest: "BAGLSMS",
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: "US",
  StateProvince: "New Mexico", // Only US states or CA provinces
  SuccessMsg: "Success.",
  Test: false,
};

export const RfiTestMode = Template.bind({});
RfiTestMode.args = {
  Campus: "ONLNE", // ONLNE, GROUND, NOPREF
  College: undefined,
  Department: undefined,
  StudentType: "Graduate",
  AreaOfInterest: "STEM",
  ProgramOfInterest: "GRGF-LABMYMS",
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: "US",
  StateProvince: "California", // Only US states or CA provinces
  SuccessMsg: "Success.",
  Test: true,
};

export const RfiDevTester = Template.bind({});
RfiDevTester.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: undefined,
  Department: undefined,
  StudentType: "Undergrad",
  AreaOfInterest: undefined,
  ProgramOfInterest: undefined,
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: "DZ",
  StateProvince: undefined, // Only US states or CA provinces
  SuccessMsg: "Success. <strong>You made it.</strong>",
  Test: false,
};
