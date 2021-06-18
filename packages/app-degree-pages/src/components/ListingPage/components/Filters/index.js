// @ts-check
import { Button } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React from "react";

import {
  locationOptions,
  asuLocalOptions,
  acceleratedConcurrentOptions,
} from "../../../../core/models/filters-options";
import { SelectFormGroup } from "./components";
import { Section, ButtonLink } from "./index.style";

/**
 *  @typedef  {{
 *    locations?: string [],
 *    asuLocals?: string [],
 *    acceleratedConcurrent: "acceleratedConcurrent" | "concurrentDegrees" | "all"
 * }} FiltersState
 */

/**
 *
 * @typedef {{
 *  value: FiltersState
 *  onValueChange: () => void
 *  onApplyFilters: (
 *    data: {
 *      location: string[],
 *      acceleratedConcurrent: string
 *    }
 * ) => void
 *  onCleanFilters: () => void
 * }} FilterProps
 */

/**
 *
 * @param {FilterProps} props
 * @returns {JSX.Element}
 */

const INITIAL_STATE = {
  locations: [],
  asuLocals: [],
  acceleratedConcurrent: acceleratedConcurrentOptions[0].value,
};

const Filters = ({ value, onValueChange, onApplyFilters, onCleanFilters }) => {
  const handleChangeMultipleField = (id, event) => {
    const stateMap = {
      asuLocal: () => {
        const locations = value.locations.includes("ONLNE")
          ? [...value.locations]
          : ["ONLNE", ...value.locations];

        const asuLocals = Array.from(
          event.target.selectedOptions,
          item => item.value
        );

        onValueChange({
          ...value,
          locations,
          asuLocals,
        });
      },
      location: () => {
        const locations = value.asuLocals[0]
          ? [
              "ONLNE",
              ...Array.from(event.target.selectedOptions, item =>
                item.value !== "ONLNE" ? item.value : ""
              ),
            ]
          : Array.from(event.target.selectedOptions, item => item.value);

        onValueChange({
          ...value,
          locations,
        });
      },
    };
    const renderedValue = () =>
      stateMap[id]
        ? stateMap[id]()
        : () =>
            onValueChange({
              ...value,
              [id]: Array.from(
                event.target.selectedOptions,
                item => item.value
              ),
            });

    renderedValue();
  };

  const handleChangeField = (id, event) => {
    onValueChange({ ...value, [id]: event.target.value });
  };

  const handleApplyFilters = () => {
    const { asuLocals, ...filters } = value;
    onApplyFilters?.(filters);
  };

  const handleCleanFilters = () => {
    onValueChange(INITIAL_STATE);
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
            selected={value.locations}
            options={locationOptions}
            onChange={handleChangeMultipleField}
          />
        </div>
        <div className="col-lg-4 col-md-12">
          <SelectFormGroup
            multiple
            id="asuLocal"
            label="ASU Local"
            selected={value.asuLocals}
            options={asuLocalOptions}
            onChange={handleChangeMultipleField}
          />
        </div>
        <div className="col-lg-4 col-md-12">
          <SelectFormGroup
            id="acceleratedConcurrent"
            label="Accelerated/Concurrent"
            selected={value.acceleratedConcurrent}
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
  value: PropTypes.shape({
    locations: PropTypes.arrayOf(PropTypes.string),
    asuLocals: PropTypes.arrayOf(PropTypes.string),
    acceleratedConcurrent: PropTypes.string,
  }),
  onValueChange: PropTypes.func,
  onApplyFilters: PropTypes.func,
  onCleanFilters: PropTypes.func,
};

export { Filters };
