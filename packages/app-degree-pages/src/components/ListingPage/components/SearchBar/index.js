// @ts-check
import { Button } from "@asu-design-system/components-core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  label[for="search-field"] {
    margin-bottom: 0;
  }
`;

/**
 * @typedef {{
 *  onSearch?: (keyword: string) => void
 * }} SearchBarProps
 */

/**
 *
 * @param {SearchBarProps} props
 * @returns {JSX.Element}
 */

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    onSearch?.(keyword);
  };

  return (
    <Section className="container mt-5">
      <form className="uds-form p-0 col-md-6 col-sm-12">
        <div className="form-group mb-0 mr-2">
          <label htmlFor="search-field">Search</label>

          <div className="d-flex row align-items-baseline g-3">
            <div className="col-sm-12 col-md-6 align-self-end">
              <input
                id="search-field"
                value={keyword}
                type="text"
                className="form-control"
                placeholder="Search degree programs"
                onChange={e => setKeyword(e.target.value)}
              />
            </div>

            <div className="col-sm-12 col-md-6">
              <Button
                color="maroon"
                label="Search now"
                ariaLabel="Search now"
                size="default"
                onClick={handleSearch}
              />
            </div>
          </div>
        </div>
      </form>
    </Section>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export { SearchBar };
