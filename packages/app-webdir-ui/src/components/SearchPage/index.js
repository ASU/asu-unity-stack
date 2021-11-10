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
      <TabbedPanels panels={pageTabs} />
    </SearchPage>
  );
};

export { ASUSearchPage };
