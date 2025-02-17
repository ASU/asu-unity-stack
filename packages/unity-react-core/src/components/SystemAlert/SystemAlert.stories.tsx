import React from "react";

import { SystemAlert, SystemAlertProps, SystemAlertType } from "./SystemAlert";

export default {
  title: "Components/SystemAlert",
  component: SystemAlert,
};

const defaultProps: SystemAlertProps = {
  type: SystemAlertType.WARNING,
  children: "Content",
  dismissable: true,
};

const systemAlertTemplate = (args: SystemAlertProps) => (
  <SystemAlert {...args} />
);

export const Info = {
  render: systemAlertTemplate.bind({}),
  args: {
    ...defaultProps,
    type: SystemAlertType.INFO,
    children: (
      <>
        <p>
          Information (blue): This is a info alert to confirm or notify. It is
          built using{" "}
          <a href="https://getbootstrap.com/docs/5.0/components/alerts">
            the Bootstrap 5 .alert-info class
          </a>
        </p>
        <p>
          Creating a dismissable alert box requires the inclusion of the{" "}
          <code>alert-dismissable</code> class along with the{" "}
          <code>data-bs-dismiss=&quot;alert&quot;</code> attribute on the close
          button. Alert messages do not necessarily have to be dismissable.
        </p>
      </>
    ),
  },
};

export const Warning = {
  render: systemAlertTemplate.bind({}),
  args: {
    ...defaultProps,
    type: SystemAlertType.WARNING,
    children: (
      <>
        {" "}
        Warning (orange): This is a warning alert to alert, confirm or notify.
        It is built using{" "}
        <a href="https://getbootstrap.com/docs/5.0/components/alerts">
          the Bootstrap 5 .alert-warning class
        </a>
        .
      </>
    ),
  },
};

export const Success = {
  render: systemAlertTemplate.bind({}),
  args: {
    ...defaultProps,
    type: SystemAlertType.SUCCESS,
    children: (
      <>
        Success (green): This is a success alert to confirm or notify. It is
        built using{" "}
        <a href="https://getbootstrap.com/docs/5.0/components/alerts">
          the Bootstrap 5 .alert-success class
        </a>
        .
      </>
    ),
  },
};

export const Error = {
  render: systemAlertTemplate.bind({}),
  args: {
    ...defaultProps,
    type: SystemAlertType.ERROR,
    children: (
      <>
        Error (red): This is a danger alert used specifically for errors. It is
        built using{" "}
        <a href="https://getbootstrap.com/docs/5.0/components/alerts">
          the Bootstrap 5 .alert-danger class
        </a>
        .
      </>
    ),
  },
};
