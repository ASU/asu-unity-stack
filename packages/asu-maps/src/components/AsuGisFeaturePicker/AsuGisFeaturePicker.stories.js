import React from "react";
import { storiesOf } from "@storybook/react";
import AsuGisFeaturePicker from "./index.js";
import { withKnobs, boolean, text, number } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

storiesOf("AsuGisFeaturePicker", module)
  .add("Default", () => <AsuGisFeaturePicker />)
  .addDecorator(withKnobs, withA11y);
