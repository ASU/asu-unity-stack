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

const initHeader = ( props, target = "headerContainer", hydrate = false) => {
  const { loggedIn, userName, ...theRest } = props;

  const loginStatus =
    !props.loggedIn || !props.userName
      ? checkSSOCookie()
      : {
          loggedIn,
          userName,
        };

  const headerProps = {
    ...loginStatus,
    ...theRest,
  };

  if (hydrate) {
    HydratePreact(Header, headerProps, target);
  } else {
    RenderPreact(Header, headerProps, target);
  }
};

export { HydratePreact, RenderPreact, checkSSOCookie, initHeader };
