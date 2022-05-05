import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { performSearch, engineNames } from "../helpers/search";
import { ASUSearchResultsList } from "../SearchResultsList";
import { WebDirLayout } from "./index.styles";

function WebDirectory({
  searchType,
  ids,
  deptIds,
  API_URL,
  searchApiVersion,
  profileURLBase,
  display,
  filters,
}) {
  const sortParamName = "sort-by";
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [numResults, setNumResults] = useState(0);
  const [currPage, setCurrPage] = useState(1);
  const profileURLBaseOrDefault = profileURLBase || "https://isearch.asu.edu";

  const setNewSort = newSort => {
    setSearchParams({ [sortParamName]: newSort });
  };

  const isLoading = false;
  const RES_PER_PAGE = 6;

  const searchTypeEngineMap = {
    departments: engineNames.WEB_DIRECTORY_DEPARTMENTS,
    people: engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS,
    people_departments: engineNames.WEB_DIRECTORY_PEOPLE_AND_DEPS,
  };
  function doSearch(sort) {
    const requestFilters = { ...filters };
    const params = {
      tab: searchTypeEngineMap[searchType],
      page: 1,
      items: display.profilesPerPage,
      API_URL,
      searchApiVersion,
      filters: requestFilters,
      sort,
      profileURLBase: profileURLBaseOrDefault,
    };
    if (searchType === "departments") {
      requestFilters.deptIds = deptIds.split(",");
    } else {
      requestFilters.peopleInDepts = ids
        .split(",")
        .filter(id => id.includes(":"))
        .map(pair => pair.split(":"))
        .map(pair => {
          return { asurite_id: pair[0], dept_id: pair[1] };
        });
    }
    performSearch(params).then(res => {
      setCurrPage(res.page.current);
      setNumResults(res.page.total_results);
      setResults(res.results);
    });
  }

  const handleKeyPressSort = (event, val) => {
    if (event.keyCode === 13) {
      setNewSort(val);
    }
  };

  useEffect(() => {
    setNewSort(display.defaultSort || "last_name_desc");
  }, []);

  useEffect(() => {
    doSearch(searchParams.get(sortParamName));
  }, [searchParams]);

  return (
    <WebDirLayout>
      <div className="sort">
        Sort By:
        <button
          type="button"
          className="plain-button"
          onClick={() => setNewSort("last_name_desc")}
          onKeyPress={event => handleKeyPressSort(event, "last_name_desc")}
          tabIndex={0}
        >
          Last name
        </button>
        |
        <button
          type="button"
          className="plain-button"
          onClick={() => setNewSort("_score_desc")}
          onKeyPress={event => handleKeyPressSort(event, "_score_desc")}
          tabIndex={0}
        >
          Rank
        </button>
      </div>
      <div className="results">
        <ASUSearchResultsList
          results={results}
          totalResults={numResults}
          resultsPerPage={RES_PER_PAGE}
          currentPage={currPage}
          isLoading={isLoading}
          onPageChange={page => doSearch(page)}
          size="large"
        />
      </div>
    </WebDirLayout>
  );
}

WebDirectory.propTypes = {
  deptIds: PropTypes.string,
  API_URL: PropTypes.string,
  searchApiVersion: PropTypes.string,
  searchType: PropTypes.string,
  ids: PropTypes.string,
  profileURLBase: PropTypes.string,
  display: PropTypes.shape({
    defaultSort: PropTypes.string,
    doNotDisplayProfiles: PropTypes.string,
    profilesPerPage: PropTypes.string,
    usePager: PropTypes.string,
  }),
  filters: PropTypes.shape({
    employee: PropTypes.string,
    expertise: PropTypes.string,
    title: PropTypes.string,
  }),
};

export { WebDirectory };
