/* eslint-disable react/react-in-jsx-scope */
import { h } from "preact";
import { useState } from "preact/compat";
//import { useState, useEffect, useRef } from "preact/compat";
//import * as S from "./styles";
import propTypes from "prop-types";
import CookieConsent from "react-cookie-consent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../styles.scss";

const AsuCookieConsent = ({
  enableCookieConsent,
  asuCookieDomain,
  ...props
}) => {
  const [easeOut, setEaseOut] = useState("");

  /*
   * Use easeOut state to add class to trigger ease-out transition on accept.
   */
  const easeOutTrigger = () => {
    setEaseOut(" ease-closed");
    // Hide from screen readers since we aren't letting the default
    // CookieConsent hiding remove it from the DOM because we need to keep it
    // visible during the ease-out transition. We use this setTimeout
    // then apply an additional class to trigger display:none and
    // visibility:hidden rules for a11y.
    setTimeout(function () {
      setEaseOut(" ease-closed ease-closed-hidden");
    }, 500);
  };

  // We can't use the decline button from the react-cookie-consent library for
  // our close button because it won't let us embed an FA icon inside it. It's
  // also in a difficult to style spot. So we markup our own button in the
  // component. But then that isn't wired up to the react-cookie-consent
  // package's events... so we embed this tiny script in the button. It will
  // click the r-c-c button when our button is clicked. Since there is no decline,
  // this works out fine.
  const distantClick = () => {
    // TODO Why is getElementById working and is there a more correct way to do
    // this? Explored implementing useRef and forwardRef but didn't appear
    // doable with with a packaged subcomponent as the child. Since this works
    // and there appears to be no adverse effects, leaving it for now.
    document.getElementById("rcc-confirm-button").click();
  };

  // Return the component.
  if (enableCookieConsent) {
    return (
      <div className={`uds-cookie-consent-component${easeOut}`}>
        <CookieConsent
          extraCookieOptions={{ domain: asuCookieDomain }}
          location="bottom"
          buttonText="Ok, I agree"
          cookieName="asuCookieConsent"
          hideOnAccept={false} // Let us handle hiding on accept with "ease."
          onAccept={easeOutTrigger} // Wire up ease-out class.
          disableStyles="true"
          contentClasses="uds-cookie-consent-content"
          buttonClasses="uds-cookie-consent-btn"
          containerClasses="uds-cookie-consent-container"
          style={{
            //background: in styles.scss for tokenizing
            //border: in styles.scss for tokenizing
            //padding: in styles.scss for tokenizing
            maxWidth: "676px",
            width: "100%",
            margin: "0 auto",
            zIndex: "999",
            boxSizing: "border-box",
            float: "left",
          }}
          contentStyle={{
            fontSize: "14px",
            //fontFamily: in styles.scss for tokenizing
            //color: in styles.scss for tokenizing
            //fontWeight: in styles.scss for tokenizing
            lineHeight: "1.5",
            margin: "0",
          }}
          buttonStyle={{
            //color: in styles.scss for tokenizing
            //background: in styles.scss for tokenizing
            //fontFamily: in styles.scss for tokenizing
            //fontWeight: in styles.scss for tokenizing
            //margin: in styles.scss for tokenizing
            fontSize: "14px",
            borderRadius: "25px",
            border: "none",
            padding: ".6em 1.2rem",
          }}
          expires={90}
        >
          <button
            className="uds-cookie-consent-faux-close-btn"
            aria-label="Close cookie consent"
            style="float:right;background-color:#ffffff;border: 1px solid #d0d0d0;"
            onClick={distantClick}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          ASU websites use cookies to enhance user experience, analyze site
          usage, and assist with outreach and enrollment. By continuing to use
          this site, you are giving us your consent to do this. Learn more about
          cookies on ASU websites in our{" "}
          <a
            aria-label="learn more about cookies"
            tabIndex="0"
            target="_blank"
            rel="noreferrer"
            href="https://www.asu.edu/privacy#cookies"
          >
            Privacy Statement
          </a>
          .
        </CookieConsent>
      </div>
    );
  } else {
    return null;
  }
};

AsuCookieConsent.propTypes = {
  enableCookieConsent: propTypes.bool,
  asuCookieDomain: propTypes.string,
};
AsuCookieConsent.defaultProps = {
  enableCookieConsent: true,
  asuCookieDomain: window.location.hostname.split(/\./).slice(-2).join("."),
};
export { AsuCookieConsent };
