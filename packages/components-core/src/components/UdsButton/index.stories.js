import React from "react";

import { UdsButton } from ".";

export default {
  title: "UDS/UdsButton",
  component: UdsButton,
  argTypes: {
    color: {
      type: "select",
      options: ["gold", "maroon", "gray", "dark"],
    },
    size: {
      type: "select",
      options: ["default", "small", "xsmall"],
    },
  },
};

const Template = args => (
  <div class="container-fluid">
    <div class="col col-sm-12 p-3">
      <UdsButton {...args}>UDS Button</UdsButton>
    </div>
  </div>
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  color: "maroon",
  size: "default",
};

export const SmallGoldButton = Template.bind({});
SmallGoldButton.args = {
  color: "gold",
  size: "small",
};

export const XsmallDarkButton = Template.bind({});
XsmallDarkButton.args = {
  color: "dark",
  size: "xsmall",
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  color: "maroon",
  size: "default",
  disabled: true,
};

export const ActiveButton = Template.bind({});
ActiveButton.args = {
  color: "maroon",
  size: "default",
  active: true,
};
