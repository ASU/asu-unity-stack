// @ts-check
import { trackGAEvent } from "@asu/shared";
import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mobileMenuSearchIcon from "../../../../public/assets/icons/menu-search-icon.png?inline";

import { useAppContext } from "../../core/context/app-context";
import { useIsMobile } from "../../core/hooks/isMobile";
import { UniversalNavbar } from "../UniversalNavbar";
import { HeaderMainWrapper } from "./index.styles";
import { Logo } from "./Logo";
import { NavbarContainer } from "./NavbarContainer";
import { Partner } from "./Partner";
import { Search } from "../UniversalNavbar/Search";
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
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                <img
                  src={mobileMenuSearchIcon}
                  alt="Menu and Search Icon"
                  className="menu-search-icon"
                />

                <FontAwesomeIcon
                  icon={faTimes}
                  // @ts-ignore
                  alt=""
                  className="menu-close-icon"
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
              {mobileMenuOpen && isMobile && <Search />}
              {mobileMenuOpen && isMobile && <NavbarContainer />}
            </div>
          </div>
        </div>
      </HeaderMainWrapper>
    </>
  );
};

export { HeaderMain };
