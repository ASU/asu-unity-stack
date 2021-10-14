/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import PropTypes from "prop-types";

import { trackGAEvent } from "../../services/googleAnalytics";
import { DEFAUL_GA_EVENT } from "../Header";
import * as S from "./styles";

const Login = ({ loggedIn, loginLink, logoutLink, userName, ...props }) => {
  return (
    <S.Login class={props.class}>
      {loggedIn ? (
        <>
          {userName ? <span class="name">{userName}</span> : ""}
          <a
            class="signout"
            href={logoutLink}
            onFocus={() =>
              trackGAEvent({ ...DEFAUL_GA_EVENT, text: "sign out" })
            }
          >
            Sign Out
          </a>
        </>
      ) : (
        <a
          href={loginLink}
          onFocus={() => trackGAEvent({ ...DEFAUL_GA_EVENT, text: "sign in" })}
        >
          Sign In
        </a>
      )}
    </S.Login>
  );
};

Login.propTypes = {
  class: PropTypes.string,
  loggedIn: PropTypes.bool.isRequired,
  loginLink: PropTypes.string,
  logoutLink: PropTypes.string,
  userName: PropTypes.string,
};

Login.defaultProps = {
  logoutLink: "https://webapp4.asu.edu/myasu/Signout",
  loginLink: "https://weblogin.asu.edu/cgi-bin/login",
  loggedIn: false,
};

export { Login };
