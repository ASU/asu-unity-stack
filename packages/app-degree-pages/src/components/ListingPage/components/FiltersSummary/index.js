// @ts-check

import PropTypes from "prop-types";
import React from "react";

import { idGenerator, toTitleCase } from "../../../../core/utils";

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
            aria-label={`Remove filter ${filterValue}`}
            tabIndex={-1}
            onKeyDown={() => onRemoveFilter(filterValue)}
            onClick={() => onRemoveFilter(filterValue)}
            className="btn btn-tag btn-tag-alt-white mr-2"
          >
            <span>{toTitleCase(filterValue)}</span>
            <i className="fas fa-times pl-1" />
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
