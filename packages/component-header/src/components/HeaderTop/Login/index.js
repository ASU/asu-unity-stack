import React from "react";

import { LoginPropTypes } from "../../../core/models/app-prop-types";
import { LoginWrapper } from "./index.styles";

const Login = ({ loggedIn, loginLink, logoutLink, userName }) => {
  return (
    <LoginWrapper className="nav-link">
      {loggedIn ? (
        <>
          {userName ? <span className="name">{userName}</span> : ""}
          <a className="signout" href={logoutLink}>
            Sign Out
          </a>
        </>
      ) : (
        <a href={loginLink}>Sign In</a>
      )}
    </LoginWrapper>
  );
};

Login.propTypes = { ...LoginPropTypes };

export { Login };
