import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import dompurify from "dompurify";
import PropTypes from "prop-types";
import React from "react";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";
import { Button } from "../Button";
import { ButtonTag } from "../ButtonTag";
import "./card.css";

const sanitizeDangerousMarkup = content => {
  const sanitizer = dompurify.sanitize;

  return { __html: sanitizer(content) };
};

export const Card = ({
  type,
  width,
  horizontal,
  clickable,
  clickHref,
  image,
  imageAltText,
  title,
  icon,
  body,
  eventFormat,
  eventLocation,
  eventTime,
  buttons,
  tags,
}) => {
  if (clickable && clickHref) {
    return (
      <a role="button" href={clickHref} className="c-card">
        <BaseCard
          type={type}
          width={width}
          horizontal={horizontal}
          clickable={clickable}
          image={image}
          imageAltText={imageAltText}
          title={title}
          icon={icon}
          body={body}
          eventFormat={eventFormat}
          eventLocation={eventLocation}
          eventTime={eventTime}
          buttons={buttons}
          tags={tags}
        />
      </a>
    );
  }

  return (
    <BaseCard
      type={type}
      width={width}
      horizontal={horizontal}
      clickable={clickable}
      image={image}
      imageAltText={imageAltText}
      title={title}
      icon={icon}
      body={body}
      eventFormat={eventFormat}
      eventLocation={eventLocation}
      eventTime={eventTime}
      buttons={buttons}
      tags={tags}
    />
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(["default", "degree", "event", "news", "story"]),
  width: PropTypes.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: PropTypes.bool,
  clickable: PropTypes.bool,
  clickHref: PropTypes.string, // card target if clickable
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType, // React Component
  body: PropTypes.string,
  eventFormat: PropTypes.oneOf(["stack", "inline"]),
  eventLocation: PropTypes.string,
  eventTime: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      ariaLabel: PropTypes.string,
      color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: PropTypes.elementType,
      href: PropTypes.string,
      label: PropTypes.string,
      onClick: PropTypes.func,
      size: PropTypes.oneOf(["default", "small", "xsmall"]),
    })
  ),
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      ariaLabel: PropTypes.string,
      color: PropTypes.oneOf(["white", "gray", "dark"]),
      href: PropTypes.string,
      label: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
};

Card.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: false,
  clickable: false,
  clickHref: undefined,
  body: undefined,
  eventFormat: "stack",
  eventTime: undefined,
  eventLocation: undefined,
  icon: undefined,
  image: undefined,
  imageAltText: undefined,
  buttons: undefined,
  tags: undefined,
};

/*
 * Sub-components defined after this
 */

const BaseCard = ({
  type,
  width,
  horizontal,
  clickable,
  image,
  imageAltText,
  title,
  icon,
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
        {!image && icon && <FontAwesomeIcon icon={icon} />}
        {horizontal ? (
          <div className={UdsStyles["card-content-wrapper"]}>
            <CardContent
              type={type}
              body={body}
              eventFormat={eventFormat}
              eventLocation={eventLocation}
              eventTime={eventTime}
              title={title}
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
            buttons={buttons}
            tags={tags}
          />
        )}
      </div>
    </>
  );
};

BaseCard.propTypes = {
  type: PropTypes.oneOf(["default", "degree", "event", "news", "story"]),
  width: PropTypes.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: PropTypes.bool,
  clickable: PropTypes.bool,
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType, // React Component
  body: PropTypes.string,
  eventFormat: PropTypes.oneOf(["stack", "inline"]),
  eventLocation: PropTypes.string,
  eventTime: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      ariaLabel: PropTypes.string,
      color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: PropTypes.elementType,
      href: PropTypes.string,
      label: PropTypes.string,
      onClick: PropTypes.func,
      size: PropTypes.oneOf(["default", "small", "xsmall"]),
    })
  ),
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      ariaLabel: PropTypes.string,
      color: PropTypes.oneOf(["white", "gray", "dark"]),
      href: PropTypes.string,
      label: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
};

BaseCard.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: false,
  clickable: false,
  body: "",
  eventFormat: "stack",
  eventTime: "",
  eventLocation: "",
  icon: undefined,
  image: "",
  imageAltText: "",
  buttons: undefined,
  tags: undefined,
};

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
      buttons.map(button => (
        <div
          key={`${button.label}-${button.href}`}
          className={UdsStyles["card-button"]}
        >
          <Button
            ariaLabel={button.ariaLabel}
            color={button.color}
            icon={button.icon}
            href={button.href}
            label={button.label}
            onClick={button.onClick}
            size={button.size}
          >
            {button.label}
          </Button>
        </div>
      ))}
    {tags && (
      <div className={UdsStyles["card-tags"]}>
        {tags.map(tag => (
          <ButtonTag
            key={`${tag.label}-${tag.href}`}
            ariaLabel={tag.ariaLabel}
            color={tag.color}
            href={tag.href}
            label={tag.label}
            onClick={tag.onClick}
          >
            {tag.label}
          </ButtonTag>
        ))}
      </div>
    )}
  </>
);

CardContent.propTypes = {
  type: PropTypes.oneOf(["default", "degree", "event", "news", "story"]),
  body: PropTypes.string,
  eventFormat: PropTypes.oneOf(["stack", "inline"]),
  eventLocation: PropTypes.string,
  eventTime: PropTypes.string,
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      ariaLabel: PropTypes.string,
      color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: PropTypes.elementType,
      href: PropTypes.string,
      label: PropTypes.string,
      onClick: PropTypes.func,
      size: PropTypes.oneOf(["default", "small", "xsmall"]),
    })
  ),
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      ariaLabel: PropTypes.string,
      color: PropTypes.oneOf(["white", "gray", "dark"]),
      href: PropTypes.string,
      label: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
};

CardContent.defaultProps = {
  type: "default",
  body: "",
  eventFormat: "stack",
  eventLocation: "",
  eventTime: "",
  buttons: undefined,
  tags: undefined,
};

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
          <div
            dangerouslySetInnerHTML={sanitizeDangerousMarkup(eventLocation)}
          />
        </div>
      </div>
    );
  }

  // else "stacked"
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
            <div
              dangerouslySetInnerHTML={sanitizeDangerousMarkup(eventLocation)}
            />
          </span>
        </div>
      </div>
    </>
  );
};

EventInfo.propTypes = {
  eventFormat: PropTypes.oneOf(["stack", "inline"]),
  eventLocation: PropTypes.string,
  eventTime: PropTypes.string,
};

EventInfo.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: "",
};
