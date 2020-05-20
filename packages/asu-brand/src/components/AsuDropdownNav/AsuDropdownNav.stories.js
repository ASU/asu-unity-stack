import React from "react";
import AsuDropdownNav from "./index.js";
import { withA11y } from "@storybook/addon-a11y";

const items = [
  {
    text: "Item 0",
    href: "https://asu.edu",
  },
  {
    text: "Item 1",
    href: "https://asu.edu",
  },
  {
    text: "Item 2",
    href: "https://asu.edu",
  },
  {
    text: "Item 3",
    href: "https://asu.edu",
  },
  {
    text: "Item 4",
    href: "https://asu.edu",
  },
  {
    text: "Item 5",
    href: "https://asu.edu",
  },
  {
    text: "Item 6",
    href: "https://asu.edu",
  },
  {
    text: "Item 7",
    href: "https://asu.edu",
  },
  {
    text: "Item 8",
    href: "https://asu.edu",
  },
  {
    text: "Item 9",
    href: "https://asu.edu",
  },
];

export default {
  component: AsuDropdownNav,
  title: "AsuDropdownNav",
  decorators: [withA11y],
};

export const basic = () => (
  <AsuDropdownNav
    {...{
      text: "ASU Home",
      href: "https://asu.edu",
      target: "_blank",
      items: items,
    }}
  />
);
