import PropTypes from "prop-types";
import React from "react";

import { trackGAEvent } from "../../core/services/googleAnalytics";
import { SortLayout } from "./index.styles";

const SortPicker = ({ sort, onChange, customSortOptions }) => {
  const sortOptions = customSortOptions || [
    { value: "_score_desc", label: "Relevancy" },
    { value: "last_name_asc", label: "Last Name (ascending)" },
    { value: "last_name_desc", label: "Last Name (descending)" },
  ];

  const getSortEventText = () => {
    let text = sortOptions.find(op => {
      return op.value === sort;
    }).label;
    if (text === "Relevancy") {
      text = "Sort by Relevancy";
    }
    return text;
  };

  const openSort = () => {
    trackGAEvent({
      event: "collapse",
      action: "open",
      name: "onclick",
      type: "click",
      section: "all asu search",
      text: getSortEventText(),
    });
  };

  const updateSort = newSort => {
    onChange(newSort);
    trackGAEvent({
      event: "collapse",
      action: "close",
      name: "onclick",
      type: "click",
      section: "all asu search",
      text: getSortEventText(),
    });
  };

  return (
    <SortLayout>
      <form className="uds-form sort-form faculty-sort">
        <div className="form-group">
          <label htmlFor="sortBySelect">Sort by</label>
          <select
            className="form-control"
            id="sortBySelect"
            value={sort}
            onChange={event => updateSort(event.target.value)}
            onClick={openSort}
          >
            {sortOptions.map(op => ( op.value
              ?
              <option key={op.value} value={op.value}>
                {op.label === "Relevancy" ? "Sort by Relevancy" : op.label}
              </option>
              : <option disabled selected key={op.value} value={op.value}>
                {op.label}
              </option>
            ))}
          </select>
        </div>
      </form>
    </SortLayout>
  );
};

SortPicker.propTypes = {
  sort: PropTypes.string,
  onChange: PropTypes.func,
  customSortOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export { SortPicker };
