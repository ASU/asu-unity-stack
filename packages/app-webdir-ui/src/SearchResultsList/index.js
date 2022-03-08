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
  onExpandClick,
  fill,
  GASource,
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
      {results && results.length > 0 && (
        <div className={size}>
          <div
            className={
              size === "micro" ? "results-title-small" : "results-title"
            }
          >
            {title}
          </div>
          <div className={summary ? "summary" : ""}>{displayResults}</div>
          {size !== "micro" && !summary && (
            <Pagination
              type="default"
              background="white"
              currentPage={currentPage}
              totalPages={Math.ceil(totalResults / resultsPerPage)}
              onChange={(e, action) => changePage(action)}
            />
          )}
          {size !== "micro" && summary && (
            <div className="summary-button">
              <Button
                color="maroon"
                label="See all results from subdomain"
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
              {results.length > 0 && <span>{totalResults} total results</span>}
              <Button
                color="maroon"
                label="See all results"
                size="small"
                onClick={() => expandClick("See all results")}
              />
            </div>
          )}
        </div>
      )}
      {!isLoading && (!results || results.length === 0) && (
        <div className="results-title">Please try a different search term</div>
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
  onExpandClick: PropTypes.func,
  fill: PropTypes.bool,
  GASource: PropTypes.string,
};

export { ASUSearchResultsList };
