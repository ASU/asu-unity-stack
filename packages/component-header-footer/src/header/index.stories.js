import React from "react";

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
  argTypes: {
    renderDiv: {
      control: "select",
      options: ["true", "false"],
      description:
        "Either 'true' or 'false'. If 'true', the header will be rendered as a div instead of a header element.",
    },
  },
};

const disabledText = "Disabled";
const enabledText = "Enabled";

function handlePageUnload(event) {
  event.preventDefault();
  event.returnValue = "";
}

function togglePageUnloadWarning(e) {
  if (e.target.textContent === disabledText) {
    window.addEventListener("beforeunload", handlePageUnload);
    e.target.textContent = enabledText;
  } else {
    window.removeEventListener("beforeunload", handlePageUnload);
    e.target.textContent = disabledText;
  }
}

const Template = args => (
  <>
    <ASUHeader {...args} />
    <div
      id="skip-to-content"
      style={{
        width: "100%",
        height: "200vh",
        background: "#f0f0f0",
        paddingTop: 40,
        marginTop: 140,
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Scroll section to test header scroll behavior{" "}
        {/* This button adds a page unload warning so clicking links will not navigate away. It also serves as a focus test for accessibility. */}
      </h1>
      <div
        style={{
          maxWidth: "1200px",
          width: "calc(100% - 4rem)",
          padding: "2rem",
          textAlign: "center",
          margin: "2rem auto",
        }}
      >
        <h2>Add Page Unload Warning</h2>
        <p>
          This button toggles a page unload warning that prompts the user to
          confirm before leaving the page. This is useful for testing the
          header's behavior when there is a potential for unintentionally
          navigating away from the page.
        </p>
        <p>
          This button also serves as a focusable element for testing
          accessibility.
        </p>
        <p>
          <Button
            color="dark"
            tabIndex={0}
            onClick={togglePageUnloadWarning}
            text={disabledText}
          />
        </p>
      </div>
    </div>
  </>
);

const AnimatedTitleTemplate = args => {
  const handleClick = () => {
    // get curent local storage value
    const titleTimestamp = localStorage.getItem("title_loaded");

    if (titleTimestamp) {
      localStorage.removeItem("title_loaded");
    }

    setTimeout(() => {
      // reload the page with button
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      <ASUHeader {...{ ...args, animateTitle: true }} />
      <div style={{ marginTop: 200, textAlign: "center" }}>
        <Button text="Animate Title" color="dark" onClick={handleClick} />
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  loggedIn: false,
  userName: "",
  navTree: basicNavTree,
  title: "Subdomain name Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  breakpoint: "Lg",
  searchUrl: "https://search.asu.edu/search",
  site: "subdomain",
  renderDiv: "false",
};

export const Empty = Template.bind({});
Empty.args = {};

export const NoNavigation = Template.bind({});
NoNavigation.args = {
  title: "Subdomain name Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  loggedIn: true,
  userName: "Sparky",
  logoutLink: "/caslogout",
  loginLink: "/cas",
  searchUrl: "https://search.asu.edu/search",
  site: "subdomain",
};

export const NoNavigationWithButtons = Template.bind({});
NoNavigationWithButtons.args = {
  title: "Subdomain name Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
  title: "Subdomain name Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
  title: "Subdomain name Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  parentOrg: "Parent unit name",
  parentOrgUrl: "https://engineering.asu.edu",
  breakpoint: "Xl",
  searchUrl: "https://search.asu.edu/search",
  site: "subdomain",
};

export const WithButtons = Template.bind({});
WithButtons.args = {
  navTree: navTreeWithButtons,
  title: "Subdomain name Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
  title: "Subdomain name Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
  title: "Subdomain name Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
  title: "Subdomain name Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  navTree: basicNavTree,
  loggedIn: false,
  logoutLink: "/caslogout",
  loginLink: "/cas",
  breakpoint: "Xl",
  searchUrl: "https://search.asu.edu/search",
  site: "subdomain",
  animateTitle: true,
};
