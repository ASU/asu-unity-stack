import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { performSearch, engineNames } from "../helpers/search";
import { ASUSearchResultsList } from "../SearchResultsList";
import { WebDirLayout } from "./index.styles";

const sortOptions = [{ label: "label", value: 9 }];
function WebDirectory({ searchType, ids, deptIds, searchURL }) {
  const sortParamName = "sort-by";
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [sort, setSort] = useState(9);

  const setNewSort = newSort => {
    setSearchParams({ [sortParamName]: newSort });
  };

  const isLoading = false;
  const pageChange = () => true;

  function doSearch() {
    const filters = {
      deptIds: deptIds.split(","),
    };
    const params = {
      tab: engineNames.WEB_DIRECTORY,
      page: 1,
      items: 6,
      searchURL,
      filters,
    };
    if (searchType === "people_departments") {
      const parsedIDs = ids
        .split(",")
        .map(pair => pair.split(":"))
        .map(pair => {
          return { asurite_id: pair[0], dept: pair[1] };
        });
      filters.peopleIds = parsedIDs.map(id => id.asurite_id);
      params.titleOverwrite = parsedIDs;
    }
    performSearch(params).then(res => {
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
      <div className="header">People in Department</div>
      <div className="title">
        <form className="uds-form sort-form">
          <div className="form-group">
            <select
              className="form-control"
              id="sortBySelect"
              value={sort}
              onChange={event => setNewSort(event.target.value)}
            >
              {sortOptions.map(op => (
                <option key={op.value} value={op.value}>
                  {op.label}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
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
          totalResults={results.length}
          resultsPerPage={6}
          currentPage={results.page?.current}
          isLoading={isLoading}
          title="All faculty and staff results"
          onPageChange={pageChange}
          size="large"
        />
      </div>
    </WebDirLayout>
  );
}

WebDirectory.propTypes = {
  deptIds: PropTypes.string,
  searchURL: PropTypes.string,
  searchType: PropTypes.string,
  ids: PropTypes.string,
};

export { WebDirectory };
