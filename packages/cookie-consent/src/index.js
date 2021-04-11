import "cookieconsent";
import "./index.css";

/***
 * Initializes cookie consent and sets cookie consent domain to cookieDomain
 */
const init = cookieDomain => {
  const customContent = {
    message:
      "ASU websites use cookies to enhance user experience, analyze site usage, and assist with outreach and enrollment. By continuing to use this site, you are giving us your consent to do this. Learn more about cookies on ASU websites in our",
    dismiss: "I agree",
    link: "Privacy Statement",
    href: "https://www.asu.edu/privacy#cookies",
  };

  const customElements = {
    message:
      '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
    messagelink:
      '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a>.</span>',
    dismiss:
      '<a aria-label="dismiss cookie message" tabindex="0" class="cc-btn cc-dismiss asu-cc-btn">{{dismiss}}</a>',
  };

  // If top level cookie domain not found in hostname, set to empty string (auto)
  if (window.location.hostname.indexOf(cookieDomain) === -1) {
    cookieDomain = "";
  }

  window.cookieconsent.initialise({
    content: customContent,
    elements: customElements,
    theme: "classic",
    palette: null,
    cookie: {
      domain: cookieDomain,
      expiryDays: 90,
    },
  });
};

export { init };
