/** @jsx h */

import { h } from "preact";
import { withA11y } from "@storybook/addon-a11y";
import navTreeExample from "./NavTreeExample";

import Nav from ".";

export default {
  component: Nav,
  title: "Nav",
  decorators: [withA11y],
};

console.log(navTreeExample);

export const base = () => (
  <Nav navTree={navTreeExample} />
);


