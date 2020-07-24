/** @jsx h */

import { h } from "preact";
import { withA11y } from "@storybook/addon-a11y";
import Form from ".";
import { Fragment } from "preact/compat";

export default {
  component: Form,
  title: "Form",
  decorators: [withA11y],
};

export const base = () => (
  <Fragment>
    <Form />
    <div style={"background-color:#8c1e40; width:100%; height:200vh;"} />
  </Fragment>
);
