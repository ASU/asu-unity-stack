// @ts-check
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { trackGAEvent } from "../../../../../../shared";
import { useAppContext } from "../../core/context/app-context";
import { useIsMobile } from "../../core/hooks/isMobile";
import { UniversalNavbar } from "../UniversalNavbar";
import { HeaderMainWrapper } from "./index.styles";
import { Logo } from "./Logo";
import { NavbarContainer } from "./NavbarContainer";
import { Partner } from "./Partner";
import { Title } from "./Title";

const HeaderMain = () => {
  const { breakpoint, isPartner, hasNavigation } = useAppContext();
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
            <div
              className={`navbar navbar-expand-xl ${
                isPartner ? "partner" : ""
              }`}
            >
              {!isPartner && <Logo />}
              <button
                className={`navbar-toggler${
                  mobileMenuOpen ? "" : " collapsed"
                }`}
                type="button"
                onClick={handleClickMobileMenu}
                aria-label="Toggle navigation"
              >
                <FontAwesomeIcon
                  icon={mobileMenuOpen ? faTimes : faBars}
                  // @ts-ignore
                  alt=""
                />
              </button>
              <div
                className={`${!isPartner ? "expand-title" : ""}${
                  !hasNavigation ? " no-navigation" : ""
                }`}
              >
                {isPartner ? <Partner /> : <Title />}
                {!isMobile && <NavbarContainer />}
              </div>
              {mobileMenuOpen && isMobile && <NavbarContainer />}
            </div>
          </div>
        </div>
      </HeaderMainWrapper>
    </>
  );
};

export { HeaderMain };
