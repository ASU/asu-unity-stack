/** @jsx h */

import { h } from "preact";
import { withA11y } from "@storybook/addon-a11y";
import {
  BasicNavTree,
  NavTreeWithButtons,
  NavTreeMega,
} from "../Nav/NavTreeExample";

import Header from ".";
import { Fragment } from "react";

export default {
  component: Header,
  title: "Header",
  decorators: [withA11y],
};

export const base = () => (
  <Fragment>
    <Header
      navTree={BasicNavTree}
      title={"Ira A. Fulton Schools of Engineering"}
      subtitle={
        "School of Computing, Informatics, and Decisions Systems Engineering"
      }
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
      title={"Ira A. Fulton Schools of Engineering"}
      subtitle={
        "School of Computing, Informatics, and Decisions Systems Engineering"
      }
    />
    <div style={"background-color:#8c1e40; width:100%; height:200vh;"} />
  </Fragment>

);

export const withMenuColumns = () => (
  <Fragment>
    <Header
      navTree={NavTreeMega}
      title={"Ira A. Fulton Schools of Engineering"}
      subtitle={
        "School of Computing, Informatics, and Decisions Systems Engineering"
      }

    />
    <div style={"background-color:#8c1e40; width:100%; height:200vh;"} />
  </Fragment>
);

export const withStub = () => <Header dangerouslyGenerateStub={true} />;
