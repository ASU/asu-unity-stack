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

export const RfiOnCollegePage = Template.bind({});
RfiOnCollegePage.args = {
  rfiConfig: {
    Campus: "",
    College: "CHI",
    Department: "",
    StudentType: "",
    AreaOfInterest: "",
    ProgramOfInterest: "",
    State: "",
  },
};

export const RfiOnCollegePageWithAreaOfInterest = Template.bind({});
RfiOnCollegePageWithAreaOfInterest.args = {
  rfiConfig: {
    Campus: "",
    College: "CES",
    Department: "",
    StudentType: "",
    AreaOfInterest: "STEM",
    ProgramOfInterest: "",
    State: "",
  },
};

export const RfiOnDegreePage = Template.bind({});
RfiOnDegreePage.args = {
  rfiConfig: {
    Campus: "",
    College: "",
    Department: "",
    StudentType: "",
    AreaOfInterest: "",
    ProgramOfInterest: "TEESTEMBAE",
    State: "",
  },
};

export const RfiOnCollegeDepartmentPage = Template.bind({});
RfiOnCollegeDepartmentPage.args = {
  rfiConfig: {
    Campus: "",
    College: "CES",
    Department: "CINFOTECH",
    StudentType: "",
    AreaOfInterest: "",
    ProgramOfInterest: "",
    State: "",
  },
};

export const RfiOnNonAcademicUnitPage = Template.bind({});
RfiOnNonAcademicUnitPage.args = {
  rfiConfig: {
    Campus: "",
    College: "",
    Department: "",
    StudentType: "",
    AreaOfInterest: "Health and Wellness",
    ProgramOfInterest: "",
    State: "",
  },
};

// TODO Decide how we're handling these to start with...
// Do we need a cert prop?
export const RfiOnCertOrMinorPage = Template.bind({});
RfiOnCertOrMinorPage.args = {
  rfiConfig: {
    Campus: "",
    College: "",
    Department: "",
    StudentType: "",
    AreaOfInterest: "",
    ProgramOfInterest: "",
    State: "",
  },
};

export const RfiOnCampaignLandingPage = Template.bind({});
RfiOnCampaignLandingPage.args = {
  rfiConfig: {
    Campus: "",
    College: "",
    Department: "",
    StudentType: "Graduate",
    AreaOfInterest: "",
    ProgramOfInterest: "BAGLSMS",
    State: "CA",
  },
};
