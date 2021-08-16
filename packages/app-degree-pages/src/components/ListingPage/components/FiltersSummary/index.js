// @ts-check

import PropTypes from "prop-types";
import React from "react";

import { filterValueShape, isAccelConcValid } from "../../../../core/models";
import { idGenerator } from "../../../../core/utils";

/**
 * @param {{
 *  value: import("../Filters").FiltersState
 *  onRemove: (filterName: string, filter: import("../Filters").FilterOption) => void
 * }} propsÎ
 * @returns {JSX.Element}
 */
function FiltersSummary({
  value: { isActive, locations, asuLocals, acceleratedConcurrent } = {},
  onRemove,
}) {
  const genFilterId = idGenerator("filter-");
  const filterCount =
    locations?.length +
    asuLocals?.length +
    (isAccelConcValid(acceleratedConcurrent) ? 1 : 0);

  /**
   *
   * @param {"locations" | "asuLocals" | "acceleratedConcurrent"} filterName
   * @param {import("../Filters").FilterOption} filter
   * @returns
   */
  const SummaryItem = (filterName, filter) => (
    <span
      key={genFilterId.next().value}
      tabIndex={-1}
      role="button"
      aria-label={`Remove filter ${filter.text}`}
      data-filter-id={filterName}
      onKeyDown={() => onRemove(filterName, filter)}
      onClick={() => onRemove(filterName, filter)}
      className="btn btn-tag btn-tag-alt-white d-inline-flex align-items-center mr-2"
    >
      <span className="pr-1">{filter.text}</span>
      <i className="fas fa-times" />
    </span>
  );

  return (
    <div data-testid="filters-summary">
      <header>
        <strong>Applied filters</strong>
      </header>
      <div>
        {!isActive || filterCount === 0 ? (
          <span>No filters applied</span>
        ) : (
          <>
            {locations.map(loc => SummaryItem("locations", loc))}
            {asuLocals.map(loc => SummaryItem("asuLocals", loc))}
            {(isAccelConcValid(acceleratedConcurrent)
              ? [acceleratedConcurrent]
              : []
            ).map(acValue => SummaryItem("acceleratedConcurrent", acValue))}
          </>
        )}
      </div>
    </div>
  );
}

FiltersSummary.propTypes = {
  value: filterValueShape,
  onRemove: PropTypes.func,
};

export { FiltersSummary };
