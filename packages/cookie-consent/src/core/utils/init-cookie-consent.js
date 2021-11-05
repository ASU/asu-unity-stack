/** @ts-check */
import { h, hydrate, render } from "preact";

import { AsuCookieConsent } from "../../components/AsuCookieConsent";

const HydratePreact = (component, props, target) => {
  return hydrate(h(component, props), target);
};

const RenderPreact = (component, props, target) => {
  return render(h(component, props), target);
};

/**
 * @typedef {import("../types/cookie-consent-types").CookieConsentProps} CookieConsentProps
 */

/**
 * Initialize Cookie Consent.
 *
 * @param {CookieConsentProps} props - Properties to initialize Cookie Consent with. See the
 * component definiton src/index.js for more details.
 * @param {boolean} [hydrate] - If true, will run Preact's hydrate function instead of render.
 * @param {string} [target] - The ID of the containing <div> where the cookie consent should
 * be either hydrated or rendered.
 */
const init = (props, target = "cookieConsentContainer", hydrate = false) => {
  if (hydrate) {
    HydratePreact(AsuCookieConsent, props, document.getElementById(target));
  } else {
    RenderPreact(AsuCookieConsent, props, document.getElementById(target));
  }
};

export { HydratePreact, RenderPreact, init };
