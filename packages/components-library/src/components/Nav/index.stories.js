/** @jsx h */

import { h } from "preact";
import { BasicNavTree, NavTreeWithButtons, NavTreeMega } from "./NavTreeExample";

import Nav from ".";

export default {
  component: Nav,
  title: "Nav"
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

