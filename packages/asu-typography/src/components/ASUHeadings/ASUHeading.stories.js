import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text, number } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

import { ASUHeadingOne, ASUHeadingTwo, ASUHeadingThree, ASUHeadingFour, ASUHeadingFive } from "./ASUHeading";

storiesOf("ASU Typography", module)
  .add("ASU Headings", () => (
    <div>
        <ASUHeadingOne>Heading 1 mobile</ASUHeadingOne>
        <ASUHeadingTwo>ASU Heading Two</ASUHeadingTwo>
        <ASUHeadingThree>ASU Heading Three</ASUHeadingThree>
        <ASUHeadingFour>ASU Heading Four</ASUHeadingFour>
        <ASUHeadingFive>ASU Heading Five</ASUHeadingFive>
    </div>
  ))
  .add("ASU Headings - Highlighted", () => (
    <div>
        <ASUHeadingOne highlight={"gold"}>Heading 1 mobile</ASUHeadingOne>
        <ASUHeadingTwo highlight={"black"}>ASU Heading Two</ASUHeadingTwo>
        <ASUHeadingThree highlight={"gold"}>ASU Heading Three</ASUHeadingThree>
        <ASUHeadingFour highlight={"black"}>ASU Heading Four</ASUHeadingFour>
        <ASUHeadingFive highlight={"gold"}>ASU Heading Five</ASUHeadingFive>
    </div>
  ))
  .addDecorator(withKnobs, withA11y);
