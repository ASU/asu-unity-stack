import React from "react";

import {
  basicNavTree,
  navTreeWithButtons,
  navTreeMega,
  mobileNavTree,
} from "./core/utils";
import { ASUHeader } from "./header";

export default {
  title: "UDS/ASU Header",
  component: ASUHeader,
};

const Template = args => (
  <>
    <ASUHeader {...args} />
    <div
      style={{
        width: "100%",
        height: "200vh",
        background: "#f0f0f0",
        paddingTop: 40,
        marginTop: 140,
      }}
    >
      <h1 style={{ textAlign: "center", fontFamily: "Arial" }}>
        Scroll section
      </h1>
    </div>
  </>
);

export const Default = Template.bind({});
Default.args = {
  loggedIn: false,
  userName: "",
  navTree: basicNavTree,
  title: "Subdomain name",
  breakpoint: "Lg",
};

export const Empty = Template.bind({});
Empty.args = {};

export const NoNavigation = Template.bind({});
NoNavigation.args = {
  title: "Subdomain name",
  loggedIn: true,
  userName: "Sparky",
  logoutLink: "/caslogout",
  loginLink: "/cas",
};

export const NoNavigationWithButtons = Template.bind({});
NoNavigationWithButtons.args = {
  title: "Subdomain name",
  buttons: [
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
  ],
  loggedIn: true,
  userName: "Sparky",
  logoutLink: "/caslogout",
  loginLink: "/cas",
};

export const BreakpointXL = Template.bind({});
BreakpointXL.args = {
  loggedIn: false,
  userName: "",
  logoutLink: "/caslogout",
  loginLink: "/cas",
  navTree: basicNavTree,
  title: "Subdomain name",
  parentOrg: "Parent unit name",
  parentOrgUrl: "https://engineering.asu.edu",
  breakpoint: "Xl",
};

export const WithMobileNavTree = Template.bind({});
WithMobileNavTree.args = {
  loggedIn: false,
  userName: "",
  logoutLink: "/caslogout",
  loginLink: "/cas",
  navTree: basicNavTree,
  mobileNavTree,
  title: "Subdomain name",
  parentOrg: "Parent unit name",
  parentOrgUrl: "https://engineering.asu.edu",
  breakpoint: "Xl",
};

export const WithButtons = Template.bind({});
WithButtons.args = {
  navTree: navTreeWithButtons,
  title: "Subdomain name",
  buttons: [
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
  ],
  loggedIn: true,
  userName: "Sparky",
  logoutLink: "/caslogout",
  loginLink: "/cas",
};

export const WithMenuColumns = Template.bind({});
WithMenuColumns.args = {
  navTree: navTreeMega,
  title: "Subdomain name",
  parentOrg: "Parent unit name",
  parentOrgUrl: "https://engineering.asu.edu",
  loggedIn: true,
  userName: "Sparky",
  logoutLink: "/caslogout",
  loginLink: "/cas",
};

export const ExpandOnHover = Template.bind({});
ExpandOnHover.args = {
  navTree: navTreeMega,
  title: "Subdomain name",
  parentOrg: "Parent unit name",
  parentOrgUrl: "https://engineering.asu.edu",
  loggedIn: true,
  userName: "Sparky",
  logoutLink: "/caslogout",
  loginLink: "/cas",
  expandOnHover: true,
};

export const Partner = Template.bind({});
Partner.args = {
  isPartner: true,
  navTree: basicNavTree,
  loggedIn: false,
  userName: "",
  breakpoint: "Lg",
};
