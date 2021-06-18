// @ts-check

import PropTypes from "prop-types";
import React from "react";

import { idGenerator } from "../../../../core/utils";

/**
 *
 * @param {{
 *  appliedFilters: string []
 *  onRemoveFilter: (filterId: string) => void
 * }} props
 * @returns
 */
function FiltersSummary({ appliedFilters = [], onRemoveFilter }) {
  const genFilterId = idGenerator("filter-");
  const template = (
    <div>
      <header>
        <strong>Applied filters</strong>
      </header>
      <div>
        {appliedFilters.map(filterValue => (
          <span
            key={genFilterId.next().value}
            role="button"
            tabIndex={-1}
            onKeyDown={() => onRemoveFilter(filterValue)}
            onClick={() => onRemoveFilter(filterValue)}
          >
            <span className="badge rounded-pill bg-secondary mr-1 pr-1">
              <span>{filterValue}</span>
              <i className="fas fa-times pl-1" />
            </span>
          </span>
        ))}
      </div>
    </div>
  );

  return template;
  // return appliedFilters.length > 0 ? template : null;
}

FiltersSummary.propTypes = {
  appliedFilters: PropTypes.arrayOf(PropTypes.string),
  onRemoveFilter: PropTypes.func,
};

export { FiltersSummary };
