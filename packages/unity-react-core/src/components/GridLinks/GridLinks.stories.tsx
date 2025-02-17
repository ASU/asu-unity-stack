import React from "react";

import { GridLinks, GridLinksProps } from "./GridLinks";
import { gridLinksNumColumns, gridLinksTextColor } from "./GridLinksConstants";

const gridLinksBgColorClassName = {
  "None": "",
  "Gray 1": "bg-gray-1",
  "Gray 7": "bg-gray-7",
};

export default {
  title: "Components/Grid Links",
  component: GridLinks,
  parameters: {},
  argTypes: {
    bgColor: {
      name: "Background color of the section",
      description:
        "Background color is not applied to the component, but to the section wrapper.",
      options: Object.keys(gridLinksBgColorClassName),
      control: {
        type: "radio",
      },
    },
  },
};

const gridLinkItems = [
  {
    label: "First-year student",
    icon: "fa-university",
    href: "https://example.com",
  },
  {
    label: "Online student",
    icon: "fa-desktop",
    href: "https://example.com",
  },
  {
    label: "Transfer student",
    icon: "fa-lightbulb",
    href: "https://example.com",
  },
  {
    label: "Veteran student",
    icon: "fa-user-graduate",
    href: "https://example.com",
  },
  {
    label: "Graduate student",
    icon: "fa-graduation-cap",
    href: "https://example.com",
  },
  {
    label: "Universal Learner",
    icon: "fa-rocket",
    href: "https://example.com",
  },
  {
    label: "International student",
    icon: "fa-globe-americas",
    href: "https://example.com",
  },
  {
    label: "Non-degree student",
    icon: "fa-users",
    href: "https://example.com",
  },
];

const defaultStoryProps = {
  numColumns: gridLinksNumColumns.TWO_COLUMNS,
  textColor: gridLinksTextColor.NONE,
  gridLinkItems,
  // children: "Content to be displayed",
};

const gridLinksTemplate = ({ bgColor, ...args }) => (
  <section className={gridLinksBgColorClassName[bgColor]}>
    <GridLinks {...(args as GridLinksProps)} />
  </section>
);

export const Overview = {
  render: gridLinksTemplate.bind({}),
  name: "GridLinks",
  args: {
    ...defaultStoryProps,
  },
};
