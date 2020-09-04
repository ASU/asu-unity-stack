/** @jsx h */
/* eslint-disable react/prop-types */
import { h, hydrate, render } from "preact";
import { Header } from "./";

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
    if (cookies[i].indexOf("SSONAME") > 0) {
      if (cookies[i].substring(9) == "") {
        break;
      }

      loginStatus.userName = cookies[i].substring(9);
      loginStatus.loggedIn = true;
      break;
    }
  }

  return loginStatus;
};

/**
 * Alters the default login Url to add the '?callapp=' query string
 */
const alterLoginUrl = (url) => {

  const callbackUrl = window.location.toString();

  url = decodeURI(url); // Decode the URL just in case

  url = url.replace(
    `/login`,
    `/login?callapp=${callbackUrl}`
  ); // set the callapp into the url

  return url;
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
const initHeader = ( props, hydrate = false, target = "headerContainer") => {
  const { loggedIn, userName, loginLink, ...theRest } = props;
  const fullLoginUrl = loginLink ? loginLink : alterLoginUrl(Header.defaultProps.loginLink);

  // If login data is incomplete, check the SSO cookie for data.
  const loginStatus =
    !loggedIn || !userName
      ? checkSSOCookie()
      : {
          loggedIn,
          userName,
        };

  const headerProps = {
    ...loginStatus,
    ...theRest,
    loginLink: fullLoginUrl
  };

  console.log(headerProps, 'the props');

  if (hydrate) {
    HydratePreact(Header, headerProps, document.getElementById(target));
  } else {
    RenderPreact(Header, headerProps, document.getElementById(target));
  }
};

export { HydratePreact, RenderPreact, checkSSOCookie, initHeader };
