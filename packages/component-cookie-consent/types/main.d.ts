import { FunctionComponent } from "react";

export interface CookieConsentProps {
  enableCookieConsent: boolean
  expirationTime?: number
}

export const CookieConsent: FunctionComponent<CookieConsentProps>;
