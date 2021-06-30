import React from "react";

import { Wrapper } from "./index.styles";

const HeaderTop = () => {
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
            <div className="nav-link login-status">
              <a className="name" href="#">
                Sparky
              </a>
              <a className="signout" href="#">
                Sign Out
              </a>
            </div>
          </nav>
        </div>
      </div>
    </Wrapper>
  );
};

export { HeaderTop };
