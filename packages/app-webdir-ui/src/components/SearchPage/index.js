import { Button } from "@asu-design-system/components-core";
import { SearchProvider, withSearch } from "@elastic/react-search-ui";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { TabbedPanels, Tab } from "../../../../components-core";
import { ASUFacultyAndStaffResults } from "../FacultyAndStaffResults/index";
import { dataConverter } from "../helpers/dataConverter";
import { ProfileCard } from "../ProfileCard/index";
import { resultsShape } from "../ProfileCard/models";
import { SearchPage } from "./index.styles";

const connector = new AppSearchAPIConnector({
  searchKey: "search-371auk61r2bwqtdzocdgutmg",
  engineName: "search-ui-examples",
  hostIdentifier: "host-2376rb",
  endpointBase: "",
});

function ASUSearchPageComponent({
  searchTerm,
  setSearchTerm,
  results,
  setCurrent,
  totalResults,
  resultsPerPage,
  isLoading,
  current,
}) {
  const [term, setTerm] = useState("");
  const convertedResults = dataConverter(results);
  const doSearch = () => {
    if (term && term.length > 0) {
      setSearchTerm(term);
    }
  };

  return (
    <SearchPage>
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
      {searchTerm.length > 0 && !isLoading && (
        <TabbedPanels>
          <Tab id="all" title="All ASU Search">
            <div className="all-asu-search">
              <div className="message">
                <div className="results-search-message">
                  <span>Your search for </span>
                  <span className="search-message-emphasis">{searchTerm} </span>
                  <span> returned </span>
                  <span className="search-message-emphasis">
                    {totalResults}{" "}
                  </span>
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
              <div className="top-results">{convertedResults.top}</div>
              <div className="faculty-and-staff">
                <ASUFacultyAndStaffResults
                  searchTerm={searchTerm}
                  onPageChange={setCurrent}
                  currentPage={current}
                  totalResults={totalResults}
                  resultsPerPage={resultsPerPage}
                  size="micro"
                  title="Faculty and staff"
                  summary
                >
                  {convertedResults.staff.slice(0, 3).map(profile => (
                    <ProfileCard {...profile.props} size="micro" />
                  ))}
                </ASUFacultyAndStaffResults>
              </div>
              <div className="subdomain-results">
                <ASUFacultyAndStaffResults
                  searchTerm={searchTerm}
                  onPageChange={setCurrent}
                  currentPage={current}
                  totalResults={totalResults}
                  resultsPerPage={resultsPerPage}
                  title="All results from <<subdomain>>"
                  summary
                >
                  {convertedResults.subdomain.slice(0, 2)}
                </ASUFacultyAndStaffResults>
              </div>
              <div className="students">
                <ASUFacultyAndStaffResults
                  searchTerm={searchTerm}
                  onPageChange={setCurrent}
                  currentPage={current}
                  totalResults={totalResults}
                  resultsPerPage={resultsPerPage}
                  size="micro"
                  title="Students"
                  anonymized
                  summary
                >
                  {convertedResults.students.slice(0, 3).map(profile => (
                    <ProfileCard {...profile.props} size="micro" />
                  ))}
                </ASUFacultyAndStaffResults>
              </div>
              <div className="all-results">
                <ASUFacultyAndStaffResults
                  searchTerm={searchTerm}
                  onPageChange={setCurrent}
                  currentPage={current}
                  totalResults={totalResults}
                  resultsPerPage={resultsPerPage}
                  title="All asu.edu results"
                >
                  {convertedResults.all}
                </ASUFacultyAndStaffResults>
              </div>
            </div>
          </Tab>
          <Tab id="subdomain" title="<<Subdomain>>">
            <div>Subdomain</div>
          </Tab>
          <Tab id="staff" title="Faculty and Staff">
            <ASUFacultyAndStaffResults
              searchTerm={searchTerm}
              onPageChange={setCurrent}
              currentPage={current}
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              title="All faculty and staff results"
            >
              {convertedResults.staff}
            </ASUFacultyAndStaffResults>
          </Tab>
          <Tab id="students" title="Students">
            <div>Students</div>
          </Tab>
        </TabbedPanels>
      )}
    </SearchPage>
  );
}

ASUSearchPageComponent.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
  results: PropTypes.arrayOf(resultsShape),
  setCurrent: PropTypes.func,
  totalResults: PropTypes.number,
  resultsPerPage: PropTypes.number,
  isLoading: PropTypes.bool,
  current: PropTypes.number,
};

const PlusSearch = withSearch(
  ({
    searchTerm,
    setSearchTerm,
    results,
    setCurrent,
    totalResults,
    resultsPerPage,
    isLoading,
    current,
  }) => ({
    searchTerm,
    setSearchTerm,
    results,
    setCurrent,
    totalResults,
    resultsPerPage,
    isLoading,
    current,
  })
)(ASUSearchPageComponent);

const ASUSearchPage = () => {
  return (
    <SearchProvider
      config={{
        /* debug: true, */
        apiConnector: connector,
        initialState: {
          resultsPerPage: 6,
        },
      }}
    >
      <PlusSearch />
    </SearchProvider>
  );
};
export { ASUSearchPage };
