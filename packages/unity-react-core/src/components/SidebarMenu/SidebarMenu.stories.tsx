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
    }
  ]
}

const sidebarMenuTemplate = args => <div className="row">
<SidebarMenu {...args} />
</div>;

export const Overview = {
  render: sidebarMenuTemplate.bind({}),
  name: "Sidebar",
  args: {
    ...defaultProps,
  }
};
