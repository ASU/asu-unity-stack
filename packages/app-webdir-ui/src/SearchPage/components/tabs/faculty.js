import PropTypes from "prop-types";
import React from "react";

import { engineNames } from "../../../helpers/search";
import { ASUSearchResultsList } from "../../../SearchResultsList/index";
import { SortPicker } from "../sort";
import { FacultyTabLayout } from "./index.styles";

const FacultyTab = ({ engines, term, sort, onSortChange }) => {
  return (
    <FacultyTabLayout>
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
        />
      </div>
      <div className="faculty-sort">
        <SortPicker sort={sort} onChange={val => onSortChange(val)} />
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
