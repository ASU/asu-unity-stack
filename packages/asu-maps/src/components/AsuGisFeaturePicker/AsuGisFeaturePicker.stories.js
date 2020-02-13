import React from "react";

import AsuGisFeaturePicker from "./index.js";
import { withKnobs, object } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

export default {
  component: AsuGisFeaturePicker,
  title: "AsuGisFeaturePicker",
  decorators: [withA11y, withKnobs]
};

export const basic = () => <AsuGisFeaturePicker />;

export const withSelection = () => (
  <AsuGisFeaturePicker
    selected={object("selected", {
      id: 618,
      name: "Mercado F",
      lat: -112.06557500040057,
      lng: 33.45072599973827,
      parent: "CampusBuilding_7147_1"
    })}
  />
);
