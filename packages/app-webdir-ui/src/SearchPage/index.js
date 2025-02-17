import { Button, TabbedPanels, Tab } from "@asu/unity-react-core";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { engineNames, engines } from "../helpers/search";
import { searchMessageComponentMap } from "../PreSearchMessages";
import {
  AllTab,
  FacultyTab,
  LocalTab,
  StudentsTab,
  tabIds,
} from "./components/tabs";
import { SearchPageLayout } from "./index.styles";

/**
 * React component for the ASU search page.
 *
 * @param {Object} props - The props for configuring the search page.
 * @param {string} props.API_URL - The API URL for the search functionality.
 * @param {string} props.searchApiVersion - The version of the search API.
 * @param {boolean} props.loggedIn - Indicates whether the user is logged in.
 * @param {boolean} props.deptAdmin - Indicates whether the user is a department admin.
 * @param {string} props.profileURLBase - The base URL for user profiles.
 * @param {string} props.appPathFolder - The folder path for the application.
 * @returns {JSX.Element} The SearchPage component.
 */

function SearchPage({
  API_URL,
  searchApiVersion,
  loggedIn,
  deptAdmin,
  profileURLBase,
  appPathFolder,
}) {
  const searchTabsId = "search-tabs";
  const queryParamName = "q";
  const siteParamName = "url_host";

  const [term, setTerm] = useState("");
  const [sort, setSort] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({
    [searchTabsId]: tabIds.all,
  });
  const [filters] = useState({});
  const [site, setSite] = useState(null);
  const inputRef = useRef(null);

  const engineParams = {
    filters,
    API_URL,
    searchApiVersion,
    profileURLBase: profileURLBase || "https://search.asu.edu",
    appPathFolder,
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
      setTotalResults(0);
      updateSearchParams(queryParamName, searchValue);
    }
  };

  const changeSort = value => {
    setSort(value);
  };
  useEffect(() => {
    if (searchParams.get(siteParamName)) {
      setSite(searchParams.get(siteParamName));
    }
    if (searchParams.get(queryParamName)) {
      setTerm(searchParams.get(queryParamName));
      setSearchValue(searchParams.get(queryParamName));
    }
  }, [searchParams, sort]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const goToTab = tab => {
    updateSearchParams(searchTabsId, tab);
    setTotalResults(0);
  };

  const inputKeyPress = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      doSearch();
    }
  };

  const preSearchOrContent = content => {
    if (term) return content;
    return searchMessageComponentMap[searchParams.get(searchTabsId)];
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
              ref={inputRef}
            />
            <Button
              color="maroon"
              icon={["fas", "search"]}
              label="Search"
              onClick={() => doSearch()}
            />
          </div>
        </form>
        <div className="profile-options">
          <div className="desktop-button">
            <Button
              color="gray"
              icon={["fas", "lock"]}
              label="Edit my profile"
              href="/profile-edit"
            />
          </div>
          <div className="mobile-button">
            <Button
              color="gray"
              icon={["fas", "lock"]}
              label="Edit my profile"
              href="/profile-edit"
              size="small"
            />
          </div>
          {loggedIn && deptAdmin && (
            <>
              <div className="desktop-button">
                <Button
                  color="gray"
                  icon={["fas", "lock"]}
                  label="Department admin"
                  href="/groups"
                />
              </div>
              <div className="mobile-button">
                <Button
                  color="gray"
                  icon={["fas", "lock"]}
                  label="Department admin"
                  href="/groups"
                  size="small"
                />
              </div>
            </>
          )}
        </div>
      </div>
      <TabbedPanels
        initialTab={searchParams.get(searchTabsId)}
        onTabChange={tab => goToTab(tab)}
      >
        <Tab id={tabIds.all} title="All ASU Search">
          {preSearchOrContent(
            <AllTab
              totalResults={totalResults}
              setTotalResults={setTotalResults}
              engines={enginesWithParams}
              site={site}
              goToTab={goToTab}
              term={term}
              loggedIn={loggedIn}
            />
          )}
        </Tab>
        {site && (
          <Tab id={tabIds.sites} title={site}>
            {preSearchOrContent(
              <LocalTab
                loggedIn={loggedIn}
                engines={enginesWithParams}
                site={site}
                term={term}
              />
            )}
          </Tab>
        )}
        <Tab id={tabIds.faculty} title="Faculty and Staff">
          {preSearchOrContent(
            <FacultyTab
              engines={enginesWithParams}
              term={term}
              sort={sort}
              onSortChange={value => changeSort(value)}
            />
          )}
        </Tab>
        <Tab id={tabIds.students} icon={["fa", "lock"]} title="Students">
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
  deptAdmin: PropTypes.bool,
  profileURLBase: PropTypes.string,
  appPathFolder: PropTypes.string,
};

export { SearchPage };
