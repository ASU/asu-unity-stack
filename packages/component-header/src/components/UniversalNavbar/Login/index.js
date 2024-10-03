// @ts-check
import React from "react";

import { trackGAEvent } from "../../../../../../shared";
import { useAppContext } from "../../../core/context/app-context";
import { LoginWrapper } from "./index.styles";

const DEFAULT_GA_EVENT = {
  event: "link",
  action: "click",
  name: "onclick",
  region: "navbar",
  type: "internal link",
  section: "topbar",
};

const Login = () => {
  const {
    loggedIn,
    userName,
    logoutLink,
    loginLink,
    onLoginClick,
    onLogoutClick,
    breakpoint,
  } = useAppContext();

  return (
    // @ts-ignore
    <LoginWrapper className="nav-link login-status" breakpoint={breakpoint}>
      {loggedIn ? (
        <>
          {userName ? (
            <span className="name" data-testid="user-name">
              {userName}
            </span>
          ) : (
            ""
          )}
          <a
            className="signout"
            href={logoutLink}
            onClick={e => {
              trackGAEvent({
                ...DEFAULT_GA_EVENT,
                text: "sign out",
              });
              onLogoutClick?.(e);
            }}
          >
            Sign Out
          </a>
        </>
      ) : (
        <a
          href={loginLink}
          onClick={e => {
            trackGAEvent({
              ...DEFAULT_GA_EVENT,
              text: "sign in",
            });
            onLoginClick?.(e);
          }}
        >
          Sign In
        </a>
      )}
    </LoginWrapper>
  );
};

export { Login };
