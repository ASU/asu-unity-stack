// @ts-check
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes, { shape } from "prop-types";
import React from "react";

// @ts-ignore
import endorsedLogo from "../../assets/images/endorsedLogo.png";

/**
 * @param {{
 *  social: import("../../core/models/types").Social
 * }} props
 * @returns {JSX.Element}
 */
const Social = ({ social: { unitLogo, mediaLinks } }) => {
  return (
    <div className="wrapper" id="wrapper-endorsed-footer">
      <div className="container" id="endorsed-footer">
        <div className="row">
          <div className="col-md" id="endorsed-logo">
            <img
              src={unitLogo}
              alt="ASU University Technology Office Arizona State University."
            />
          </div>

          {mediaLinks && (
            <div className="col-md" id="social-media">
              <nav className="nav" aria-label="Social Media">
                {mediaLinks.facebook && (
                  <a className="nav-link" href={mediaLinks.facebook}>
                    <FontAwesomeIcon
                      title="Facebook Social Media Icon"
                      icon={faFacebookSquare}
                    />
                  </a>
                )}
                {mediaLinks.twitter && (
                  <a className="nav-link" href={mediaLinks.twitter}>
                    <FontAwesomeIcon
                      title="Twitter Social Media Icon"
                      icon={faTwitterSquare}
                    />
                  </a>
                )}
                {mediaLinks.instagram && (
                  <a className="nav-link" href={mediaLinks.instagram}>
                    <FontAwesomeIcon
                      title="Instagram Social Media Icon"
                      icon={faInstagramSquare}
                    />
                  </a>
                )}
                {mediaLinks.youtube && (
                  <a className="nav-link" href={mediaLinks.youtube}>
                    <FontAwesomeIcon
                      title="YouTube Social Media Icon"
                      icon={faYoutubeSquare}
                    />
                  </a>
                )}
                {mediaLinks.linkedIn && (
                  <a className="nav-link" href={mediaLinks.linkedIn}>
                    <FontAwesomeIcon
                      title="LinkedIn Social Media Icon"
                      icon={faLinkedin}
                    />
                  </a>
                )}
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Social.propTypes = {
  social: shape({
    unitLogo: PropTypes.string.isRequired,
    mediaLinks: shape({
      facebook: PropTypes.string,
      twitter: PropTypes.string,
      linkedIn: PropTypes.string,
      instagram: PropTypes.string,
      youtube: PropTypes.string,
    }),
  }),
};

Social.defaultProps = {
  social: {
    unitLogo: endorsedLogo,
    mediaLinks: {
      facebook: "",
      twitter: "",
      linkedIn: "",
      instagram: "",
      youtube: "",
    },
  },
};

export { Social };
