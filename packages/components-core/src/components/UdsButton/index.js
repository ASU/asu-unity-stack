import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Button } from "reactstrap";

import UdsStyles from "Vendor/css/bootstrap-asu.min.module.css";

export const UdsButton = ({ color, size, children, ...rest }) => {
  const btnClasses = classNames(UdsStyles["btn"], {
    [UdsStyles[`btn-${color}`]]: true,
    [UdsStyles[`btn-md`]]: size === "small",
    [UdsStyles[`btn-sm`]]: size === "xsmall",
  });

  return (
    <Button className={btnClasses} {...rest}>
      {children}
    </Button>
  );
};

UdsButton.propTypes = {
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]), // default: 'maroon'
  size: PropTypes.oneOf(["default", "small", "xsmall"]),
  ...Button.propTypes,
};

UdsButton.defaultProps = {
  color: "maroon",
  size: "default",
};
