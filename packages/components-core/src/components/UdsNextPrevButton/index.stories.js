import React from "react";

import { UdsNextPrevButton } from ".";

export default {
  title: "UDS/UdsNextPrevButton",
  component: UdsNextPrevButton,
  argTypes: {
    color: {
      type: "select",
      options: ["white", "gray", "black"],
    },
    direction: {
      type: "select",
      options: ["next", "prev"],
    },
  },
};

const Template = args => (
  <div className="container-fluid">
    <div className="col col-sm-12 p-3">
      <UdsNextPrevButton {...args} />
    </div>
  </div>
);

export const Next = Template.bind({});
Next.args = {
  color: "white",
  direction: "next",
};

export const Previous = Template.bind({});
Previous.args = {
  color: "white",
  direction: "prev",
};
