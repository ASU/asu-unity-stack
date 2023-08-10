import PropTypes from "prop-types";
import React, { useState } from "react";

import { FilterContainer } from "./index.styles";

const FilterComponent = ({
  filterLabel,
  choices = [],
  onChoose = () => {},
  resetFilters = () => {},
}) => {
  const [selected, setSelected] = useState(null);

  const handleChoose = choice => {
    setSelected(choice);
    onChoose(choice);
  };

  return (
    <FilterContainer className="filter-container">
      <legend>{filterLabel}</legend>
      <div className="choices-container">
        {resetFilters && (
          <a
            href="#all"
            onClick={e => {
              e.preventDefault();
              handleChoose(null);
              resetFilters();
            }}
          >
            All
          </a>
        )}
        {choices.map(choice => (
          <a
            key={choice}
            href={`#${choice}`}
            onClick={e => {
              e.preventDefault();
              handleChoose(choice);
            }}
            className={selected === choice ? "selected" : ""}
            aria-label={`Filter by ${choice}`}
          >
            {choice}
          </a>
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
