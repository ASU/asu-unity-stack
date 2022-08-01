import PropTypes from "prop-types";
import React from "react";

import { engineNames } from "../../../helpers/search";
import { ASUSearchResultsList } from "../../../SearchResultsList/index";
import { LocalTabLayout } from "./index.styles";

const LocalTab = ({ engines, term, site, loggedIn }) => {
  return (
    <LocalTabLayout>
      <ASUSearchResultsList
        engine={engines[engineNames.SITES_LOCAL]}
        term={term}
        itemsPerPage={6}
        type="full"
        GASource={site}
        titleText={site}
        loggedIn={loggedIn}
      />
    </LocalTabLayout>
  );
};

LocalTab.propTypes = {
  term: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  engines: PropTypes.object,
  site: PropTypes.string,
  loggedIn: PropTypes.bool,
};

export { LocalTab };
