import React from "react";
import { storiesOf } from "@storybook/react";
import Example from "./Example";
import { withKnobs, boolean, text, number } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";


storiesOf("Example", module)
  .add("Default", () => (
    <Example />
  ))
  .addDecorator(withKnobs, withA11y);

  // TODO .add() variants and their props...
