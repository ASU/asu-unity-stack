import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

export const UdsButton = ({color, size, children, ...rest}) => {
  const btnClasses = classNames(UdsStyles["btn"], {
    [UdsStyles[`btn-${color}`]]: true,
    [UdsStyles[`btn-md`]]: "small" === size,
    [UdsStyles[`btn-sm`]]: "xsmall" === size,
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
