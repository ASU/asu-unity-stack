import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { Button } from "../../../components-core/src/components/Button";
import { Pagination } from "../../../components-core/src/components/Pagination";
import { trackGAEvent } from "../core/services/googleAnalytics";
import { SearchResultsList } from "./index.styles";

const ASUSearchResultsList = ({
  results,
  totalResults,
  resultsPerPage,
  currentPage,
  isLoading,
  onPageChange,
  title,
  size,
  summary,
  showNumResults,
  onExpandClick,
  seeAllResultsText,
  fill,
  GASource,
  hidePager,
}) => {
  const [displayResults, setDisplayResults] = useState(1);

  const changePage = page => {
    onPageChange(page);
  };
  useEffect(() => {
    const resultsWithProps = results?.map((profile, idx) => {
      const newProps = {
        ...profile.props,
        ...{ size, fill: fill || false, key: idx, GASource },
      };
      return {
        ...profile,
        ...{ props: newProps },
      };
    });
    setDisplayResults(resultsWithProps);
  }, [results]);

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
      {results && (
        <div className={size}>
          <div
            className={
              size === "micro" ? "results-title-small" : "results-title"
            }
          >
            {title}
          </div>
          {size !== "micro" && showNumResults && (
            <div className="results-found">
              Results found: <span>{totalResults}</span>
            </div>
          )}
          <div className={summary ? "summary" : ""}>{displayResults}</div>
          {size !== "micro" && !summary && !hidePager && (
            <Pagination
              type="default"
              background="white"
              currentPage={currentPage}
              totalPages={Math.ceil(totalResults / resultsPerPage)}
              onChange={(e, action) => changePage(action)}
              showFirstButton
              showLastButton
            />
          )}
          {size !== "micro" && summary && results.length > 0 && (
            <div className="summary-button">
              <Button
                color="maroon"
                label={seeAllResultsText}
                size="small"
                onClick={() => expandClick("See all results from subdomain")}
              />
            </div>
          )}
          {size === "micro" && (
            <div
              className={`micro-options ${
                results.length === 0 ? "push-right" : ""
              }`}
            >
              {results.length > 0 && showNumResults && (
                <span>{totalResults} total results</span>
              )}
              <Button
                color="maroon"
                label={seeAllResultsText}
                size="small"
                onClick={() => expandClick("See all results")}
              />
            </div>
          )}
        </div>
      )}
      {!isLoading && (!results || results.length === 0) && (
        <div className="results-title" />
      )}
    </SearchResultsList>
  );
};

ASUSearchResultsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.element),
  totalResults: PropTypes.number,
  resultsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  isLoading: PropTypes.bool,
  onPageChange: PropTypes.func,
  title: PropTypes.string,
  size: PropTypes.string,
  summary: PropTypes.bool,
  showNumResults: PropTypes.bool,
  onExpandClick: PropTypes.func,
  seeAllResultsText: PropTypes.string,
  fill: PropTypes.bool,
  GASource: PropTypes.string,
  hidePager: PropTypes.bool,
};

export { ASUSearchResultsList };
