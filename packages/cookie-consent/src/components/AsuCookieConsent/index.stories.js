import { h } from "preact";

import { AsuCookieConsent } from ".";

export default {
  title: "Cookie Consent",
  component: AsuCookieConsent,
};

const Template = args => <AsuCookieConsent {...args} />;

export const BasicCookieConsent = Template.bind({});


// export const basicCookieConsent = () => {
//   window.addEventListener("DOMContentLoaded", event => {
//     init();
//   });

//   return `<div style="width:100%; height:200vh;"><p>When testing Cookie Consent
//   in Storybook, keep in mind the cookie domain code does not support IPs. When
//   running locally, test from localhost instead to ensure the cookie gets set.
//   When no domain is provided, AsuCookieConsent sets a cookie for the domain and
//   top level domain. E.g. for unity.web.asu.edu, the cookie would be set for
//   asu.edu and thus will be readable on other subdomains.</p>
//   <!-- Required container for AsuCookieConsent -->
//   <div id="cookieConsentContainer" className="cookieConsentContainer"></div>
//   </div>`;
// };

// export const disabledCookieConsent = () => {
//   window.addEventListener("DOMContentLoaded", event => {
//     var props = { enableCookieConsent: false };
//     init(props);
//   });

//   return `<div style="width:100%; height:200vh;"><div id="cookieConsentContainer" className="cookieConsentContainer">Show I'm not enabled. (Don't include this text in production!)</div></div>`;
// };

// export const customDomain = () => {
//   window.addEventListener("DOMContentLoaded", event => {
//     var props = { asuCookieDomain: "asu.edu" };
//     init(props);
//   });

//   return `<div style="width:100%; height:200vh;"><p>The implementation in this
//   story specifically sets the cookie domain to asu.edu.</p>
//   <div id="cookieConsentContainer" className="cookieConsentContainer"></div></div>`;
// };
