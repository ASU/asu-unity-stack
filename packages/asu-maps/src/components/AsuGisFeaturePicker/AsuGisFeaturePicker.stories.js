import React from "react";
import { storiesOf } from "@storybook/react";
import AsuGisFeaturePicker from "./index.js";
import { withKnobs, object } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

storiesOf("AsuGisFeaturePicker", module)
  .add("Default", () => <AsuGisFeaturePicker />)
  .add("With Selection", () => <AsuGisFeaturePicker
    selected={object('selected', {"id":618,"name":"Mercado F","lat":-112.06557500040057,"lng":33.45072599973827,"parent":"CampusBuilding_7147_1"})}
  />)
  .addDecorator(withKnobs, withA11y);
