// @ts-check
import { sanitizeDangerousMarkup } from "@asu/shared";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { Button } from "../Button/Button";
import { ButtonTag } from "../ButtonTag/ButtonTag";

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

const isEventOrNewsCard = type => type === "event" || type === "news";

/**
 * @typedef {import('../../core/types/card-types').CardProps} CardProps
 */

/**
 * @param {CardProps} props
 * @returns {JSX.Element}
 */
export const Card = ({
  type = "default",
  width = "100%",
  horizontal = false,
  image,
  imageAltText,
  title,
  icon,
  body,
  eventFormat = "stack",
  eventLocation,
  eventTime,
  buttons,
  linkLabel,
  linkUrl,
  tags,
  showBorders = true,
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

/*
 * Sub-components defined after this
 */
const BaseCard = ({
  type = "default",
  width = "100%",
  horizontal = false,
  image = "",
  imageAltText = "",
  title,
  icon = undefined,
  body = "",
  eventFormat = "stack",
  eventLocation = "",
  eventTime = "",
  buttons = undefined,
  linkLabel = undefined,
  linkUrl = undefined,
  tags = undefined,
  showBorders = true,
  cardLink,
}) => {
  const cardClass = classNames("card", "cards-components", {
    [`card-degree`]: type === "degree",
    [`card-event`]: type === "event",
    [`card-story`]: type === "story",
    [`card-news`]: type === "news",
    [`w-${width.replace("%", "")}`]: width !== "100%",
    [`card-horizontal`]: horizontal,
    [`borderless`]: !showBorders,
  });

  const shouldShowImage = typeof image === "string" && image.length > 0;
  const shouldIncludeCardLink = !isEventOrNewsCard(type);

  return (
    <CardWrapper className={cardClass} data-testid="card-container">
      {shouldShowImage && (
        <Image
          src={image}
          alt={imageAltText}
          dataTestId="card-image"
          cssClasses={["card-img-top"]}
          title={title}
          cardLink={shouldIncludeCardLink ? cardLink : undefined}
        />
      )}
      {!image && icon && (
        <i
          className={`${icon?.[0]} fa-${icon?.[1]} fa-2x card-icon-top`}
          data-testid="card-icon"
        />
      )}
      <div className={horizontal ? "card-content-wrapper" : undefined}>
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
    </CardWrapper>
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

const CardContent = ({
  type = "default",
  body = "",
  eventFormat = "stack",
  eventLocation = "",
  eventTime = "",
  title,
  buttons = undefined,
  linkLabel = undefined,
  linkUrl = undefined,
  tags = undefined,
  cardLink,
}) => {
  const isEventOrNews = isEventOrNewsCard(type);
  const showTitleLink = cardLink && !isEventOrNews;
  const showArrowLink = isEventOrNews && cardLink;
  const showEventInfo = type === "event" && (eventTime || eventLocation);

  return (
    <>
      {title && (
        <div className="card-header" data-testid="card-title">
          <h3 className="card-title">
            {showTitleLink ? <a href={cardLink}>{title}</a> : title}
          </h3>
        </div>
      )}
      {body && (
        <div className="card-body" data-testid="card-body">
          <div dangerouslySetInnerHTML={sanitizeDangerousMarkup(body)} />
        </div>
      )}
      {showEventInfo && (
        <EventInfo
          eventFormat={eventFormat}
          eventTime={eventTime}
          eventLocation={eventLocation}
        />
      )}
      {showArrowLink ? (
        <div className="card-link" data-testid="card-link">
          <GaEventWrapper
            gaData={{
              ...gaDefaultObject,
              text: title,
            }}
          >
            <a href={cardLink} className="card-arrow-link" aria-label={title}>
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </a>
          </GaEventWrapper>
        </div>
      ) : (
        <>
          {buttons && (
            <div className="card-buttons">
              {buttons.map(button => (
                <div
                  className="card-button"
                  data-testid="card-button"
                  key={`${button.label}-${button.href}`}
                >
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
        </>
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
};

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

const EventInfo = ({
  eventFormat = "stack",
  eventLocation = "",
  eventTime = "",
}) => {
  if (eventFormat === "inline") {
    return (
      <div className="card-event-details">
        {eventTime && (
          <div className="card-event-icons">
            <div>
              <i className="far fa-calendar" />
            </div>
            <div dangerouslySetInnerHTML={sanitizeDangerousMarkup(eventTime)} />
          </div>
        )}
        {eventLocation && (
          <div className="card-event-icons">
            <div>
              <i className="fas fa-map-marker-alt" />
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
              <i className="far fa-calendar" />
            </div>
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
