// @ts-check
import React from "react";

import { trackGAEvent } from "../../../../../../shared";
import { useAppContext } from "../../core/context/app-context";
import { Wrapper } from "./index.styles";
import { Login } from "./Login";
import { Search } from "./Search";

const DEFAULT_GA_EVENT = {
  event: "link",
  action: "click",
  name: "onclick",
  region: "navbar",
  type: "internal link",
  section: "topbar",
  text: "",
};

const UniversalNavbar = () => {
  const { breakpoint } = useAppContext();

  function getURL() {
    try {
      const URL = window.location.href;
      return URL;
    } catch (error) {
      console.error(error);
      return "";
    }
  }

  const universalNavLinks = [
    {
      className: "nav-link visually-hidden-focusable",
      href: "#skip-to-content",
      text: "Skip to main content",
    },
    {
      className: "nav-link visually-hidden-focusable",
      href: `https://accessibility.asu.edu/report?a11yref=${getURL()}`,
      text: "Report an accessibility problem",
    },
    {
      className: "nav-link",
      href: "https://asu.edu",
      text: "ASU Home",
    },
    {
      className: "nav-link",
      href: "https://my.asu.edu",
      text: "My ASU",
    },
    {
      className: "nav-link",
      href: "https://www.asu.edu/academics/colleges-schools",
      text: "Colleges and Schools",
    },
  ];

  return (
    <Wrapper
      // @ts-ignore
      breakpoint={breakpoint}
      className="universal-nav"
      data-testid="universal-navbar"
      data-elastic-exclude="data-elastic-exclude"
    >
      <div className="container-xl">
        <div className="header-top">
          <nav className="nav" aria-label="ASU Global">
            <div className="links-container">
              {universalNavLinks.map(link => (
                <a
                  key={link.href}
                  className={link.className}
                  href={link.href}
                  onClick={() =>
                    trackGAEvent({ ...DEFAULT_GA_EVENT, text: link.text })
                  }
                >
                  {link.text}
                </a>
              ))}
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
