import React, { useEffect } from "react";
import { allCookieConsentJS } from "../../../src/js/cookie-consent";

import "../../../src/css/cookie-consent.css";

export default {
  title: "Molecules/Cookie Consent",
  parameters: { controls: { disable: true } },
};
export const MaxWidthCookieConsent = () => {
  useEffect(() => {
    allCookieConsentJS();
  }, []);

  return (
    <div></div>
  );
}
