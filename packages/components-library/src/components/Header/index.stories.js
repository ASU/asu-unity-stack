/** @jsx h */
/** @jsxFrag Fragment */

import { h } from "preact";
import {
  BasicNavTree,
  NavTreeWithButtons,
  NavTreeMega,
} from "../Nav/NavTreeExample";

import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";

import { Header } from ".";
import { Fragment } from "preact/compat";
import { AnimatedHeaderTitleExample } from "./examples";

export default {
  component: Header,
  title: "Header",
  decorators: [withKnobs],
};

const buttons = [
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
];

export const base = () => (
  <Fragment>
    <Header
      loggedIn={boolean("loggedIn", false)}
      userName={text("userName", "")}
      navTree={object("navTree", BasicNavTree)}
      title={text(
        "title",
        "School of Computing, Informatics, and Decisions Systems Engineering"
      )}
      parentOrg={text("parentOrg", "Ira A. Fulton Schools of Engineering")}
      parentOrgUrl={text("parentOrgUrl", "https://engineering.asu.edu")}
      breakpoint={text("breakpoint", "Lg")}
    />
    <div style={"width:100%; height:200vh;"} />
  </Fragment>
);

export const breakpointXL = () => (
  <Fragment>
    <Header
      loggedIn={boolean("loggedIn", false)}
      userName={text("userName", "")}
      logoutLink={text("logoutLink", "/caslogout")}
      loginLink={text("loginLink", "/cas")}
      navTree={object("navTree", BasicNavTree)}
      title={text(
        "title",
        "School of Computing, Informatics, and Decisions Systems Engineering"
      )}
      parentOrg={text("parentOrg", "Ira A. Fulton Schools of Engineering")}
      parentOrgUrl={text("parentOrgUrl", "https://engineering.asu.edu")}
      breakpoint={text("breakpoint", "Xl")}
    />
    <div style={"width:100%; height:200vh;"} />
  </Fragment>
);
/*
export const mobile = () => (
  <Fragment>
    <Header />
    <div style={"width:100%; height:200vh;"} />
  </Fragment>
);*/

export const withButtons = () => (
  <Fragment>
    <Header
      navTree={object("navTree", NavTreeWithButtons)}
      title={text("title", "University Technology Office")}
      buttons={object("buttons", buttons)}
      loggedIn={boolean("loggedIn", true)}
      userName={text("userName", "Colton")}
      logoutLink={text("logoutLink", "/caslogout")}
      loginLink={text("loginLink", "/cas")}
    />
    <div style={"width:100%; height:200vh;"} />
  </Fragment>
);

export const withMenuColumns = () => (
  <Fragment>
    <Header
      navTree={object("navTree", NavTreeMega)}
      title={text("title", "Ira A. Fulton Schools of Engineering")}
      parentOrg={text(
        "parentOrg",
        "School of Computing, Informatics, and Decisions Systems Engineering"
      )}
      parentOrgUrl={text("parentOrgUrl", "https://engineering.asu.edu")}
      loggedIn={boolean("loggedIn", true)}
      userName={text("userName", "Sparky")}
      logoutLink={text("logoutLink", "/caslogout")}
      loginLink={text("loginLink", "/cas")}
    />
    <div style={"width:100%; height:200vh;"} />
  </Fragment>
);

export const animatedTitle = () => <AnimatedHeaderTitleExample />;
