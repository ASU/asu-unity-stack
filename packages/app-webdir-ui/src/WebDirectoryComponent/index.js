import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { performSearch } from "../helpers/search";
import { ASUSearchResultsList } from "../SearchResultsList";
import { WebDirLayout } from "./index.styles";

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const sortOptions = [{ label: "label", value: 9 }];
function WebDirectory() {
  const sortParamName = "sort-by";
  const letterParamName = "letter";
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);

  const setSort = newSort => {
    setSearchParams({ [sortParamName]: newSort });
  };

  const setLetter = newLetter => {
    setSearchParams({ [letterParamName]: newLetter });
  };

  const isLoading = false;
  const pageChange = () => true;

  function doSearch() {
    performSearch("faculty", "mark", 1, 6, null, {
      value: "_score_desc",
      label: "Relevancy",
    }).then(res => {
      setResults(res.results);
    });
  }

  const handleKeyPressSort = (event, val) => {
    if (event.keyCode === 13) {
      setSort(val);
    }
  };
  const handleKeyPressLetter = (event, val) => {
    if (event.keyCode === 13) {
      setLetter(val);
    }
  };

  useEffect(() => {
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
              value={searchParams.get(sortParamName)}
              onChange={event => setSort(event.target.value)}
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
      <div className="letters">
        {letters.map(l => {
          return (
            <button
              type="button"
              className="plain-button letter-button"
              onClick={() => setLetter(l)}
              onKeyPress={event => handleKeyPressLetter(event, l)}
              tabIndex={0}
            >
              {l}
            </button>
          );
        })}
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

export { WebDirectory };
