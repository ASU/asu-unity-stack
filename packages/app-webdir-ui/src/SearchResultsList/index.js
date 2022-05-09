import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { Button } from "../../../components-core/src/components/Button";
import { Pagination } from "../../../components-core/src/components/Pagination";
import { trackGAEvent } from "../core/services/googleAnalytics";
import { SearchResultsList } from "./index.styles";
import { perFormSearch } from "../helpers/search";


const ASUSearchResultsList = ({
  searchTerm,
  sort,
  type,
  engineName,
  titleText,
  numResultsText,
  resultsPerPage,
  onExpandClick,
  GASource,
  hidePaginator,
}) => {
  const [results, setResults] = useState(null);
  const [inFlight, setInFlight] = useState(false);

  useEffect(() => {
    perFormSearch().then(res => {

    });
  }, [searchTerm, sort]);

  function expandClick(text) {
    trackGAEvent({
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      section: GASource,
      text,
    });
    onExpandClick();
  }

  return (
    <SearchResultsList>

    </SearchResultsList>
  );
};

ASUSearchResultsList.propTypes = {
  searchTerm: PropTypes.string,
  type: PropTypes.string,
  engineName: PropTypes.string,
  sort: PropTypes.string,
  titleText: PropTypes.string,
  numResultsText: PropTypes.string,
  resultsPerPage: PropTypes.number,
  onExpandClick: PropTypes.number,
  GASource: PropTypes.string,
  hidePaginator: PropTypes.bool,
};

export { ASUSearchResultsList };
