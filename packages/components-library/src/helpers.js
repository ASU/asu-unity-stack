
/* eslint-disable react/prop-types */
import { h, hydrate, render } from "preact";
import { Header, Login } from "./";

const HydratePreact = (component, props, target) => {
  return hydrate(h(component, props), target);
};

const RenderPreact = (component, props, target) => {
  return render(h(component, props), target);
};

/**
 * Checks the SSO cookie from CAS for login data, if it exists.
 */
const checkSSOCookie = () => {
  let loginStatus = {
    userName: "",
    loggedIn: false,
  };

  const cookies = document.cookie.split(";"); // try to parse out the username from SSONAME cookie

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    if (cookie.includes("SSONAME")) {
      if (cookie.substring(cookie.indexOf('=')+1) == "") {
        break;
      }

      loginStatus.userName = cookie.substring(cookie.indexOf('=')+1);
      loginStatus.loggedIn = true;
      break;
    }
  }

  return loginStatus;
};

/**
 * Alters the default login Url to add the '?callapp=' query string
 */
const alterLoginUrl = url => {
  let newUrl;

  const callbackUrl = window.location.toString();

  newUrl = decodeURI(url); // Decode the URL just in case

  newUrl = newUrl.replace(`/login`, `/login?callapp=${callbackUrl}`); // set the callapp into the url

  return newUrl;
};

/**
 * Check whether this is the first page load of the site.
 * @param {*} root - The full URL of the site root, used to check against document.referrer
 */
const checkFirstLoad = root => {
  const siteRoot = root ? root : window.location.hostname;
  // Check if title_loaded cookie is set
  const cookieValue = document.cookie
    .split("; ")
    .find(row => row.startsWith("title_loaded"));

  // If the referrer URL does not contain the current site root, then this page
  // was either loaded after linking from another site, or navigated to directly.
  // Note: This logic will not work if displaying the
  // component inside of an iframe, such as in Storybook
  if (!document.referrer.includes(siteRoot) && !cookieValue) {
    // set 'title_loaded' cookie with 10 minute timeout. If reloaded, avoids
    // animating the title a 2nd time.
    document.cookie = "title_loaded=true;max-age=600";
    return true;
  }

  return false;
};

/**
 * Initialize the header.
 *
 * @param {*} props - Properties to initialize the header with. See the component definiton
 * in src/components/Header/index.js for more details.
 * @param {*} hydrate - If true, will run Preact's hydrate function instead of render.
 * Should only be set to true if the header has been completely rendered server-side.
 * @param {*} target - The ID of the containing <div> where the header should
 * be either hydrated or rendered.
 */
const initHeader = (props, target = "headerContainer", hydrate = false, rootOfDOM = document) => {
  const { loggedIn, userName, loginLink, ...theRest } = props;
  const fullLoginUrl = loginLink
    ? loginLink
    : alterLoginUrl(Login.defaultProps.loginLink);

    let loginStatus;
    // If loggedIn is DEFINED and FALSE... honor logged out state
    // and assume host site has checked for us (solves for
    // quirks from Drupal not checking for CAS sessions).
    // But if login data is otherwise incomplete, check the SSO cookie for data.
    if (typeof loggedIn === 'boolean' && loggedIn === false) {
      loginStatus = {
        loggedIn: false,
        userName: '',
      };
    }
    else if (!loggedIn || !userName) {
      loginStatus = checkSSOCookie();
    }
    else {
      // Use provided values.
      loginStatus = {
        loggedIn,
        userName,
      };
    }

  const headerProps = {
    ...loginStatus,
    ...theRest,
    loginLink: fullLoginUrl,
  };

  if (hydrate) {
    HydratePreact(Header, headerProps, rootOfDOM.querySelector('#' + target));
  } else {
    RenderPreact(Header, headerProps, rootOfDOM.querySelector('#' + target));
  }
};

export {
  HydratePreact,
  RenderPreact,
  checkSSOCookie,
  initHeader,
  checkFirstLoad,
  alterLoginUrl,
};
