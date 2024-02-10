import PropTypes from "prop-types";
import React from "react";

import { engineNames } from "../../../helpers/search";
import { ASUSearchResultsList } from "../../../SearchResultsList/index";
import { SortPicker } from "../sort";
import { FacultyTabLayout } from "./index.styles";

/**
 * React component for displaying search results on the "Faculty and Staff" tab.
 *
 * @param {Object} props - The props for configuring the FacultyTab component.
 * @param {Object} props.engines - The search engines for different categories.
 * @param {string} props.term - The search term.
 * @param {string} props.sort - The current sort option.
 * @param {function} props.onSortChange - Function to handle sort option change.
 * @returns {JSX.Element} The FacultyTab component.
 */

const FacultyTab = ({ engines, term, sort, onSortChange }) => {
  return (
    <FacultyTabLayout>
      <div className="faculty-sort">
        <SortPicker sort={sort} onChange={val => onSortChange(val)} />
      </div>
      <div className="faculty-results">
        <ASUSearchResultsList
          term={term}
          engine={engines[engineNames.FACULTY]}
          itemsPerPage={6}
          type="full"
          sort={sort}
          GASource="all faculty and staff results"
          titleText="All faculty and staff results"
          showSearchMessage
          restClientTag="asuis"
        />
      </div>
    </FacultyTabLayout>
  );
};

FacultyTab.propTypes = {
  term: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  engines: PropTypes.object,
  sort: PropTypes.string,
  onSortChange: PropTypes.func,
};
export { FacultyTab };
