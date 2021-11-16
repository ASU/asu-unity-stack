import { Button } from "@asu-design-system/components-core";
import React from "react";

import { ProfileCard } from "./index.styles";
import { profileCardType } from "./models";

const ProfileCardTemplate = ({ ...props }) => {
  return (
    <ProfileCard
      className={`uds-person-profile uds-content-align ${props.size}`}
    >
      <img className="profile-img" src={props.imgURL} alt={props.name} />
      <div className="person">
        <h3 className="person-name">{props.name}</h3>
        {props.size !== "large" && (
          <h4 className="person-profession">{props.title}</h4>
        )}
        {props.size === "large" && (
          <div className="person-profession">
            {props.titles.map(title => (
              <h4>
                <span>{title.name}, </span>
                <span>{title.org}</span>
              </h4>
            ))}
          </div>
        )}
        {props.size !== "micro" && (
          <ul className="person-contact-info">
            <li>
              <a href={`mailto:${props.email}`} aria-label="Email user">
                {props.email}
              </a>
            </li>
            <li>
              <a href={`tel:${props.telephone}`} aria-label="Call user">
                {props.telephone}
              </a>
            </li>
            <li>
              <a href={props.addressLink} aria-label="See user address">
                <address className="person-address">
                  <span className="person-street">{props.addressLine1}</span>
                  <span className="person-city">{props.addressLine2}</span>
                </address>
              </a>
            </li>
          </ul>
        )}
        {["normal", "large"].includes(props.size) && (
          <div>
            <p className="person-description">{props.description}</p>
            <ul className="person-social-medias">
              <li>
                <a
                  href={props.facebookLink}
                  aria-label="Go to user Facebook profile"
                >
                  <span className="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a
                  href={props.linkedinLink}
                  aria-label="Go to user Linkedin profile"
                >
                  <span className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a
                  href={props.twitterLink}
                  aria-label="Go to user Twitter profile"
                >
                  <span className="fab fa-twitter-square" />
                </a>
              </li>
            </ul>
          </div>
        )}
        {props.size === "small" && (
          <Button color="maroon" size="small" label="View Profile" />
        )}
        {props.size === "micro" && <a href="#">ASU Knowledge Enterprise</a>}
      </div>
    </ProfileCard>
  );
};

ProfileCardTemplate.propTypes = profileCardType;

export { ProfileCardTemplate };
