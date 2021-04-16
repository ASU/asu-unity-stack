import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Button } from "reactstrap";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

export const UdsCloseButton = ({ color, ...rest }) => {
  const btnClasses = classNames(
    UdsStyles["btn"],
    UdsStyles["btn-circle"],
    UdsStyles[`btn-circle-alt-${color}`]
  );

  return (
    <Button className={btnClasses} {...rest}>
      <FontAwesomeIcon icon={faTimes} />
      <span className="sr-only">Close</span>
    </Button>
  );
};

UdsCloseButton.propTypes = {
  color: PropTypes.oneOf(["white", "gray", "black"]), // default: 'gray'
  ...Button.propTypes,
};

UdsCloseButton.defaultProps = {};
