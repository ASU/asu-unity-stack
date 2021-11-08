import { Pagination } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import { profileCardType } from "../ProfileCard/models";
import { ASUProfileCardList } from "../ProfileCardList/index";
import { FacultyAndStaffResults } from "./index.styles";

const ASUFacultyAndStaffResults = ({ profiles, searchTerm, title }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 6;
  const titleText = title || "All faculty and staff results";

  return (
    <FacultyAndStaffResults>
      <div className="results-search-message">
        <span>Your search for </span>
        <span className="search-message-emphasis">{searchTerm} </span>
        <span> returned </span>
        <span className="search-message-emphasis">{profiles.length} </span>
        <span>faculty and staff results </span>
      </div>
      <div className="results-title">{titleText}</div>
      <ASUProfileCardList
        profiles={profiles.slice(
          (pageNumber - 1) * itemsPerPage,
          pageNumber * itemsPerPage
        )}
      />
      <Pagination
        type="default"
        background="white"
        totalPages={Math.ceil(profiles.length / itemsPerPage)}
        currentPage={pageNumber}
        onChange={(e, action) => setPageNumber(action)}
      />
    </FacultyAndStaffResults>
  );
};

ASUFacultyAndStaffResults.propTypes = {
  profiles: PropTypes.arrayOf(profileCardType).isRequired,
  searchTerm: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export { ASUFacultyAndStaffResults };
