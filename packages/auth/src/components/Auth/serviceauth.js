import sjcl from "sjcl";
import $ from "jquery";
//import queryString from "query-string";
//import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";

// https://tools.ietf.org/html/draft-ietf-oauth-browser-based-apps-01

// var serviceauthId = "authn-whisper";
// var serviceauthSecret = "serviceauth-public-agent";
// var serviceauthRedirectUri = "https://whisper.apps.sdc.uto.asu.edu/";

// whisper scripts, for reference:
// - https://whisper.apps.sdc.uto.asu.edu/whisper-util.js
// - https://whisper.apps.sdc.uto.asu.edu/whisper-auth.js
// - https://whisper.apps.sdc.uto.asu.edu/whisper-ui.js

// CONFIGS
// TODO VERIFY lines 19 and 21 are the only configs to change between environs.
let serviceauthId = "healthcheck-web-nonprod"; // healthcheck-web
let serviceauthSecret = "serviceauth-public-agent";
let serviceauthRedirectUri = "https://www-qa.asu.edu/healthcheck"; // https://www.asu.edu/healthcheck || LATER: https://healthcheck.asu.edu
//var serviceauthId = "changemajor-app-nonprod";
//var serviceauthSecret = "serviceauth-public-agent";
//var serviceauthRedirectUri = "https://d22y8n16czt9qp.cloudfront.net";
// var serviceauthRedirectUri = "https://dpjycpin19sax.cloudfront.net";

let serviceauthOauthUrl =
  "https://weblogin.asu.edu/serviceauth/oauth2/native/allow";
let serviceauthTokenUrl =
  "https://weblogin.asu.edu/serviceauth/oauth2/native/token";
let scopes = [
  "https://app.m.asu.edu/healthcheck",
  // Data Potluck details
  //"https://api.myasuplat-dpl.asu.edu/scopes/principal/read:self",
  //"https://api.myasuplat-dpl.asu.edu/scopes/person/read:self",
  //"https://api.myasuplat-dpl.asu.edu/scopes/student-group-membership/read:self",
];

// var DPL_BASE_URL = "https://dpl-api-dev.apps.sdc.uto.asu.edu/api";
// var DPL_BASE_URL = "https://api-tst.myasuplat-dpl.asu.edu/api";
//let DPL_BASE_URL = "https://api.myasuplat-dpl.asu.edu/api";
let HEALTHCHECK_API_BASE_URL = "https://app.m.asu.edu/healthcheck";

// TODO:
let LOGOUT_URL = "https://weblogin.asu.edu/cas/logout";
// var LOGOUT_URL = serviceauthRedirectUri;

let SS_SA_CODE_VERIFIER = "healthcheck-web.serviceauth.codeVerifier";
// var SS_SA_CODE_VERIFIER = "whisper.serviceauth.codeVerifier";
//var SS_SA_CODE_VERIFIER = "changemajor.serviceauth.codeVerifier";
let SS_SA_STATE = "healthcheck-web.serviceauth.state";
// var SS_SA_STATE = "whisper.serviceauth.state";
//var SS_SA_STATE = "changemajor.serviceauth.state";

let SS_JWT_TOKEN = "healthcheck-web.jwt.token";
let SS_NAME = "healthcheck-web.ss.name";
let SS_ASURITE = "healthcheck-web.ss.asurite";
let SS_VIEW_AS = "healthcheck-web.ss.viewas";
//// var SS_JWT_TOKEN = "whisper.jwt.token";
//var SS_JWT_TOKEN = "changemajor.jwt.token";
//var SS_NAME = "changemajor.ss.name";
//var SS_ASURITE = "changemajor.ss.asurite";
//var SS_VIEW_AS = "changemajor.ss.viewas";

// CONFIGS END

/*
	TODO:
   A browser-based application that wishes to use either long-lived
   refresh tokens or privileged scopes SHOULD restrict its JavaScript
   execution to a set of statically hosted scripts via a Content
   Security Policy ([CSP2]) or similar mechanism.  A strong Content
   Security Policy can limit the potential attack vectors for malicious
   JavaScript to be executed on the page.
 */

function generateCodeVerifier() {
  let alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.";
  let length = 128;
  return generateRandomString(alphabet, length);
}

function generateRandomServiceauthState() {
  let alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.";
  let length = 64;
  return generateRandomString(alphabet, length);
}

