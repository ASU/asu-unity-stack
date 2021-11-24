import { Button } from "@asu-design-system/components-core";
import { SearchProvider, withSearch } from "@elastic/react-search-ui";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { TabbedPanels, Tab } from "../../../../components-core";
import { ASUFacultyAndStaffResults } from "../FacultyAndStaffResults/index";
import { dataConverter } from "../helpers/dataConverter";
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
}) {
  const [term, setTerm] = useState("");
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
      <TabbedPanels>
        <Tab id="all" title="All ASU Search">
          <div>Search</div>
        </Tab>
        <Tab id="subdomain" title="<<Subdomain>>">
          <div>Subdomain</div>
        </Tab>
        <Tab id="staff" title="Faculty and Staff">
          <ASUFacultyAndStaffResults
            profiles={dataConverter(results)}
            searchTerm={searchTerm}
            onPageChange={setCurrent}
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
          />
        </Tab>
        <Tab id="students" title="Students">
          <div>Students</div>
        </Tab>
      </TabbedPanels>
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
};

const PlusSearch = withSearch(
  ({
    searchTerm,
    setSearchTerm,
    results,
    setCurrent,
    totalResults,
    resultsPerPage,
  }) => ({
    searchTerm,
    setSearchTerm,
    results,
    setCurrent,
    totalResults,
    resultsPerPage,
  })
)(ASUSearchPageComponent);

const ASUSearchPage = () => {
  return (
    <SearchProvider
      config={{
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
