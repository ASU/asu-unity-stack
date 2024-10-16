import React, { ReactElement, useState } from "react";
import classnames from "classnames";
import { ButtonIconOnly } from "../ButtonIconOnly/ButtonIconOnly";

export enum SystemAlertType {
  WARNING = "warning",
  INFO = "info",
  SUCCESS = "success",
  ERROR = "error",
}
export interface SystemAlertProps {
  /**
   * Tyoe of systen akert
   */
  type: SystemAlertType,
  /**
   * Content of the alert
   */
  children: ReactElement | ReactElement[] | string,
  /**
   * If the alert can be dismissed
   */
  dismissable: boolean,
}

export const SystemAlert: React.FC<SystemAlertProps> = ({
  type,
  dismissable,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = ()=>setIsVisible(false);

  const map = {
    [`${SystemAlertType.WARNING}`]: { iconTitle: "Warning", iconName: "bell", alertClass: "warning" },
    [`${SystemAlertType.INFO}`]: { iconTitle: "Information", iconName: "info-circle", alertClass: "info" },
    [`${SystemAlertType.SUCCESS}`]: { iconTitle: "Success", iconName: "check-circle", alertClass: "success" },
    [`${SystemAlertType.ERROR}`]: { iconTitle: "Error", iconName: "exclamation-triangle", alertClass: "danger" },
  };

  const environmentAction = {
    // "data-bs-dismiss": "alert", // used with BS5 and HTML
    onClick: handleClose, // Used with react
  }

  return (isVisible && <div
        className={classnames("alert", {
          "alert-dismissable": dismissable,
          [`alert-${map[type]?.alertClass}`]: type,
        })}
        role="alert"
        >
        <div className="alert-icon">
          <span title={map[type]?.iconTitle} className={`fa fa-icon fa-${map[type]?.iconName}`}></span>
        </div>
        <div className="alert-content">
          {children}
        </div>
        {dismissable && (
          <div className="alert-close">
            {/* TODO: needs to works with data-bs-dismiss="alert"  */}
            <ButtonIconOnly icon={["fas", "times"]} {...environmentAction} />
          </div>
        )}
      </div>
  );
};

