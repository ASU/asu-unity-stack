// @ts-check
import { Button } from "@asu-design-system/components-core/src/components";
import PropTypes from "prop-types";
import React, { useState } from "react";

import {
  locationOptions,
  asuLocalOptions,
  acceleratedConcurrentOptions,
} from "../../models/filters-options";
import { SelectFormGroup } from "./components";
import { Section, ButtonLink } from "./index.style";

/**
 * @typedef {{
 *  onApplyFilters?: (data: { location: string[], acceleratedConcurrent: string }) => void
 *  onCleanFilters?: () => void
 * }} FilterProps
 */

/**
 *
 * @param {FilterProps} props
 * @returns {JSX.Element}
 */

const INITIAL_STATE = {
  location: [""],
  asuLocal: [""],
  acceleratedConcurrent: "accelerateDegrees",
};

const Filters = ({ onApplyFilters, onCleanFilters }) => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleChangeMultipleField = (id, event) => {
    if (id === "asuLocal") {
      setState({
        ...state,
        location: ["ONLNE"],
        asuLocal: Array.from(event.target.selectedOptions, item => item.value),
      });
    } else {
      setState({
        ...state,
        [id]: Array.from(event.target.selectedOptions, item => item.value),
      });
    }
  };

  const handleChangeField = (id, event) => {
    setState({ ...state, [id]: event.target.value });
  };

  const handleApplyFilters = () => {
    const { asuLocal, ...filters } = state;
    onApplyFilters?.(filters);
  };

  const handleCleanFilters = () => {
    setState(INITIAL_STATE);
    onCleanFilters?.();
  };

  return (
    <Section className="container mt-4 pb-6 mb-6">
      <h4>Filter your results</h4>
      <form className="mt-3 uds-form row">
        <div className="col-lg-4 col-md-12">
          <SelectFormGroup
            multiple
            id="location"
            label="Location or online"
            selected={state.location}
            options={locationOptions}
            onChange={handleChangeMultipleField}
          />
        </div>
        <div className="col-lg-4 col-md-12">
          <SelectFormGroup
            multiple
            id="asuLocal"
            label="ASU Local"
            selected={state.asuLocal}
            options={asuLocalOptions}
            onChange={handleChangeMultipleField}
          />
        </div>
        <div className="col-lg-4 col-md-12">
          <SelectFormGroup
            id="acceleratedConcurrent"
            label="Accelerated/Concurrent"
            selected={state.acceleratedConcurrent}
            options={acceleratedConcurrentOptions}
            onChange={handleChangeField}
          />
        </div>
      </form>
      <div>
        <Button
          color="maroon"
          label="Apply filters"
          ariaLabel="Apply filters"
          size="default"
          onClick={handleApplyFilters}
        >
          Apply filters
        </Button>
        <ButtonLink className="btn btn-link" onClick={handleCleanFilters}>
          Clean filters
        </ButtonLink>
      </div>
    </Section>
  );
};

Filters.propTypes = {
  onApplyFilters: PropTypes.func,
  onCleanFilters: PropTypes.func,
};

export { Filters };
