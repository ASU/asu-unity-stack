import classNames from 'classnames'
import PropTypes from 'prop-types';

export const Alert = ({type, dismissable}) => {
  let text="";

  switch(type){
    case "alert-warning":
      text="Warning (orange): This is a warning alert to alert, confirm or notify.";
      break;
    case "alert-success":
      text="Success (green): This is a success alert to confirm or notify.";
      break;
    case "alert-info":
      text="Information (blue): This is a info alert to confirm or notify. ";
      break;
    case "alert-danger":
      text="Error (red): This is a danger alert used specifically for errors.";
      break;
  }
  return (
    <div
      className={`alert ${type} ${
        dismissable ? "alert-dismissable" : ""
      }`}
      role="alert"
    >
      <div className="alert-icon">
        <span title="Alert" className={
          classNames("fa fa-icon",{
            "fa-bell": type === "alert-warning",
            "fa-check-circle": type === "alert-success",
            "fa-info-circle": type === "alert-info",
            "fa-exclamation-triangle": type === "alert-danger",
            })}></span>
      </div>
      <div className="alert-content">
        <p>{`${text} It is built using `}
          <a href="https://getbootstrap.com/docs/5.0/components/alerts">
            the Bootstrap 5 alert classes
          </a>
        .</p>
        {dismissable &&
          <p>
          Creating a dismissable alert box requires the inclusion of the{" "}
          <code>alert-dismissable</code> class along with the{" "}
          <code>data-bs-dismiss="alert"</code> attribute on the close button.
          Alert messages do not necessarily have to be dismissable.
        </p>
        }
      </div>
      {dismissable && (
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

Alert.propTypes = {
  type: PropTypes.oneOf(["alert-warning", "alert-success", "alert-info", "alert-danger"]),
  dismissable: PropTypes.bool,
};

Alert.defaultProps = Alert.args = {
  type: "alert-success",
  dismissable: false,
};
Alert.storyName="Template";

export default {
  title: "Atoms/Alerts",
  component: Alert,
  parameters: {
    uds:{
      template: {
        include:[0,1,3],
      }
    }
  },
}
