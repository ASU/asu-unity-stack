/* eslint-disable react/prop-types */
/* eslint react/jsx-props-no-spreading: "off" */
// @ts-check
import React from "react";

import { ProgramDetailPage } from ".";

/**
 * @typedef {import('../../core/models/program-detail-types').ProgramDetailPageProps} AppProps
 */

export default {
  component: ProgramDetailPage,
  title: "Program Detail Page",
};

/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
const Template = ({ dataSource, atAGlance }) => (
  <ProgramDetailPage dataSource={dataSource} atAGlance={atAGlance} />
);

/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
export const DefaultPage = Template.bind({});

/**
 * @type {AppProps}
 */
DefaultPage.args = {
  dataSource:
    `https://degreesearch-proxy.apps.asu.edu/degreesearch/?method=findDegreeByAcadPlan` +
    `&acadPlan=BAACCBS` +
    `&fields=` +
    // at a glance
    `CollegeDescr100,` +
    `AsuOfficeLoc,CampusStringArray,campusWue,MinMathReq,MathIntensity` +
    `planCatDescr&init=false`,
  atAGlance: {
    offeredBy: {
      text: "Herberger Instite for Design and the Arts",
      url: "#",
    },
    locations: [
      {
        text: "Tempe campus",
        url: "#",
      },
      {
        text: "West campus",
        url: "#",
      },
      {
        text: "Online",
        url: "#",
      },
      {
        text: "ASU Local@Los Angeles",
        url: "#",
      },
    ],
    firstRequirementMathCourse: "MAT 142 - College Mathematics",
    mathIntensity: "General",
    timeCommitment: "120 credit hours(about 4 years)",
  },
};
