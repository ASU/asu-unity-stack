/* eslint react/jsx-props-no-spreading: "off" */
import React from "react";

import { ButtonNextPrev } from ".";

export default {
  title: "UDS/ButtonNextPrev",
  component: ButtonNextPrev,
};

const handleClick = e => {
  e.preventDefault();
  alert("Button was clicked.");
};

const Template = args => (
  <div className="container-fluid">
    <div className="col col-sm-12 p-3">
      <ButtonNextPrev {...args} />
    </div>
  </div>
);

export const Next = Template.bind({});
Next.args = {
  color: "white",
  direction: "next",
  onClick: handleClick,
};

export const Previous = Template.bind({});
Previous.args = {
  color: "white",
  direction: "prev",
  onClick: handleClick,
};
