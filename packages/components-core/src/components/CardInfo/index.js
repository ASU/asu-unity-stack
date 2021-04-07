import { h } from "preact";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

export const CardInfo = ({ displaySetting, dateTime, locationDisplay }) => {
  // Inline view
  if ("Inline" === displaySetting) {
    return (
        <div className={UdsStyles["card-event-details"]}>
          <div className={UdsStyles["card-event-icons"]}>
            {dateTime && (
              <>
                <div>
                  <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div>{dateTime}</div>
              </>
            )}
          </div>
          <div className={UdsStyles["card-event-icons"]}>
            {locationDisplay && (
              <>
                <div>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>{locationDisplay}</div>
              </>
            )}
          </div>
        </div>
      );
  }

  // Stack view
  return (
    <>
      <div className={UdsStyles["card-event-details"]}>
        <div className={UdsStyles["card-event-icons"]}>
          {dateTime && (
            <>
              <div>
                <FontAwesomeIcon icon={faCalendar} />
              </div>
              <div>{dateTime}</div>
            </>
          )}
        </div>
      </div>
      <div className={UdsStyles["card-event-details"]}>
        <div className={UdsStyles["card-event-icons"]}>
          {locationDisplay && (
            <>
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div>{locationDisplay}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

CardInfo.propTypes = {
  /**
   * Display setting
   */
  displaySetting: PropTypes.oneOf(["Stack", "Inline"]),
  /**
   * Date/time
   */
  dateTime: PropTypes.string.isRequired,
  /**
   * Location display
   */
  locationDisplay: PropTypes.string.isRequired,
};

CardInfo.defaultProps = {
  displaySetting: "Stack",
};
