// @ts-check
import PropTypes from "prop-types";
import React, { createContext, useContext } from "react";

const EventsContext = createContext(null);

/**
 *
 * @param {{
 *  initialValue: {
 *    events: object[]
 *  }
 *  children: JSX.Element
 * }} props
 * @returns {JSX.Element}
 */
const EventsContextProvider = ({ initialValue, children }) => {
  return (
    <EventsContext.Provider value={initialValue}>
      {children}
    </EventsContext.Provider>
  );
};

EventsContextProvider.propTypes = {
  initialValue: PropTypes.shape({
    events: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  children: PropTypes.node.isRequired,
};

const useEventsContext = () => {
  const context = useContext(EventsContext);
  if (context === undefined) {
    throw new Error(
      "useEventsContext must be used within a EventsContextProvider"
    );
  }
  return context;
};

export { EventsContextProvider, useEventsContext };
