import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Button } from "../../../components-core/src/components/Button";
import {
  TabbedPanels,
  Tab,
} from "../../../components-core/src/components/TabbedPanels";
import { performSearch } from "../helpers/search";
import { PreSearchMessage } from "../PreSearchMessage/index";
import { ASUSearchResultsList } from "../SearchResultsList/index";
import { SearchPageLayout } from "./index.styles";

function SearchPage() {
  const resultsPerPage = 6;
  const [term, setTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const updateContent = (tab, page = 1) => {
    setIsLoading(true);
    performSearch(tab, term, page, resultsPerPage).then(res => {
      setResults(res);
      setIsLoading(false);
    });
  };
  const searchTabsId = "search-tabs";

  const doSearch = () => {
    setSearchTerm(term);
    updateContent(searchParams.get(searchTabsId));
  };

  const pageChange = page => {
    updateContent(searchParams.get(searchTabsId), page);
  };

  const tabChange = tab => {
    updateContent(tab);
  };

  const goToTab = tab => {
    updateContent(tab);
    setSearchParams({ [searchTabsId]: tab });
  };

  const tabIds = {
    all: "all",
    sites: "sites",
    faculty: "faculty",
    students: "students",
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
          />
          <Button
            color="maroon"
            icon={["fas", "search"]}
            label="Search"
            onClick={() => doSearch()}
          />
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
                  <span className="search-message-emphasis">N</span>
                  <span>faculty and staff results </span>
                </div>
              </div>
              <div className="sort">
                <form className="uds-form">
                  <div className="form-group">
                    <label htmlFor="sortBySelect">Sort by</label>
                    <select className="form-control" id="sortBySelect">
                      <option>Relevance</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="top-results">
                <div>{results.sites?.topResult}</div>
                <div>{results.faculty?.topResult}</div>
              </div>
              <div className="faculty-and-staff">
                <ASUSearchResultsList
                  results={results.faculty?.results}
                  totalResults={results.faculty?.page?.total_results}
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
                  totalResults={results.sites?.page?.total_results}
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
                  totalResults={results.students?.page?.total_results}
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
                  totalResults={results.sites?.page?.total_results}
                  resultsPerPage={6}
                  isLoading={isLoading}
                  title="All asu.edu results"
                  onPageChange={pageChange}
                />
              </div>
            </div>
          )}
        </Tab>
        <Tab id={tabIds.sites} title="<<Subdomain>>">
          {preSearchOrContent(
            <ASUSearchResultsList
              results={results.results}
              totalResults={results.page?.total_results}
              resultsPerPage={6}
              isLoading={isLoading}
              title="<<Subdomain>>"
              onPageChange={pageChange}
            />
          )}
        </Tab>
        <Tab id={tabIds.faculty} title="Faculty and Staff">
          {preSearchOrContent(
            <ASUSearchResultsList
              results={results.results}
              totalResults={results.page?.total_results}
              resultsPerPage={6}
              isLoading={isLoading}
              title="All faculty and staff results"
              onPageChange={pageChange}
            />
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
