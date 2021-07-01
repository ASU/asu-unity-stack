import React from "react";

import { LoginPropTypes } from "../../core/models/app-prop-types";
import { Wrapper } from "./index.styles";
import { Login } from "./Login";
import { Search } from "./Search";

const HeaderTop = ({ login }) => {
  return (
    <Wrapper>
      <div className="container-xl">
        <div className="header-top">
          <nav className="nav" aria-label="Top">
            <a
              className="nav-link sr-only sr-only-focusable"
              href="#skip-to-content"
            >
              Skip to main content
            </a>
            <a
              className="nav-link sr-only sr-only-focusable"
              href="http://asu.edu/accessibility/feedback?a11yref=unity-design-system"
            >
              Report an accessibility problem
            </a>
            <a className="nav-link" href="https://asu.edu">
              ASU home
            </a>
            <a className="nav-link" href="https://my.asu.edu">
              My ASU
            </a>
            <a
              className="nav-link"
              href="https://asu.edu/about/colleges-and-schools"
            >
              Colleges and Schools
            </a>
            <Login
              loggedIn={login.loggedIn}
              loginLink={login.loginLink}
              logoutLink={login.logoutLink}
              userName={login.userName}
            />
            <Search />
          </nav>
        </div>
      </div>
    </Wrapper>
  );
};

HeaderTop.propTypes = { login: { ...LoginPropTypes } };

export { HeaderTop };
