// @ts-check

import PropTypes from "prop-types";
import React from "react";

import { filterValueShape } from "../../../../core/models";
import { idGenerator } from "../../../../core/utils";

/**
 * @param {{
 *  value: import("../Filters").FiltersState
 *  onRemove: (filterName: string, filter: import("../Filters").FilterOption) => void
 * }} propsÎ
 * @returns {JSX.Element}
 */
function FiltersSummary({
  value: { isActive, locations, asuLocals, acceleratedConcurrent },
  onRemove,
}) {
  const genFilterId = idGenerator("filter-");
  const filterCount = locations.length + asuLocals.length;

  const SummaryItem = (filterName, filter) => (
    <span
      key={genFilterId.next().value}
      tabIndex={-1}
      role="button"
      aria-label={`Remove filter ${filter.text}`}
      data-filter-id={filterName}
      onKeyDown={() => onRemove(filterName, filter)}
      onClick={() => onRemove(filterName, filter)}
      className="btn btn-tag btn-tag-alt-white mr-2"
    >
      <span>{filter.text}</span>
      <i className="fas fa-times pl-1" />
    </span>
  );

  return (
    <div>
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
            {(acceleratedConcurrent.value !== "all"
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
