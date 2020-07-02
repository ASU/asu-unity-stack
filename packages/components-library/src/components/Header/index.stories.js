/** @jsx h */

import { h } from "preact";
import { withA11y } from "@storybook/addon-a11y";
import { BasicNavTree, NavTreeWithButtons } from "../Nav/NavTreeExample";

import Header from ".";

export default {
  component: Header,
  title: "Header",
  decorators: [withA11y],
};

export const base = () => (
  <Header
    navTree={BasicNavTree}
    title={"Ira A. Fulton Schools of Engineering"}
    subtitle={
      "School of Computing, Informatics, and Decisions Systems Engineering"
    }
  />
);

export const withButtons = () => (
  <Header
    navTree={NavTreeWithButtons}
    title={"Ira A. Fulton Schools of Engineering"}
    subtitle={
      "School of Computing, Informatics, and Decisions Systems Engineering"
    }
  />
);

export const withStub = () => <Header dangerouslyGenerateStub={true} />;
