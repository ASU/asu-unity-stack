import PropTypes from "prop-types";
import React, { createContext, useContext } from "react";

import { HeaderPropTypes } from "../models/app-prop-types";

const AppContext = createContext();

const AppContextProvider = ({ initialValue, children }) => {
  return (
    <AppContext.Provider value={initialValue}>{children}</AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  initialValue: PropTypes.shape(HeaderPropTypes).isRequired,
  children: PropTypes.node.isRequired,
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

export { AppContextProvider, useAppContext };
