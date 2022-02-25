import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Button, TabbedPanels, Tab } from "../../../components-core";
import { performSearch } from "../helpers/search";
import { PreSearchMessage } from "../PreSearchMessage/index";
import { ASUSearchResultsList } from "../SearchResultsList/index";
import { SearchPageLayout } from "./index.styles";

function SearchPage() {
  const sortOptions = [
    { value: "_score_desc", label: "Relevance" },
    { value: "last_name_asc", label: "Last Name (ascending)" },
    { value: "last_name_desc", label: "Last Name (descending)" },
  ];
  const resultsPerPage = 6;
  const [term, setTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [numResults, setNumResults] = useState(0);
  const [results, setResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const tabIds = {
    all: "all",
    sites: "sites",
    faculty: "faculty",
    students: "students",
  };

  const searchTabsId = "search-tabs";
  const sortParamName = "sort-by";

  const updateContent = (tab, page = 1, limitUpdateTo = null) => {
    if (!limitUpdateTo) {
      setIsLoading(true);
    }
    const toSearch = limitUpdateTo || tab;
    const sort = searchParams.get(sortParamName);
    performSearch(toSearch, term, page, resultsPerPage, null, sort).then(
      res => {
        if (tab === tabIds.all) {
          const total = Object.keys(tabIds).reduce(
            (prev, curr) =>
              res[curr] ? prev + res[curr].page.total_results : 0,
            0
          );
          setNumResults(total);
        } else {
          setNumResults(res.page.total_results);
        }
        if (limitUpdateTo) {
          const current = { ...results };
          current[res.engineName] = res;
          setResults(current);
        } else {
          setResults(res);
        }
        setIsLoading(false);
      }
    );
  };

  const doSearch = () => {
    setSearchTerm(term);
    updateContent(searchParams.get(searchTabsId));
  };

  useEffect(() => {
    doSearch();
  }, [searchParams]);

  const setSort = newSort => {
    setSearchParams({ [sortParamName]: newSort });
  };

  const pageChange = (page, limitUpdateTo = null) => {
    updateContent(searchParams.get(searchTabsId), page, limitUpdateTo);
  };

  const tabChange = tab => {
    updateContent(tab);
  };

  const goToTab = tab => {
    updateContent(tab);
    setSearchParams({ [searchTabsId]: tab });
  };

  const inputKeyPress = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      doSearch();
    }
  };

  const preSearchOrContent = content => {
    if (searchTerm.length === 0) {
      return <PreSearchMessage />;
      // eslint-disable-next-line no-else-return
    } else if (isLoading) {
      return <div>Loading...</div>;
    }
    return content;
  };

  return (
    <SearchPageLayout>
      <h1>
        <span className="highlight-gold">Search</span>
      </h1>
      <form className="uds-form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="search-input"
            placeholder="Search"
            value={term}
            onChange={e => setTerm(e.target.value)}
            onKeyDown={inputKeyPress}
          />
          <div className="desktop-button">
            <Button
              color="maroon"
              icon={["fas", "search"]}
              label="Search"
              onClick={() => doSearch()}
            />
          </div>
          <div className="mobile-button">
            <Button
              color="maroon"
              icon={["fas", "search"]}
              label="Search"
              onClick={() => doSearch()}
              size="small"
            />
          </div>
        </div>
      </form>
      <TabbedPanels id={searchTabsId} onTabChange={tabChange}>
        <Tab id={tabIds.all} title="All ASU Search">
          {preSearchOrContent(
            <div className="all-asu-search">
              <div className="message">
                <div className="results-search-message">
                  <span>Your search for </span>
                  <span className="search-message-emphasis">{searchTerm} </span>
                  <span> returned </span>
                  <span className="search-message-emphasis">{numResults}</span>
                  <span> faculty and staff results </span>
                </div>
              </div>
              <div className="top-results">
                <div>{results.sites?.topResult}</div>
                <div>{results.faculty?.topResult}</div>
              </div>
              <div className="faculty-and-staff">
                <ASUSearchResultsList
                  results={results.faculty?.results}
                  totalResults={results.faculty?.page.total_results}
                  resultsPerPage={3}
                  isLoading={isLoading}
                  title="Faculty and staff"
                  size="micro"
                  summary
                  onExpandClick={() => goToTab(tabIds.faculty)}
                />
              </div>
              <div className="sites-results">
                <ASUSearchResultsList
                  results={results.sites?.results}
                  totalResults={results.sites?.page.total_results}
                  resultsPerPage={6}
                  isLoading={isLoading}
                  title="All results from <<sites>>"
                  summary
                  onExpandClick={() => goToTab(tabIds.sites)}
                />
              </div>
              <div className="students">
                <ASUSearchResultsList
                  results={results.students?.results}
                  totalResults={results.students?.page.total_results}
                  resultsPerPage={3}
                  isLoading={isLoading}
                  title="Students"
                  size="micro"
                  summary
                  anonymized
                  onExpandClick={() => goToTab(tabIds.students)}
                />
              </div>
              <div className="all-results">
                <ASUSearchResultsList
                  results={results.sites?.results}
                  totalResults={results.sites?.page.total_results}
                  resultsPerPage={6}
                  isLoading={isLoading}
                  title="All asu.edu results"
                  onPageChange={page => pageChange(page, tabIds.sites)}
                  currentPage={results.sites?.page?.current}
                />
              </div>
            </div>
          )}
        </Tab>
        <Tab id={tabIds.sites} title="<<Subdomain>>">
          {preSearchOrContent(
            <ASUSearchResultsList
              results={results.results}
              totalResults={numResults}
              resultsPerPage={6}
              isLoading={isLoading}
              title="<<Subdomain>>"
              onPageChange={pageChange}
            />
          )}
        </Tab>
        <Tab id={tabIds.faculty} title="Faculty and Staff">
          {preSearchOrContent(
            <div className="faculty-tab">
              <ASUSearchResultsList
                results={results.results}
                totalResults={numResults}
                resultsPerPage={6}
                currentPage={results.page?.current}
                isLoading={isLoading}
                title="All faculty and staff results"
                onPageChange={pageChange}
                size="large"
              />
              <form className="uds-form sort-form">
                <div className="form-group">
                  <label htmlFor="sortBySelect">Sort by</label>
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
          )}
        </Tab>
        <Tab id={tabIds.students} title="Students">
          {preSearchOrContent(<div>Students</div>)}
        </Tab>
      </TabbedPanels>
    </SearchPageLayout>
  );
}

export { SearchPage };
