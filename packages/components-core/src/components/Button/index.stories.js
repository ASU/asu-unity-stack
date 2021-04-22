import { faRocket } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { Button } from ".";

export default {
  title: "UDS/Button",
  component: Button,
};

const Template = args => {
  const { label } = args;

  return (
    <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args}>{label}</Button>
      </div>
    </div>
  );
};

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  label: "Default Button",
};

export const SmallGoldButton = Template.bind({});
SmallGoldButton.args = {
  color: "gold",
  label: "Small Gold Button",
  size: "small",
};

export const IconButton = Template.bind({});
IconButton.args = {
  color: "gold",
  icon: faRocket,
  label: "Icon Button",
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  color: "gold",
  href: "#",
  label: "Icon Button",
};
