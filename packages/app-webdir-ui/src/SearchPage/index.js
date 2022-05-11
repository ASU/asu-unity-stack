import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Button, TabbedPanels, Tab } from "../../../components-core";
import { trackGAEvent } from "../core/services/googleAnalytics";
import { engineNames } from "../helpers/search";
import { PreSearchMessage } from "../PreSearchMessage/index";
import { QuickLinks } from "../QuickLinks/index";
import { ASUSearchResultsList } from "../SearchResultsList/index";
import { SearchPageLayout } from "./index.styles";

const SearchResultsMessage = ({ term, numResults, tabText }) => {
  return (
    <div className="message">
      <div className="results-search-message">
        <span>Your search for </span>
        <span className="search-message-emphasis">{term} </span>
        <span> returned </span>
        <span className="search-message-emphasis">{numResults}</span>
        {tabText && <span> {tabText.toLowerCase()} </span>}
        <span> results </span>
      </div>
    </div>
  );
};

SearchResultsMessage.propTypes = {
  term: PropTypes.string,
  numResults: PropTypes.number,
  tabText: PropTypes.string,
};

function SearchPage({ API_URL, searchApiVersion, loggedIn, profileURLBase }) {

  const engineParams = {
    filters,
    API_URL,
    searchApiVersion,
    profileURLBase: profileURLBase || "https://isearch.asu.edu",
  };

  const sortOptions = [
    { value: "_score_desc", label: "Relevancy" },
    { value: "last_name_asc", label: "Last Name (ascending)" },
    { value: "last_name_desc", label: "Last Name (descending)" },
  ];
  const tabIds = {
    all: "all",
    sites: "web_sites",
    faculty: "web_dir_faculty_staff",
    students: "web_dir_students",
  };

  const searchTabsId = "search-tabs";
  const queryParamName = "q";
  const sortParamName = "sort-by";
  const siteParamName = "url_host";

  const itemsPerPage = 6;
  const [term, setTerm] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [numResults, setNumResults] = useState(0);
  const [results, setResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters] = useState({});
  const [sort, setSort] = useState("_score_desc");
  const [site, setSite] = useState(null);

  const facultyEngine = { ...engines[engineNames.FACULTY], ...engineParams};
  const studentsEngine = { ...engines[engineNames.STUDENTS], ...engineParams};
  const localSiteEngine = { ...engines[engineNames.SITES_LOCAL], ...engineParams, ...{ site }};
  const sitesEngine = { ...engines[engineNames.SITES], ...engineParams};

  const updateSearchParams = (param, newValue) => {
    const newParams = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of searchParams.entries()) {
      // eslint-disable-next-line prefer-destructuring
      newParams[entry[0]] = entry[1];
    }
    newParams[param] = newValue;
    setSearchParams(newParams);
  };

  useEffect(() => {
    if(searchParams.get(siteParamName)) {
      setSite(searchParams.get(siteParamName));
    }
    if (searchParams.get(sortParamName)) {
      setSort(searchParams.get(sortParamName));
    } else {
      setSort("_score_desc");
    }
    if (searchParams.get(queryParamName)) {
      setTerm(searchParams.get(queryParamName));
    }
  }, [searchParams]);

  const getSortEventText = () => {
    let text = sortOptions.find(op => {
      return op.value === sort;
    }).label;
    if (text === "Relevancy") {
      text = "Sort by Relevancy";
    }
    return text;
  };

  const tabChange = tab => {

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

  const updateSort = newSort => {
    setSort(newSort);
    updateSearchParams(sortParamName, newSort);
    trackGAEvent({
      event: "collapse",
      action: "close",
      name: "onclick",
      type: "click",
      section: "all asu search",
      text: getSortEventText(),
    });
  };

  const goToTab = tab => {
    updateSearchParams(searchTabsId, tab);
  };

  const inputKeyPress = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      doSearch();
    }
  };

  const doSearch = () => {
    if(searchValue.length > 0){
      updateSearchParams(queryParamName, searchValue);
    }
  }

  const preSearchOrContent = content => {
    return term.length === 0 ? <SearchResultsMessage /> : content;
  }

  return (
    <SearchPageLayout>
      <h1>
        <span className="highlight-gold">Search</span>
      </h1>
      <div className="options-area">
        <form className="uds-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="search-input"
              placeholder="Search asu.edu"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
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
        {loggedIn && (
          <div className="profile-options">
            <Button
              color="gray"
              icon={["fas", "lock"]}
              label="Edit my profile"
              href="/profile-edit"
            />
            <Button
              color="gray"
              icon={["fas", "lock"]}
              label="Department admin"
              href="/groups"
            />
          </div>
        )}
      </div>
      <TabbedPanels id={searchTabsId} onTabChange={tabChange}>
        <Tab id={tabIds.all} title="All ASU search">
          {preSearchOrContent(
            <div className="all-asu-search">
              <div className="all-message">
                <SearchResultsMessage
                  term={searchParams.get(queryParamName)}
                  numResults={numResults}
                />
              </div>
              <div className="all-content">
                <div className="all-content-column">
                  <div className="top-results all-content-item">
                    <div>{results?.web_sites?.topResult}</div>
                    <div>{results?.web_dir_faculty_staff?.topResult}</div>
                  </div>
                  {site && (
                    <div className="subdomain-results all-content-item">
                      <ASUSearchResultsList
                        engine={localSiteEngine}
                        term={term}
                        type="preview"
                        itemsPerPage={6}
                        titleText={`All results from ${site}`}
                        numResultsText="Results found: {totalResults}"
                        seeAllResultsText={`See all results from ${site}`}
                        onExpandClick={() => goToTab(tabIds.sites)}
                        GASource={`all results from ${site}`}
                        hidePaginator
                      />
                    </div>
                  )}
                  <div className="all-results all-content-item">
                    <ASUSearchResultsList
                      engine={sitesEngine}
                      term={term}
                      type="full"
                      itemsPerPage={6}
                      titleText="All asu.edu results"
                      GASource="all asu.edu results"
                    />
                  </div>
                </div>
                <div className="all-content-column">
                  <div className="faculty-and-staff all-content-item">
                    <ASUSearchResultsList
                      engine={facultyEngine}
                      term={term}
                      itemsPerPage={3}
                      titleText="Faculty and staff"
                      type="micro"
                      seeAllResultsText="See all results"
                      onExpandClick={() => goToTab(tabIds.faculty)}
                      GASource="faculty and staff"
                      hidePaginator
                    />
                  </div>
                  {results?.web_dir_students?.results?.length > 0 && (
                    <div className="students all-content-item">
                      <ASUSearchResultsList
                        engine={facultyEngine}
                        term={term}
                        itemsPerPage={3}
                        titleText="Students"
                        type="micro"
                        seeAllResultsText="See all results"
                        onExpandClick={() => goToTab(tabIds.faculty)}
                        GASource="students"
                        hidePaginator
                      />
                    </div>
                  )}
                  <div className="quick-links all-content-item">
                    <QuickLinks />
                  </div>
                </div>
              </div>
            </div>
          )}
        </Tab>
        {site && (
          <Tab id={tabIds.sites} title={site}>
            {preSearchOrContent(
              <div className="sites-tab">
                <SearchResultsMessage
                  term={searchParams.get(queryParamName)}
                  numResults={numResults}
                  tabText={site}
                />
                <ASUSearchResultsList
                  engine={sitesEngine}
                  term={term}
                  itemsPerPage={6}
                  type="full"
                  GASource={site}
                  titleText={site}
                />
              </div>
            )}
          </Tab>
        )}
        <Tab id={tabIds.faculty} title="Faculty and staff">
          {preSearchOrContent(
            <div className="faculty-tab">
              <SearchResultsMessage
                term={searchParams.get(queryParamName)}
                numResults={numResults}
                tabText="Faculty and staff"
              />
              <form className="uds-form sort-form faculty-sort">
                <div className="form-group">
                  <label htmlFor="sortBySelect">Sort by</label>
                  <select
                    className="form-control"
                    id="sortBySelect"
                    value={sort}
                    onChange={event => updateSort(event.target.value)}
                    onClick={openSort}
                  >
                    {results?.results?.length > 0 &&
                      sortOptions.map(op => (
                        <option key={op.value} value={op.value}>
                          {op.label === "Relevancy"
                            ? "Sort by Relevancy"
                            : op.label}
                        </option>
                      ))}
                  </select>
                </div>
              </form>
              <ASUSearchResultsList
                term={term}
                engine={facultyEngine}
                itemsPerPage={6}
                type="full"
                GASource="all faculty and staff results"
                titleText="All faculty and staff results"
              />
            </div>
          )}
        </Tab>
        <Tab id={tabIds.students} title="Students">
          {preSearchOrContent(
            <div className="students-tab">
              <SearchResultsMessage
                term={searchParams.get(queryParamName)}
                numResults={numResults}
                tabText="Students"
              />
              <ASUSearchResultsList
                term={term}
                engine={facultyEngine}
                itemsPerPage={6}
                type="full"
                GASource="all student results"
                titleText="All Student results"
              />
            </div>
          )}
        </Tab>
      </TabbedPanels>
    </SearchPageLayout>
  );
}

SearchPage.propTypes = {
  API_URL: PropTypes.string,
  searchApiVersion: PropTypes.string,
  loggedIn: PropTypes.bool,
  profileURLBase: PropTypes.string,
};

export { SearchPage };
