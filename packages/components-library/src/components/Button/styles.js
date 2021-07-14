/* eslint-disable react/prop-types */

import { css, cx } from "@emotion/css";
import { forwardRef } from "preact/compat";
import PropTypes from "prop-types";

import {
  focusStyle,
  ComponentButtonHoverStateTransform,
  ComponentButtonActiveStateTransform,
  ComponentButtonDisabledOpacity,
  ComponentButtonSmallFontSize,
  ComponentButtonSmallHeight,
  ComponentButtonSmallMinWidth,
  ComponentButtonPaddingYSmall,
  ComponentButtonPaddingXSmall,
  ComponentButtonLargeFontSize,
  ComponentButtonLargeHeight,
  ComponentButtonLargeMinWidth,
  ComponentButtonGoldColor,
  ComponentButtonGoldBackgroundColor,
  ComponentButtonDarkColor,
  ComponentButtonDarkBackgroundColor,
  ComponentButtonLightColor,
  ComponentButtonLightBackgroundColor,
  ComponentButtonMediumFontSize,
  ComponentButtonMediumHeight,
  ComponentButtonMediumMinWidth,
  ComponentButtonPaddingYMedium,
  ComponentButtonPaddingXMedium,
  ComponentButtonMaroonColor,
  ComponentButtonMaroonBackgroundColor,
} from "../../theme";

const Button = forwardRef(
  (
    { disabled, small, medium, large, gold, maroon, dark, type, ...props },
    ref
  ) => {
    const Element = type == "link" ? "a" : "button";

    // If no color set, then default to 'light'
    let light = props.light ? props.light : false;

    if (gold === undefined && dark === undefined && maroon === undefined) {
      light = true;
    }

    return (
      <Element
        {...props}
        class={cx(
          css`
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
            text-align: center;
            text-decoration: none;
            vertical-align: middle;
            user-select: none;
            background-color: transparent;
            border: 1px solid transparent;
            padding: 1rem 2rem !important;
            font-size: 1rem;
            line-height: 1rem;
            border-radius: 400rem;
            transition: 0.03s ease-in-out;

            :not(:disabled):not(.disabled) {
              cursor: pointer;
            }

            :hover {
              transform: ${ComponentButtonHoverStateTransform};
            }

            :active {
              transform: ${ComponentButtonActiveStateTransform};
            }

            ${focusStyle}

            ${disabled && `opacity: ${ComponentButtonDisabledOpacity};`}

            ${small &&
            `
              font-size: ${ComponentButtonSmallFontSize};
              height: ${ComponentButtonSmallHeight};
              min-width: ${ComponentButtonSmallMinWidth};
              padding: ${ComponentButtonPaddingYSmall}
                ${ComponentButtonPaddingXSmall} !important;
            `}

        ${medium &&
            `
              font-size: 0.875rem;
              padding: 0.5rem 1rem !important;
            `}

        ${large &&
            `
              font-size: ${ComponentButtonLargeFontSize};
              height: ${ComponentButtonLargeHeight};
              min-width: ${ComponentButtonLargeMinWidth};
            `}

        ${gold &&
            `
              color: ${ComponentButtonGoldColor};
              background-color: ${ComponentButtonGoldBackgroundColor};

              :hover {
                color: ${ComponentButtonGoldColor};
              }
            `}

        ${maroon &&
            `
              color: #ffffff;
              background-color: #8c1d40;
              border-color: #8c1d40;

              :visited:not(.btn) {
                color: #ffffff;
              }
            `}

        ${dark &&
            `
              color: ${ComponentButtonDarkColor};
              background-color: ${ComponentButtonDarkBackgroundColor};

              :visited:not(.btn) {
                color: ${ComponentButtonDarkColor};
              }
            `}

        ${light &&
            `
              color: ${ComponentButtonLightColor};
              background-color: ${ComponentButtonLightBackgroundColor};
            `}
          `,
          props.class
        )}
        ref={ref}
      >
        {props.children}
      </Element>
    );
  }
);

Button.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string,
  dark: PropTypes.bool,
  light: PropTypes.bool,
  gold: PropTypes.bool,
  maroon: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  onFocus: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
};

/**
 * Static class-based CSS for buttons, used in Header component.
 */
const buttonStyles = css`
  .btn {
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    color: #191919;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 1rem 2rem !important;
    font-size: 1rem;
    line-height: 1rem;
    border-radius: 400rem;
    transition: 0.03s ease-in-out;

    :not(:disabled):not(.disabled) {
      cursor: pointer;
    }

    :hover {
      transform: ${ComponentButtonHoverStateTransform};
    }

    :active {
      transform: ${ComponentButtonActiveStateTransform};
    }

    &.btn-disabled {
      opacity: ${ComponentButtonDisabledOpacity};
    }

    &.btn-small {
      font-size: ${ComponentButtonSmallFontSize};
      height: ${ComponentButtonSmallHeight};
      min-width: ${ComponentButtonSmallMinWidth};
      padding: ${ComponentButtonPaddingYSmall} ${ComponentButtonPaddingXSmall} !important;
    }

    &.btn-medium {
      font-size: ${ComponentButtonMediumFontSize};
      height: ${ComponentButtonMediumHeight};
      min-width: ${ComponentButtonMediumMinWidth};
      padding: ${ComponentButtonPaddingYMedium} ${ComponentButtonPaddingXMedium} !important;
    }

    &.btn-large {
      font-size: ${ComponentButtonLargeFontSize};
      height: ${ComponentButtonLargeHeight};
      min-width: ${ComponentButtonLargeMinWidth};
    }

    &.btn-gold {
      color: ${ComponentButtonGoldColor};
      background-color: ${ComponentButtonGoldBackgroundColor};
    }

    &.btn-maroon {
      color: ${ComponentButtonMaroonColor};
      background-color: ${ComponentButtonMaroonBackgroundColor};
    }

    &.btn-dark {
      color: ${ComponentButtonDarkColor};
      background-color: ${ComponentButtonDarkBackgroundColor};
    }

    &.btn-light {
      color: ${ComponentButtonLightColor};
      background-color: ${ComponentButtonLightBackgroundColor};
    }
  }
`;

export { Button, buttonStyles };
