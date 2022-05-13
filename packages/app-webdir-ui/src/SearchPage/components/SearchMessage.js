import PropTypes from "prop-types";
import React from "react";

import { SearchMessageLayout } from "./index.styles";

const SearchMessage = ({ term, number }) => {
  return (
    <SearchMessageLayout>
      <span>Your search for </span>
      <span className="search-message-emphasis">{term} </span>
      <span>returned </span>
      <span className="search-message-emphasis">{number} </span>
      <span>results </span>
    </SearchMessageLayout>
  );
};

SearchMessage.propTypes = {
  term: PropTypes.string,
  number: PropTypes.number,
};

export { SearchMessage };
