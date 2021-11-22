import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { SearchProvider, WithSearch } from "@elastic/react-search-ui";
import { Button } from "@asu-design-system/components-core";
import React from "react";

import { TabbedPanels } from "../../../../components-core";
import { getTestCards } from "../assets/test-data";
import { ASUFacultyAndStaffResults } from "../FacultyAndStaffResults/index";
import { SearchPage } from "./index.styles";

export const pageTabs = [
  {
    id: "all",
    title: "All ASU Search",
    content: <div>Search</div>,
  },
  {
    id: "subdomain",
    title: "<<Subdomain>>",
    content: <div>Subdomain</div>,
  },
  {
    id: "staff",
    title: "Faculty and Staff",
    content: (
      <ASUFacultyAndStaffResults
        profiles={getTestCards()}
        searchTerm="Sarah Hough"
      />
    ),
  },
  {
    id: "students",
    title: "Students",
    content: <div>Students</div>,
  },
];

const connector = new AppSearchAPIConnector({
  searchKey: "search-371auk61r2bwqtdzocdgutmg",
  engineName: "search-ui-examples",
  endpointBase: "http://127.0.0.1:3002",
  cacheResponses: false
});

const ASUSearchPage = () => {
  return (
    <SearchProvider config={{
        apiConnector: connector,
      }}
    >
      <WithSearch
        mapContextToProps={({ searchTerm, setSearchTerm, results }) => ({
          searchTerm,
          setSearchTerm,
          results
        })}
      >
        {({ searchTerm, setSearchTerm, results }) => {
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
                    value={searchTerm}
                    onChange={setSearchTerm}
                  />
                  <Button
                    color="maroon"
                    icon={["fas", "search"]}
                    label="Search"
                  />
                </div>
              </form>
              <TabbedPanels panels={pageTabs} />
            </SearchPage>
          );
        }}
      </WithSearch>
    </SearchProvider>
  );
};

export { ASUSearchPage };
