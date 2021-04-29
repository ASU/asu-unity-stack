import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

export const UdsTagButton = ({ color, children, ...props }) => {
  const btnClasses = classNames(UdsStyles["btn"], UdsStyles[`btn-tag`], {
    [UdsStyles[`btn-tag-alt-white`]]: color === "white",
    [UdsStyles[`btn-tag-alt-gray`]]: color === "gray",
    [UdsStyles[`btn-tag-alt-dark`]]: color === "dark",
  });

  return (
    <Button className={btnClasses} tag="a" {...props}>
      {children}
    </Button>
  );
};

UdsTagButton.propTypes = {
  ...Button.propTypes,
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
};

UdsTagButton.defaultProps = {
  color: "gray",
};
