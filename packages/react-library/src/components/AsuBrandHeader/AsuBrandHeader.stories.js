import React from "react";
import AsuBrandHeader from "./index.js";
import AsuHeaderObj from "./AsuBrandHeaderDefaults";
import { withA11y } from "@storybook/addon-a11y";

AsuHeaderObj.siteNav = [
  {
    title: "Home",
    href: "http://www.asu.edu/absolute_path",
  },
  {
    title: "Degree Programs",
    href: "/absolute_path/page",
    items: [
      {
        value: "Item 0",
        href: "https://asu.edu",
      },
      {
        value: "Item 1",
        href: "https://asu.edu",
      },
      {
        value: "Item 2",
        href: "https://asu.edu",
      },
      {
        value: "Item 3",
        href: "https://asu.edu",
      },
      {
        value: "Item 4",
        href: "https://asu.edu",
      },
      {
        value: "Item 5",
        href: "https://asu.edu",
      },
      {
        value: "Item 6",
        href: "https://asu.edu",
      },
      {
        value: "Item 7",
        href: "https://asu.edu",
      },
      {
        value: "Item 8",
        href: "https://asu.edu",
      },
      {
        value: "Item 9",
        href: "https://asu.edu",
      },
    ],
  },
];

AsuHeaderObj.siteTitle = {
  siteTitle: "ASU Custom Site Title",
  siteUrl: "https://asu.edu",
  parentOrg: "ASU Custom Parent Org",
  parentOrgUrl: "https://uto.asu.edu",
};

export default {
  component: AsuBrandHeader,
  title: "AsuBrandHeader",
  decorators: [withA11y],
};

export const basic = () => <AsuBrandHeader {...AsuHeaderObj} />;
