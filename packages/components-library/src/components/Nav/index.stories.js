/** @jsx h */

import { h } from "preact";
import { withA11y } from "@storybook/addon-a11y";
import { BasicNavTree, NavTreeWithButtons, NavTreeMega } from "./NavTreeExample";

import Nav from ".";

export default {
  component: Nav,
  title: "Nav",
  decorators: [withA11y],
};

export const base = () => <Nav navTree={BasicNavTree} />;

export const mobileOpen = () => (
  <Nav navTree={BasicNavTree} mobileOpen={true} />
);

export const withButtons = () => (
  <Nav navTree={NavTreeWithButtons} mobileOpen={true} />
);

export const withMenuColumns = () => (
  <Nav navTree={NavTreeMega} mobileOpen={true} />
);

