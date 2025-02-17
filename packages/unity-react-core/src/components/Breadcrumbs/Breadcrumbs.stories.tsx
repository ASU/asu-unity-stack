import { Meta } from "@storybook/react";
import React from "react";

import { Breadcrumbs } from "./Breadcrumbs";

const links = [
  {
    label: "Home",
    active: false,
    href: "#",
  },
  {
    label: "Library",
    active: false,
    href: "#",
  },
  {
    label: "Data",
    active: true,
    href: "#",
  },
];

const defaultArgs = {
  linkItems: links,
};

const breadcrumbsTemplate = args => <Breadcrumbs {...args} />;

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  args: defaultArgs,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};

export default meta;

export const Default = {
  render: breadcrumbsTemplate.bind({}),
};

export const AlternateBackground = {
  render: breadcrumbsTemplate.bind({}),
  args: {
    backgroundColor: "bg-gray-7",
  },
};
