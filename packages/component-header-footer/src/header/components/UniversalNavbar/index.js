// @ts-check
import { trackGAEvent } from "@asu/shared";
import React from "react";

import { useAppContext } from "../../core/context/app-context";
import { CLASS_NAMES, buildClassName } from "../../core/constants/classNames";
import { Wrapper } from "./index.styles";
import { Login } from "./Login";
import { Search } from "./Search";
import { useIsMobile } from "../../core/hooks/isMobile";

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
  const { breakpoint, isUnbranded } = useAppContext();
  const isMobile = useIsMobile(breakpoint);

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
      className: buildClassName(
        CLASS_NAMES.NAV_LINK,
        CLASS_NAMES.VISUALLY_HIDDEN_FOCUSABLE
      ),
      href: "#skip-to-content",
      text: "Skip to main content",
      isAccessibilityLink: true,
    },
    {
      className: buildClassName(
        CLASS_NAMES.NAV_LINK,
        CLASS_NAMES.VISUALLY_HIDDEN_FOCUSABLE
      ),
      href: `https://accessibility.asu.edu/report#a11yref=${getURL()}`,
      text: "Report an accessibility problem",
      isAccessibilityLink: true,
    },
    {
      className: CLASS_NAMES.NAV_LINK,
      href: "https://asu.edu",
      text: "ASU Home",
    },
    {
      className: CLASS_NAMES.NAV_LINK,
      href: "https://my.asu.edu",
      text: "My ASU",
    },
    {
      className: CLASS_NAMES.NAV_LINK,
      href: "https://www.asu.edu/academics/colleges-schools",
      text: "Colleges and Schools",
    },
  ];

  // Unbranded (KE) sites keep only the accessibility links; the gray bar is
  // revealed exclusively while one of them has keyboard focus.
  const visibleNavLinks = isUnbranded
    ? universalNavLinks.filter(link => link.isAccessibilityLink)
    : universalNavLinks;

  return (
    <Wrapper
      // @ts-ignore
      breakpoint={breakpoint}
      className={buildClassName(
        CLASS_NAMES.UNIVERSAL_NAV,
        isUnbranded && CLASS_NAMES.UNIVERSAL_NAV_UNBRANDED
      )}
      data-testid="universal-navbar"
      data-elastic-exclude="data-elastic-exclude"
    >
      <div className="container-xl">
        <div className={CLASS_NAMES.HEADER_TOP}>
          <nav className="nav" aria-label="ASU Global">
            <div className={CLASS_NAMES.LINKS_CONTAINER}>
              {visibleNavLinks.map(link => (
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
              {!isUnbranded && <Login />}
            </div>
            {!isMobile && !isUnbranded && <Search />}
          </nav>
        </div>
      </div>
    </Wrapper>
  );
};

export { UniversalNavbar };
