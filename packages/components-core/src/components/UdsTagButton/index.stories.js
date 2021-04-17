import React from "react";

import { UdsTagButton } from ".";

export default {
  title: "UDS/UdsTagButton",
  component: UdsTagButton,
};

const Template = args => (
  <div class="container-fluid">
    <div class="col col-sm-12 p-3">
      <UdsTagButton {...args}>UDS Tag</UdsTagButton>
    </div>
  </div>
);

export const DefaultTag = Template.bind({});
DefaultTag.args = {};
