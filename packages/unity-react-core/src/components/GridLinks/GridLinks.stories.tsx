import React, { FC } from "react";

import { GridLinks, GridLinksProps } from "./GridLinks";
import {
  GridLinksNumColumnsType,
  GridLinksTextColorType,
  GridLinksBgColorType,
  GridLinksBgColorClassName,
} from "./GridLinksConstants";

export default {
  title: "Components/Grid Links",
  component: GridLinks,
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
  numColumns: GridLinksNumColumnsType.TWO_COLUMNS,
  textColor: GridLinksTextColorType.NONE,
  gridLinkItems,
  // children: "Content to be displayed",
  // bgColor is used story section wrapper, not in component.
  bgColor: GridLinksBgColorType.NONE,
};

const defaultBgColor = GridLinksBgColorType.NONE;

const GridLinksTemplate: FC<
  GridLinksProps & { bgColor: GridLinksBgColorType }
> = ({ bgColor = defaultBgColor, ...args }) => (
  <>
    <section className={GridLinksBgColorClassName[bgColor]}>
      <GridLinks {...args} />
    </section>
  </>
);

export const Overview = {
  render: GridLinksTemplate.bind({}),
  name: "GridLinks",
  args: {
    ...defaultStoryProps,
  },
};
