import React from "react";
import { SidebarMenu } from "./SidebarMenu";

export default {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
};

const defaultProps = {
  title: "Header",
  links: [
    {
      href: "https://example.com",
      text: "Active Link",
      isActive: true,
    },
    {
      text: "Link 2 dropdown",
      items: [
        {
          href: "https://example.com",
          text: "Link 2.1",
          isActive: false,
        },
        {
          href: "https://example.com",
          text: "Link 2.2",
        },
      ],
    },
    {
      text: "Link 3 Dropdown",
      items: [
        {
          href: "https://example.com",
          text: "Link 3.1",
        },
        {
          href: "https://example.com",
          text: "Link 3.2",
        },
      ],
    },
    {
      href: "https://example.com",
      text: "Link 4",
    },
    {
      text: "Link 5 dropdown",
      items: [
        {
          href: "https://example.com",
          text: "Link 5.1",
        },
        {
          href: "https://example.com",
          text: "Link 5.2",
        },
      ],
    },
  ],
};

const sidebarMenuTemplate = args => (
  <div className="row">
    <SidebarMenu {...args} />
  </div>
);

export const Overview = {
  render: sidebarMenuTemplate.bind({}),
  name: "Sidebar",
  args: {
    ...defaultProps,
  },
};

const defaultProps2 = JSON.parse(JSON.stringify(defaultProps));
defaultProps2.links[0].text = "Link 1";
defaultProps2.links[0].isActive = false;
defaultProps2.links[1].items[0].isActive = true;
defaultProps2.links[1].items[0].text = "Active Link";

export const WithNestedActivePage = {
  render: sidebarMenuTemplate.bind({}),
  args: {
    ...defaultProps2,
  },
};