function redirectToServiceauth() {
  let codeVerifier = generateCodeVerifier();
  let codeChallenge = sha256base64url(codeVerifier);
  let state = generateRandomServiceauthState();

  let scopeParam = "";
  for (let i = 0; i < scopes.length; i++) {
    if (scopeParam.length > 0) {
      scopeParam += " ";
    }
    scopeParam += scopes[i];
  }

  sessionStorage.setItem(SS_SA_CODE_VERIFIER, codeVerifier);
  sessionStorage.setItem(SS_SA_STATE, state);

  let url = serviceauthOauthUrl;
  url += "?response_type=code";
  url += `&client_id=${  encodeURIComponent(serviceauthId)}`;
  url += `&redirect_uri=${  encodeURIComponent(serviceauthRedirectUri)}`;
  url += `&state=${  encodeURIComponent(state)}`;
  url += "&code_challenge_method=S256";
  url += `&code_challenge=${  codeChallenge}`;
  url += `&scope=${  encodeURIComponent(scopeParam)}`;
  console.log(`redirecting to oauth server at url=[${  url  }]`);
  window.location.replace(url);
}

function handleOauthCode(code, state, success, err) {
  let storedState = sessionStorage.getItem(SS_SA_STATE);
  let codeVerifier = sessionStorage.getItem(SS_SA_CODE_VERIFIER);
  sessionStorage.removeItem(SS_SA_STATE);
  sessionStorage.removeItem(SS_SA_CODE_VERIFIER);

  console.log(`recevied state=[${  state  }]`);
  console.log(`stored state  =[${  storedState  }]`);
  if (!state || state.length < 1 || storedState != state) {
    err(
      `received unexpected state [${
        state
        }] - expected [${
        storedState
        }]`
    );
    return;
  }

  //console.log("codeVerifier  =["+codeVerifier+"]");
  let requestData = {
    grant_type: "authorization_code",
    code,
    redirect_uri: serviceauthRedirectUri,
    client_id: serviceauthId,
    client_secret: serviceauthSecret,
    code_verifier: codeVerifier,
  };

  console.log(`token request data: [${  JSON.stringify(requestData)  }]`);
  $.ajax({
    type: "POST",
    url: serviceauthTokenUrl,
    cache: false,
    data: requestData,
    success (data) {
      console.log(`token endpoint success! data=[${  JSON.stringify(data)}`);
      sessionStorage.setItem(SS_JWT_TOKEN, data.access_token);
      sessionStorage.setItem("RELOAD", true);

      // TODO: save token expiration time and refresh token
      // TODO: verify we got scopes we need

      success();
    },
    error (xhr, status, error) {
      err(
        `error: xhr: [${
          JSON.stringify(xhr)
          }] status=[${
          status
          }], error=[${
          error
          }]`
      );
    },
  });
}

function reauth() {
  console.log("reauthing...");
  // TODO: detect fail loop? throttle?
  sessionStorage.removeItem(SS_JWT_TOKEN);
  sessionStorage.removeItem(SS_NAME);
  sessionStorage.removeItem(SS_ASURITE);
  sessionStorage.removeItem(SS_VIEW_AS);
  sessionStorage.removeItem("RELOAD");
  redirectToServiceauth();
}

function deauth() {
  sessionStorage.removeItem(SS_JWT_TOKEN);
  sessionStorage.removeItem(SS_NAME);
  sessionStorage.removeItem(SS_ASURITE);
  sessionStorage.removeItem(SS_VIEW_AS);
  window.location.href = LOGOUT_URL;
}

function getAccessToken() {
  return sessionStorage.getItem(SS_JWT_TOKEN);
}

function ajaxBeforeSendFunc(xhr) {
  console.log(`bearer: ${  getAccessToken()}`);
  xhr.setRequestHeader("Authorization", `Bearer ${  getAccessToken()}`);
}

function handleAuth(authComplete) {
  console.log("handleauth..");
  if (getParam("code")) {
    let code = getParam("code");
    let state = getParam("state");

    window.history.replaceState({}, document.title, serviceauthRedirectUri);

    handleOauthCode(
      code,
      state,
      () => {
        authComplete();
      },
      (errTxt) => {
        // TODO: UI
        console.log(`ERROR: ${  errTxt}`);
        reauth();
      }
    );
  } else if (sessionStorage.getItem(SS_JWT_TOKEN)) {
    authComplete();
  } else {
    redirectToServiceauth();
  }
}

function getParam(nameIn) {
  let qs = window.location.search.substring(1, window.location.search.length);
  if (qs.length != 0) {
    qs = qs.replace(/\+/g, " ");
    let qsargs = qs.split("&");
    for (let i = 0; i < qsargs.length; i++) {
      let j = qsargs[i].indexOf("=");
      let name, value;
      if (j == -1) {
        name = qsargs[i];
        value = "";
      } else {
        name = qsargs[i].substring(0, j);
        value = unescape(qsargs[i].substring(j + 1));
      }
      if (nameIn == name) {
        return value;
      }
    }
  }
  return null;
}

function readCookie(name) {
  let nameEQ = `${name  }=`;
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0)
      return unescape(c.substring(nameEQ.length, c.length));
  }
  return null;
}

function sha256hex(message) {
  return sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(message));
}

// without padding
function sha256base64url(message) {
  return sjcl.codec.base64url.fromBits(sjcl.hash.sha256.hash(message));
}

