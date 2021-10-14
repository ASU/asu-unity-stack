// @ts-check
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { useAppContext } from "../../core/context/app-context";
import { useIsMobile } from "../../core/hooks/isMobile";
import { trackGAEvent } from "../../core/services/googleAnalytics";
import { UniversalNavbar } from "../UniversalNavbar";
import { HeaderMainWrapper } from "./index.styles";
import { Logo } from "./Logo";
import { NavbarContainer } from "./NavbarContainer";
import { Partner } from "./Partner";
import { Title } from "./Title";

const HeaderMain = () => {
  const { breakpoint, isPartner } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile(breakpoint);

  const handleChangeMenuVisibility = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  const handleClickMobileMenu = () => {
    handleChangeMenuVisibility();
    trackGAEvent({
      event: "collapse",
      action: mobileMenuOpen ? "close" : "open",
      type: "click",
      text: "menu button tablet",
    });
  };

  return (
    <>
      {!isMobile && <UniversalNavbar />}
      {/* @ts-ignore */}
      <HeaderMainWrapper breakpoint={breakpoint}>
        <div className="container-xl">
          <div className="header-main">
            <nav
              className={`navbar navbar-expand-xl ${
                isPartner ? "partner" : ""
              }`}
              aria-label="Main"
            >
              {!isPartner && <Logo />}
              <button
                className="navbar-toggler collapsed"
                type="button"
                onClick={handleClickMobileMenu}
                aria-label="Toggle navigation"
              >
                <FontAwesomeIcon icon={mobileMenuOpen ? "times" : "bars"} />
              </button>
              <div className={`${!isPartner ? "expand-title" : ""}`}>
                {isPartner ? <Partner /> : <Title />}
                {!isMobile && <NavbarContainer />}
              </div>
              {mobileMenuOpen && isMobile && <NavbarContainer />}
            </nav>
          </div>
        </div>
      </HeaderMainWrapper>
    </>
  );
};

export { HeaderMain };
