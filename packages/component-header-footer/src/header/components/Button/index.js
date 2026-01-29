// @ts-check
import React from "react";

import { ButtonPropTypes } from "../../core/models/app-prop-types";
import { ButtonWrapper } from "./index.styles";

/**
 * @typedef {import('../../core/models/types').Button} ButtonProps
 */

/**
 * A reusable button component that renders a ButtonWrapper with customizable properties.
 *
 * @param {Object} props - The component props
 * @param {string} [props.href] - The URL to navigate to when the button is clicked (for link buttons)
 * @param {string} props.color - The color variant for the button styling
 * @param {string} props.text - The text content to display inside the button
 * @param {string} [props.classes] - Additional CSS classes to apply to the button
 * @param {function} [props.onClick] - Event handler function called when the button is clicked
 * @param {function} [props.onFocus] - Event handler function called when the button receives focus
 * @param {string|React.Component} [props.as] - The element type or component to render as
 * @returns {JSX.Element} The rendered button component
 */
const Button = ({ href, color, text, classes, onClick, onFocus, as, ...props }) => {
  return (
    <ButtonWrapper
      href={href}
      className={`button-${color} ${classes ?? ""}`}
      onClick={onClick ? (event) => onClick(event) : undefined}
      onFocus={onFocus ? (event) => onFocus(event) : undefined}
      as={as}
      {...props}
    >
      {text}
    </ButtonWrapper>
  );
};

Button.propTypes = { ...ButtonPropTypes };

export { Button };
