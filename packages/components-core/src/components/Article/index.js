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
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";

import { EventDate } from "Components/EventDate";
import { EventLocation } from "Components/EventLocation";
import { UdsButton } from "Components/UdsButton";
import UdsStyles from "Vendor/css/bootstrap-asu.min.module.css";
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
  date,
  type,
  image,
  title,
  startTime,
  stopTime,
  locationTitle,
  address1,
  address2,
  city,
  state,
  zip,
  locationLink,
}) => {
  const hClasses = classNames(UdsStyles["col"], UdsStyles["col-12"], {
    [UdsStyles["col-lg-12"]]: type !== "event",
    [UdsStyles["col-lg-8"]]: type === "event",
  });

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
              <Button href={`mailto: ${authorEmail}`}>{authorEmail}</Button>
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
              <Button href={`tel: ${authorPhone}`}>{authorPhone}</Button>
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
          <div className="event-author-email">
            <Button href={`mailto: ${authorEmail}`}>{authorEmail}</Button>
          </div>
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

  return (
    <>
      {image && type !== "event" && (
        <div
          className={classNames(
            UdsStyles["uds-hero"],
            UdsStyles["uds-hero-md"]
          )}
          style={{
            backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${image})`,
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
              <div
                className={classNames(UdsStyles["card-button"], "uds-button")}
              >
                <UdsButton color="maroon">Attend on Zoom</UdsButton>
              </div>
              <div
                className={classNames(UdsStyles["card-button"], "uds-button")}
              >
                <UdsButton color="gray" size="small">
                  Add to calendar
                </UdsButton>
              </div>
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
              <EventDate startTime={startTime} stopTime={stopTime} />
            </div>
            <div
              className={classNames(
                UdsStyles["col"],
                UdsStyles["col-lg-4"],
                UdsStyles["col-md-6"],
                UdsStyles["col-sm-12"]
              )}
            >
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size="lg"
                transform="shrink-2"
              />
              <h4>Location:</h4>
              <EventLocation
                title={locationTitle}
                address1={address1}
                address2={address2}
                city={city}
                state={state}
                zip={zip}
                locationLink={locationLink}
              />
            </div>
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
              {date && <i>{date}</i>}
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
  /**
   * Type of article
   */
  type: PropTypes.oneOf(["event", "news"]),
  /**
   * This is the relative or absolute url to the full-page article
   */
  articleUrl: PropTypes.string.isRequired,
  /**
   * Article image
   */
  image: PropTypes.string,
  /**
   * Title
   */
  title: PropTypes.string.isRequired,
  /**
   * Date for the article
   */
  date: PropTypes.string.isRequired,
  /**
   * Body content for the article
   */
  body: PropTypes.string.isRequired,
  /**
   * Article author full name
   */
  authorName: PropTypes.string.isRequired,
  /**
   * Article author title
   */
  authorTitle: PropTypes.string,
  /**
   * Article author email
   */
  authorEmail: PropTypes.string,
  /**
   * Article author phone number
   */
  authorPhone: PropTypes.string,
  /**
   * Event start time
   */
  startTime: PropTypes.string,
  /**
   * Event stop time
   */
  stopTime: PropTypes.string,
  /**
   * Location title
   */
  locationtitle: PropTypes.string,
  /**
   * Address line 1
   */
  address1: PropTypes.string,
  /**
   * Address line 2
   */
  address2: PropTypes.string,
  /**
   * City
   */
  city: PropTypes.string,
  /**
   * State
   */
  state: PropTypes.string,
  /**
   * Zip
   */
  zip: PropTypes.string,
  /**
   * Location link
   */
  locationLink: PropTypes.string,
};

Article.defaultProps = {
  type: "news",
  image: "",
  authorTitle: "",
  authorEmail: "",
  authorPhone: "",
  startTime: "",
  stopTime: "",
  locationTitle: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  locationLink: "",
};
