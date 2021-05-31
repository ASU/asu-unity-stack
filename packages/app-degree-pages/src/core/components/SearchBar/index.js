// @ts-check
import PropTypes from "prop-types";
import React, { useState } from "react";

import { Section } from "./index.style";

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
    if (onSearch) onSearch(keyword);
  };

  return (
    <Section className="container mt-2">
      <form className="mt-3 uds-form">
        <div className="form-group mb-0 mr-2">
          <label htmlFor="search-field">Search</label>
          <input
            id="search-field"
            value={keyword}
            type="text"
            className="form-control"
            placeholder="Search degree programs"
            onChange={e => setKeyword(e.target.value)}
          />
        </div>
      </form>
      <button
        className="btn btn-maroon mt-2"
        type="button"
        onClick={handleSearch}
      >
        Search now
      </button>
    </Section>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export { SearchBar };
