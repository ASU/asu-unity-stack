// @ts-check
import { trackGAEvent } from "@asu/shared";
import React, { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mobileMenuSearchIcon from "../../../../public/assets/icons/menu-search-icon.png?inline";

import { useAppContext } from "../../core/context/app-context";
import { CLASS_NAMES, buildClassName } from "../../core/constants/classNames";
import { useIsMobile } from "../../core/hooks/isMobile";
import { UniversalNavbar } from "../UniversalNavbar";
import { HeaderMainWrapper } from "./index.styles";
import { Logo } from "./Logo";
import { NavbarContainer } from "./NavbarContainer";
import { Partner } from "./Partner";
import { Search } from "../UniversalNavbar/Search";
import { Title } from "./Title";

const HeaderMain = () => {
  const {
    breakpoint,
    isPartner,
    hasNavigation,
    itemOpened,
    setItemOpened,
    mobileMenuOpen,
    setMobileMenuOpen,
    mobileMenuToggleRef,
  } = useAppContext();
  const isMobile = useIsMobile(breakpoint);

  const handleChangeMenuVisibility = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    document.body.style.overflow =
      mobileMenuOpen || itemOpened !== undefined ? "hidden" : "unset";

    // Clean up function to re-enable scrolling
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen, itemOpened, isMobile]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setItemOpened();
  }, [isMobile]);

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
          <div className={CLASS_NAMES.HEADER_MAIN}>
            <div
              className={buildClassName(
                CLASS_NAMES.NAVBAR,
                CLASS_NAMES.NAVBAR_EXPAND_XL,
                isPartner && CLASS_NAMES.PARTNER,
                mobileMenuOpen && CLASS_NAMES.MOBILE_MENU_OPEN
              )}
            >
              {!isPartner && <Logo />}
              <button
                ref={mobileMenuToggleRef}
                className={buildClassName(
                  CLASS_NAMES.NAVBAR_TOGGLER,
                  !mobileMenuOpen && CLASS_NAMES.COLLAPSED
                )}
                type="button"
                onClick={handleClickMobileMenu}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                <img
                  src={mobileMenuSearchIcon}
                  alt="Menu and Search Icon"
                  className={CLASS_NAMES.MENU_SEARCH_ICON}
                />

                <FontAwesomeIcon
                  icon={faTimes}
                  // @ts-ignore
                  alt=""
                  className={CLASS_NAMES.MENU_CLOSE_ICON}
                />
              </button>
              <div
                className={buildClassName(
                  !isPartner && CLASS_NAMES.EXPAND_TITLE,
                  !hasNavigation && CLASS_NAMES.NO_NAVIGATION
                )}
              >
                {isPartner ? <Partner /> : <Title />}
                {!isMobile && <NavbarContainer />}
              </div>
              {mobileMenuOpen && isMobile && itemOpened === undefined && (
                <Search />
              )}
              {mobileMenuOpen && isMobile && <NavbarContainer />}
            </div>
          </div>
        </div>
      </HeaderMainWrapper>
    </>
  );
};

export { HeaderMain };
