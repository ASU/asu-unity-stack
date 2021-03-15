# ASU Cookie Consent
ASU-branded implementation of cookieconsent npm library

## Quickstart Guide

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
<script src="/node_modules/@asu-design-system/cookie-consent/dist/cookie-consent.js"></script>
```

Then initialize the banner:

```

<script>
  // Initialize cookie consent banner
  AsuCookieConsent.init();
</script>

```

By default cookie consent will set the cookie domain to the current hostname. If this needs to be changed, it can be done by passing the domain to the init function, like so:

```<script>
  // Initialize cookie consent banner
  AsuCookieConsent.init(‘example.com’);
</script>```
