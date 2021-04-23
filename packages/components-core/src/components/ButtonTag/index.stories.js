/* eslint react/jsx-props-no-spreading: "off" */
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { ButtonTag } from ".";

export default {
  title: "UDS/ButtonTag",
  component: ButtonTag,
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
        <ButtonTag {...args}>{label}</ButtonTag>
      </div>
    </div>
  );
};

export const TagButton = Template.bind({});
TagButton.args = {
  label: "Tag Button",
  color: "gray",
  onClick: handleClick,
};

export const TagLink = Template.bind({});
TagLink.args = {
  label: "Tag Link",
  color: "white",
  href: "/#example-link",
};

const ReactRouterTemplate = args => (
  <Router>
    <div className="container-fluid">
      <div className="col col-sm-12 p-3">
        <ButtonTag {...args}>React Router Link</ButtonTag>
      </div>
    </div>
  </Router>
);

export const ReactRouterLinkTag = ReactRouterTemplate.bind({});
ReactRouterLinkTag.args = {
  color: "white",
  element: Link,
  to: "/#example-link",
};
