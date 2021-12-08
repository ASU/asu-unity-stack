import { Button, Pagination } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

import { FacultyAndStaffResults } from "./index.styles";

const ASUFacultyAndStaffResults = ({
  children,
  searchTerm,
  onPageChange,
  totalResults,
  resultsPerPage,
  currentPage,
  title,
  size,
  summary,
  anonymized
}) => {
  const goToFaculty = () => 0;

  return (
    <FacultyAndStaffResults>
      {children.length > 0 && (
        <div>
          <div
            className={
              size === "micro" ? "results-title-small" : "results-title"
            }
          >
            {title}
          </div>
          <div className={summary ? "summary" : ""}>{children}</div>
          {size !== "micro" && !summary && (
            <Pagination
              type="default"
              background="white"
              currentPage={currentPage}
              totalPages={Math.ceil(totalResults / resultsPerPage)}
              onChange={(e, action) => onPageChange(action)}
            />
          )}
          {size !== "micro" && summary && (
            <div className="summary-button">
              <Button
                color="maroon"
                label="See all results from subdomain"
                size="small"
                onClick={() => goToFaculty()}
              />
            </div>
          )}
          {size === "micro" && (
            <div className="micro-options">
              <span>{children.length} total results</span>
              <Button
                color="maroon"
                label="See all results"
                size="small"
                onClick={() => goToFaculty()}
              />
            </div>
          )}
        </div>
      )}
      {children.length === 0 && searchTerm.length > 0 && (
        <div className="results-title">Please try a different search term</div>
      )}
    </FacultyAndStaffResults>
  );
};

ASUFacultyAndStaffResults.propTypes = {
  children: PropTypes.oneOf(
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ).isRequired,
  searchTerm: PropTypes.string.isRequired,
  onPageChange: PropTypes.func,
  totalResults: PropTypes.number,
  resultsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  title: PropTypes.string,
  size: PropTypes.string,
  summary: PropTypes.bool,
  anonymized: PropTypes.bool,
};

export { ASUFacultyAndStaffResults };
