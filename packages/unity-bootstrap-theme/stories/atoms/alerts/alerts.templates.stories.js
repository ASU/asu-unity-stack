import {
  createComponent,
  createStory,
  layoutNames,
} from "../../../helpers/wrapper.js";

const extraOptions = {
  type: {
    name: "type",
    options: ["alert-warning", "alert-success", "alert-info", "alert-danger"],
    defaultValue: "alert-success",
    control: {
      type: "radio",
      labels: {
        "alert-warning": "Warning",
        "alert-success": "Success",
        "alert-info": "Info",
        "alert-danger": "Danger",
      },
    },
  },
  dismissable: {
    name: "Dismissable",
    control: { type: "boolean" },
    defaultValue: false,
  },
};

export default createComponent("Alerts", "Atoms", "Templates", extraOptions);

export const Alert = createStory(
  args => {
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
  },
  {
    supportedTemplates: [
      layoutNames.FULL_WIDTH,
      layoutNames.ONE_COLUMN,
      layoutNames.TWO_COLUMN,
    ],
  }
);
