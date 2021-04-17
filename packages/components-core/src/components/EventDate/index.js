import React from "react";
import PropTypes from "prop-types";

export const EventDate = ({ startTime, stopTime }) => {
  return (
    <div>
      {startTime}
      {stopTime && ` - ${stopTime}`}
    </div>
  );
};

EventDate.propTypes = {
  /**
   * Start time
   */
  startTime: PropTypes.string.isRequired,
  /**
   * Stop time
   */
  stopTime: PropTypes.string,
};

EventDate.defaultProps = {
  stopTime: null,
};
