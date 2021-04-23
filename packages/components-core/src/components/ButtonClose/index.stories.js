/* eslint react/jsx-props-no-spreading: "off" */
import React from "react";

import { ButtonClose } from ".";

export default {
  title: "UDS/ButtonClose",
  component: ButtonClose,
};

const Template = args => {
  const { bgColor } = args;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`col col-12 col-lg-4 bg-${bgColor} p-3`}>
          <div className="container-fluid">
            <div className="col col-sm-12 p-3">
              <ButtonClose {...args} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DefaultCloseButton = Template.bind({});
DefaultCloseButton.args = {
  bgColor: "white",
  color: "white",
};

export const GrayCloseButton = Template.bind({});
GrayCloseButton.args = {
  bgColor: "light",
  color: "gray",
};

export const DarkCloseButton = Template.bind({});
DarkCloseButton.args = {
  bgColor: "dark",
  color: "dark",
};
