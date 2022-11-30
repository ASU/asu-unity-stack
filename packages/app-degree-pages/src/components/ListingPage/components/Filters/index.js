// @ts-check
import PropTypes from "prop-types";
import React from "react";
import { Button } from "../../../../../../components-core/src/components/Button";

import {
  locationOptions,
  filterValueShape,
  asuLocalOptions,
  acceleratedConcurrentOptions,
} from "../../../../core/models";
import { trackGAEvent } from "../../../../core/services/google-analytics";
import { SelectFormGroup } from "./components";
import { Section, ButtonLink } from "./index.style";

const inputsDefaultGAEvent = {
  event: "select",
  action: "click",
  name: "onclick",
};

const buttonsDefaultGAEvent = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
};

/**
 *
 * @typedef {{
 *  value: import("src").FiltersState
 *  onChange: (newFilters: import("src").FiltersState) => void
 *  onApply: (
 *    data: import("src").FiltersState
 * ) => void
 *  onClean: () => void
 * }} FilterProps
 */

/** @type {import("src").FiltersState} */
const INITIAL_FILTER_STATE = {
  isActive: false,
  locations: [],
  asuLocals: [],
  acceleratedConcurrent: { value: "all", text: "" },
  keyword: null,
  blacklistAcadPlans: [],
};

const getOptionProps = option => ({
  id: option.id,
  value: option.value,
  text: option.text,
});

const formatOptions = options => options.map(option => option.text).join(", ");

const trackInputEvent = (type, text) => {
  trackGAEvent({ ...inputsDefaultGAEvent, type, text });
};

const trackButtonEvent = text => {
  trackGAEvent({ ...buttonsDefaultGAEvent, text });
};

/**
 *
 * @param {FilterProps} props
 * @returns {JSX.Element}
 */
const Filters = ({ value, onChange, onApply, onClean }) => {
  const changeLocationField = /**
   * @param {string} targetId
   * @param {{ target: HTMLSelectElement}} event
   */ (targetId, { target: { selectedOptions } }) => {
    let newLocations = [];
    let newAsuLocals = [];
    const selectedItems = Array.from(selectedOptions, getOptionProps);

    const { locations: cachedLocations, asuLocals: cachedAsuLocals } = value;

    const mapValueFor = {
      locationsRender: () => {
        newLocations = selectedItems;
        newAsuLocals = cachedAsuLocals;
      },
      asuLocalsRender: () => {
        newAsuLocals = selectedItems;
        newLocations = cachedLocations;
      },
    };

    mapValueFor[`${targetId}Render`]();
    onChange({
      ...value,
      locations: newLocations,
      asuLocals: newAsuLocals,
    });

    const mapField = {
      locations: "location or online",
      asuLocals: "as local",
    };

    trackInputEvent(mapField[targetId], formatOptions(selectedItems));
  };

  const changeAcceleratedConcurrentField = /**
   * @param {string} targetId
   * @param {{ target: HTMLSelectElement}} event
   */ (targetId, { target: { selectedOptions } }) => {
    onChange({ ...value, [targetId]: getOptionProps(selectedOptions[0]) });
    trackInputEvent(
      "accelerated/concurrent",
      getOptionProps(selectedOptions[0]).text
    );
  };

  const applyFilters = () => {
    onApply?.({
      ...value,
      isActive: true,
    });
  };

  const cleanFilters = () => {
    onChange(INITIAL_FILTER_STATE);
    onClean?.();
  };

  return (
    <Section className="container" data-testid="filters">
      <h4>Filter your results</h4>
      <form className="mt-3 uds-form row">
        <div className="col-lg-4 col-md-12">
          <SelectFormGroup
            multiple
            id="locations"
            label="Campuses or online"
            selected={value.locations.map(item => item.value)}
            options={locationOptions}
            onChange={changeLocationField}
          />
        </div>
        <div className="col-lg-4 col-md-12">
          <SelectFormGroup
            multiple
            id="asuLocals"
            label="ASU location, ASU Local"
            selected={value.asuLocals.map(item => item.value)}
            options={asuLocalOptions}
            onChange={changeLocationField}
          />
        </div>
        <div className="col-lg-4 col-md-12">
          <SelectFormGroup
            id="acceleratedConcurrent"
            label="Accelerated, Concurrent"
            selected={value.acceleratedConcurrent.value}
            options={acceleratedConcurrentOptions}
            onChange={changeAcceleratedConcurrentField}
          />
        </div>
      </form>
      <div className="hint-container">
        <p>
          <small>*CTRL + Click to select multiple</small>
        </p>
      </div>
      <div className="filter-action-buttons">
        <Button
          data-testid="btn-apply-filter"
          color="maroon"
          label="Apply filters"
          ariaLabel="Apply filters"
          size="default"
          onClick={() => {
            applyFilters();
            trackButtonEvent("apply filters");
          }}
        />
        <ButtonLink
          data-testid="btn-clear-filters"
          className="btn btn-link"
          onClick={() => {
            cleanFilters();
            trackButtonEvent("clean filters");
          }}
        >
          Clear filters
        </ButtonLink>
      </div>
    </Section>
  );
};

Filters.propTypes = {
  value: filterValueShape,
  onChange: PropTypes.func,
  onApply: PropTypes.func,
  onClean: PropTypes.func,
};

export { Filters, INITIAL_FILTER_STATE };
