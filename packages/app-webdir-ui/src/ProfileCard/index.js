import React from "react";

import anonPic from "../assets/anon.png";
import { trackGAEvent } from "../core/services/googleAnalytics";
import { profileCardType } from "./models";

const ProfileCard = ({ ...props }) => {
  let titles = null;
  if (props.titles?.length > 0 && props.size === "micro") {
    titles = <span>{props.titles[0].name}</span>;
  } else if (props.titles?.length > 0 && props.size === "large") {
    if (props.primaryAffiliationTitle) {
      titles = <h4>{props.primaryAffiliationTitle}</h4>;
    } else {
      titles = props.titles.map((title, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <h4 key={idx}>
          <span>{title}</span>
        </h4>
      ));
    }
  }
  const hideNonExistantImages = e => {
    e.target.style.display = "none";
  };

  const microLinkText = "ASU Knowledge Enterprise";
  const sendEvent = () => {
    trackGAEvent({
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      section: props.name,
      text: microLinkText,
      component: props.GASource,
    });
  };
  return (
    <div
      className={`uds-person-profile ${props.size} ${props.fill ? "fill" : ""}`}
    >
      <a href={`/profile/${props.id}`} className="profile-img-container">
        <div
          className="profile-img-placeholder"
          style={{ backgroundImage: `url(${anonPic})` }}
        >
          <img
            className="profile-img"
            src={props.imgURL}
            alt={props.name}
            onError={hideNonExistantImages}
          />
        </div>
      </a>
      <div className="person">
        <a href={`/profile/${props.id}`}>
          <h3 className="person-name">{props.name}</h3>
        </a>
        {props.size !== "large" && (
          <h4 className="person-profession">{props.title}</h4>
        )}
        {["large", "micro"].includes(props.size) && (
          <div className="person-profession">{titles}</div>
        )}
        {props.size !== "micro" && (
          <ul className="person-contact-info">
            <li>
              <a
                onClick={() => sendEvent(props.email)}
                href={`mailto:${props.email}`}
                aria-label="Email user"
              >
                {props.email}
              </a>
            </li>
            <li>
              <a
                onClick={() => sendEvent(props.telephone)}
                href={`tel:${props.telephone}`}
                aria-label="Call user"
              >
                {props.telephone}
              </a>
            </li>
            <li>
              <div aria-label="See user address">
                <address className="person-address">
                  <span className="person-street">{props.addressLine1}</span>
                  <span className="person-city">{props.addressLine2}</span>
                </address>
              </div>
            </li>
          </ul>
        )}
        {["default", "large"].includes(props.size) && (
          <div>
            <p className="person-description">{props.shortBio.slice(0, 250)}</p>
            <ul className="person-social-medias">
              <li>
                <a
                  onClick={() => sendEvent("facebook icon")}
                  href={props.facebookLink}
                  aria-label="Go to user Facebook profile"
                >
                  <span
                    className="fab fa-facebook-square"
                    title="Facebook Link"
                  />
                </a>
              </li>
              <li>
                <a
                  onClick={() => sendEvent("linkedin icon")}
                  href={props.linkedinLink}
                  aria-label="Go to user Linkedin profile"
                >
                  <span className="fab fa-linkedin" title="LinkedIn Link" />
                </a>
              </li>
              <li>
                <a
                  onClick={() => sendEvent("twitter icon")}
                  href={props.twitterLink}
                  aria-label="Go to user Twitter profile"
                >
                  <span
                    className="fab fa-twitter-square"
                    title="Twitter Link"
                  />
                </a>
              </li>
            </ul>
          </div>
        )}
        {props.size === "small" && (
          <a
            className="btn btn-maroon btn-md"
            href={`/profile/${props.id}`}
            role="button"
          >
            View Profile
          </a>
        )}
        {props.size === "micro" && (
          <a onClick={sendEvent} href="/asu-knowledge-enterprise">
            {microLinkText}
          </a>
        )}
      </div>
    </div>
  );
};

ProfileCard.propTypes = profileCardType;

export { ProfileCard };
