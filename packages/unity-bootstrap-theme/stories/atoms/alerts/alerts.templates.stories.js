import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout.js";

export default {
  title: "Atoms/Alerts/Templates",
  args: {
    type: "Success",
    dismissable: false,
  },
  argTypes: {
    type: {
      name: "type",
      options: ["Warning", "Success", "Info", "Danger"],
      mapping: {
        "Warning": "alert-warning",
        "Success": "alert-success",
        "Info": "alert-info",
        "Danger": "alert-danger",
      },
      control: {
        type: "radio",
      },
    },
    dismissable: {
      name: "Dismissable",
      control: { type: "boolean" },
    },
  },
  decorators: [ defaultDecorator ],
};

export const Alert = (args) => {
    return (
      <div
        className={`alert ${args.type} ${
          args.dismissable ? "alert-dismissable" : ""
        }`}
        role="alert"
      >
        <div className="alert-icon">
          <span title="Alert" className="fa fa-icon fa-bell"></span>
        </div>
        <div className="alert-content">
          This is an alert to alert. It is built using{" "}
          <a href="https://getbootstrap.com/docs/4.0/components/alerts">
            the Bootstrap 4 alert classes
          </a>
          .
        </div>
        {args.dismissable && (
          <div className="alert-close">
            <button
              type="button"
              className="btn btn-circle btn-circle-alt-black close"
              data-bs-dismiss="alert"
              aria-label="Close"
              data-ga="close cross"
              data-ga-name="onclick"
              data-ga-event="modal"
              data-ga-action="close"
              data-ga-type="click"
              data-ga-region="main content"
              data-ga-section="This is an alert to alert. It is built using the Bootstrap 4
                alert classes"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}
      </div>
    );
  };
