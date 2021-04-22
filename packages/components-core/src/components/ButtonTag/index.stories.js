import React from "react";

import { ButtonTag } from ".";

export default {
  title: "UDS/ButtonTag",
  component: ButtonTag,
};

const Template = args => (
  <div class="container-fluid">
    <div class="col col-sm-12 p-3">
      <ButtonTag {...args}>{args.label}</ButtonTag>
    </div>
  </div>
);

export const TagButton = Template.bind({});
TagButton.args = {
  label: "Tag Button",
  color: "gray",
};
