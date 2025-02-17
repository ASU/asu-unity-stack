/* eslint-disable react/jsx-props-no-spreading */
import cx from "classnames";
import React, { ComponentProps } from "react";

export const formBackground = [
  "",
  "uds-form-white",
  "uds-form-gray1",
  "uds-form-gray2",
  "uds-form-gray7",
] as const;

export interface FormProps extends ComponentProps<"form"> {
  /**
   * The background of the form Defaults to "" (no background).
   * "uds-form-white" can be used to give the form a white background.
   */
  background?: (typeof formBackground)[number];
}

export const Form: React.FC<FormProps> = ({
  background,
  children,
  ...rest
}) => {
  return (
    <form className={cx("uds-form", background)} {...rest}>
      {children}
    </form>
  );
};
