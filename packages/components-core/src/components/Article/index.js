import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import dompurify from "dompurify";
import PropTypes from "prop-types";
import React from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import UdsStyles from "../../../vendor/css/bootstrap-asu.min.module.css";
import { Button } from "../Button";
import "./index.css";

const sanitizeDangerousMarkup = content => {
  const sanitizer = dompurify.sanitize;

  return { __html: sanitizer(content) };
};

export const Article = ({
  articleUrl,
  authorName,
  authorTitle,
  authorEmail,
  authorPhone,
  body,
  publicationDate,
  type,
  headerImageUrl,
  title,
  eventLocation,
  eventTime,
  registrationUrl,
  zoomUrl,
  calendarUrl,
}) => {
  const hClasses = classNames(UdsStyles["col"], UdsStyles["col-12"], {
    [UdsStyles["col-lg-8"]]:
      type === "event" && (registrationUrl || zoomUrl || calendarUrl),
  });

  const primaryButton = () => {
    if (registrationUrl) {
      return (
        <div className={classNames(UdsStyles["card-button"], "uds-button")}>
          <Button color="maroon" href={registrationUrl}>
            Register
          </Button>
        </div>
      );
    }
    return (
      <div className={classNames(UdsStyles["card-button"], "uds-button")}>
        <Button color="maroon" href={zoomUrl}>
          Attend on Zoom
        </Button>
      </div>
    );
  };

  const AuthorInfo = () => {
    return (
      <div className={classNames(UdsStyles["row"], UdsStyles["pb-2"])}>
        <div className={classNames(UdsStyles["col"], UdsStyles["col-12"])}>
          <div className={classNames("author", "highlight-gold")}>
            {authorName}
          </div>
          {authorTitle && <div className="author-title">{authorTitle}</div>}
          {authorEmail && (
            <div className="author-contact">
              <span className="icon-bg">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color="white"
                  size="xs"
                  transform="shrink-2"
                />
              </span>
              <a href={`mailto: ${authorEmail}`}>{authorEmail}</a>
            </div>
          )}
          {authorPhone && (
            <div className="author-contact">
              <span className="icon-bg">
                <FontAwesomeIcon
                  icon={faPhone}
                  color="white"
                  size="xs"
                  transform="shrink-2"
                />
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
      <div
        className={classNames(
          UdsStyles["row"],
          UdsStyles["row-spaced"],
          UdsStyles["mt-3"],
          UdsStyles["pt-6"],
          UdsStyles["pb-2"],
          "event-info"
        )}
      >
        <div
          className={classNames(
            UdsStyles["col"],
            UdsStyles["col-lg-4"],
            UdsStyles["col-md-6"],
            UdsStyles["col-12"]
          )}
        >
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
        <div
          className={classNames(
            UdsStyles["col"],
            UdsStyles["col-lg-4"],
            UdsStyles["col-md-6"],
            UdsStyles["col-12"]
          )}
        >
          <h4>Share this event:</h4>
          <div className="article-social-media">
            <FacebookShareButton url={articleUrl} quote={title}>
              <FacebookIcon
                size={28}
                borderRadius={4}
                bgStyle={{ fill: "maroon" }}
              />
            </FacebookShareButton>
            <TwitterShareButton url={articleUrl} quote={title}>
              <TwitterIcon
                size={28}
                borderRadius={4}
                bgStyle={{ fill: "maroon" }}
              />
            </TwitterShareButton>
            <EmailShareButton url={authorEmail} quote={title}>
              <EmailIcon
                size={28}
                borderRadius={4}
                bgStyle={{ fill: "maroon" }}
              />
            </EmailShareButton>
            <LinkedinShareButton url={articleUrl} quote={title}>
              <LinkedinIcon
                size={28}
                borderRadius={4}
                bgStyle={{ fill: "maroon" }}
              />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    );
  };

  const eventLocations = () => {
    return (
      <div
        className={classNames(
          UdsStyles["col"],
          UdsStyles["col-lg-4"],
          UdsStyles["col-md-6"],
          UdsStyles["col-sm-12"]
        )}
      >
        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" transform="shrink-2" />
        <h4>Location:</h4>
        <div dangerouslySetInnerHTML={sanitizeDangerousMarkup(eventLocation)} />
        {registrationUrl && zoomUrl && <a href={zoomUrl}>Attend on Zoom</a>}
      </div>
    );
  };

  return (
    <>
      {headerImageUrl && type !== "event" && (
        <div
          className={classNames(
            UdsStyles["uds-hero"],
            UdsStyles["uds-hero-md"]
          )}
          style={{
            backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${headerImageUrl})`,
          }}
        />
      )}

      <div
        className={classNames(
          UdsStyles["container"],
          `${type}-container`,
          "wrapper-container"
        )}
      >
        <div
          className={classNames(
            UdsStyles["row"],
            UdsStyles["pt-4"],
            UdsStyles["pb-3"]
          )}
        >
          <div className={classNames(UdsStyles["col"], UdsStyles["col-12"])}>
            <Breadcrumb listClassName={UdsStyles["breadcrumb"]}>
              <BreadcrumbItem tag="li" className={UdsStyles["breadcrumb-item"]}>
                <BreadcrumbItem tag="a" href="#">
                  Home
                </BreadcrumbItem>
              </BreadcrumbItem>
              <BreadcrumbItem tag="li" className={UdsStyles["breadcrumb-item"]}>
                <BreadcrumbItem tag="a" href="#">
                  Second nav item
                </BreadcrumbItem>
              </BreadcrumbItem>
              <BreadcrumbItem
                active
                tag="li"
                className={UdsStyles["breadcrumb-item"]}
              >
                Current page
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>

        <div className={classNames(UdsStyles["row"], UdsStyles["pb-2"])}>
          <div className={hClasses}>
            <h2>{title}</h2>
          </div>
          {type === "event" && (
            <div
              className={classNames(
                UdsStyles["col"],
                UdsStyles["col-lg-4"],
                UdsStyles["col-xs-12"]
              )}
            >
              {(registrationUrl || zoomUrl) && primaryButton()}
              {calendarUrl && (
                <div
                  className={classNames(UdsStyles["card-button"], "uds-button")}
                >
                  <Button color="gray" size="small" href={calendarUrl}>
                    Add to calendar
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>

        {type === "event" && (
          <div
            className={classNames(
              UdsStyles["row"],
              UdsStyles["row-spaced"],
              UdsStyles["pt-3"],
              UdsStyles["pb-2"]
            )}
          >
            {eventTime && (
              <div
                className={classNames(
                  UdsStyles["col"],
                  UdsStyles["col-lg-4"],
                  UdsStyles["col-md-6"],
                  UdsStyles["col-sm-12"]
                )}
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  size="lg"
                  transform="shrink-2"
                />
                <h4>Date and time:</h4>
                <div
                  dangerouslySetInnerHTML={sanitizeDangerousMarkup(eventTime)}
                />
              </div>
            )}
            {((registrationUrl && zoomUrl) || eventLocation) &&
              eventLocations()}
          </div>
        )}

        {type !== "event" && (
          <div
            className={classNames(
              UdsStyles["row"],
              UdsStyles["row-spaced"],
              UdsStyles["pt-2"]
            )}
          >
            <div className={classNames(UdsStyles["col"], UdsStyles["col-12"])}>
              <div className="article-social-media">
                <FacebookShareButton url={articleUrl} quote={title}>
                  <FacebookIcon
                    size={28}
                    borderRadius={4}
                    bgStyle={{ fill: "maroon" }}
                  />
                </FacebookShareButton>
                <TwitterShareButton url={articleUrl} quote={title}>
                  <TwitterIcon
                    size={28}
                    borderRadius={4}
                    bgStyle={{ fill: "maroon" }}
                  />
                </TwitterShareButton>
                <LinkedinShareButton url={articleUrl} quote={title}>
                  <LinkedinIcon
                    size={28}
                    borderRadius={4}
                    bgStyle={{ fill: "maroon" }}
                  />
                </LinkedinShareButton>
              </div>
              {publicationDate && (
                <i className="news-date">{publicationDate}</i>
              )}
            </div>
          </div>
        )}

        <div className={classNames(UdsStyles["row"])}>
          <div className={classNames(UdsStyles["col"], UdsStyles["col-12"])}>
            <p dangerouslySetInnerHTML={sanitizeDangerousMarkup(body)} />
          </div>
        </div>

        {type === "news" && AuthorInfo()}
        {type === "event" && EventInfo()}
      </div>
    </>
  );
};

Article.propTypes = {
  type: PropTypes.oneOf(["event", "news"]),
  articleUrl: PropTypes.string.isRequired,
  headerImageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorTitle: PropTypes.string,
  authorEmail: PropTypes.string,
  authorPhone: PropTypes.string,
  eventLocation: PropTypes.string.isRequired,
  eventTime: PropTypes.string.isRequired,
  registrationUrl: PropTypes.string,
  zoomUrl: PropTypes.string,
  calendarUrl: PropTypes.string,
};

Article.defaultProps = {
  type: "news",
  headerImageUrl: undefined,
  authorTitle: "",
  authorEmail: "",
  authorPhone: "",
  registrationUrl: "",
  zoomUrl: "",
  calendarUrl: "",
};
