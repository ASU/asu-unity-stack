/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { css } from "emotion";
import Tokens from "../../theme";

const buttonStyles = (props) => css`
  background-origin: ${Tokens.ComponentButtonBackgroundOrigin};
  background-position: ${Tokens.ComponentButtonBackgroundPosition};
  background-repeat: ${Tokens.ComponentButtonBackgroundRepeat};
  border-radius: ${Tokens.ComponentButtonBorderRadius};
  display: ${Tokens.ComponentButtonDisplay};
  font-weight: ${Tokens.ComponentButtonFontWeight};
  line-height: ${Tokens.ComponentButtonLineHeight};
  max-width: ${Tokens.ComponentButtonMaxWidth};
  padding: ${Tokens.ComponentButtonPadding};
  text-align: ${Tokens.ComponentButtonTextAlign};

  ${props.disabled &&
    css`
      opacity: ${Tokens.ComponentButtonDisabledOpacity};
    `};

  ${props.small &&
    css`
      font-size: ${Tokens.ComponentButtonSmallFontSize};
      height: ${Tokens.ComponenButtonSmallHeight};
      min-width: ${Tokens.ComponentButtonSmallMinWidth};
    `};

  ${props.medium &&
    css`
      font-size: ${Tokens.ComponentButtonMediumFontSize};
      height: ${Tokens.ComponentButtonMediumHeight};
      min-width: ${Tokens.ComponentButtonMediumMinWidth};
    `};

  ${props.large &&
    css`
      font-size: ${Tokens.ComponentButtonLargeFontSize};
      height: ${Tokens.ComponentButtonLargeHeight};
      min-width: ${Tokens.ComponentButtonLargeMinWidth};
    `};

  ${props.gold &&
    css`
      color: ${Tokens.ComponentButtonGoldColor};
      background-color: ${Tokens.ComponentButtonGoldBackgroundColor};
    `};

  ${props.maroon &&
    css`
      color: ${Tokens.ComponentButtonMaroonColor};
      background-color: ${Tokens.ComponentButtonDarkBackgroundColor};
    `};

  ${props.dark &&
    css`
      color: ${Tokens.ComponentButtonDarkColor};
      background-color: ${Tokens.ComponentButtonDarkBackgroundColor};
    `};

  ${props.light &&
    css`
      color: ${Tokens.ComponentButtonLightColor};
      background-color: ${Tokens.ComponentButtonLightBackgroundColor};
    `};
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
