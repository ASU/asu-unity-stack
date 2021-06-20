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

export const RfiDefault = Template.bind({});
RfiDefault.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: undefined,
  Department: undefined,
  StudentType: undefined, // graduate, undergrad
  AreaOfInterest: undefined,
  ProgramOfInterest: undefined,
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: undefined,
  StateProvince: undefined, // Only US states or CA provinces - use full name.
  SuccessMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  Test: false,
};

export const RfiOnCollegePage = Template.bind({});
RfiOnCollegePage.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: "CGM", // CHI
  Department: undefined,
  StudentType: undefined, // graduate, undergrad
  AreaOfInterest: undefined,
  ProgramOfInterest: undefined,
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: undefined,
  StateProvince: undefined, // Only US states or CA provinces
  SuccessMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  Test: false,
};

export const RfiOnCollegePageWithAreaOfInterest = Template.bind({});
RfiOnCollegePageWithAreaOfInterest.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: "CES",
  Department: undefined,
  StudentType: undefined, // graduate, undergrad
  AreaOfInterest: "STEM",
  ProgramOfInterest: undefined,
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: undefined,
  StateProvince: undefined, // Only US states or CA provinces
  SuccessMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  Test: false,
};

// Important note: At current, only supports Degree Search REST API degrees.
// Assumption: Degree page use case doesn't need to support ASUOnline degrees.
// Also, DS REST API returns degrees with ONLNE status, so perhaps it's covered.
export const RfiOnDegreePageUndergraduate = Template.bind({});
RfiOnDegreePageUndergraduate.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: undefined,
  Department: undefined,
  StudentType: undefined, // graduate, undergrad
  AreaOfInterest: undefined,
  ProgramOfInterest: "TEESTEMBAE",
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: undefined,
  StateProvince: undefined, // Only US states or CA provinces
  SuccessMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  Test: false,
};

export const RfiOnDegreePageGraduate = Template.bind({});
RfiOnDegreePageGraduate.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: undefined,
  Department: undefined,
  StudentType: undefined, // graduate, undergrad
  AreaOfInterest: undefined,
  ProgramOfInterest: "TBGMCIDMGM",
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: undefined,
  StateProvince: undefined, // Only US states or CA provinces
  SuccessMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  Test: false,
};

export const RfiOnCollegeDepartmentPage = Template.bind({});
RfiOnCollegeDepartmentPage.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: "CES",
  Department: "CINFOTECH",
  StudentType: undefined, // graduate, undergrad
  AreaOfInterest: undefined,
  ProgramOfInterest: undefined,
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: undefined,
  StateProvince: undefined, // Only US states or CA provinces
  SuccessMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  Test: false,
};

export const RfiOnNonAcademicUnitPage = Template.bind({});
RfiOnNonAcademicUnitPage.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: undefined,
  Department: undefined,
  StudentType: undefined, // graduate, undergrad
  AreaOfInterest: "Health and Wellness",
  ProgramOfInterest: undefined,
  ProgramOfInterestOptional: true,
  IsCertMinor: false,
  Country: undefined,
  StateProvince: undefined, // Only US states or CA provinces
  SuccessMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  Test: false,
};

export const RfiOnCertOrMinorPage = Template.bind({});
RfiOnCertOrMinorPage.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: undefined,
  Department: undefined,
  StudentType: undefined, // graduate, undergrad
  AreaOfInterest: undefined,
  ProgramOfInterest: "LAINSCERT",
  ProgramOfInterestOptional: false,
  IsCertMinor: true,
  Country: undefined,
  StateProvince: undefined, // Only US states or CA provinces
  SuccessMsg: `<div>A custom <strong>SuccessMsg</strong> suplied by you displays here.</div>`,
  Test: false,
};

export const RfiOnCampaignLandingPage = Template.bind({});
RfiOnCampaignLandingPage.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: undefined,
  Department: undefined,
  StudentType: "graduate",
  AreaOfInterest: undefined,
  ProgramOfInterest: "BAGLSMS",
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: "US",
  StateProvince: "New Mexico", // Only US states or CA provinces
  SuccessMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  Test: false,
};

export const RfiTestMode = Template.bind({});
RfiTestMode.args = {
  Campus: "ONLNE", // ONLNE, GROUND, NOPREF
  College: undefined,
  Department: undefined,
  StudentType: "graduate",
  AreaOfInterest: "STEM",
  ProgramOfInterest: "GRGF-LABMYMS",
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: "US",
  StateProvince: "California", // Only US states or CA provinces
  SuccessMsg: `Keep an eye on your inbox and in the meantime, check out some more of the <a href="https://www.asu.edu/about">amazing facts, figures, or other links</a> that ASU has to offer.`,
  Test: true,
};

export const RfiDevTester = Template.bind({});
RfiDevTester.args = {
  Campus: undefined, // ONLNE, GROUND, NOPREF
  College: undefined,
  Department: undefined,
  StudentType: "undergrad",
  AreaOfInterest: undefined,
  ProgramOfInterest: undefined,
  ProgramOfInterestOptional: false,
  IsCertMinor: false,
  Country: "DZ",
  StateProvince: undefined, // Only US states or CA provinces
  SuccessMsg: "Success. <strong>You made it.</strong>",
  Test: false,
};
