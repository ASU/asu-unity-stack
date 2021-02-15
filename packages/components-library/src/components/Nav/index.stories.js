


import {
  BasicNavTree,
  NavTreeWithButtons,
  NavTreeMega,
} from "./NavTreeExample";

import { Nav } from ".";

export default {
  component: Nav,
  title: "Nav",
};

const buttons = [
  {
    href: "/",
    text: "CTA Button 1",
    color: "gold",
  },
  {
    text: "CTA Button 2",
    href: "#",
    color: "light",
  },
];

export const base = () => <Nav navTree={BasicNavTree} injectStyles={true} />;

export const mobileOpen = () => (
  <Nav navTree={BasicNavTree} mobileOpen={true} injectStyles={true} />
);

export const withButtons = () => (
  <Nav
    navTree={NavTreeWithButtons}
    mobileOpen={true}
    buttons={buttons}
    injectStyles={true}
  />
);

export const withMenuColumns = () => (
  <Nav navTree={NavTreeMega} mobileOpen={true} injectStyles={true} />
);

export const expandOnHover = () => (
  <Nav navTree={NavTreeMega} mobileOpen={true} injectStyles={true} expandOnHover={true} />
);
