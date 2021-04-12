# ASU Cookie Consent
ASU-branded implementation of react-cookie-consent npm library.

## Quickstart Guide

BREAKING CHANGE: Installation instructions have been updated since the 1.0.4
release. Please review install steps if you are updating from version 1.0.4 or
earlier. Note the inclusion of the vendor.js bundle and that the component now
requires a container tag in the HTML.

#### Install

```bash
yarn add @asu-design-system/cookie-consent
```

#### How to use
Include the bundled JS and CSS:

```html
<!-- include Cookie Consent script and styles -->
<link href="/node_modules/@asu-design-system/cookie-consent/dist/cookie-consent.css" rel="stylesheet" type="text/css"
media="all">
<script src="/node_modules/@asu-design-system/cookie-consent/dist/vendor.js"></script>
<script src="/node_modules/@asu-design-system/cookie-consent/dist/cookie-consent.js"></script>
```

Then in the page's body tag include the render target:

```html
<div id="cookieConsentContainer" class="cookieConsentContainer"></div>
```

Then initialize the banner:

```
<script>
  window.addEventListener("DOMContentLoaded", event => {
    // Initialize cookie consent banner
    AsuCookieConsent.init();
  })
</script
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
