// @ts-check
import { Button } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  label[for="search-field"] {
    margin-bottom: 0;
  }

  &[data-searching="true"] button {
    transform: scale(1.05);
    box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
  }
`;

/**
 * @typedef {{
 *  onSearch: () => void
 *  onChange: (keyword: string) => void
 *  value: string
 * }} SearchBarProps
 */

/**
 *
 * @param {SearchBarProps} props
 * @returns {JSX.Element}
 */

const SearchBar = ({ value, onChange, onSearch }) => {
  const [searching, setSearching] = useState(false);
  return (
    <Section className="container mt-5" data-searching={searching}>
      <form
        className="uds-form p-0 col-md-6 col-sm-12"
        onSubmit={e => {
          e.preventDefault();
          onSearch();
          setSearching(true);
          setTimeout(() => setSearching(false), 500);
        }}
      >
        <div className="form-group mb-0 mr-2">
          <label htmlFor="search-field">Search</label>

          <div className="d-flex row align-items-baseline g-3">
            <div className="col-sm-12 col-md-6 align-self-end">
              <input
                id="search-field"
                value={value}
                type="text"
                className="form-control"
                placeholder="Search degree programs"
                onChange={e => onChange(e.target.value)}
              />
            </div>

            <div className="col-sm-12 col-md-6 mt-2 mt-sm-0">
              <Button
                color="maroon"
                label="Search now"
                ariaLabel="Search now"
                size="default"
                onClick={onSearch}
              />
            </div>
          </div>
        </div>
      </form>
    </Section>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
};

export { SearchBar };
