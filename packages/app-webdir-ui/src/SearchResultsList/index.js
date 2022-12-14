import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { Button } from "../../../components-core/src/components/Button";
import { Pagination } from "../../../components-core/src/components/Pagination";
import { trackGAEvent } from "../core/services/googleAnalytics";
import {
  performSearch,
  anonFormatter,
  filterOutResults,
} from "../helpers/search";
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
  profilesToFilterOut,
  display,
  appPathFolder,
  localSection,
}) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [subtitle, setSubtitle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(null);
  const [isAnon, setIsAnon] = useState(false);
  const cardSize = type === "micro" ? "micro" : "large";

  const doSearch = (page = currentPage) => {
    if ((term && term.length > 0) || !engine.needsTerm) {
      setIsLoading(true);
      performSearch({
        engine,
        term,
        page,
        itemsPerPage,
        sort,
        filters,
        display,
      })
        .then(res => {
          let filteredResults = res;
          if (sort === "employee_weight" && engine?.name === "people_in_dept") {
            filteredResults.results = filteredResults.results.filter(result => {
              return Object.keys(result).length > 1;
            });
          }
          if (profilesToFilterOut) {
            filteredResults = filterOutResults(res, profilesToFilterOut);
          }
          const formattedResults = engine.formatter(
            filteredResults,
            cardSize,
            filters,
            appPathFolder || engine.appPathFolder,
            localSection,
            {
              API_URL: engine.API_URL,
              searchApiVersion: engine.searchApiVersion,
            }
          );
          if (registerResults) {
            registerResults(formattedResults.page.total_results);
          }
          if (engine.method === "GET") {
            if (sort === "employee_weight") {
              setCurrentPage(formattedResults.page.current + 1);
            } else {
              setCurrentPage(formattedResults.page.current);
            }
          }
          if (engine.method === "POST") {
            setTotalResults(filters.peopleInDepts.length);
          } else {
            setTotalResults(formattedResults.page.total_results);
          }
          const resultsWithProps = formattedResults.results.map(
            (profile, idx) => {
              const newProps = {
                ...profile.props,
                ...{ key: idx, GASource },
              };
              return {
                ...profile,
                ...{ props: newProps },
                key: profile.props?.children?.key ?? idx,
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
                engine={engine.name}
                GASource={GASource}
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
          console.error(err);
          setIsLoading(false);
        });
    }
  };

  const onPageChange = val => {
    setCurrentPage(val);
    doSearch(val);
  };

  useEffect(() => {
    doSearch(1);
  }, [term, sort, filters, itemsPerPage, profilesToFilterOut]);

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
          {!hidePaginator && !isAnon && totalResults >= itemsPerPage && (
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
  loggedIn: PropTypes.bool,
  profilesToFilterOut: PropTypes.string,
  display: PropTypes.shape({
    defaultSort: PropTypes.string,
    doNotDisplayProfiles: PropTypes.string,
    profilesPerPage: PropTypes.string,
    usePager: PropTypes.string,
  }),
  appPathFolder: PropTypes.string,
  localSection: PropTypes.bool,
};

export { ASUSearchResultsList };
