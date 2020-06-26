/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { css } from "emotion";
import Tokens from "../../theme";

const buttonStyles = props => css`
  background-origin: ${Tokens.ComponentButtonBackgroundOrigin};
  background-position: ${Tokens.ComponentButtonBackgroundPosition};
  background-repeat: ${Tokens.ComponentButtonBackgroundRepeat};
  border-radius: ${Tokens.ComponentButtonBorderRadius};
  display: ${Tokens.ComponentButtonDisplay};
  font-weight: ${Tokens.ComponentButtonFontWeight};
  line-height: ${Tokens.ComponentButtonLineHeight};
  text-decoration: ${Tokens.ComponentButtonTextDecoration};
  max-width: ${Tokens.ComponentButtonMaxWidth};
  padding: ${Tokens.ComponentButtonPaddingY} ${Tokens.ComponentButtonPaddingX};
  text-align: ${Tokens.ComponentButtonTextAlign};
  border: 1px solid transparent;

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
  };

  ${
    props.small &&
    css`
      font-size: ${Tokens.ComponentButtonSmallFontSize};
      height: ${Tokens.ComponentButtonSmallHeight};
      min-width: ${Tokens.ComponentButtonSmallMinWidth};
      padding: ${Tokens.ComponentButtonPaddingYSmall} ${Tokens.ComponentButtonPaddingXSmall};
    `
  };

  ${
    props.medium &&
    css`
      font-size: ${Tokens.ComponentButtonMediumFontSize};
      height: ${Tokens.ComponentButtonMediumHeight};
      min-width: ${Tokens.ComponentButtonMediumMinWidth};
      padding: ${Tokens.ComponentButtonPaddingYMedium} ${Tokens.ComponentButtonPaddingXMedium};

    `
  };

  ${
    props.large &&
    css`
      font-size: ${Tokens.ComponentButtonLargeFontSize};
      height: ${Tokens.ComponentButtonLargeHeight};
      min-width: ${Tokens.ComponentButtonLargeMinWidth};
    `
  };

  ${
    props.gold &&
    css`
      color: ${Tokens.ComponentButtonGoldColor};
      background-color: ${Tokens.ComponentButtonGoldBackgroundColor};
    `
  };

  ${
    props.maroon &&
    css`
      color: ${Tokens.ComponentButtonMaroonColor};
      background-color: ${Tokens.ComponentButtonMaroonBackgroundColor};
    `
  };

  ${
    props.dark &&
    css`
      color: ${Tokens.ComponentButtonDarkColor};
      background-color: ${Tokens.ComponentButtonDarkBackgroundColor};
    `
  };

  ${
    props.light &&
    css`
      color: ${Tokens.ComponentButtonLightColor};
      background-color: ${Tokens.ComponentButtonLightBackgroundColor};
    `
  };
`;

const Button = props => {
  return (
    <button
      className={css`
        ${buttonStyles(props)};
      `}
    >
      {props.children}
    </button>
  );
};

const ButtonLink = props => {
  return (
    <a
      className={css`
        ${buttonStyles(props)};
      `}
    >
      {props.children}
    </a>
  );
};

export { Button, ButtonLink };
