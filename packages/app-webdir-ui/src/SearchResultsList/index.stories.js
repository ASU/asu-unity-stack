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
  summary: {
    name: "Summary",
    control: { type: "boolean" },
    defaultValue: false,
  },
};

export default createComponent(
  "SearchResultsList",
  "Molecules",
  "Templates",
  extraOptions
);

const numResults = 31;

const cards = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < numResults; i++) {
  cards.push(staffConverter(data));
}
export const profileCardExample = createStory(
  args => {
    const resultsPerPage = args.size === "micro" ? 3 : 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [results, setResults] = useState(cards.slice(0, resultsPerPage));

    const changePage = newPage => {
      setCurrentPage(newPage);
      const startingCard = (newPage - 1) * resultsPerPage;
      const newResults = cards.slice(
        startingCard,
        startingCard + resultsPerPage
      );

      setResults(newResults);
    };

    const sizedCards = results.map(profileCard => {
      const newProps = {
        ...profileCard.props,
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
        onPageChange={changePage}
        isLoading={false}
        title="Some title"
        size={args.size}
        fill={args.fill}
        summary={args.summary}
      />
    );
  },
  { supportedTemplates: [layoutNames.ONE_COLUMN] }
);
profileCardExample.args = {
  template: 1,
};
