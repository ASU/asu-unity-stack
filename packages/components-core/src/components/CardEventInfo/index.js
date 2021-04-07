import { h } from "preact";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { EventDate } from "../EventDate";
import { EventLocation } from "../EventLocation";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

const dateTimeSection = (startTime, stopTime) => (
  <>
    <div>
      <FontAwesomeIcon icon={faCalendar} />
    </div>
    <EventDate startTime={startTime} stopTime={stopTime} />
  </>
);

const locationSection = location => (
  <>
    <div>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
    </div>
    <EventLocation title={location} />
  </>
);

export const CardEventInfo = ({ display, startTime, stopTime, location }) => {
  if ("inline" === display) {
    return (
      <div className={UdsStyles["card-event-details"]}>
        <div className={UdsStyles["card-event-icons"]}>
          {startTime && dateTimeSection(startTime, stopTime)}
        </div>
        <div className={UdsStyles["card-event-icons"]}>
          {location && locationSection(location)}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={UdsStyles["card-event-details"]}>
        <div className={UdsStyles["card-event-icons"]}>
          {startTime && dateTimeSection(startTime, stopTime)}
        </div>
      </div>
      <div className={UdsStyles["card-event-details"]}>
        <div className={UdsStyles["card-event-icons"]}>
          {location && locationSection(location)}
        </div>
      </div>
    </>
  );
};

CardEventInfo.propTypes = {
  /**
   * Display setting
   */
  display: PropTypes.oneOf(["Stack", "Inline"]),
  /**
   * Event start time
   */
  startTime: PropTypes.string,
  /**
   * Event stop time
   */
  stopTime: PropTypes.string,
  /**
   * Event location
   */
  location: PropTypes.string,
};

CardEventInfo.defaultProps = {
  display: "Stack",
  startTime: null,
  stopTime: null,
  location: null,
};