function generateRandomString(alphabet, length) {
  let randArr = new Uint8Array(length);
  let ret = "";
  window.crypto.getRandomValues(randArr);
  for (let i = 0; i < randArr.length; i++) {
    let j = randArr[i] % 64;
    ret += alphabet.substring(j, j + 1);
  }
  return ret;
}

let emplid;

/* Change Major use only
function handleStudentGroupData(data) {
  $("#sg-table").append($("<tbody>"));
  data.forEach((sg) => {
    let tr = $("<tr>");
    tr.append($("<td>").text(sg.studentGroupCode));
    tr.append($("<td>").text(sg.description));
    tr.append($("<td>").text(sg.effectiveDate));
    $("#sg-table").find("tbody").append(tr);
  });
  $("#sg-data").show();
  $("#sg-loading").hide();
}
*/

/* Change Major use only
function handlePersonData(data) {
  $("#loading").hide();

  // TODO: test for presence
  let name = `${data.names.PRI.givenName  } ${  data.names.PRI.familyName}`;

  sessionStorage.setItem(SS_NAME, data.names.PRI.givenName);

  $("#name").text(name);

  $(".userinfo").show();
}
*/

/* Change Major use only
function handlePrincipalData(data) {
  // TODO: check to ensure this is primary principal
  console.log("handlePriciple data");

  console.log(`data.principal=${  data.principal}`);
  sessionStorage.setItem(SS_ASURITE, data.principal);

  // $("#asuriteid").text(data.principal);
  // $("#emplid").text(data.owner.emplid);
  emplid = data.owner.emplid;

  // console.log("myasurite=" + data.principal);
  console.log(`reload=${  sessionStorage.getItem("RELOAD")}`);
  if (sessionStorage.getItem("RELOAD")) {
    sessionStorage.removeItem("RELOAD");
    console.log("redirect");
    window.location.href = window.location.href;
  }

  $.ajax({
    type: "GET",
    url: `${DPL_BASE_URL  }/person/${  data.owner.emplid}`,
    beforeSend: ajaxBeforeSendFunc,
    cache: false,
    dataType: "json",
    success (data) {
      console.log(`person success! data=[${  JSON.stringify(data)  }]`);
      handlePersonData(data);
    },
    error (xhr, status, error) {
      console.log(
        `person error: xhr: [${
          JSON.stringify(xhr)
          }] status=[${
          status
          }], error=[${
          error
          }]`
      );
      if (xhr.status == 401) {
        reauth();
      }
    },
  });
}
*/

/* Change Major use only
function getStudentGroupData() {
  $("#get-sg-button").hide();
  $("#sg-loading").show();

  $.ajax({
    type: "GET",
    url: `${DPL_BASE_URL  }/student-group-membership/emplid/${  emplid}`,
    beforeSend: ajaxBeforeSendFunc,
    cache: false,
    dataType: "json",
    success (data) {
      console.log(
        `student-group-membership success! data=[${  JSON.stringify(data)  }]`
      );
      handleStudentGroupData(data);
    },
    error (xhr, status, error) {
      console.log(
        `student-group-membership error: xhr: [${
          JSON.stringify(xhr)
          }] status=[${
          status
          }], error=[${
          error
          }]`
      );
      if (xhr.status == 401) {
        reauth();
      }
    },
  });
}
*/

/* Moved to Auth component.
function pageInit() {
  console.log("auth done; page is initializing.......");
  $(document).ready(() => {

    console.log('pageInit executed!');

    /* Change Major use only
    // $("#logout-button").click(deauth);

    // $("#get-sg-button").click(getStudentGroupData);
    // console.log("dpl_url = " + DPL_BASE_URL + "/principal/me");
    $.ajax({
      type: "GET",
      url: `${DPL_BASE_URL  }/principal/me`,
      beforeSend: ajaxBeforeSendFunc,
      cache: false,
      dataType: "json",
      success (data) {
        console.log(`principal success! data=[${  JSON.stringify(data)  }]`);
        handlePrincipalData(data);
      },
      error (xhr, status, error) {
        console.log(
          `principal error: xhr: [${
            JSON.stringify(xhr)
            }] status=[${
            status
            }], error=[${
            error
            }]`
        );
        if (xhr.status == 401) {
          reauth();
        }
      },
    });
    *  /
  });
}
*/

// Trigger this outright for any component that imports serviceauth.js.
//handleAuth(pageInit);

const serviceauth = {
  serviceauthRedirectUri,
  SS_JWT_TOKEN,
  SS_NAME,
  SS_SA_STATE,
  SS_ASURITE,
  SS_VIEW_AS,
  SS_SA_CODE_VERIFIER,
  serviceauthTokenUrl,
  serviceauthId,
  serviceauthSecret,
};

export default serviceauth;
export { handleAuth };
