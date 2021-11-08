import React from "react";

import { profileCardType } from "./models";

const ProfileCard = ({ ...props }) => (
  <div className="uds-person-profile uds-content-align">
    <img className="profile-img" src={props.imgURL} alt={props.name} />
    <div className="person">
      <h3 className="person-name">{props.name}</h3>
      <h4 className="person-profession">{props.title}</h4>
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
      <p className="person-description">{props.description}</p>
      <ul className="person-social-medias">
        <li>
          <a href={props.facebookLink} aria-label="Go to user Facebook profile">
            <span className="fab fa-facebook-square" />
          </a>
        </li>
        <li>
          <a href={props.linkedinLink} aria-label="Go to user Linkedin profile">
            <span className="fab fa-linkedin" />
          </a>
        </li>
        <li>
          <a href={props.twitterLink} aria-label="Go to user Twitter profile">
            <span className="fab fa-twitter-square" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

ProfileCard.propTypes = profileCardType;

export { ProfileCard };
