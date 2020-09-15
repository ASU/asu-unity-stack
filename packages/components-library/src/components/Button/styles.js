/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { cx, css } from "emotion";
import PropTypes from "prop-types";
import Tokens from "../../theme";
import {forwardRef} from "preact/compat";


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
          transform: ${Tokens.ComponentButtonHoverStateTransform};
        }

        :active {
          transform: ${Tokens.ComponentButtonActiveStateTransform};
        }

        ${
          props.disabled &&
          css`
            opacity: ${Tokens.ComponentButtonDisabledOpacity};
          `
        }

        ${
          props.small &&
          css`
            font-size: ${Tokens.ComponentButtonSmallFontSize};
            height: ${Tokens.ComponentButtonSmallHeight};
            min-width: ${Tokens.ComponentButtonSmallMinWidth};
            padding: ${Tokens.ComponentButtonPaddingYSmall}
              ${Tokens.ComponentButtonPaddingXSmall};
          `
        }

        ${
          props.medium &&
          css`
            font-size: 0.875rem;
            padding: 0.5rem 1rem;
          `
        }

        ${
          props.large &&
          css`
            font-size: ${Tokens.ComponentButtonLargeFontSize};
            height: ${Tokens.ComponentButtonLargeHeight};
            min-width: ${Tokens.ComponentButtonLargeMinWidth};
          `
        }

        ${
          props.gold &&
          css`
            color: ${Tokens.ComponentButtonGoldColor};
            background-color: ${Tokens.ComponentButtonGoldBackgroundColor};

            :hover {
              color: ${Tokens.ComponentButtonGoldColor};
            }
          `
        }

        ${
          props.maroon &&
          css`
            color: #ffffff;
            background-color: #8c1d40;
            border-color: #8c1d40;

            :visited:not(.btn) {
              color: #ffffff;
            }
          `
        }

        ${
          props.dark &&
          css`
            color: ${Tokens.ComponentButtonDarkColor};
            background-color: ${Tokens.ComponentButtonDarkBackgroundColor};
          `
        }

        ${
          props.light &&
          css`
            color: ${Tokens.ComponentButtonLightColor};
            background-color: ${Tokens.ComponentButtonLightBackgroundColor};
          `
        }
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
  onFocus: PropTypes.func
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
      transform: ${Tokens.ComponentButtonHoverStateTransform};
    }

    :active {
      transform: ${Tokens.ComponentButtonActiveStateTransform};
    }

    &.btn-disabled {
      opacity: ${Tokens.ComponentButtonDisabledOpacity};
    }

    &.btn-small {
      font-size: ${Tokens.ComponentButtonSmallFontSize};
      height: ${Tokens.ComponentButtonSmallHeight};
      min-width: ${Tokens.ComponentButtonSmallMinWidth};
      padding: ${Tokens.ComponentButtonPaddingYSmall}
        ${Tokens.ComponentButtonPaddingXSmall};
    }

    &.btn-medium {
      font-size: ${Tokens.ComponentButtonMediumFontSize};
      height: ${Tokens.ComponentButtonMediumHeight};
      min-width: ${Tokens.ComponentButtonMediumMinWidth};
      padding: ${Tokens.ComponentButtonPaddingYMedium}
        ${Tokens.ComponentButtonPaddingXMedium};
    }

    &.btn-large {
      font-size: ${Tokens.ComponentButtonLargeFontSize};
      height: ${Tokens.ComponentButtonLargeHeight};
      min-width: ${Tokens.ComponentButtonLargeMinWidth};
    }

    &.btn-gold {
      color: ${Tokens.ComponentButtonGoldColor};
      background-color: ${Tokens.ComponentButtonGoldBackgroundColor};
    }

    &.btn-maroon {
      color: ${Tokens.ComponentButtonMaroonColor};
      background-color: ${Tokens.ComponentButtonMaroonBackgroundColor};
    }

    &.btn-dark {
      color: ${Tokens.ComponentButtonDarkColor};
      background-color: ${Tokens.ComponentButtonDarkBackgroundColor};
    }

    &.btn-light {
      color: ${Tokens.ComponentButtonLightColor};
      background-color: ${Tokens.ComponentButtonLightBackgroundColor};
    }
  }
`;


export { Button, buttonStyles };
