import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import dompurify from "dompurify";
import PropTypes from "prop-types";
import React from "react";

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
  linkLabel,
  linkUrl,
  tags,
}) => {
  library.add(fab, fas, far);

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
          linkLabel={linkLabel}
          linkUrl={linkUrl}
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
      linkLabel={linkLabel}
      linkUrl={linkUrl}
      tags={tags}
    />
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
   * Card target if clickable
   */
  clickHref: PropTypes.string,
  /**
   * Card title
   */
  title: PropTypes.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: PropTypes.arrayOf(PropTypes.string),
  /**
   * Card body content
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
  linkLabel: PropTypes.string,
  linkUrl: PropTypes.string,
  /**
   * Tags
   */
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
  linkLabel: undefined,
  linkUrl: undefined,
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
  linkLabel,
  linkUrl,
  tags,
}) => {
  const cardClass = classNames("card", "cards-components", {
    [`card-degree`]: type === "degree",
    [`card-event`]: type === "event",
    [`card-story`]: type === "story",
    [`w-${width.replace("%", "")}`]: width !== "100%",
    [`card-horizontal`]: horizontal,
    [`card-hover`]: clickable,
  });

  return (
    <>
      <div className={cardClass}>
        {!!image && (
          <img className="card-img-top" src={image} alt={imageAltText} />
        )}
        {!image && icon && (
          <FontAwesomeIcon icon={icon} className="fa-2x card-icon-top" />
        )}
        {horizontal ? (
          <div className="card-content-wrapper">
            <CardContent
              type={type}
              body={body}
              eventFormat={eventFormat}
              eventLocation={eventLocation}
              eventTime={eventTime}
              title={title}
              buttons={buttons}
              linkLabel={linkLabel}
              linkUrl={linkUrl}
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
            linkLabel={linkLabel}
            linkUrl={linkUrl}
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
  icon: PropTypes.string, // Icon string name
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
  linkLabel: PropTypes.string,
  linkUrl: PropTypes.string,
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
  linkLabel: undefined,
  linkUrl: undefined,
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
  linkLabel,
  linkUrl,
  tags,
}) => (
  <>
    <div className="card-header">
      <h3 className="card-title">{title}</h3>
    </div>
    <div className="card-body">
      <p className="card-text">{body}</p>
    </div>
    {type === "event" && (eventTime || eventLocation) && (
      <EventInfo
        eventFormat={eventFormat}
        eventTime={eventTime}
        eventLocation={eventLocation}
      />
    )}
    {buttons &&
      buttons.map(button => (
        <div key={`${button.label}-${button.href}`} className="card-button">
          <Button
            ariaLabel={button.ariaLabel}
            color={button.color}
            icon={button.icon}
            href={button.href}
            label={button.label}
            onClick={button.onClick}
            size={button.size}
          />
        </div>
      ))}
    {linkUrl && linkLabel && (
      <div className="card-link">
        <a href={linkUrl}>{linkLabel}</a>
      </div>
    )}
    {tags && (
      <div className="card-tags">
        {tags.map(tag => (
          <ButtonTag
            key={`${tag.label}-${tag.href}`}
            ariaLabel={tag.ariaLabel}
            color={tag.color}
            href={tag.href}
            label={tag.label}
            onClick={tag.onClick}
          />
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
  linkLabel: PropTypes.string,
  linkUrl: PropTypes.string,
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
  linkLabel: undefined,
  linkUrl: undefined,
  tags: undefined,
};

const EventInfo = ({ eventFormat, eventTime, eventLocation }) => {
  if (eventFormat === "inline") {
    return (
      <div className="card-event-details">
        {eventTime && (
          <div className="card-event-icons">
            <div>
              <FontAwesomeIcon icon={["far", "calendar"]} />
            </div>
            <div dangerouslySetInnerHTML={sanitizeDangerousMarkup(eventTime)} />
          </div>
        )}
        {eventLocation && (
          <div className="card-event-icons">
            <div>
              <FontAwesomeIcon icon="map-marker-alt" />
            </div>
            <div
              dangerouslySetInnerHTML={sanitizeDangerousMarkup(eventLocation)}
            />
          </div>
        )}
      </div>
    );
  }

  // else "stacked"
  return (
    <>
      {eventTime && (
        <div className="card-event-details">
          <div className="card-event-icons">
            <div>
              <FontAwesomeIcon icon={["far", "calendar"]} />
            </div>
            <div dangerouslySetInnerHTML={sanitizeDangerousMarkup(eventTime)} />
          </div>
        </div>
      )}
      {eventLocation && (
        <div className="card-event-details">
          <div className="card-event-icons">
            <div>
              <FontAwesomeIcon icon="map-marker-alt" />
            </div>
            <span>
              <div
                dangerouslySetInnerHTML={sanitizeDangerousMarkup(eventLocation)}
              />
            </span>
          </div>
        </div>
      )}
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
