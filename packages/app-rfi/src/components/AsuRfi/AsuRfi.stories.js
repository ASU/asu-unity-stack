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

export const RfiNoPlancode = Template.bind({});
RfiNoPlancode.args = {};

export const RfiPlancode = Template.bind({});
RfiPlancode.args = {
  programPlanCode: "TODO plancode",
};
