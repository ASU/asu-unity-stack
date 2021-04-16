import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import dompurify from "dompurify";
import PropTypes from "prop-types";
import React from "react";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";
import { EventLocation } from "../EventLocation";
import { UdsButton } from "../UdsButton";
import { UdsTagButton } from "../UdsTagButton";

const sanitizeDangerousMarkup = content => {
  const sanitizer = dompurify.sanitize;

  return { __html: sanitizer(content) };
};

export const Card = ({
  type,
  width,
  horizontal,
  clickable,
  image,
  imageAltText,
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
  type: PropTypes.oneOf(["default", "degree", "event", "news", "story"]),
  width: PropTypes.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: PropTypes.bool,
  clickable: PropTypes.bool,
  title: PropTypes.string.isRequired,
  link: PropTypes.string, //TODO: should this be required?
  body: PropTypes.string,
  eventFormat: PropTypes.oneOf(["stack", "inline"]),
  eventLocation: PropTypes.string,
  eventTime: PropTypes.string,
  icon: PropTypes.elementType, // React Component
  image: PropTypes.string,
  imageAltText: PropTypes.string,
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
};

/*
 * Sub-components defined after this
 */

const CardContent = ({
  type,
  body,
  eventFormat,
  eventLocation,
  eventTime,
  title,
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

const EventInfo = ({ eventFormat, eventTime, eventLocation }) => {
  if (eventFormat === "inline") {
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
