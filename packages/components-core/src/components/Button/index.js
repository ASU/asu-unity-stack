import {h} from 'preact';
import classNames from "classnames";
import PropTypes from "prop-types";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

export const Button = ({
  element,
  label,
  labelIcon,
  btnSize,
  btnColor,
  tagColor,
}) => {
  const btnClass = classNames(UdsStyles["btn"], {
    [UdsStyles[`btn-${btnColor}`]]: true,
    [UdsStyles[`btn-md`]]: "small" === btnSize,
    [UdsStyles[`btn-sm`]]: "xsmall" === btnSize,
    [UdsStyles[`btn-tag`]]: "tag" === btnSize,
    [UdsStyles[`btn-tag-alt-white`]]: "tag" === btnSize && "white" === tagColor,
    [UdsStyles[`btn-tag-alt-gray`]]: "tag" === btnSize && "gray" === tagColor,
    [UdsStyles[`btn-tag-alt-dark`]]: "tag" === btnSize && "dark" === tagColor,
  });

  return (
    <button type="button" className={btnClass}>
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Type of DOM element for button (a, button)
   */
  element: PropTypes.oneOf(["button", "a"]),
  /**
   * Text label for button
   */
  label: PropTypes.string.isRequired,
  /**
   * Font Awesome icon classname for button label
   */
  labelIcon: PropTypes.string,
  /**
   * Button size
   */
  btnSize: PropTypes.oneOf(["default", "small", "xsmall", "tag"]),
  /**
   * Button color
   */
  btnColor: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
   * Tag color (only if btnSize == tag)
   */
  tagColor: PropTypes.oneOf(["white", "gray", "dark"]),
};

Button.defaultProps = {
  element: "button",
  labelIcon: null,
  btnSize: "default",
  btnColor: "gray",
  tagColor: "gray",
};
