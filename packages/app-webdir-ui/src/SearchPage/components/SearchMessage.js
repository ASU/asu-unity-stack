import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { SearchMessageLayout } from "./index.styles";

const SearchMessage = ({ term, number, loggedIn, engine, GASource }) => {
  const [paramString, setParamString] = useState("");

  function getParamString() {
    let returnToString = "";
    try {
      const paramsIterator = new URLSearchParams(window.location.search);
      const tab = paramsIterator.get("search-tabs");
      const q = paramsIterator.get("q");
      returnToString = `search-tabs=${tab}&q=${q}`;
      return returnToString;
    } catch (error) {
      console.error(error);
      return "";
    }
  }

  useEffect(() => {
    const string = getParamString();
    setParamString(string);
  }, []);

  return (
    <SearchMessageLayout>
      <span>Your search for </span>
      <span className="search-message-emphasis">{term} </span>
      <span>returned </span>
      <span className="search-message-emphasis">{number} </span>
      {GASource === "all faculty and staff results" && (
        <span>faculty and staff </span>
      )}
      <span>
        {" "}
        {!loggedIn && engine === "web_dir_students" && (
          <>public</>
        )} results.{" "}
      </span>
      {!loggedIn && engine === "web_dir_students" && (
        <span>
          <a
            href={`/caslogin?returnto=${encodeURIComponent(
              `/?${paramString}`
            )}`}
          >
            Sign in
          </a>{" "}
          to view all student results.
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
  GASource: PropTypes.string,
};

export { SearchMessage };
