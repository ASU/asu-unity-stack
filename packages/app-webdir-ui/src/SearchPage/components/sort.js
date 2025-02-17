import PropTypes from "prop-types";
import React, { useState, useEffect, useId } from "react";

import { trackGAEvent } from "../../../../../shared";
import { SortLayout } from "./index.styles";

/**
 * React component for selecting and displaying sorting options.
 *
 * @param {Object} props - The props for configuring the sorting picker.
 * @param {string} props.sort - The currently selected sort option.
 * @param {function} props.onChange - The function to handle sort option changes.
 * @param {Array} [props.customSortOptions] - Custom sorting options to display.
 * @returns {JSX.Element} The SortPicker component.
 */

const SortPicker = ({ sort, onChange, customSortOptions }) => {
  const [defaultSortValue, setDefaultSortValue] = useState(sort);
  const sortLabelId = useId();
  const sortOptions = customSortOptions || [
    { value: "_score_desc", label: "Relevancy" },
    { value: "last_name_asc", label: "Last Name (ascending)" },
    { value: "last_name_desc", label: "Last Name (descending)" },
  ];

  const checkIfDefaultSortInOptions = sortParam => {
    const arr = sortOptions.filter(
      option => option.value === sortParam && !option.disabled
    );
    if (arr.length >= 1) {
      setDefaultSortValue(arr[0].value);
    } else {
      setDefaultSortValue("default");
    }
  };

  const getSortEventText = () => {
    let text = sortOptions.find(op => {
      return op.value === sort;
    })?.label;
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

  useEffect(() => {
    checkIfDefaultSortInOptions(sort);
    return () => setDefaultSortValue("default");
  }, [sort]);

  return (
    <SortLayout>
      <form className="uds-form sort-form faculty-sort">
        <div className="form-group">
          <label htmlFor={sortLabelId}>Sort by</label>
          <select
            className="form-select"
            id={sortLabelId}
            onChange={event => {
              updateSort(event.target.value);
              setDefaultSortValue(event.target.value);
            }}
            onClick={openSort}
            value={defaultSortValue}
          >
            {sortOptions.map(op =>
              !Object.prototype.hasOwnProperty.call(op, "disabled") ? (
                <option key={op.label} value={op.value}>
                  {op.label === "Relevancy" ? "Sort by Relevancy" : op.label}
                </option>
              ) : (
                <option disabled key={op.label} value="default">
                  {op.label}
                </option>
              )
            )}
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
