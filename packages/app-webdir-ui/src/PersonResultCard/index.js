import React from "react";

import anonPic from "../assets/anon.png";
import { PersonResultCardLayout } from "./index.styles";
import { PersonResultCardType } from "./models";

const PersonResultCard = ({ ...props }) => {
  const hideNonExistantImages = e => {
    e.target.style.display = "none";
  };
  return (
    <PersonResultCardLayout className={props.fill ? "fill" : ""}>
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
      <div className="info-section">
        <div className="person-name">
          <a href="google.com">{props.name}</a>
        </div>
        <div className="person-title">{props.titles}</div>
      </div>
      <div className="contact-section">
        <div className="person-email">
          <a href="google.com">{props.email}</a>
        </div>
        <div className="person-number">{props.telephone}</div>
      </div>
    </PersonResultCardLayout>
  );
};

PersonResultCard.propTypes = PersonResultCardType;

export { PersonResultCard };
