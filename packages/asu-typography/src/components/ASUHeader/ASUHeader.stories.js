import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text, number } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

import bootstrap from "asu-web-standards-bootstrap4/dist/css/bootstrap-asu.min.module.css";

import { ASUHeaderOne, ASUHeaderTwo, ASUHeaderThree, ASUHeaderFour, ASUHeaderFive } from "./ASUHeader";

storiesOf("ASU Typography", module)
  .add("ASU Headings", () => (
    <div className={bootstrap.container}>
        <ASUHeaderOne>Heading 1 mobile</ASUHeaderOne>
        <ASUHeaderTwo>ASU Heading Two</ASUHeaderTwo>
        <ASUHeaderThree>ASU Heading Three</ASUHeaderThree>
        <ASUHeaderFour>ASU Heading Four</ASUHeaderFour>
        <ASUHeaderFive>ASU Heading Five</ASUHeaderFive>
    </div>
  ))
  .add("ASU Headings - Highlighted", () => (
    <div className={bootstrap.container}>
        <ASUHeaderOne highlight={"gold"}>Heading 1 mobile</ASUHeaderOne>
        <ASUHeaderTwo highlight={"black"}>ASU Heading Two</ASUHeaderTwo>
        <ASUHeaderThree highlight={"gold"}>ASU Heading Three</ASUHeaderThree>
        <ASUHeaderFour highlight={"black"}>ASU Heading Four</ASUHeaderFour>
        <ASUHeaderFive highlight={"gold"}>ASU Heading Five</ASUHeaderFive>
    </div>
  ))
  .addDecorator(withKnobs, withA11y);
