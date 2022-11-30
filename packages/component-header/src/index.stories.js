import React, { useState } from "react";

import { Button } from "./components/Button";
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

const AnimatedTitleTemplate = args => {
  const [animate, setAnimate] = useState(false);

  return (
    <>
      <ASUHeader {...{ ...args, animateTitle: animate }} />
      <div style={{ marginTop: 200, textAlign: "center" }}>
        <Button
          text="Animate Title"
          color="dark"
          onClick={() => setAnimate(prevState => !prevState)}
        />
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  loggedIn: false,
  userName: "",
  navTree: basicNavTree,
  title: "Subdomain name",
  breakpoint: "Lg",
  searchUrl: "https://search.asu.edu/search",
  site: "subdomain",
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
  searchUrl: "https://search.asu.edu/search",
  site: "subdomain",
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
  searchUrl: "https://search.asu.edu/search",
  site: "subdomain",
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
  searchUrl: "https://search.asu.edu/search",
  site: "subdomain",
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
  searchUrl: "https://search.asu.edu/search",
  site: "subdomain",
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
      classes: "custom-class",
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
  searchUrl: "https://search.asu.edu/search",
  site: "subdomain",
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
  searchUrl: "https://search.asu.edu/search",
  site: "subdomain",
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
  searchUrl: "https://search.asu.edu/search",
  site: "subdomain",
};

export const Partner = Template.bind({});
Partner.args = {
  isPartner: true,
  navTree: basicNavTree,
  loggedIn: false,
  userName: "",
  breakpoint: "Xl",
  searchUrl: "https://search.asu.edu/search",
  site: "subdomain",
};

export const AnimatedTitle = AnimatedTitleTemplate.bind({});
AnimatedTitle.args = {
  title: "Subdomain name",
  navTree: basicNavTree,
  loggedIn: false,
  logoutLink: "/caslogout",
  loginLink: "/cas",
  breakpoint: "Xl",
  searchUrl: "https://search.asu.edu/search",
  site: "subdomain",
};
