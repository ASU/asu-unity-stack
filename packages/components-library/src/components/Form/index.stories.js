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

const testProps = {
  title: "Daily Health Check Reminders",
  description: `How would you like to be reminded to take your daily health check? <br />
      (Note: You can submit a daily health check anytime, via any tool. We just thought
        a friendly reminder might help.)
    `,
  imgUrl: "/dev/img/icon-well-check.png",
  fields: [
    {
      name: "mobileOptin",
      type: "checkbox",
      icon: "mobile",
      label: "ASU Mobile App (push notifications)",
      id: "mobile-opt-in",
    },
    {
      name: "webOptin",
      type: "checkbox",
      label: "Web (email reminders)",
      id: "web-opt-in",
      icon: "desktop"
    },
  ],
  initialValues: {
    mobileOptin: false,
    webOptin: false
  }
};

export const base = () => (
  <Fragment>
    <FormPanel {...testProps} />
    <div style={"background-color:#8c1e40; width:100%; height:200vh;"} />
  </Fragment>
);
