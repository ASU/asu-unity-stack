import { Button, Pagination } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { searchEngine } from "../helpers/search";
import { SearchResultsList } from "./index.styles";

const ASUSearchResultsList = ({
  searchTerm,
  resultsPerPage,
  title,
  size,
  summary,
  engineName,
  anonymized,
  fill,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(100);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    searchEngine(engineName, searchTerm, currentPage, resultsPerPage).then(
      res => {
        const resultsWithProps = res.results.map((profile, idx) => {
          const newProps = {
            ...profile.props,
            ...{ size, fill: fill || false, key: idx },
          };
          return {
            ...profile,
            ...{ props: newProps },
          };
        });
        setResults(resultsWithProps);
        setTotalResults(res.page.total_results);
        setIsLoading(false);
      }
    );
  }, [searchTerm, currentPage]);
  const goToFaculty = () => 0;

  return (
    <SearchResultsList>
      {results.length > 0 && (
        <div>
          <div
            className={
              size === "micro" ? "results-title-small" : "results-title"
            }
          >
            {title}
          </div>
          <div className={summary ? "summary" : ""}>{results}</div>
          {size !== "micro" && !summary && (
            <Pagination
              type="default"
              background="white"
              currentPage={currentPage}
              totalPages={Math.ceil(totalResults / resultsPerPage)}
              onChange={(e, action) => setCurrentPage(action)}
            />
          )}
          {size !== "micro" && summary && (
            <div className="summary-button">
              <Button
                color="maroon"
                label="See all results from subdomain"
                size="small"
                onClick={() => goToFaculty()}
              />
            </div>
          )}
          {size === "micro" && (
            <div className="micro-options">
              <span>{totalResults} total results</span>
              <Button
                color="maroon"
                label="See all results"
                size="small"
                onClick={() => goToFaculty()}
              />
            </div>
          )}
        </div>
      )}
      {results.length === 0 && !isLoading && (
        <div className="results-title">Please try a different search term</div>
      )}
    </SearchResultsList>
  );
};

ASUSearchResultsList.propTypes = {
  searchTerm: PropTypes.string,
  resultsPerPage: PropTypes.number,
  title: PropTypes.string,
  size: PropTypes.string,
  summary: PropTypes.bool,
  engineName: PropTypes.string,
  anonymized: PropTypes.bool,
  fill: PropTypes.bool,
};

export { ASUSearchResultsList };
