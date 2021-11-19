// @ts-check
import React from "react";

import { useAppContext } from "../../core/context/app-context";
import { trackGAEvent } from "../../core/services/googleAnalytics";
import { Wrapper } from "./index.styles";
import { Login } from "./Login";
import { Search } from "./Search";

const DEFAUL_GA_EVENT = {
  section: "topbar",
};

const UniversalNavbar = () => {
  const { breakpoint } = useAppContext();

  return (
    <Wrapper
      // @ts-ignore
      breakpoint={breakpoint}
      className="universal-nav"
      data-testid="universal-navbar"
    >
      <div className="container-xl">
        <div className="header-top">
          <nav className="nav" aria-label="Top">
            <div className="links-container">
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
              <a
                className="nav-link"
                href="https://asu.edu"
                onFocus={() =>
                  trackGAEvent({ ...DEFAUL_GA_EVENT, text: "asu home" })
                }
              >
                ASU Home
              </a>
              <a
                className="nav-link"
                href="https://my.asu.edu"
                onFocus={() =>
                  trackGAEvent({ ...DEFAUL_GA_EVENT, text: "my asu" })
                }
              >
                My ASU
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/academics/colleges-schools"
                onFocus={() =>
                  trackGAEvent({
                    ...DEFAUL_GA_EVENT,
                    text: "colleges and schools",
                  })
                }
              >
                Colleges and Schools
              </a>
              <Login />
            </div>
            <Search />
          </nav>
        </div>
      </div>
    </Wrapper>
  );
};

export { UniversalNavbar };
