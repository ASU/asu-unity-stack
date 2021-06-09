/* eslint react/jsx-props-no-spreading: "off" */
import React from "react";

import { Requirements } from ".";

export default {
  title: "Degree Page",
  component: Requirements,
  parameters: {
    docs: {
      description: {
        component: `Requirements.`,
      },
    },
  },
};

const Template = args => <Requirements {...args} />;

export const RequirementsComponent = Template.bind({});
RequirementsComponent.args = {
  sectionHeader: "Application requirements",
  contentText: {
    title: "General university admission requirements",
    description:
      "All students are required to meet general university admission requirements",
  },
  buttons: [
    {
      ariaLabel: "Freshman",
      color: "maroon",
      href: "#",
      label: "Freshman",
      size: "small",
    },
    {
      ariaLabel: "Transfer",
      color: "maroon",
      href: "#",
      label: "Transfer",
      size: "small",
    },
    {
      ariaLabel: "International",
      color: "maroon",
      href: "#",
      label: "International",
      size: "small",
    },
    {
      ariaLabel: "Readmission",
      color: "maroon",
      href: "#",
      label: "Readmission",
      size: "small",
    },
  ],
  accordionCards: [
    {
      content: {
        header: "Aditional Requirements",
        body:
          "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
      },
    },
    {
      content: {
        header: "Transfer Admission Requirements",
        body:
          "<h4>Quatrenary Headline</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p><h5>This is a level five headline. There's a fancy word for that too.</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>",
      },
    },
  ],
};
