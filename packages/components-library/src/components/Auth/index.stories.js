/** @jsx h */

import { h } from "preact";
import { withA11y } from "@storybook/addon-a11y";

import Auth from ".";
import { Fragment } from "preact/compat";

export default {
  component: Auth,
  title: "Auth",
  decorators: [withA11y],
};

/*
Non-prod Props
      serviceauthId={"healthcheck-web-nonprod"}
      serviceauthSecret={"serviceauth-public-agent"}
      serviceauthRedirectUri={"https://www-qa.asu.edu/healthcheck"}
      serviceauthOauthUrl={"https://weblogin.asu.edu/serviceauth/oauth2/native/allow"}
      serviceauthTokenUrl={"https://weblogin.asu.edu/serviceauth/oauth2/native/token"}
      scopes={["https://app.m.asu.edu/healthcheck"]}
Prod Props
      serviceauthId={"healthcheck-web"}
      serviceauthSecret={"serviceauth-public-agent"}
      serviceauthRedirectUri={"https://www.asu.edu/healthcheck"}
      serviceauthOauthUrl={"https://weblogin.asu.edu/serviceauth/oauth2/native/allow"}
      serviceauthTokenUrl={"https://weblogin.asu.edu/serviceauth/oauth2/native/token"}
      scopes={["https://app.m.asu.edu/healthcheck"]}

*/

export const base = () => (
  <Fragment>
    <Auth
      serviceauthId={"healthcheck-web"}
      serviceauthSecret={"serviceauth-public-agent"}
      serviceauthRedirectUri={"https://www.asu.edu/healthcheck"}
      serviceauthOauthUrl={"https://weblogin.asu.edu/serviceauth/oauth2/native/allow"}
      serviceauthTokenUrl={"https://weblogin.asu.edu/serviceauth/oauth2/native/token"}
      scopes={["https://app.m.asu.edu/healthcheck"]}
    />
    <div
      //style={"background-color:#8c1e40; width:100%; height:200vh;"}
    />
  </Fragment>
);
