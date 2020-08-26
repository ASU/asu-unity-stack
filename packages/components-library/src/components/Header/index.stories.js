/** @jsx h */

import { h } from "preact";
import {
  BasicNavTree,
  NavTreeWithButtons,
  NavTreeMega,
} from "../Nav/NavTreeExample";

import { Header } from ".";
import { Fragment } from "preact/compat";

export default {
  component: Header,
  title: "Header",
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
      navTree={BasicNavTree}
      title={
        "School of Computing, Informatics, and Decisions Systems Engineering"
      }
      unit={"Ira A. Fulton Schools of Engineering"}
    />
    <div style={"background-color:#8c1e40; width:100%; height:200vh;"} />
  </Fragment>
);

export const mobile = () => (
  <Fragment>
    <Header />
    <div style={"background-color:#8c1e40; width:100%; height:200vh;"} />
  </Fragment>
);

export const withButtons = () => (
  <Fragment>
    <Header
      navTree={NavTreeWithButtons}
      title={"University Technology Office"}
      buttons={buttons}
    />
    <div style={"background-color:#8c1e40; width:100%; height:200vh;"} />
  </Fragment>
);

const megaButtons = [
  {
    text: "Apply Now",
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
      navTree={NavTreeMega}
      title={"Ira A. Fulton Schools of Engineering"}
      unit={
        "School of Computing, Informatics, and Decisions Systems Engineering"
      }
      buttons={megaButtons}
    />
    <div style={"background-color:#8c1e40; width:100%; height:200vh;"} />
  </Fragment>
);

export const withStub = () => <Header dangerouslyGenerateStub={true} />;
