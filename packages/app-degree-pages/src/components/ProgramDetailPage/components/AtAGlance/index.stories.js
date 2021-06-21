/* eslint react/jsx-props-no-spreading: "off" */
import React from "react";

import { AtAGlance } from ".";

export default {
  title: "Degree Page",
  component: AtAGlance,
  parameters: {
    docs: {
      description: {
        component: `At a glance component can be used to generate pagination.
        View component examples and source code below.
        `,
      },
    },
  },
};

const Template = args => <AtAGlance {...args} />;

const AtAGlanceComponent = Template.bind({});
AtAGlanceComponent.args = {
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
};
