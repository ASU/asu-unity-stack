import { h } from "preact";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

export const UdsCloseButton = ({ color, ...rest }) => {
  const btnClasses = classNames(
    UdsStyles["btn"],
    UdsStyles["btn-circle"],
    UdsStyles[`btn-circle-alt-${color}`]
  );

  return (
    <Button className={btnClasses} {...rest}>
      <FontAwesomeIcon icon={faTimes} />
      <span class="sr-only" >Close</span>
    </Button>
  );
};

UdsCloseButton.propTypes = {
  color: PropTypes.oneOf(["white", "gray", "black"]), // default: 'gray'
  ...Button.propTypes,
};

UdsCloseButton.defaultProps = {};
