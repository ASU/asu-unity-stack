import React from "react";

import { ButtonClose } from ".";

export default {
  title: "UDS/ButtonClose",
  component: ButtonClose,
};

const Template = args => (
  <div className="container-fluid">
    <div className="col col-sm-12 p-3">
      <ButtonClose {...args} />
    </div>
  </div>
);

export const DefaultCloseButton = Template.bind({});
DefaultCloseButton.args = {};

export const GrayCloseButton = Template.bind({});
GrayCloseButton.args = {
  color: "gray",
};

export const DarkCloseButton = Template.bind({});
DarkCloseButton.args = {
  color: "dark",
};
