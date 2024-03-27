import React from "react";

import { defaultDecorator } from "../../../../shared/components/Layout";
import { subdomainConverter } from "../helpers/dataConverter";
import data from "./mock-data";

const argTypes = {
  fill: {
    name: "Fill",
    control: { type: "boolean" },
  },
};

export default {
  title: "Atoms/Results Card/Templates",
  decorators: [defaultDecorator],
  argTypes,
  args: {
    fill: true,
  },
};
const options = {
  GASource: "Search Results",
  localSection: true,
};

const resultsCard = subdomainConverter({
  datum: data,
  options: { size: "full" },
});

export const resultsCardExample = args => {
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
};
