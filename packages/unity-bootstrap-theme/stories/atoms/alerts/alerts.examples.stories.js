import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";

export default {
  title: "Atoms/Alerts/Examples",
  decorators: [ defaultDecorator ],
  parameters: { controls: { disable: true } },
};
export const AlertsComponent = () => (
  <div>
    <div className="alert alert-warning alert-dismissable" role="alert">
      <div className="alert-icon">
        <span title="Alert" className="fa fa-icon fa-bell"></span>
      </div>
      <div className="alert-content">
        Warning (orange): This is a warning alert to alert, confirm or notify.
        It is built using{" "}
        <a href="https://getbootstrap.com/docs/4.0/components/alerts">
          the Bootstrap 4 .alert-warning class
        </a>
        .
      </div>
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
          data-ga-section="Warning (orange): This is a warning alert to alert, confirm or notify.
          It is built using the Bootstrap 4 .alert-warning class"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>

    <div className="alert alert-success alert-dismissable" role="alert">
      <div className="alert-icon">
        <span title="Success" className="fa fa-icon fa-check-circle"></span>
      </div>
      <div className="alert-content">
        Success (green): This is a success alert to confirm or notify. It is
        built using{" "}
        <a href="https://getbootstrap.com/docs/4.0/components/alerts">
          the Bootstrap 4 .alert-success class
        </a>
        .
      </div>
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
          data-ga-section="Success (green): This is a success alert to confirm or notify. It is
          built using the Bootstrap 4 .alert-success class"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>

    <div className="alert alert-info" role="alert">
      <div className="alert-icon">
        <span title="Information" className="fa fa-icon fa-info-circle"></span>
      </div>
      <div className="alert-content">
        <p>
          Information (blue): This is a info alert to confirm or notify. It is
          built using{" "}
          <a href="https://getbootstrap.com/docs/4.0/components/alerts">
            the Bootstrap 4 .alert-info class
          </a>
        </p>
        <p>
          Creating a dismissable alert box requires the inclusion of the{" "}
          <code>alert-dismissable</code> class along with the{" "}
          <code>data-bs-dismiss="alert"</code> attribute on the close button.
          Alert messages do not necessarily have to be dismissable.
        </p>
      </div>
    </div>

    <div className="alert alert-danger" role="alert">
      <div className="alert-icon">
        <span title="Error" className="fa fa-icon fa-exclamation-triangle"></span>
      </div>
      <div className="alert-content">
        Error (red): This is a danger alert used specifically for errors. It is
        built using{" "}
        <a href="https://getbootstrap.com/docs/4.0/components/alerts">
          the Bootstrap 4 .alert-danger class
        </a>
        .
      </div>
      <div className="alert-close">
        <button
          type="button"
          className="btn btn-circle btn-circle-alt-black close"
          aria-label="Close"
          data-bs-dismiss="alert"
          data-ga="close cross"
          data-ga-name="onclick"
          data-ga-event="modal"
          data-ga-action="close"
          data-ga-type="click"
          data-ga-region="main content"
          data-ga-section="Error (red): This is a danger alert used specifically for errors. It is
          built using the Bootstrap 4 .alert-danger class"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
);
