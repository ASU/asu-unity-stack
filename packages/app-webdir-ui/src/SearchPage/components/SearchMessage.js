import PropTypes from "prop-types";
import React from "react";

import { SearchMessageLayout } from "./index.styles";

const SearchMessage = ({ term, number, loggedIn, engine }) => {
  return (
    <SearchMessageLayout>
      <span>Your search for </span>
      <span className="search-message-emphasis">{term} </span>
      <span>returned </span>
      <span className="search-message-emphasis">{number} </span>
      <span>results </span>
      {!loggedIn && engine === "web_dir_students" && (
        <span>
          <a href="cas/login">Sign in</a> to view results
        </span>
      )}
    </SearchMessageLayout>
  );
};

SearchMessage.propTypes = {
  term: PropTypes.string,
  number: PropTypes.number,
  loggedIn: PropTypes.bool,
  engine: PropTypes.string,
};

export { SearchMessage };
