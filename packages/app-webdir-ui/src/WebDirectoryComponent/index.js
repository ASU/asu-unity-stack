import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { performSearch, engineNames } from "../helpers/search";
import { ASUSearchResultsList } from "../SearchResultsList";
import { WebDirLayout } from "./index.styles";

const sortOptions = [{ label: "label", value: 9 }];
function WebDirectory({ searchType, ids, deptIds, API_URL, searchApiVersion }) {
  const sortParamName = "sort-by";
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [sort, setSort] = useState(9);
  const [numResults, setNumResults] = useState(0);
  const [currPage, setCurrPage] = useState(1);

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
  function doSearch(page = 1) {
    const filters = {};
    const params = {
      tab: searchTypeEngineMap[searchType],
      page,
      items: RES_PER_PAGE,
      API_URL,
      searchApiVersion,
      filters,
    };
    if (searchType === "departments") {
      filters.deptIds = deptIds.split(",");
    } else {
      filters.peopleInDepts = ids
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
      setSort(val);
    }
  };

  useEffect(() => {
    if (searchParams.get(sortParamName)) {
      setSort(searchParams.get(sortParamName));
    }
    doSearch();
  }, [searchParams]);

  return (
    <WebDirLayout>
      <div className="sort">
        Sort By:
        <button
          type="button"
          className="plain-button"
          onClick={() => setSort("name")}
          onKeyPress={event => handleKeyPressSort(event, "name")}
          tabIndex={0}
        >
          Last name
        </button>
        |
        <button
          type="button"
          className="plain-button"
          onClick={() => setSort("rank")}
          onKeyPress={event => handleKeyPressSort(event, "rank")}
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
          title="All faculty and staff results"
          onPageChange={doSearch}
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
};

export { WebDirectory };
