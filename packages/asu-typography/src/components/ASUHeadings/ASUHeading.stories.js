import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

import { ASUHeadingOne, ASUHeadingTwo, ASUHeadingThree, ASUHeadingFour, ASUHeadingFive } from "./ASUHeading";

const highlightColors = {
  White: 'white',
  Gold: 'gold',
  Black: 'black'
};

storiesOf("ASU Typography", module)
  .add("ASU Headings", () => (
    <div>
          <ASUHeadingOne>{text("h1", "Heading 1")}</ASUHeadingOne>
          <ASUHeadingTwo>{text("h2", "Heading 2")}</ASUHeadingTwo>
          <ASUHeadingThree>{text("h3", "Heading 3")}</ASUHeadingThree>
          <ASUHeadingFour>{text("h4", "Heading 4")}</ASUHeadingFour>
          <ASUHeadingFive>{text("h5", "Heading 5")}</ASUHeadingFive>
    </div>
  ))
  .add("ASU Headings - Highlighted", () => (
    <div>
        <ASUHeadingOne highlight={select("h1 Highlight", highlightColors, 'gold', "Heading 1")}>{text("h1", "Heading 1", "Heading 1")}</ASUHeadingOne>
        <ASUHeadingTwo highlight={select("h2 Highlight", highlightColors, 'black', "Heading 2")}>{text("h2", "Heading 2", "Heading 2")}</ASUHeadingTwo>
        <ASUHeadingThree highlight={select("h3 Highlight", highlightColors, 'gold', "Heading 3")}>{text("h3", "Heading 3", "Heading 3")}</ASUHeadingThree>
        <ASUHeadingFour highlight={select("h4 Highlight", highlightColors, 'black', "Heading 4")}>{text("h4", "Heading 4", "Heading 4")}</ASUHeadingFour>
        <ASUHeadingFive highlight={select("h5 Highlight", highlightColors, 'gold', "Heading 5")}>{text("h5", "Heading 5", "Heading 5")}</ASUHeadingFive>
    </div>
  ))
  .addDecorator(withKnobs, withA11y);
