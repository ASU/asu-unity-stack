// @ts-check
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";

import { CookieConsentWrapper } from "./CookieConsent.styles";

/**
 * @typedef { import('./core/types/cookie-consent-types').CookieConsentProps } CookieConsentProps
 */

/**
 *
 * @param {CookieConsentProps} props
 * @returns {JSX.Element}
 */
const CookieConsent = ({ enableCookieConsent }) => {
  const cookieConsentRef = useRef(null);
  const [visible, setVisible] = useState(false);
  library.add(fas);

  const updateEasingState = () => {
    const elementClassList = cookieConsentRef.current.classList;
    elementClassList.add("ease-closing");
    setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  const updateLocalStorage = () => {
    const { localStorage } = window;
    localStorage.setItem("cookieConsent", "true");
  };

  const handleCloseConsent = () => {
    updateLocalStorage();
    updateEasingState();
  };

  useEffect(() => {
    const { localStorage } = window;
    if (localStorage) {
      const closedConsent = localStorage.getItem("cookieConsent") === "true";
      setVisible(!closedConsent);
    }
  }, []);

  return enableCookieConsent && visible ? (
    <CookieConsentWrapper>
      <div ref={cookieConsentRef} className="cookie-consent-component">
        <div className="container">
          <div className="content">
            <p>
              ASU websites use cookies to enhance user experience, analyze site
              usage, and assist with outreach and enrollment. By continuing to
              use this site, you are giving us your consent to do this. Learn
              more about cookies on ASU websites in our{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.asu.edu/privacy#cookies"
              >
                Privacy Statement.
              </a>
            </p>
            <button
              type="button"
              className="close-btn"
              onClick={handleCloseConsent}
            >
              <FontAwesomeIcon icon="times" />
            </button>
          </div>
          <button
            type="button"
            className="accept-btn"
            onClick={handleCloseConsent}
          >
            Ok, I agree
          </button>
        </div>
      </div>
    </CookieConsentWrapper>
  ) : null;
};

CookieConsent.propTypes = {
  enableCookieConsent: PropTypes.bool,
};

CookieConsent.defaultProps = {
  enableCookieConsent: true,
};

export { CookieConsent };
