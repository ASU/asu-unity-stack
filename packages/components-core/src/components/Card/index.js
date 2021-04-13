import { h } from "preact";
import classNames from "classnames";
import dompurify from "dompurify";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { UdsButton } from "../UdsButton";
import { UdsTagButton } from "../UdsTagButton";
import { EventLocation } from "../EventLocation";

import UdsStyles from "../../../assets/css/bootstrap-asu.min.module.css";

const sanitizeDangerousMarkup = content => {
  const sanitizer = dompurify.sanitize;

  return { __html: sanitizer(content) };
};

const EventInfo = ({ eventFormat, eventTime, eventLocation }) => {
  if ("inline" === eventFormat) {
    return (
      <div className={UdsStyles["card-event-details"]}>
        <div className={UdsStyles["card-event-icons"]}>
          <div>
            <FontAwesomeIcon icon={faCalendar} />
          </div>
          <div dangerouslySetInnerHTML={sanitizeDangerousMarkup(eventTime)} />
        </div>
        <div className={UdsStyles["card-event-icons"]}>
          <div>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <span>
            <EventLocation title={eventLocation} />
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={UdsStyles["card-event-details"]}>
        <div className={UdsStyles["card-event-icons"]}>
          <div>
            <FontAwesomeIcon icon={faCalendar} />
          </div>
          <div dangerouslySetInnerHTML={sanitizeDangerousMarkup(eventTime)} />
        </div>
      </div>
      <div className={UdsStyles["card-event-details"]}>
        <div className={UdsStyles["card-event-icons"]}>
          <div>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <span>
            <EventLocation title={eventLocation} />
          </span>
        </div>
      </div>
    </>
  );
};

const CardContent = ({
  type,
  body,
  eventFormat,
  eventLocation,
  eventTime,
  title,
  link,
  buttons,
  tags,
}) => (
  <>
    <div className={UdsStyles["card-header"]}>
      <h3 className={UdsStyles["card-title"]}>{title}</h3>
    </div>
    <div className={UdsStyles["card-body"]}>
      <p className={UdsStyles["card-text"]}>{body}</p>
    </div>
    {type === "event" && (
      <EventInfo
        eventFormat={eventFormat}
        eventTime={eventTime}
        eventLocation={eventLocation}
      />
    )}
    {buttons &&
      buttons.map((button, index) => (
        <div key={index} className={UdsStyles["card-button"]}>
          <UdsButton color={button.color}>{button.label}</UdsButton>
        </div>
      ))}
    {tags && (
      <div className={UdsStyles["card-tags"]}>
        {tags.map((tag, index) => (
          <UdsTagButton key={index} color={tag.color}>
            {tag.label}
          </UdsTagButton>
        ))}
      </div>
    )}
  </>
);

export const Card = ({
  type,
  width,
  horizontal,
  clickable,
  image,
  imageAltText,
  icon,
  title,
  link,
  body,
  eventFormat,
  eventLocation,
  eventTime,
  buttons,
  tags,
}) => {
  const cardClass = classNames(UdsStyles["card"], {
    [UdsStyles[`card-degree`]]: type === "degree",
    [UdsStyles[`card-event`]]: type === "event",
    [UdsStyles[`card-story`]]: type === "story",
    [UdsStyles[`w-${width.replace("%", "")}`]]: width !== "100%",
    [UdsStyles[`card-horizontal`]]: horizontal,
    [UdsStyles[`card-hover`]]: clickable,
  });

  return (
    <>
      <div className={cardClass}>
        {image && (
          <img
            className={UdsStyles["card-img-top"]}
            src={image}
            alt={imageAltText}
          />
        )}
        {/* TODO: implement FA icon
          {!image && icon} */}
        {horizontal ? (
          <div className={UdsStyles["card-content-wrapper"]}>
            {
              <CardContent
                type={type}
                body={body}
                eventFormat={eventFormat}
                eventLocation={eventLocation}
                eventTime={eventTime}
                title={title}
                link={link}
                buttons={buttons}
                tags={tags}
              />
            }
          </div>
        ) : (
          <CardContent
            type={type}
            body={body}
            eventFormat={eventFormat}
            eventLocation={eventLocation}
            eventTime={eventTime}
            title={title}
            link={link}
            buttons={buttons}
            tags={tags}
          />
        )}
      </div>
    </>
  );
};

Card.propTypes = {
  /**
   * Type of card
   */
  type: PropTypes.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: PropTypes.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: PropTypes.bool,
  /**
   * Enable clickable card
   */
  clickable: PropTypes.bool,
  /**
   * Card title
   */
  title: PropTypes.string.isRequired,
  /**
   * Card target (either the card title or the clickable card links to this url)
   */
  link: PropTypes.string.isRequired,
  /**
   * Card body text
   */
  body: PropTypes.string,
  /**
   * Event info format
   */
  eventFormat: PropTypes.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: PropTypes.string,
  /**
   * Event start time
   */
  eventTime: PropTypes.string,
  /**
   * FontAwesome React icon alternative to image (optional -- only valid for default cards)
   */
  icon: PropTypes.elementType, // React Component
  /**
   * Card header image
   */
  image: PropTypes.string,
  /**
   * Card header image alt text
   */
  imageAltText: PropTypes.string,
  /**
   * Buttons
   */
  // buttons: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  //     size: PropTypes.oneOf(["default", "small", "xsmall"]),
  //     label: PropTypes.string.isRequired(),
  //     clickTarget: PropTypes.string,
  //   })
  // ),
  /**
   * Tags
   */
  // tags: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     color: PropTypes.oneOf(["white", "gray", "dark"]),
  //     label: PropTypes.string.isRequired(),
  //     clickTarget: PropTypes.string,
  //   })
  // ),
};

Card.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: false,
  clickable: false,
  body: "",
  eventFormat: "stack",
  eventTime: "",
  eventLocation: "",
  icon: "",
  image: "",
  imageAltText: "",
  // buttons: [],
  // tags: [],
};
