# ASU Cookie Consent
ASU-branded implementation of react-cookie-consent npm library.

## Quickstart Guide

BREAKING CHANGE: Installation instructions have been updated since the 1.0.4
release. Please review install steps if you are updating from version 1.0.4 or
earlier. Note the the component now requires a container tag in the HTML and
for Preact to be added as a peer dependency (`$ yarn add preact`).

#### Install

```bash
yarn add @asu-design-system/cookie-consent
```

#### How to use
Include the bundled JS and CSS and ensure peer dependency is met:

```html
<!-- Cookie Consent requires Preact as a peer dependency, meaning you
  will need to install it yourself. If you use the ASU Header component, it
  will load Preact for you. Example below pulls Preact in from unpkg.com.
  Please don't use this approach in production.
  Command to add Preact: $ yarn add preact -->
<script src="https://unpkg.com/preact@10.5.13/dist/preact.min.js"></script>
<!-- include Cookie Consent script -->
<script src="../dist/cookie-consent.min.js"></script>
```

Then in the page's body tag include the render target:

```html
<div id="cookieConsentContainer"></div>
```

Then initialize the banner. This can go below your other script tags:

```
<script>
  window.addEventListener("DOMContentLoaded", event => {
    // Initialize cookie consent banner
    AsuCookieConsent.init();
  })
</script>
```
You're all done! Cookie Consent should now load whenever a user doesn't have
the cookie on their system. The consent cookie expires after 90 days.

By default cookie consent will set the cookie domain to the current hostname.
If this needs to be changed, it can be done by passing the domain to the
AsuCookieConsent.init function, like so:

```
<script>
  window.addEventListener("DOMContentLoaded", event => {
    // Optional props to provide.
    var props = { asuCookieDomain = "asu.edu" };
    // Initialize cookie consent banner
    AsuCookieConsent.init(props);
  })
</script
```

By default cookie consent is enabled and will display the banner if visitors
do not have an asuCookieConsent cookie. Internally, the enableCookieConsent
prop defaults to true, but if you pass false, the component won't render.

```
<script>
  window.addEventListener("DOMContentLoaded", event => {
    // Optional props to provide.
    var props = { enableCookieConsent: false };
    // Initialize cookie consent banner
    AsuCookieConsent.init(props);
  })
</script>
```

If you need to use a different container ID, you can supply that to the
AsuCookieConsent.init() like so:

```
<script>
  window.addEventListener("DOMContentLoaded", event => {
    // Initialize cookie consent banner
    AsuCookieConsent.init(null, "myCustomContainerId");
  })
</script>
```
