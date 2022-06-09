import PropTypes from "prop-types";
import React from "react";

import { engineNames } from "../../../helpers/search";
import { ASUSearchResultsList } from "../../../SearchResultsList/index";
import { SearchMessage } from "../SearchMessage";
import { StudentsTabLayout } from "./index.styles";

const StudentsTab = ({ engines, term, loggedIn }) => {
  return (
    <StudentsTabLayout>
      {!loggedIn && (
        <div className="all-message">
          <SearchMessage
            term={term}
            number={0}
            loggedIn={loggedIn}
            engine="web_dir_students"
          />
        </div>
      )}
      <ASUSearchResultsList
        term={term}
        engine={engines[engineNames.STUDENTS]}
        itemsPerPage={6}
        type="full"
        GASource="all student results"
        titleText="All Student results"
        loggedIn={loggedIn}
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
