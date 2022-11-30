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

const profileCard = staffConverter(data);

export const profileCardExample = createStory(
  args => {
    const newProps = {
      ...profileCard.props,
      ...{ size: args.size, fill: args.fill },
    };
    const profile = {
      ...profileCard,
      ...{ props: newProps },
    };
    return (
      <div className="container-fluid">
        <div className="col col-sm-12 p-3">{profile}</div>
      </div>
    );
  },
  { supportedTemplates: [layoutNames.ONE_COLUMN] }
);
