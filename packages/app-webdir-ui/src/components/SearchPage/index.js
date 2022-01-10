import { Button, TabbedPanels, Tab } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { ASUFacultyAndStaffResults } from "../FacultyAndStaffResults/index";
import { dataConverter } from "../helpers/dataConverter";
import { resultsShape } from "../ProfileCard/models";
import { SearchPage } from "./index.styles";

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
      {searchTerm.length > 0 && (
        <TabbedPanels>
          <Tab id="all" title="All ASU Search">
            <div>Search</div>
          </Tab>
          <Tab id="subdomain" title="<<Subdomain>>">
            <div>Subdomain</div>
          </Tab>
          <Tab id="staff" title="Faculty and Staff">
            {isLoading && <div>Loading...</div>}
            {!isLoading && (
              <ASUFacultyAndStaffResults
                profiles={dataConverter(results)}
                searchTerm={searchTerm}
                onPageChange={setCurrent}
                currentPage={current}
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
              />
            )}
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

export { ASUSearchPageComponent };
