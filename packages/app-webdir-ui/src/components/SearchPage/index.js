import { Button } from "@asu-design-system/components-core";
import React, { useState } from "react";

import { TabbedPanels, Tab } from "../../../../components-core";
import { engineNames } from "../helpers/search";
import { PreSearchMessage } from "../PreSearchMessage/index";
import { ASUSearchResultsList } from "../SearchResultsList/index";
import { SearchPage } from "./index.styles";

function ASUSearchPage() {
  const resultsPerPage = 6;
  const [term, setTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const doSearch = () => {
    setSearchTerm(term);
  };

  const preSearchOrContent = content => {
    if (searchTerm.length === 0) {
      return <PreSearchMessage />;
    }
    return content;
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
              <div className="top-results">results top</div>
              <div className="faculty-and-staff">
                <ASUSearchResultsList
                  searchTerm={searchTerm}
                  resultsPerPage={3}
                  size="micro"
                  title="Faculty and staff"
                  engineName={engineNames.FACULTY}
                  summary
                />
              </div>
              <div className="subdomain-results">
                <ASUSearchResultsList
                  searchTerm={searchTerm}
                  resultsPerPage={2}
                  title="All results from <<subdomain>>"
                  engineName={engineNames.SITES}
                  summary
                />
              </div>
              <div className="students">
                <ASUSearchResultsList
                  searchTerm={searchTerm}
                  resultsPerPage={3}
                  size="micro"
                  title="Students"
                  engineName={engineNames.FACULTY}
                  anonymized
                  summary
                />
              </div>
              <div className="all-results">
                <ASUSearchResultsList
                  searchTerm={searchTerm}
                  resultsPerPage={resultsPerPage}
                  title="All asu.edu results"
                  engineName={engineNames.SITES}
                />
              </div>
            </div>
          )}
        </Tab>
        <Tab id="subdomain" title="<<Subdomain>>">
          {preSearchOrContent(<div>Subdomain</div>)}
        </Tab>
        <Tab id="staff" title="Faculty and Staff">
          {preSearchOrContent(
            <ASUSearchResultsList
              searchTerm={searchTerm}
              resultsPerPage={resultsPerPage}
              title="All faculty and staff results"
              engineName={engineNames.FACULTY}
            />
          )}
        </Tab>
        <Tab id="students" title="Students">
          {preSearchOrContent(<div>Students</div>)}
        </Tab>
      </TabbedPanels>
    </SearchPage>
  );
}

export { ASUSearchPage };
