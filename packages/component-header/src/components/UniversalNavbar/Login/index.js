// @ts-check
import React from "react";

// eslint-disable-next-line import/no-cycle
import { DEFAUL_GA_EVENT } from "..";

import { useAppContext } from "../../../core/context/app-context";
import { trackGAEvent } from "../../../core/services/googleAnalytics";
import { LoginWrapper } from "./index.styles";

const Login = () => {
  const { loggedIn, userName, logoutLink, loginLink, breakpoint } =
    useAppContext();

  return (
    // @ts-ignore
    <LoginWrapper className="nav-link" breakpoint={breakpoint}>
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
            onFocus={() =>
              trackGAEvent({
                ...DEFAUL_GA_EVENT,
                text: "sign out",
              })
            }
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
        >
          Sign In
        </a>
      )}
    </LoginWrapper>
  );
};

export { Login };
