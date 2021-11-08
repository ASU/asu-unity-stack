import { Button } from "@asu-design-system/components-core";
import React from "react";

import { getTestCards } from "../assets/test-data";
import { ASUFacultyAndStaffResults } from "../FacultyAndStaffResults/index";
import { SearchPage } from "./index.styles";

const ASUSearchPage = () => {
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
            id="exampleDefaultInput"
            placeholder="Helper text"
          />
          <Button color="maroon" icon={["fas", "search"]} label="Search" />
        </div>
      </form>
      <ASUFacultyAndStaffResults
        profiles={getTestCards()}
        searchTerm="Sarah Hough"
      />
    </SearchPage>
  );
};

export { ASUSearchPage };
