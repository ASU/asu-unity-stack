/** @jsx h */

import { h } from "preact";
import styled, { css } from "styled-components";
import { Component } from "../../theme";

const Button = styled.button`
  background-origin: ${Component.button["background-origin"].value};
  background-position: ${Component.button["background-position"].value};
  background-repeat: ${Component.button["background-repeat"].value};
  border-radius: ${Component.button["border-radius"].value};
  display: ${Component.button["display"].value};
  font-weight: ${Component.button["font-weight"].value};
  line-height: ${Component.button["line-height"].value};
  max-width: ${Component.button["max-width"].value};
  padding: ${Component.button["padding"].value};
  text-align: ${Component.button["text-align"].value};

  ${props =>
    props.disabled &&
    css`
      opacity: ${Component.button.disabled.opacity.value};
    `};

  ${props =>
    props.small &&
    css`
      font-size: ${Component.button.small["font-size"].value};
      height: ${Component.button.small["height"].value};
      min-width: ${Component.button.small["min-width"].value};
    `};

  ${props =>
    props.medium &&
    css`
      font-size: ${Component.button.medium["font-size"].value};
      height: ${Component.button.medium["height"].value};
      min-width: ${Component.button.medium["min-width"].value};
    `};

  ${props =>
    props.large &&
    css`
      font-size: ${Component.button.large["font-size"].value};
      height: ${Component.button.large["height"].value};
      min-width: ${Component.button.large["min-width"].value};
    `};

  ${props =>
    props.gold &&
    css`
      color: ${Component.button.gold.color.value};
      background-color: ${Component.button.gold["background-color"].value};
    `};

  ${props =>
    props.maroon &&
    css`
      color: ${Component.button.maroon.color.value};
      background-color: ${Component.button.maroon["background-color"].value};
    `};

  ${props =>
    props.dark &&
    css`
      color: ${Component.button.dark.color.value};
      background-color: ${Component.button.dark["background-color"].value};
    `};

  ${props =>
    props.light &&
    css`
      color: ${Component.button.light.color.value};
      background-color: ${Component.button.light["background-color"].value};
    `};


`;

export default Button;
