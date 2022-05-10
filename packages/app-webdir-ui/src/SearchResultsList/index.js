import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { Button } from "../../../components-core/src/components/Button";
import { Pagination } from "../../../components-core/src/components/Pagination";
import { trackGAEvent } from "../core/services/googleAnalytics";
import { SearchResultsList } from "./index.styles";

/*
  'type' must be 'micro', 'preview', or 'full'.
*/
const ASUSearchResultsList = ({
  term,
  sort,
  type,
  engine,
  titleText,
  numResultsText,
  seeAllResultsText,
  itemsPerPage,
  onExpandClick,
  GASource,
  hidePaginator,
}) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [subtitle, setSubtitle] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalResults, setTotalResults] = useState(null);
  const cardSize = type === "micro" ? "micro" : "large";

  useEffect(() => {
    if(term && term.length > 0) {
      setIsLoading(true);

      performSearch({engine, term, page: currentPage, itemsPerPage, sort}).then(results => {
        const formattedResults = engine.formatter(results, cardSize)
        setCurrentPage(formattedResults.page.current);
        setTotalResults(formattedResults.page.total_results);
        const resultsWithProps = formattedResults.results.map((profile, idx) => {
          const newProps = {
            ...profile.props,
            ...{ key: idx, GASource },
          };
          return {
            ...profile,
            ...{ props: newProps },
          };
        });
        setResults(resultsWithProps);
        if(numResultsText) {
          setSubtitle(numResultsText.replace('{totalResults}', formattedResults.page.total_results));
        }
        setIsLoading(false);
        trackGAEvent({
          event: "search",
          action: "type",
          name: "onenter",
          type: "search asu.edu",
          section: "search",
          text: term,
        });
      });
    }
  }, [term, sort]);

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
      <div className={type}>
        <div
          className={
            type === "micro" ? "results-title-small" : "results-title"
          }
        >
          {titleText}
        </div>
        {subtitle && (<div>{subtitle}</div>)}
        {!isLoading && results.length > 0 && (<div>{results}</div>)}
        {!isLoading && results.length === 0 && (<div></div>)}
        {!hidePaginator && (
          <Pagination
            type="default"
            background="white"
            currentPage={currentPage}
            totalPages={Math.ceil(totalResults / itemsPerPage)}
            onChange={(e, action) => changePage(action)}
            showFirstButton
            showLastButton
          /> )
        }
        {type !== "full" && (
          <Button
            color="maroon"
            label={seeAllResultsText}
            size="small"
            onClick={() => expandClick("See all results from subdomain")}
          />
        )}
      </div>
    </SearchResultsList>
  );
};

ASUSearchResultsList.propTypes = {
  term: PropTypes.string,
  type: PropTypes.string,
  engineName: PropTypes.string,
  sort: PropTypes.string,
  titleText: PropTypes.string,
  numResultsText: PropTypes.string,
  itemsPerPage: PropTypes.number,
  onExpandClick: PropTypes.func,
  GASource: PropTypes.string,
  hidePaginator: PropTypes.bool,
};

export { ASUSearchResultsList };
