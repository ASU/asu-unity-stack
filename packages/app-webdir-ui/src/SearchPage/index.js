import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Button, TabbedPanels, Tab } from "../../../components-core";
import { engineNames, engines } from "../helpers/search";
import { PreSearchMessage } from "../PreSearchMessage/index";
import {
  AllTab,
  FacultyTab,
  LocalTab,
  StudentsTab,
  tabIds,
} from "./components/tabs";
import { SearchPageLayout } from "./index.styles";

function SearchPage({ API_URL, searchApiVersion, loggedIn, profileURLBase }) {
  const searchTabsId = "search-tabs";
  const queryParamName = "q";
  const sortParamName = "sort-by";
  const siteParamName = "url_host";

  const [term, setTerm] = useState("");
  const [sort, setSort] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters] = useState({});
  const [site, setSite] = useState("uto.asu.edu");

  const engineParams = {
    filters,
    API_URL,
    searchApiVersion,
    profileURLBase: profileURLBase || "https://isearch.asu.edu",
  };

  const enginesWithParams = {
    [engineNames.FACULTY]: { ...engines[engineNames.FACULTY], ...engineParams },
    [engineNames.STUDENTS]: {
      ...engines[engineNames.STUDENTS],
      ...engineParams,
    },
    [engineNames.SITES_LOCAL]: {
      ...engines[engineNames.SITES_LOCAL],
      ...engineParams,
      ...{ site },
    },
    [engineNames.SITES]: { ...engines[engineNames.SITES], ...engineParams },
  };

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

  const doSearch = () => {
    if (searchValue.length > 0) {
      updateSearchParams(queryParamName, searchValue);
    }
  };

  const changeSort = value => {
    updateSearchParams(sortParamName, value);
  };
  useEffect(() => {
    if (searchParams.get(siteParamName)) {
      setSite(searchParams.get(siteParamName));
    }
    if (searchParams.get(sortParamName)) {
      setSort(searchParams.get(sortParamName));
    } else {
      setSort("_score_desc");
    }
    if (searchParams.get(queryParamName)) {
      setTerm(searchParams.get(queryParamName));
      setSearchValue(searchParams.get(queryParamName));
    }
  }, [searchParams]);

  const goToTab = tab => {
    updateSearchParams(searchTabsId, tab);
  };

  const inputKeyPress = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      doSearch();
    }
  };

  const preSearchOrContent = content => {
    if (term) return content;

    return <PreSearchMessage />;
  };

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
      <TabbedPanels id={searchTabsId} onTabChange={() => true}>
        <Tab id={tabIds.all} title="All ASU search">
          {preSearchOrContent(
            <AllTab
              engines={enginesWithParams}
              site={site}
              goToTab={goToTab}
              term={term}
            />
          )}
        </Tab>
        {site && (
          <Tab id={tabIds.sites} title={site}>
            {preSearchOrContent(
              <LocalTab engines={enginesWithParams} site={site} term={term} />
            )}
          </Tab>
        )}
        <Tab id={tabIds.faculty} title="Faculty and staff">
          {preSearchOrContent(
            <FacultyTab
              engines={enginesWithParams}
              term={term}
              sort={sort}
              onSortChange={value => changeSort(value)}
            />
          )}
        </Tab>
        <Tab id={tabIds.students} title="Students">
          {preSearchOrContent(
            <StudentsTab
              loggedIn={loggedIn}
              engines={enginesWithParams}
              term={term}
            />
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
