// @ts-check
import React from "react";

import { useAppContext } from "../../../core/context/app-context";
import { LoginWrapper } from "./index.styles";

const Login = () => {
  const { loggedIn, userName, logoutLink, loginLink } = useAppContext();

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

export { Login };
