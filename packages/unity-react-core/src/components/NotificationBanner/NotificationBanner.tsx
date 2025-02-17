import cx from "classnames";
import React, { ReactElement, useState } from "react";

import { Button } from "../Button/Button";
import { ButtonIconOnly } from "../ButtonIconOnly/ButtonIconOnly";
import { useBaseSpecificFramework } from "../GaEventWrapper/useBaseSpecificFramework";

export interface NotificationBannerProps {
  /**
   * Title or heading.
   */
  title?: string;
  /**
   * Optional buttons to display in the banner.
   */
  buttons?: { href: string; label: string }[];
  /**
   * Background color of the banner.
   */
  color?: "orange" | "blue" | "gray" | "black";
  /**
   * Main content in the banner.
   */
  children: ReactElement | ReactElement[] | string;
}

export const NotificationBanner: React.FC<NotificationBannerProps> = ({
  title,
  color = "orange",
  buttons = [],
  children,
}) => {
  const { isBootstrap, isReact } = useBaseSpecificFramework();
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => setIsVisible(false);

  return (
    isVisible && (
      <div role="alert" className={`banner-${color} alert alert-dismissable`}>
        <div className="banner uds-content-align">
          <div className="banner-icon">
            <span className="fa fa-icon fa-bell" />
          </div>
          <div className="banner-content">
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
            <h1 tabIndex={0}>{title}</h1>
            {children}
          </div>
          {buttons.length && (
            <div className="banner-buttons">
              {buttons.map(item => (
                <Button
                  key={`${item.label}${item.href}`}
                  classes={cx("btn btn-sm", {
                    "btn-dark": color !== "black",
                    "btn-light": color === "black",
                  })}
                  href={item.href}
                  label={item.label}
                  gaData={{
                    section: "NotificationBanner",
                  }}
                />
              ))}
            </div>
          )}
          <div className="banner-close">
            <ButtonIconOnly
              aria-label="Close"
              icon={["fas", "times"]}
              onClick={isReact && handleClose}
              data-bs-dismiss={isBootstrap && "alert"}
              gaData={{
                section: "NotificationBanner",
              }}
            />
          </div>
        </div>
      </div>
    )
  );
};
