import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Button } from "reactstrap";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";

export const UdsNextPrevButton = ({ color, direction, ...rest }) => {
  const btnClasses = classNames(
    UdsStyles["btn"],
    UdsStyles["btn-circle"],
    UdsStyles["btn-circle-large"],
    UdsStyles[`btn-circle-alt-${color}`]
  );

  if (direction === "next") {
    return (
      <Button className={btnClasses} {...rest}>
        <FontAwesomeIcon icon={faChevronRight} />
        <span className="sr-only">Next</span>
      </Button>
    );
  }

  return (
    <Button className={btnClasses} {...rest}>
      <FontAwesomeIcon icon={faChevronLeft} />
      <span className="sr-only">Previous</span>
    </Button>
  );
};

UdsNextPrevButton.propTypes = {
  color: PropTypes.oneOf(["white", "gray", "black"]),
  direction: PropTypes.oneOf(["next", "prev"]),
  ...Button.propTypes,
};

UdsNextPrevButton.defaultProps = {
  color: "white",
};
