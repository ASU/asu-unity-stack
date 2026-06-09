// @ts-check
import { sanitizeDangerousMarkup } from "@asu/shared";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  XIcon,
  XShareButton,
} from "react-share";

import { Button } from "../Button/Button";
import { Wrapper, EventInfoWrapper } from "./Article.styles";

/**
 * @typedef {import('../../core/types/article-types').ArticleProps} ArticleProps
 */

/**
 * @param {ArticleProps} props
 * @returns {JSX.Element}
 */
export const Article = ({
  type = "news",
  articleUrl = "",
  publicationDate,
  title,
  body,
  authorEmail,
  authorName,
  authorPhone,
  authorTitle,
  breadcrumbs,
  calendarUrl,
  eventLocation,
  eventTime,
  headerImageUrl,
  registrationUrl,
  zoomUrl,
}) => {
  const hClasses = classNames("col", "col-12", {
    [`col-lg-8`]:
      type === "event" && (registrationUrl || zoomUrl || calendarUrl),
  });

  const primaryButton = () => {
    if (registrationUrl) {
      return (
        <div className="card-button uds-button">
          <Button color="maroon" href={registrationUrl} label="Register" />
        </div>
      );
    }
    return (
      <div className="card-button uds-button">
        <Button color="maroon" href={zoomUrl} label="Attend on Zoom" />
      </div>
    );
  };

  const AuthorInfo = () => {
    return (
      <div className="row pb-2" data-testid="author-info">
        <div className="col col-12">
          <div className="author highlight-gold">{authorName}</div>
          {authorTitle && <div className="author-title">{authorTitle}</div>}
          {authorEmail && (
            <div className="author-contact">
              <span className="icon-bg">
                <i className="fas fa-envelope" />
              </span>
              <a href={`mailto: ${authorEmail}`}>{authorEmail}</a>
            </div>
          )}
          {authorPhone && (
            <div className="author-contact">
              <span className="icon-bg">
                <i className="fas fa-phone" />
              </span>
              <a href={`tel: ${authorPhone}`}>{authorPhone}</a>
            </div>
          )}
        </div>
      </div>
    );
  };

  const EventInfo = () => {
    return (
      <EventInfoWrapper
        className="row row-spaced mt-3 pt-6 pb-2 event-info"
        data-testid="event-info"
      >
        <div className="col col-lg-4 col-md-6 col-12">
          <h4>For more information contact:</h4>
          <div className="event-author">{authorName}</div>
          <div className="event-author-title">{authorTitle}</div>
          {(authorEmail || authorPhone) && (
            <div className="event-author-info">
              {authorEmail && (
                <div>
                  <a href={`mailto: ${authorEmail}`}>{authorEmail}</a>
                </div>
              )}
              {authorPhone && (
                <div>
                  <a href={`tel: ${authorPhone}`}>{authorPhone}</a>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="col col-lg-4 col-md-6 col-12">
          <h4>Share this event:</h4>
          <div className="article-social-media">
            <FacebookShareButton
              url={`${articleUrl}`}
              title={title}
              aria-label="Share via Facebook"
            >
              <FacebookIcon
                size={28}
                borderRadius={4}
                bgStyle={{ fill: "maroon" }}
                iconFillColor="white"
              />
            </FacebookShareButton>
            <XShareButton
              url={`${articleUrl}`}
              title={title}
              aria-label="Share via X (formerly Twitter)"
            >
              <XIcon
                size={28}
                borderRadius={4}
                bgStyle={{ fill: "maroon" }}
                iconFillColor="white"
              />
            </XShareButton>
            <EmailShareButton
              url={`${articleUrl}`}
              title={title}
              aria-label="Share via Email"
              subject="Check out this article!"
              body="I found this and thought you might find it interesting:"
            >
              <EmailIcon
                size={28}
                borderRadius={4}
                bgStyle={{ fill: "maroon" }}
                iconFillColor="white"
              />
            </EmailShareButton>
            <LinkedinShareButton
              url={`${articleUrl}`}
              title={title}
              aria-label="Share via LinkedIn"
            >
              <LinkedinIcon
                size={28}
                borderRadius={4}
                bgStyle={{ fill: "maroon" }}
                iconFillColor="white"
              />
            </LinkedinShareButton>
          </div>
        </div>
      </EventInfoWrapper>
    );
  };

  const eventLocations = () => {
    return (
      <div className="col col-12 col-lg-4 col-md-6">
        <h4>
          <i className="fas fa-map-marker-alt" />
          Location:
        </h4>
        {}
        <div dangerouslySetInnerHTML={sanitizeDangerousMarkup(eventLocation)} />
        {registrationUrl && zoomUrl && <a href={zoomUrl}>Attend on Zoom</a>}
      </div>
    );
  };

  /**
   * @param {{title?: string, url?: string, active?: boolean}} item
   * @returns {JSX.Element}
   */
  const activeBreadcrumb = item => {
    return (
      <li
        key={item.title}
        className="breadcrumb-item"
        aria-current={item.active ? "page" : undefined}
      >
        {item.active ? (
          <span>{item.title}</span>
        ) : (
          <a href={item.url}>{item.title}</a>
        )}
      </li>
    );
  };
  if (articleUrl === "") {
    // eslint-disable-next-line no-console
    console.warn(
      "Warning: articleUrl prop is required for Article component for social media sharing to work properly."
    );
  }
  return (
    <>
      {headerImageUrl && type !== "event" && (
        <div
          data-testid="uds-hero"
          className="uds-hero uds-hero-md"
          style={{
            // @ts-ignore
            "--color1": "#19191900",
            "--color2": "#191919c9",
            // moved colors to variable because hex color in linear-gradient breaks react
            "backgroundImage": `linear-gradient(180deg, var(--color1) 0%, var(--color2) 100%), url(${headerImageUrl})`,
          }}
        />
      )}

      <Wrapper className={`container ${type}-container wrapper-container`}>
        {breadcrumbs && (
          <div className="row pt-4" data-testid="breadcrumbs">
            <div className="col col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  {breadcrumbs.map(item => activeBreadcrumb(item))}
                </ol>
              </nav>
            </div>
          </div>
        )}

        <div className="row pb-2 pt-3">
          <div className={hClasses}>
            <h2 data-testid="title">{title}</h2>
          </div>
          {type === "event" && (
            <div className="col col-lg-4 col-xs-12">
              {(registrationUrl || zoomUrl) && primaryButton()}
              {calendarUrl && (
                <div className="card-button uds-button">
                  <Button
                    color="gray"
                    size="small"
                    href={calendarUrl}
                    label="Add to calendar"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {type === "event" ? (
          <div className="row row-spaced pt-3 mb-2">
            {eventTime && (
              <div className="col col-lg-4 col-md-6 col-sm-12">
                <h4>
                  <i className="far fa-calendar" />
                  Date and time:
                </h4>
                <div
                  dangerouslySetInnerHTML={sanitizeDangerousMarkup(eventTime)}
                />
              </div>
            )}
            {((registrationUrl && zoomUrl) || eventLocation) &&
              eventLocations()}
          </div>
        ) : (
          <div className="row row-spaced pt-2">
            <div className="col col-12">
              <div className="article-social-media">
                <FacebookShareButton url={articleUrl} title={title}>
                  <FacebookIcon
                    size={28}
                    borderRadius={4}
                    bgStyle={{ fill: "maroon" }}
                    iconFillColor="white"
                  />
                </FacebookShareButton>
                <XShareButton url={articleUrl} title={title}>
                  <XIcon
                    size={28}
                    borderRadius={4}
                    bgStyle={{ fill: "maroon" }}
                    iconFillColor="white"
                  />
                </XShareButton>
                <LinkedinShareButton url={articleUrl} title={title}>
                  <LinkedinIcon
                    size={28}
                    borderRadius={4}
                    bgStyle={{ fill: "maroon" }}
                    iconFillColor="white"
                  />
                </LinkedinShareButton>
              </div>
              {publicationDate && (
                <i className="news-date">{publicationDate}</i>
              )}
            </div>
          </div>
        )}

        <div className="row">
          <div
            className="col col-12"
            dangerouslySetInnerHTML={sanitizeDangerousMarkup(body)}
            data-testid="body"
          />
        </div>

        {type === "news" && AuthorInfo()}
        {type === "event" && EventInfo()}
      </Wrapper>
    </>
  );
};

Article.propTypes = {
  /**
   * Type of article
   */
  type: PropTypes.oneOf(["event", "news"]),
  /**
   * This is the relative or absolute url to the full-page article
   */
  articleUrl: PropTypes.string.isRequired,
  /**
   * Date for the article
   */
  publicationDate: PropTypes.string.isRequired,
  /**
   * Title
   */
  title: PropTypes.string.isRequired,
  /**
   * Body content for the article
   */
  body: PropTypes.string.isRequired,
  /**
   * Article author email
   */
  authorEmail: PropTypes.string,
  /**
   * Article author full name
   */
  authorName: PropTypes.string.isRequired,
  /**
   * Article author phone number
   */
  authorPhone: PropTypes.string,
  /**
   * Article author title
   */
  authorTitle: PropTypes.string,
  /**
   * Breadcrumbs array
   */
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
  /**
   * URL for an "add to calendar" button
   */
  calendarUrl: PropTypes.string,
  /**
   * Article image
   */
  headerImageUrl: PropTypes.string,
  /**
   * Event location
   */
  eventLocation: PropTypes.string,
  /**
   * Event time
   */
  eventTime: PropTypes.string,
  /**
   * URL for a registation button
   */
  registrationUrl: PropTypes.string,
  /**
   * URL for a Zoom button
   */
  zoomUrl: PropTypes.string,
};
