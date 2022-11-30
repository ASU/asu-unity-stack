import React from "react";

import {
  createComponent,
  createStory,
  layoutNames,
} from "../../../bootstrap4-theme/helpers/wrapper";
import { subdomainConverter } from "../helpers/dataConverter";
import data from "./mock-data";

const extraOptions = {
  fill: {
    name: "Fill",
    control: { type: "boolean" },
    defaultValue: true,
  },
};

export default createComponent(
  "Results Card",
  "Atoms",
  "Templates",
  extraOptions
);

const resultsCard = subdomainConverter(data);

export const resultsCardExample = createStory(
  args => {
    const newProps = {
      ...resultsCard.props,
      ...{ fill: args.fill },
    };
    const profile = {
      ...resultsCard,
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
