/** @jsx h */

import { h } from "preact";
import { withA11y } from "@storybook/addon-a11y";
import {Input} from ".";

export default {
  component: Input,
  title: "Input",
  decorators: [withA11y],
};

export const base = () => (
  <Input type="checkbox" />
);
