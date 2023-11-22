// @ts-check
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";

// eslint-disable-next-line import/no-unresolved
import trackReactComponent from "../../../shared/services/componentDatalayer";
import { trackGAEvent } from "../../../shared";
import { CookieConsentWrapper } from "./CookieConsent.styles";
import { addDays } from "./core/utils/helpers";

const defaultGAEvent = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  region: "main content",
  section: "cookie banner",
};

const now = new Date();

/**
 * @typedef { import('./core/types/cookie-consent-types').CookieConsentProps } CookieConsentProps
 */

/**
 *
 * @param {CookieConsentProps} props
 * @returns {JSX.Element}
 */
const CookieConsent = ({ enableCookieConsent, expirationTime }) => {
  const cookieConsentRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const updateEasingState = () => {
    const elementClassList = cookieConsentRef.current.classList;
    elementClassList.add("ease-closing");
    setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  const updateLocalStorage = () => {
    const { localStorage } = window;
    const ttl = addDays(now, expirationTime).getTime();
    localStorage.setItem("cookieConsent", ttl.toString());
  };

  const handleCloseConsent = () => {
    updateLocalStorage();
    updateEasingState();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      trackReactComponent({
        packageName: "component-cookie-consent",
        component: "CookieConsent",
        type: "NA",
        configuration: {
          expirationTime,
          enableCookieConsent,
        },
      });
    }
  }, []);

  useEffect(() => {
    const { localStorage } = window;
    if (localStorage) {
      const item = localStorage.getItem("cookieConsent");
      setVisible(!item ? true : now.getTime() > parseInt(item, 10));
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
          </div>
          <button
            type="button"
            className="accept-btn"
            onClick={() => {
              handleCloseConsent();
              trackGAEvent({ ...defaultGAEvent, text: "ok, i agree" });
            }}
          >
            Ok, I agree
          </button>
          <button
            type="button"
            className="close-btn"
            aria-label="Close cookie consent"
            onClick={() => {
              handleCloseConsent();
              trackGAEvent({ ...defaultGAEvent, text: "close cross" });
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </CookieConsentWrapper>
  ) : null;
};

CookieConsent.propTypes = {
  /* Show the banner or not */
  enableCookieConsent: PropTypes.bool.isRequired,
  /* Number of days to expire the consent */
  expirationTime: PropTypes.number,
};

CookieConsent.defaultProps = {
  expirationTime: 90,
};

export { CookieConsent };
