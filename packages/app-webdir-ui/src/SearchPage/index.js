import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Button, TabbedPanels, Tab } from "../../../components-core";
import { trackGAEvent } from "../core/services/googleAnalytics";
import { performSearch } from "../helpers/search";
import { PreSearchMessage } from "../PreSearchMessage/index";
import { QuickLinks } from "../QuickLinks/index";
import { ASUSearchResultsList } from "../SearchResultsList/index";
import { SearchPageLayout } from "./index.styles";

function SearchPage() {
  const sortOptions = [
    { value: "_score_desc", label: "Relevancy" },
    { value: "last_name_asc", label: "Last Name (ascending)" },
    { value: "last_name_desc", label: "Last Name (descending)" },
  ];
  const resultsPerPage = 6;
  const [term, setTerm] = useState("");
  const [numResults, setNumResults] = useState(0);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [site, setSite] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({});

  const tabIds = {
    all: "all",
    sites: "sites",
    faculty: "faculty",
    students: "students",
  };

  const searchTabsId = "search-tabs";
  const queryParamName = "q";
  const sortParamName = "sort-by";
  const siteParamName = "url_host";

  const updateContent = (tab, page = 1, limitUpdateTo = null) => {
    const searchFor = searchParams.get(queryParamName);
    if (searchFor && searchFor.length > 0 && tab) {
      if (!limitUpdateTo) {
        setIsLoading(true);
      }
      const toSearch = limitUpdateTo || tab;
      const sort = searchParams.get(sortParamName);
      performSearch(
        toSearch,
        searchFor,
        page,
        resultsPerPage,
        null,
        sort,
        filters
      ).then(res => {
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
      });
      trackGAEvent({
        event: "search",
        action: "type",
        name: "onenter",
        type: "search asu.edu",
        section: "search",
        text: term,
      });
    }
  };

  const doSearch = () => {
    setSearchParams({ [queryParamName]: term });
  };

  useEffect(() => {
    if (searchParams.get(queryParamName)) {
      setTerm(searchParams.get(queryParamName));
      updateContent(searchParams.get(searchTabsId));
    }
    if (searchParams.get(siteParamName)) {
      setSite(searchParams.get(siteParamName));
      setFilters({ site: searchParams.get(siteParamName) });
    }
  }, [searchParams]);

  const getSortEventText = () => {
    let text = sortOptions.find(op => {
      return op.value === searchParams.get(sortParamName);
    }).label;
    if (text === "Relevancy") {
      text = "Sort by Relevancy";
    }
    return text;
  };

  const openSort = () => {
    trackGAEvent({
      event: "collapse",
      action: "open",
      name: "onclick",
      type: "click",
      section: "all asu search",
      text: getSortEventText(),
    });
  };
  const setSort = newSort => {
    setSearchParams({ [sortParamName]: newSort });
    trackGAEvent({
      event: "collapse",
      action: "close",
      name: "onclick",
      type: "click",
      section: "all asu search",
      text: getSortEventText(),
    });
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
    if (!results) {
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
                  <span className="search-message-emphasis">
                    {searchParams.get(queryParamName)}{" "}
                  </span>
                  <span> returned </span>
                  <span className="search-message-emphasis">{numResults}</span>
                  <span> faculty and staff results </span>
                </div>
              </div>
              <div className="top-results">
                <div>{results?.sites?.topResult}</div>
                <div>{results?.faculty?.topResult}</div>
              </div>
              <div className="faculty-and-staff">
                <ASUSearchResultsList
                  results={results?.faculty?.results}
                  totalResults={results?.faculty?.page.total_results}
                  resultsPerPage={3}
                  isLoading={isLoading}
                  title="Faculty and staff"
                  size="micro"
                  summary
                  onExpandClick={() => goToTab(tabIds.faculty)}
                  GASource="faculty and staff"
                />
              </div>
              <div className="subdomain-results">
                <ASUSearchResultsList
                  results={results?.sites?.results}
                  totalResults={results?.sites?.page.total_results}
                  resultsPerPage={6}
                  isLoading={isLoading}
                  title="All results from <<sites>>"
                  summary
                  onExpandClick={() => goToTab(tabIds.sites)}
                  GASource="all results from <<subdomain>>"
                />
              </div>
              <div className="students">
                <ASUSearchResultsList
                  results={results?.students?.results}
                  totalResults={results?.students?.page.total_results}
                  resultsPerPage={3}
                  isLoading={isLoading}
                  title="Students"
                  size="micro"
                  summary
                  anonymized
                  onExpandClick={() => goToTab(tabIds.students)}
                  GASource="students"
                />
              </div>
              <div className="quick-links">
                <QuickLinks />
              </div>
              <div className="all-results">
                <ASUSearchResultsList
                  results={results?.sites?.results}
                  totalResults={results?.sites?.page.total_results}
                  resultsPerPage={6}
                  isLoading={isLoading}
                  title="All asu.edu results"
                  onPageChange={page => pageChange(page, tabIds.sites)}
                  currentPage={results?.sites?.page?.current}
                  GASource="all asu.edu results"
                />
              </div>
            </div>
          )}
        </Tab>
        {site && (
          <Tab id={tabIds.sites} title={site}>
            {preSearchOrContent(
              <ASUSearchResultsList
                results={results?.results}
                totalResults={numResults}
                resultsPerPage={6}
                isLoading={isLoading}
                title={site}
                onPageChange={pageChange}
                GASource={site}
              />
            )}
          </Tab>
        )}
        <Tab id={tabIds.faculty} title="Faculty and Staff">
          {preSearchOrContent(
            <div className="faculty-tab">
              <ASUSearchResultsList
                results={results?.results}
                totalResults={numResults}
                resultsPerPage={6}
                currentPage={results?.page?.current}
                isLoading={isLoading}
                title="All faculty and staff results"
                onPageChange={pageChange}
                size="large"
                GASource="all faculty and staff results"
              />
              <form className="uds-form sort-form">
                <div className="form-group">
                  <label htmlFor="sortBySelect">Sort by</label>
                  <select
                    className="form-control"
                    id="sortBySelect"
                    value={searchParams.get(sortParamName)}
                    onChange={event => setSort(event.target.value)}
                    onClick={openSort}
                  >
                    {sortOptions.map(op => (
                      <option key={op.value} value={op.value}>
                        {op.label === "Relevancy"
                          ? "Sort by Relevancy"
                          : op.label}
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
