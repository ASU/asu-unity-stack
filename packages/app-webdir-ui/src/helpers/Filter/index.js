import PropTypes from "prop-types";
import React, { useState, useRef, useEffect } from "react";

import { FilterContainer } from "./index.styles";

const FilterComponent = ({
  filterLabel,
  choices = [],
  onChoose = () => {},
  resetFilters = () => {},
}) => {
  const [selected, setSelected] = useState(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [totalChoices, setTotalChoices] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const totalChildren = containerRef.current.children.length;
      setTotalChoices(totalChildren);
    }
  }, []);

  const handleKeyPress = event => {
    if (
      event.key === "ArrowRight" &&
      focusedIndex + 1 < totalChoices &&
      containerRef.current
    ) {
      const focusedItem = containerRef.current?.children[focusedIndex + 1];
      setFocusedIndex(focusedIndex + 1);
      focusedItem.focus();
    } else if (
      event.key === "ArrowLeft" &&
      focusedIndex - 1 >= 0 &&
      containerRef.current
    ) {
      const focusedItem = containerRef.current.children[focusedIndex - 1];
      setFocusedIndex(focusedIndex - 1);
      focusedItem.focus();
    }
  };

  const handleChoose = choice => {
    setSelected(choice);
    onChoose(choice);
  };

  return (
    <FilterContainer className="filter-container">
      <legend>{filterLabel}</legend>
      <div
        role="radiogroup"
        tabIndex={0}
        onKeyDown={handleKeyPress}
        className="choices-container"
        ref={containerRef}
        aria-label={`${filterLabel} filter options}`}
      >
        {resetFilters && (
          <button
            role="radio"
            type="button"
            onClick={e => {
              e.preventDefault();
              handleChoose(null);
              resetFilters();
            }}
            tabIndex={-1}
            aria-label={`Reset ${filterLabel}`}
            aria-checked={selected === null}
          >
            All
          </button>
        )}
        {choices.map(choice => (
          <button
            role="radio"
            type="button"
            key={choice}
            onClick={e => {
              e.preventDefault();
              handleChoose(choice);
            }}
            aria-checked={selected === choice}
            className={selected === choice ? "selected" : ""}
            aria-label={`Filter by ${choice}`}
            tabIndex={-1}
          >
            {choice}
          </button>
        ))}
      </div>
    </FilterContainer>
  );
};

FilterComponent.propTypes = {
  filterLabel: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChoose: PropTypes.func.isRequired,
  resetFilters: PropTypes.func,
};

export { FilterComponent };
