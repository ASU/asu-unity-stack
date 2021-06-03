// @ts-check
import { Button } from "@asu-design-system/components-core/src/components";
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
    onSearch?.(keyword);
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
      <Button
        color="maroon"
        label="Search now"
        ariaLabel="Search now"
        size="default"
        onClick={handleSearch}
      >
        Search now
      </Button>
    </Section>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export { SearchBar };
