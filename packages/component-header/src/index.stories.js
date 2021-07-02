import React from "react";

import { ASUHeader } from ".";

import {
  basicNavTree,
  navTreeWithButtons,
  navTreeMega,
  mobileNavTree,
} from "./utils/data-mock";

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
  title: "School of Computing, Informatics, and Decisions Systems Engineering",
  parentOrg: "Ira A. Fulton Schools of Engineering",
  parentOrgUrl: "https://engineering.asu.edu",
  breakpoint: "Lg",
};

export const Empty = Template.bind({});
Empty.args = {};

export const BreakpointXL = Template.bind({});
BreakpointXL.args = {
  loggedIn: false,
  userName: "",
  logoutLink: "/caslogout",
  loginLink: "/cas",
  navTree: basicNavTree,
  title: "School of Computing, Informatics, and Decisions Systems Engineering",
  parentOrg: "Ira A. Fulton Schools of Engineering",
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
  title: "School of Computing, Informatics, and Decisions Systems Engineering",
  parentOrg: "Ira A. Fulton Schools of Engineering",
  parentOrgUrl: "https://engineering.asu.edu",
  breakpoint: "Xl",
};

export const WithButtons = Template.bind({});
WithButtons.args = {
  navTree: navTreeWithButtons,
  title: "University Technology Office",
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
  title: "Ira A. Fulton Schools of Engineering",
  parentOrg:
    "School of Computing, Informatics, and Decisions Systems Engineering",
  parentOrgUrl: "https://engineering.asu.edu",
  loggedIn: true,
  userName: "Sparky",
  logoutLink: "/caslogout",
  loginLink: "/cas",
};

export const ExpandOnHover = Template.bind({});
ExpandOnHover.args = {
  navTree: navTreeMega,
  title: "Ira A. Fulton Schools of Engineering",
  parentOrg:
    "School of Computing, Informatics, and Decisions Systems Engineering",
  parentOrgUrl: "https://engineering.asu.edu",
  loggedIn: true,
  userName: "Sparky",
  logoutLink: "/caslogout",
  loginLink: "/cas",
  expandOnHover: true,
};

export const Partner = Template.bind({});
