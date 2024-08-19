import PropTypes from "prop-types";
import React from "react";

import { engineNames } from "../../../helpers/search";
import { ASUSearchResultsList } from "../../../SearchResultsList/index";
import { LocalTabLayout } from "./index.styles";

/**
 * React component for displaying search results on a local tab based on the url_host param.
 *
 * @param {Object} props - The props for configuring the LocalTab component.
 * @param {Object} props.engines - The search engines for different categories.
 * @param {string} props.term - The search term.
 * @param {string} props.site - The specific site to display results for.
 * @param {boolean} props.loggedIn - Indicates whether the user is logged in.
 * @returns {JSX.Element} The LocalTab component.
 */

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
