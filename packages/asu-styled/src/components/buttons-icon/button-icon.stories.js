
import React from 'react';
import ButtonIcon from "./";
import { withA11y } from "@storybook/addon-a11y";

export default {
  component: "ButtonIcon",
  title: "Button Icon",
  decorators: [withA11y],
};

export const basic = () => <ButtonIcon>A button icon</ButtonIcon>;

export const tertiary = () => <ButtonIcon tertiary>A tertiary button </ButtonIcon>;
