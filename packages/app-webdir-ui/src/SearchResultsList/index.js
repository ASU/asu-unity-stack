import { Button, Pagination } from "@asu/components-core";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";

import { trackGAEvent } from "../../../../shared";
import { performSearch } from "../helpers/search";
import { SearchMessage } from "../SearchPage/components/SearchMessage";
import { SearchResultsList } from "./index.styles";

/*
  'type' must be 'micro', 'preview', or 'full'.
*/

/**
 * React component for displaying search results.
 * @param {Object} props - The props for configuring the ASUSearchResultsList component.
 * @param {string} term - The search term.
 * @param {string} sort - The sorting option.
 * @param {string} type - The type of results must be 'micro', 'preview', or 'full'.
 * @param {Object} engine - The search engine configuration.
 * @param {string} titleText - The title text for the search results.
 * @param {boolean} showSearchMessage - Indicates whether to show a search message.
 * @param {string} seeAllResultsText - The text for seeing all results.
 * @param {number} itemsPerPage - The number of items per page.
 * @param {function} onExpandClick - Callback function for expanding results.
 * @param {string} GASource - The Google Analytics source for tracking.
 * @param {function} setPromotedResult - Callback function for setting promoted results.
 * @param {boolean} hidePaginator - Indicates whether to hide the paginator.
 * @param {function} registerResults - Callback function for registering results.
 * @param {Object} filters - Filters for the search.
 * @param {boolean} loggedIn - Indicates whether the user is logged in.
 * @param {Array} profilesToFilterOut - Profiles to filter out from the results.
 * @param {string} display - Display options for the results.
 * @param {string} appPathFolder - The base path for the application folder.
 * @param {boolean} localSection - Indicates whether the results belong to a local section.
 * @param {string} rankGroup - The rank group for the results.
 * @param {Array} icon - Icon information for the results.
 * @returns {JSX.Element} The ASUSearchResultsList component.
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
  rankGroup,
  icon,
  restClientTag,
}) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [subtitle, setSubtitle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(null);
  const [isAnon, setIsAnon] = useState(false);
  const cardSize = type === "micro" ? "micro" : "large";
  const searchList = useRef(null);
  const controller = new AbortController();

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
        rankGroup,
        controller,
        size: display?.profilesPerPage,
        restClientTag,
      })
        .then(res => {
          const filteredResults = res;
          if (sort === "employee_weight" && engine?.name === "people_in_dept") {
            filteredResults.results = filteredResults.results.filter(result => {
              return Object.keys(result).length > 1;
            });
          }
          const formattedResults = engine.formatter({
            results: filteredResults,
            page,
            itemsPerPage,
            cardSize,
            filters,
            appPathFolder: appPathFolder || engine.appPathFolder,
            localSection,
            props: {
              API_URL: engine.API_URL,
              searchApiVersion: engine.searchApiVersion,
              loggedIn,
            },
          });
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
            setTotalResults(filteredResults[0]?.total_results); // Each result has the total_results property
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
    if (results.length > 0) {
      // Only scroll and focus if there are results
      searchList.current.scrollIntoView(true);
      searchList.current.firstElementChild.focus();
    }
  };

  useEffect(() => {
    doSearch(1);
    return () => controller?.abort();
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
              {titleText}{" "}
              {icon && <i className={`${icon?.[0]} fa-${icon?.[1]}`} />}
            </div>
          )}
          {results.length > 0 && !isLoading ? (
            <div ref={searchList} className="results-found">
              {results}
            </div>
          ) : (
            <div className="results-found">No results found</div>
          )}
          {!hidePaginator && !isAnon && totalResults >= itemsPerPage && (
            <Pagination
              type="default"
              background="white"
              currentPage={currentPage}
              totalPages={
                Math.ceil(totalResults / itemsPerPage) > 100
                  ? 100
                  : Math.ceil(totalResults / itemsPerPage)
              }
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
  rankGroup: PropTypes.string,
  icon: PropTypes.arrayOf(PropTypes.string),
  restClientTag: PropTypes.string,
};

export { ASUSearchResultsList };
