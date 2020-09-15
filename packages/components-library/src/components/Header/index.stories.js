/** @jsx h */

import { h } from "preact";
import {
  BasicNavTree,
  NavTreeWithButtons,
  NavTreeMega,
} from "../Nav/NavTreeExample";

import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";

import { Header } from ".";
import { Fragment } from "preact/compat";

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
      logoutLink={text("logoutLink", "/caslogout")}
      loginLink={text("loginLink", "/cas")}
      navTree={object("navTree", BasicNavTree)}
      title={text(
        "title",
        "School of Computing, Informatics, and Decisions Systems Engineering"
      )}
      unit={text("unit", "Ira A. Fulton Schools of Engineering")}
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

const megaButtons = [
  {
    text: "CTA Button Number One",
    color: "gold",
    href: "https://admissions.asu.edu",
  },
  {
    text: "CTA Button",
    color: "maroon",
    href: "https://asu.edu",
  },
];

export const withMenuColumns = () => (
  <Fragment>
    <Header
      navTree={object("navTree", NavTreeMega)}
      title={text("title", "Ira A. Fulton Schools of Engineering")}
      unit={text(
        "unit",
        "School of Computing, Informatics, and Decisions Systems Engineering"
      )}
      buttons={object("buttons", megaButtons)}
      loggedIn={boolean("loggedIn", true)}
      userName={text("userName", "Colton")}
      logoutLink={text("logoutLink", "/caslogout")}
      loginLink={text("loginLink", "/cas")}
    />
    <div style={"width:100%; height:200vh;"} />
  </Fragment>
);
/*
export const withStub = () => <Header dangerouslyGenerateStub={true} />;*/
