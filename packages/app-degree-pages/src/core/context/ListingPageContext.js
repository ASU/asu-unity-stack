// @ts-check

import PropTypes from "prop-types";
import React, { createContext } from "react";

/**
 * @type {React.Context<{
 *  columSettings: import("../types/listing-page-types").ColumSettings
 * }>}
 */
const ListingPageContext = createContext(null);

// TODO: may not be necessary. check and in case remove it
const ListingPageProvider = ({ children }) => (
  <ListingPageContext.Provider value={null}>
    {children}
  </ListingPageContext.Provider>
);

ListingPageProvider.propTypes = {
  children: PropTypes.element,
};

export { ListingPageContext, ListingPageProvider };
