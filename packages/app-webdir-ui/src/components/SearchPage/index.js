import { Button } from "@asu-design-system/components-core";
import { SearchProvider, WithSearch } from "@elastic/react-search-ui";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import React, { useState } from "react";

import { TabbedPanels, Tab } from "../../../../components-core";
import { ASUFacultyAndStaffResults } from "../FacultyAndStaffResults/index";
import { dataConverter } from "../helpers/dataConverter";
import { SearchPage } from "./index.styles";

const connector = new AppSearchAPIConnector({
  searchKey: "search-371auk61r2bwqtdzocdgutmg",
  engineName: "search-ui-examples",
  hostIdentifier: "host-2376rb",
  endpointBase: "",
});

const ASUSearchPage = () => {
  return (
    <SearchProvider
      config={{
        apiConnector: connector,
      }}
    >
      <WithSearch
        mapContextToProps={({
          searchTerm,
          setSearchTerm,
          results,
          current,
          setCurrent,
          setResultsPerPage,
          totalResults,
        }) => ({
          searchTerm,
          setSearchTerm,
          results,
          current,
          setCurrent,
          setResultsPerPage,
          totalResults,
        })}
      >
        {({
          searchTerm,
          setSearchTerm,
          results,
          current,
          setCurrent,
          setResultsPerPage,
          totalResults,
        }) => {
          const [term, setTerm] = useState("");
          const itemsPerPage = 6;
          setResultsPerPage(itemsPerPage);

          const doSearch = () => {
            if (term && term.length > 0) {
              setCurrent(10);
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
                    onClick={doSearch}
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
                    currentPage={current}
                    onPageChange={(page) => {console.log('asdad');setCurrent(2);}}
                    itemsPerPage={itemsPerPage}
                    totalResults={totalResults}
                  />
                </Tab>
                <Tab id="students" title="Students">
                  <div>Students</div>
                </Tab>
              </TabbedPanels>
            </SearchPage>
          );
        }}
      </WithSearch>
    </SearchProvider>
  );
};

export { ASUSearchPage };
