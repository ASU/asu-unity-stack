/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/compat";
import PropTypes from "prop-types";
import $ from "jquery";
import serviceauth, { handleAuth } from "./serviceauth.js";
//import serviceauth from "./serviceauth.js";

//import * as S from "./styles";
//import Nav from "../Nav";
//import useWindowDimensions from "../../hooks/useWindowDimensions";

// UTILITY FUNCTIONS

function pageInit() {
  console.log("auth done; page is initializing.......");
  $(document).ready(() => {

    alert('pageInit executed.');

    // $("#logout-button").click(deauth);

  });
}

// COMPONENT

const Auth = (props) => {

  // TODO Do logic here based on props to return success, fail or nothing.
  // TODO pass in serviceauth credentials via props?
  // TODO How will this work with redirect and subsequent use after?
  // TODO How to trigger check on page load?

  //console.log('deeebug');
  //console.log(serviceauth.generateRandomString('abcdefghijklmnop', 10));
  //console.log(serviceauth);

  // ??? Alternate approach to the below - add functions to serviceauth in
  // serviceauth.js and export just serviceauth but get all the functions,
  // ala: serviceauth.handleAuth(pageInit);
  // Is that elegant or hacky? I'm not sure. So keeping it simple for now.

  handleAuth(pageInit);

  console.log(`token = ${  sessionStorage.getItem(serviceauth.SS_JWT_TOKEN)}`);

  // TODO Based on outcome of the above, render the correct return.

  // If just logged in - how do we know?
  return (
      <div>
        <p>success</p>
      </div>
  );

  /*
  // If failed log in - how do we know?
  // Route to a failure page?
  return (
      <div>
        <p>failure</p>
      </div>
  );

  // If we're authed. - how do we know? sessionStorage
  return (
    // Nothing, we're authed.
    <div />
  );
  */

}

// Props
Auth.defaultProps = {
  //serviceauthId: "",
  //serviceauthSecret: "serviceauth-public-agent",
  //serviceauthRedirectUri: "",
  //serviceauthOauthUrl: "https://weblogin.asu.edu/serviceauth/oauth2/native/allow",
  //serviceauthTokenUrl: "https://weblogin.asu.edu/serviceauth/oauth2/native/token",
  //scopes: [ "" ],
}

Auth.propTypes = {
  //serviceauthId: PropTypes.string.isRequired,
  //serviceauthSecret: PropTypes.string.isRequired,
  //serviceauthRedirectUri: PropTypes.string.isRequired,
  //serviceauthOauthUrl: PropTypes.string.isRequired,
  //serviceauthTokenUrl: PropTypes.string.isRequired,
  //scopes: PropTypes.array.isRequired,
};

export default Auth;
