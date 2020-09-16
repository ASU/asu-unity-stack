/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";
import PropTypes from "prop-types";
import {
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
  ComponentButtonMaroonBackgroundColor
} from "../../theme";
import { forwardRef } from "preact/compat";

const Button = forwardRef((props, ref) => {
  const Element = props.type == "link" ? "a" : "button";

  return (
    <Element
      class={cx(
        css`
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
          padding: 1rem 2rem;
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

          ${props.disabled &&
          css`
            opacity: ${ComponentButtonDisabledOpacity};
          `}

          ${props.small &&
          css`
            font-size: ${ComponentButtonSmallFontSize};
            height: ${ComponentButtonSmallHeight};
            min-width: ${ComponentButtonSmallMinWidth};
            padding: ${ComponentButtonPaddingYSmall}
              ${ComponentButtonPaddingXSmall};
          `}

        ${props.medium &&
          css`
            font-size: 0.875rem;
            padding: 0.5rem 1rem;
          `}

        ${props.large &&
          css`
            font-size: ${ComponentButtonLargeFontSize};
            height: ${ComponentButtonLargeHeight};
            min-width: ${ComponentButtonLargeMinWidth};
          `}

        ${props.gold &&
          css`
            color: ${ComponentButtonGoldColor};
            background-color: ${ComponentButtonGoldBackgroundColor};

            :hover {
              color: ${ComponentButtonGoldColor};
            }
          `}

        ${props.maroon &&
          css`
            color: #ffffff;
            background-color: #8c1d40;
            border-color: #8c1d40;

            :visited:not(.btn) {
              color: #ffffff;
            }
          `}

        ${props.dark &&
          css`
            color: ${ComponentButtonDarkColor};
            background-color: ${ComponentButtonDarkBackgroundColor};
          `}

        ${props.light &&
          css`
            color: ${ComponentButtonLightColor};
            background-color: ${ComponentButtonLightBackgroundColor};
          `}
        `,
        props.class
      )}
      onClick={props.onClick}
      href={props.href}
      ref={ref}
    >
      {props.children}
    </Element>
  );
});

Button.propTypes = {
  type: PropTypes.string,
  href: PropTypes.string,
  gold: PropTypes.bool,
  maroon: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  domRef: PropTypes.oneOfType([
    // ref to actual DOM node of nav item
    // https://stackoverflow.com/questions/48007326/what-is-the-correct-proptype-for-a-ref-in-react
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element) }),
  ]),
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
    padding: 1rem 2rem;
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
      padding: ${ComponentButtonPaddingYSmall}
        ${ComponentButtonPaddingXSmall};
    }

    &.btn-medium {
      font-size: ${ComponentButtonMediumFontSize};
      height: ${ComponentButtonMediumHeight};
      min-width: ${ComponentButtonMediumMinWidth};
      padding: ${ComponentButtonPaddingYMedium}
        ${ComponentButtonPaddingXMedium};
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
