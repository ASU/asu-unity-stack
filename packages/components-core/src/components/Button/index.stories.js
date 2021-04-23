/* eslint react/jsx-props-no-spreading: "off" */
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from ".";

export default {
  title: "UDS/Button",
  component: Button,
};

const handleClick = e => {
  e.preventDefault();
  alert("The button was clicked.");
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
  onClick: handleClick,
};

export const SmallGoldButton = Template.bind({});
SmallGoldButton.args = {
  color: "gold",
  label: "Small Gold Button",
  onClick: handleClick,
  size: "small",
};

export const IconButton = Template.bind({});
IconButton.args = {
  color: "gold",
  icon: faRocket,
  label: "Icon Button",
  onClick: handleClick,
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  color: "maroon",
  href: "/#example-link",
  label: "Link Button",
};

const ReactRouterTemplate = args => (
  <Router>
    <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <Button {...args}>React Router Link</Button>
      </div>
    </div>
  </Router>
);

export const ReactRouterLinkButton = ReactRouterTemplate.bind({});
ReactRouterLinkButton.args = {
  color: "gold",
  element: Link,
  to: "/#example-link",
};
