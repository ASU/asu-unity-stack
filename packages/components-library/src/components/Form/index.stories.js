/** @jsx h */

import { h } from "preact";
import { withA11y } from "@storybook/addon-a11y";
import FormPanel from ".";
import { Fragment } from "preact/compat";

export default {
  component: FormPanel,
  title: "FormPanel",
  decorators: [withA11y],
};

export const base = () => (
  <Fragment>
    <FormPanel
      header={`<h1>hello</h1> <p>Testing 1 2 3...</p>`}
      fields={
        [
          {
            name: "mobileOptin",
            type: "checkbox",
            label: "ASU Mobile App (push notifications)",
            id: "mobile-opt-in"
          }
        ]
      }

    />
    <div style={"background-color:#8c1e40; width:100%; height:200vh;"} />
  </Fragment>
);
