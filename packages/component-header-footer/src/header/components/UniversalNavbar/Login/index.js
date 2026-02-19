// @ts-check
import { trackGAEvent } from "@asu/shared";
import React from "react";

import { useAppContext } from "../../../core/context/app-context";
import {
  CLASS_NAMES,
  buildClassName,
} from "../../../core/constants/classNames";
import { LoginWrapper } from "./index.styles";

const DEFAUL_GA_EVENT = {
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
    <LoginWrapper
      className={buildClassName(CLASS_NAMES.NAV_LINK, CLASS_NAMES.LOGIN_STATUS)}
      breakpoint={breakpoint}
    >
      {loggedIn ? (
        <>
          {userName ? (
            <span className={CLASS_NAMES.USER_NAME} data-testid="user-name">
              {userName}
            </span>
          ) : (
            ""
          )}
          <a
            className={CLASS_NAMES.SIGNOUT}
            href={logoutLink}
            onFocus={() =>
              trackGAEvent({
                ...DEFAUL_GA_EVENT,
                text: "sign out",
              })
            }
            onClick={e => onLogoutClick?.(e)}
          >
            Sign Out
          </a>
        </>
      ) : (
        <a
          href={loginLink}
          onFocus={() =>
            trackGAEvent({
              ...DEFAUL_GA_EVENT,
              text: "sign in",
            })
          }
          onClick={e => onLoginClick?.(e)}
        >
          Sign In
        </a>
      )}
    </LoginWrapper>
  );
};

export { Login };
