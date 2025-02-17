import React from "react";
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";

export enum SocialMediaPlatform {
  Facebook = "facebook",
  LinkedIn = "linkedin",
  Twitter = "twitter",
}

const gaData = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  region: "main content",
};

export interface SocialMediaLink {
  platform: SocialMediaPlatform;
  url: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: {
    street: string;
    cityStateZip: string;
  };
}

export interface Profession {
  title: string;
  department: string;
}

export interface PersonProfileProps {
  name: string;
  profession: Profession;
  contactInfo?: ContactInfo;
  description?: string;
  socialMedia?: SocialMediaLink[];
  imageUrl?: string;
}

// Helper function to get social media icon class
const getSocialMediaIcon = (platform: SocialMediaPlatform): string => {
  switch (platform) {
    case SocialMediaPlatform.Facebook:
      return "fab fa-facebook-square";
    case SocialMediaPlatform.LinkedIn:
      return "fab fa-linkedin";
    case SocialMediaPlatform.Twitter:
      return "fab fa-square-x-twitter";
    default:
      return "";
  }
};

const PersonProfile: React.FC<PersonProfileProps> = ({
  name,
  profession,
  contactInfo,
  description,
  socialMedia,
  imageUrl,
}) => {
  return (
    <div className="uds-person-profile">
      <div className="profile-img-container">
        <div className="profile-img-placeholder">
          <img
            className="profile-img"
            src={imageUrl}
            alt={name}
            width={300}
            height={300}
            decoding="async"
            loading="lazy"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="person">
        <h3 className="person-name">{name}</h3>
        <div className="person-profession">
          <h4>
            <span>{profession.title}</span>
          </h4>
          <h4>
            <span>{profession.department}</span>
          </h4>
        </div>

        <ul className="person-contact-info">
          <li>
            <GaEventWrapper
              gaData={{ ...gaData, section: name.toLowerCase() }}
            >
              <a href={`mailto:${contactInfo.email}`} aria-label="Email user">
                {contactInfo.email}
              </a>
            </GaEventWrapper>
          </li>
          <li>
            <GaEventWrapper gaData={{ ...gaData, section: name.toLowerCase() }}>
              <a href={`tel:${contactInfo.phone}`} aria-label="Call user">
                {contactInfo.phone}
              </a>
            </GaEventWrapper>
          </li>
          <li>
            <address className="person-address">
              <span className="person-street">
                {contactInfo.address.street}
              </span>
              <span className="person-city">
                {contactInfo.address.cityStateZip}
              </span>
            </address>
          </li>
        </ul>

        <div>
          <p className="person-description">{description}</p>
          <ul className="person-social-medias">
            {socialMedia.map((social, index) => (
              <li key={index}>
                <GaEventWrapper
                  gaData={{ ...gaData, section: name.toLowerCase() }}
                >
                  <a
                    href={social.url}
                    aria-label={`Go to user ${social.platform} profile`}
                  >
                    <span
                      className={getSocialMediaIcon(social.platform)}
                    ></span>
                  </a>
                </GaEventWrapper>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { PersonProfile };
