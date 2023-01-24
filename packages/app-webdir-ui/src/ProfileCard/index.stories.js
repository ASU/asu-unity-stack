import React from "react";

import {
  createComponent,
  createStory,
  layoutNames,
} from "../../../bootstrap4-theme/helpers/wrapper";
import { staffConverter } from "../helpers/dataConverter";
import data from "./mock-data";

const extraOptions = {
  size: {
    name: "Size",
    options: ["micro", "small", "large"],
    defaultValue: "large",
    control: {
      type: "radio",
      labels: {
        micro: "Micro",
        small: "Small",
        large: "Large",
      },
    },
  },
  fill: {
    name: "Fill",
    control: { type: "boolean" },
    defaultValue: false,
  },
};

export default createComponent(
  "ProfileCard",
  "Atoms",
  "Templates",
  extraOptions
);

export const profileCardExample = createStory(
  args => {
    const profileCard = staffConverter(data, {
      size: args.size,
      titleMatch: null,
      profileURLBase: null,
      fill: args.fill,
    });

    return (
      <div className="container-fluid">
        <div className="col col-sm-12 p-3">{profileCard}</div>
      </div>
    );
  },
  { supportedTemplates: [layoutNames.ONE_COLUMN] }
);
