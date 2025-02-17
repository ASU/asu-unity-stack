// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { sanitizeDangerousMarkup } from "../../../../../shared";
import { Button } from "../Button/Button";
import { ButtonTag } from "../ButtonTag/ButtonTag";
// eslint-disable-next-line import/no-cycle
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";
import { Image } from "../Image/Image";
import { CardWrapper } from "./Card.styles";
import { emailAddressParser } from "./utils/emailAddressParser";

const gaDefaultObject = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
};

/**
 * @typedef {import('../../core/types/card-types').CardProps} CardProps
 */

/**
 * @param {CardProps} props
 * @returns {JSX.Element}
 */
export const Card = ({
  type,
  width,
  horizontal,
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
  showBorders,
  cardLink,
}) => {
  return (
    <BaseCard
      type={type}
      width={width}
      horizontal={horizontal}
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
      showBorders={showBorders}
      cardLink={cardLink}
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
      icon: PropTypes.arrayOf(PropTypes.string),
      href: PropTypes.string,
      label: PropTypes.string,
      onClick: PropTypes.func,
      size: PropTypes.oneOf(["default", "small", "xsmall"]),
      target: PropTypes.oneOf(["_blank", "_self", "_top", "_parent"]),
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
  /**
   * Remove card borders
   */
  showBorders: PropTypes.bool,
  /**
   * Card link
   */
  cardLink: PropTypes.string,
};

Card.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: false,
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
  showBorders: true,
};

/*
 * Sub-components defined after this
 */
const BaseCard = ({
  type,
  width,
  horizontal,
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
  showBorders,
  cardLink,
}) => {
  const cardClass = classNames("card", "cards-components", {
    [`card-degree`]: type === "degree",
    [`card-event`]: type === "event",
    [`card-story`]: type === "story",
    [`w-${width.replace("%", "")}`]: width !== "100%",
    [`card-horizontal`]: horizontal,
    [`borderless`]: !showBorders,
  });

  return (
    <>
      <CardWrapper className={cardClass} data-testid="card-container">
        {!!image && (
          <Image
            src={image}
            alt={imageAltText}
            dataTestId="card-image"
            cssClasses={["card-img-top"]}
            cardLink={cardLink}
            title={title}
          />
        )}
        {!image && icon && (
          <i
            className={`${icon?.[0]} fa-${icon?.[1]} fa-2x card-icon-top`}
            data-testid="card-icon"
          />
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
              cardLink={cardLink}
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
            cardLink={cardLink}
          />
        )}
      </CardWrapper>
    </>
  );
};

BaseCard.propTypes = {
  type: PropTypes.oneOf(["default", "degree", "event", "news", "story"]),
  width: PropTypes.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: PropTypes.bool,
  title: PropTypes.string.isRequired,
  icon: PropTypes.arrayOf(PropTypes.string), // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
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
      icon: PropTypes.arrayOf(PropTypes.string),
      href: PropTypes.string,
      label: PropTypes.string,
      onClick: PropTypes.func,
      size: PropTypes.oneOf(["default", "small", "xsmall"]),
      target: PropTypes.oneOf(["_blank", "_self", "_top", "_parent"]),
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
  showBorders: PropTypes.bool,
  cardLink: PropTypes.string,
};

BaseCard.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: false,
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
  showBorders: true,
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
  cardLink,
}) => (
  <>
    {!!title && (
      <div className="card-header" data-testid="card-title">
        <h3 className="card-title">
          {cardLink ? <a href={cardLink}>{title}</a> : title}
        </h3>
      </div>
    )}
    {!!body && (
      <div className="card-body" data-testid="card-body">
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={sanitizeDangerousMarkup(body)} />
      </div>
    )}
    {type === "event" && (eventTime || eventLocation) && (
      <EventInfo
        eventFormat={eventFormat}
        eventTime={eventTime}
        eventLocation={eventLocation}
      />
    )}
    {buttons && (
      <div className="card-buttons">
        {buttons.map(button => (
          <div
            className="card-button"
            data-testid="card-button"
            key={`${button.label}-${button.href}`}
          >
            {/* @ts-ignore */}
            <Button
              ariaLabel={button.ariaLabel}
              color={button.color}
              icon={button.icon}
              href={button.href}
              label={button.label}
              onClick={button.onClick}
              size={button.size}
              target={button.target}
              cardTitle={title}
            />
          </div>
        ))}
      </div>
    )}
    {linkUrl && linkLabel && (
      <div className="card-link" data-testid="card-link">
        <GaEventWrapper
          gaData={{
            ...gaDefaultObject,
            section: title,
            text: linkLabel,
          }}
        >
          <a href={emailAddressParser(linkUrl)}>{linkLabel}</a>
        </GaEventWrapper>
      </div>
    )}
    {tags && (
      <div className="card-tags" data-testid="card-tags">
        {tags.map(tag => (
          // @ts-ignore
          <ButtonTag
            key={`${tag.label}-${tag.href}`}
            ariaLabel={tag.ariaLabel}
            color={tag.color}
            href={tag.href}
            label={tag.label}
            onClick={tag.onClick}
            cardTitle={title}
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
      icon: PropTypes.arrayOf(PropTypes.string),
      href: PropTypes.string,
      label: PropTypes.string,
      onClick: PropTypes.func,
      size: PropTypes.oneOf(["default", "small", "xsmall"]),
      target: PropTypes.oneOf(["_blank", "_self", "_top", "_parent"]),
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
  cardLink: PropTypes.string,
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
              <i className="far fa-calendar" />
            </div>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={sanitizeDangerousMarkup(eventTime)} />
          </div>
        )}
        {eventLocation && (
          <div className="card-event-icons">
            <div>
              <i className="fas fa-map-marker-alt" />
            </div>
            <div
              // eslint-disable-next-line react/no-danger
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
              <i className="far fa-calendar" />
            </div>
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={sanitizeDangerousMarkup(eventTime)} />
          </div>
        </div>
      )}
      {eventLocation && (
        <div className="card-event-details">
          <div className="card-event-icons">
            <div>
              <i className="fas fa-map-marker-alt" />
            </div>
            <span>
              <div
                // eslint-disable-next-line react/no-danger
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
