import PropTypes from "prop-types";
import React from "react";

import { engineNames } from "../../../helpers/search";
import { ASUSearchResultsList } from "../../../SearchResultsList/index";
import { StudentsTabLayout } from "./index.styles";

/**
 * React component for displaying search results on the Students tab.
 *
 * @param {Object} props - The props for configuring the StudentsTab component.
 * @param {Object} props.engines - The search engines for different categories.
 * @param {string} props.term - The search term.
 * @param {boolean} props.loggedIn - Indicates whether the user is logged in.
 * @returns {JSX.Element} The StudentsTab component.
 */

const StudentsTab = ({ engines, term, loggedIn }) => {
  return (
    <StudentsTabLayout>
      <ASUSearchResultsList
        term={term}
        engine={engines[engineNames.STUDENTS]}
        itemsPerPage={6}
        type="full"
        GASource="all student results"
        titleText="All Student results"
        loggedIn={loggedIn}
        showSearchMessage
        restClientTag="asuis"
      />
    </StudentsTabLayout>
  );
};

StudentsTab.propTypes = {
  term: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  engines: PropTypes.object,
  loggedIn: PropTypes.bool,
};

export { StudentsTab };
