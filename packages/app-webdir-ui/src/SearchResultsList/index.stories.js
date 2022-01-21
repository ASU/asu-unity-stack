import React, { useState } from "react";

import { ASUSearchResultsList } from "./index";

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
  "Molecules",
  "Templates",
  extraOptions
);

const numResults = 31;
const resultsPerPage = 6;

const cards = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < numResults; i++) {
  cards.push(staffConverter(data));
}
export const profileCardExample = createStory(
  args => {
    const [currentPage, setCurrentPage] = useState(1);
    const sizedCards = cards.slice().map(profileCard => {
      const newProps = {
        ...profileCard.props,
        ...{ size: args.size, fill: args.fill },
      };
      return {
        ...profileCard,
        ...{ props: newProps },
      };
    });

    return (
      <ASUSearchResultsList
        results={sizedCards}
        totalResults={numResults}
        resultsPerPage={resultsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isLoading={false}
        title="Some title"
        size="large"
      />
    );
  },
  { supportedTemplates: [layoutNames.ONE_COLUMN] }
);
profileCardExample.args = {
  template: 1,
};
