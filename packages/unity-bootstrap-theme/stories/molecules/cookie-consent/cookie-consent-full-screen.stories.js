import React, { useEffect } from "react";
import { allCookieConsentJS } from "../../../src/js/cookie-consent-full-screen";
import "../../../src/css/cookie-consent-full-screen.css";

export default {
  title: "Molecules/Cookie Consent",
  parameters: { controls: { disable: true } },
};
export const FullScreenBannerCookieConsent = () => {
  useEffect(() => {
    allCookieConsentJS();
  }, []);

  return (
    <div id="full-screen"></div>
  );
}
