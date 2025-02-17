/* eslint-disable react/prop-types */
// @ts-check
import PropTypes from "prop-types";
import React, { createContext, useMemo } from "react";

import { resolveDefaultProps } from "../models";

/**
 * @type {React.Context<{
 *  state:  {
 *    listPageProps: import("src").ListingPageProps
 *    detailPageProps: import("src").DetailPageProps
 * }
 *  defaultState: {
 *    listingPageDefault: import("src").ListingPageProps
 *    detailPageDefault: import("src").DetailPageProps
 *  }
 * }>}
 */

const AppContext = createContext(null);

/**
 *
 * @param {{
 *  listPageProps?: import("src").ListingPageProps
 *  detailPageProps?: import("src").DetailPageProps
 *  children: JSX.Element | JSX.Element []
 * }} props
 */
const AppProvider = ({ listPageProps, detailPageProps, children }) => {
  const { detailPageDefault, listingPageDefault } = useMemo(
    () => resolveDefaultProps((listPageProps || detailPageProps).appPathFolder),
    []
  );

  const defaultState = {
    detailPageDefault,
    listingPageDefault,
  };

  const state = {
    listPageProps,
    detailPageProps,
  };

  return (
    <AppContext.Provider
      value={{
        state,
        defaultState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  listPageProps: PropTypes.shape({}),
  detailPageProps: PropTypes.shape({}),
};

export { AppContext, AppProvider };
