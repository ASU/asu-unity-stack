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
  rfiConfig: {
    Campus: undefined, // ONLNE, GROUND, NOPREF
    College: undefined,
    Department: undefined,
    StudentType: undefined, // Graduate, Undergrad
    AreaOfInterest: undefined,
    ProgramOfInterest: undefined,
    State: undefined, // Only US States
    SuccessMsg: undefined,
    Test: undefined,
  },
};

export const RfiOnCollegePage = Template.bind({});
RfiOnCollegePage.args = {
  rfiConfig: {
    Campus: undefined,
    College: "CHI",
    Department: undefined,
    StudentType: undefined,
    AreaOfInterest: undefined,
    ProgramOfInterest: undefined,
    State: undefined,
    SuccessMsg: "Success.",
    Test: 0,
  },
};

export const RfiOnCollegePageWithAreaOfInterest = Template.bind({});
RfiOnCollegePageWithAreaOfInterest.args = {
  rfiConfig: {
    Campus: undefined,
    College: "CES",
    Department: undefined,
    StudentType: undefined,
    AreaOfInterest: "STEM",
    ProgramOfInterest: undefined,
    State: undefined,
    SuccessMsg: "Success.",
    Test: 0,
  },
};

export const RfiOnDegreePage = Template.bind({});
RfiOnDegreePage.args = {
  rfiConfig: {
    Campus: undefined,
    College: undefined,
    Department: undefined,
    StudentType: undefined,
    AreaOfInterest: undefined,
    ProgramOfInterest: "TEESTEMBAE",
    State: undefined,
    SuccessMsg: "Success.",
    Test: 0,
  },
};

export const RfiOnCollegeDepartmentPage = Template.bind({});
RfiOnCollegeDepartmentPage.args = {
  rfiConfig: {
    Campus: undefined,
    College: "CES",
    Department: "CINFOTECH",
    StudentType: undefined,
    AreaOfInterest: undefined,
    ProgramOfInterest: undefined,
    State: undefined,
    SuccessMsg: "Success.",
    Test: 0,
  },
};

export const RfiOnNonAcademicUnitPage = Template.bind({});
RfiOnNonAcademicUnitPage.args = {
  rfiConfig: {
    Campus: undefined,
    College: undefined,
    Department: undefined,
    StudentType: undefined,
    AreaOfInterest: "Health and Wellness",
    ProgramOfInterest: undefined,
    State: undefined,
    SuccessMsg: "Success.",
    Test: 0,
  },
};

// TODO Decide how we're handling these to start with...
// Do we need a cert prop?
export const RfiOnCertOrMinorPage = Template.bind({});
RfiOnCertOrMinorPage.args = {
  rfiConfig: {
    Campus: undefined,
    College: undefined,
    Department: undefined,
    StudentType: undefined,
    AreaOfInterest: undefined,
    ProgramOfInterest: undefined,
    State: undefined,
    SuccessMsg: "Success.",
    Test: 0,
  },
};

export const RfiOnCampaignLandingPage = Template.bind({});
RfiOnCampaignLandingPage.args = {
  rfiConfig: {
    Campus: undefined,
    College: undefined,
    Department: undefined,
    StudentType: "Graduate",
    AreaOfInterest: undefined,
    ProgramOfInterest: "BAGLSMS",
    State: "CA",
    SuccessMsg: "Success.",
    Test: 0,
  },
};

export const RfiTesterA = Template.bind({});
RfiTesterA.args = {
  rfiConfig: {
    Campus: "ONLNE",
    College: undefined,
    Department: undefined,
    StudentType: "Graduate",
    AreaOfInterest: "BAGLSMS",
    ProgramOfInterest: "BAGLSMS",
    State: "CA",
    SuccessMsg: "Success.",
    Test: 0,
  },
};

export const RfiTesterB = Template.bind({});
RfiTesterB.args = {
  rfiConfig: {
    Campus: undefined,
    College: undefined,
    Department: undefined,
    StudentType: "Undergrad",
    AreaOfInterest: undefined,
    ProgramOfInterest: undefined,
    State: undefined,
    SuccessMsg: "Success.",
    Test: 0,
  },
};
