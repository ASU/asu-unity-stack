import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { Button } from "../../../components-core/src/components/Button";
import { Pagination } from "../../../components-core/src/components/Pagination";
import { trackGAEvent } from "../core/services/googleAnalytics";
import { performSearch, anonFormatter } from "../helpers/search";
import { SearchMessage } from "../SearchPage/components/SearchMessage";
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
  showSearchMessage,
  seeAllResultsText,
  itemsPerPage,
  onExpandClick,
  GASource,
  setPromotedResult,
  hidePaginator,
  registerResults,
  filters,
  loggedIn,
}) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [subtitle, setSubtitle] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalResults, setTotalResults] = useState(null);
  const [isAnon, setIsAnon] = useState(false);
  const cardSize = type === "micro" ? "micro" : "large";

  const doSearch = (page = currentPage) => {
    if ((term && term.length > 0) || !engine.needsTerm) {
      setIsLoading(true);

      performSearch({ engine, term, page, itemsPerPage, sort, filters })
        .then(res => {
          const formattedResults = engine.formatter(res, cardSize, filters);
          if (registerResults) {
            registerResults(formattedResults.page.total_results);
          }
          setCurrentPage(formattedResults.page.current);
          setTotalResults(formattedResults.page.total_results);
          const resultsWithProps = formattedResults.results.map(
            (profile, idx) => {
              const newProps = {
                ...profile.props,
                ...{ key: idx, GASource },
              };
              return {
                ...profile,
                ...{ props: newProps },
              };
            }
          );
          if (setPromotedResult) {
            setPromotedResult(formattedResults.topResult);
          }
          setResults(resultsWithProps);
          if (showSearchMessage) {
            setSubtitle(
              <SearchMessage
                term={term}
                number={formattedResults.page.total_results}
                loggedIn={loggedIn}
                engine={engine}
              />
            );
          } else {
            // setSubtitle(
            //   `Results found: ${formattedResults.page.total_results}`
            // );
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
        })
        .catch(err => {
          if (err === 403) {
            const anonCards = anonFormatter(
              engine.name,
              itemsPerPage,
              cardSize
            );
            setResults(anonCards.results);
            setCurrentPage(1);
            setTotalResults("unknown");
            setIsLoading(false);
            setIsAnon(true);
          }
        });
    }
  };

  const onPageChange = val => {
    setCurrentPage(val);
    doSearch(val);
  };

  useEffect(() => {
    doSearch();
  }, [term, sort, filters]);

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

  const seeMoreButton = (
    <Button
      color="maroon"
      label={seeAllResultsText}
      size="small"
      onClick={() => expandClick("See all results from subdomain")}
    />
  );

  return (
    <SearchResultsList>
      {!isLoading && (
        <div className={type}>
          {subtitle && type !== "micro" && (
            <div className="message">
              <div className="results-search-message">{subtitle}</div>
            </div>
          )}
          {titleText && (
            <div className={`results-title${type === "micro" ? "-small" : ""}`}>
              {titleText}
            </div>
          )}
          {results.length > 0 && <div className="results-found">{results}</div>}
          {!hidePaginator && !isAnon && (
            <Pagination
              type="default"
              background="white"
              currentPage={currentPage}
              totalPages={Math.ceil(totalResults / itemsPerPage)}
              onChange={(e, action) => onPageChange(action)}
              showFirstButton
              showLastButton
            />
          )}
          {type === "preview" && <div className="summary">{seeMoreButton}</div>}
          {type === "micro" && (
            <div className="summary">
              {subtitle}
              {seeMoreButton}
            </div>
          )}
        </div>
      )}
      {isLoading && <div>Loading...</div>}
    </SearchResultsList>
  );
};

ASUSearchResultsList.propTypes = {
  term: PropTypes.string,
  type: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  engine: PropTypes.object,
  seeAllResultsText: PropTypes.string,
  sort: PropTypes.string,
  titleText: PropTypes.string,
  showSearchMessage: PropTypes.bool,
  itemsPerPage: PropTypes.number,
  onExpandClick: PropTypes.func,
  GASource: PropTypes.string,
  setPromotedResult: PropTypes.func,
  hidePaginator: PropTypes.bool,
  registerResults: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  filters: PropTypes.object,
};

export { ASUSearchResultsList };
