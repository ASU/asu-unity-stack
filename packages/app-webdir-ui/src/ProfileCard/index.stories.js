import React from "react";

import { defaultDecorator } from "../../../../shared/components/Layout";
import { staffConverter } from "../helpers/dataConverter";
import data from "./mock-data";

const argTypes = {
  size: {
    name: "Size",
    options: ["micro", "small", "large"],
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
  },
};

export default {
  title: "Atoms/ProfileCard/Templates",

  decorators: [defaultDecorator],
  argTypes,
  args: {
    size: "large",
    fill: false,
  },
};

export const profileCardExample = args => {
  const profileCard = staffConverter({
    datum: data,
    options: {
      size: args.size,
      titleMatch: null,
      profileURLBase: null,
      fill: args.fill,
    },
  });

  return (
    <div className="container-fluid">
      <div className="col col-sm-12 p-3">{profileCard}</div>
    </div>
  );
};
