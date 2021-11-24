import { Pagination } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

import { profileCardType } from "../ProfileCard/models";
import { ASUProfileCardList } from "../ProfileCardList/index";
import { FacultyAndStaffResults } from "./index.styles";

const ASUFacultyAndStaffResults = ({
  profiles,
  title,
  searchTerm,
  onPageChange,
  totalResults,
  resultsPerPage,
}) => {
  const titleText = title || "All faculty and staff results";
  return (
    <FacultyAndStaffResults>
      {searchTerm && searchTerm.length > 0 && (
        <div className="results-search-message">
          <span>Your search for </span>
          <span className="search-message-emphasis">{searchTerm} </span>
          <span> returned </span>
          <span className="search-message-emphasis">{totalResults} </span>
          <span>faculty and staff results </span>
        </div>
      )}
      {profiles.length > 0 && (
        <div>
          <div className="results-title">{titleText}</div>
          <ASUProfileCardList profiles={profiles} />
          <Pagination
            type="default"
            background="white"
            totalPages={Math.ceil(totalResults / resultsPerPage)}
            onChange={(e, action) => onPageChange(action)}
          />
        </div>
      )}
      {profiles.length === 0 && searchTerm.length > 0 && (
        <div className="results-title">Please try a different search term</div>
      )}
    </FacultyAndStaffResults>
  );
};

ASUFacultyAndStaffResults.propTypes = {
  profiles: PropTypes.arrayOf(profileCardType).isRequired,
  searchTerm: PropTypes.string.isRequired,
  title: PropTypes.string,
  onPageChange: PropTypes.func,
  totalResults: PropTypes.number,
  resultsPerPage: PropTypes.number,
};

export { ASUFacultyAndStaffResults };
