// @ts-check
import React, { useEffect, useRef } from "react";

import { HeaderMain } from "./components/HeaderMain";
import { AppContextProvider } from "./core/context/app-context";
import { HeaderPropTypes } from "./core/models/app-prop-types";
import { Header } from "./header.styles";

/**
 * @typedef {import("./core/models/types").HeaderProps} HeaderProps
 */

/**
 *
 * @param {HeaderProps} props
 * @returns {JSX.Element}
 */

const ASUHeader = ({
  isPartner,
  navTree,
  title,
  baseUrl,
  parentOrg,
  parentOrgUrl,
  partnerLogo,
  logo,
  loggedIn,
  userName,
  loginLink,
  onLoginClick,
  logoutLink,
  onLogoutClick,
  buttons,
  breakpoint,
  animateTitle,
  expandOnHover,
  mobileNavTree,
}) => {
  const headerRef = useRef(null);

  const handleWindowScroll = () => {
    const curPos = window.scrollY;
    if (curPos > headerRef.current.getBoundingClientRect().top) {
      headerRef.current.classList.add("scrolled");
    } else {
      headerRef.current.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    window?.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <AppContextProvider
      initialValue={{
        isPartner,
        navTree,
        title,
        baseUrl,
        parentOrg,
        parentOrgUrl,
        partnerLogo,
        logo,
        loggedIn,
        userName,
        loginLink,
        onLoginClick,
        logoutLink,
        onLogoutClick,
        buttons,
        breakpoint,
        animateTitle,
        expandOnHover,
        mobileNavTree,
        hasNavigation: !!navTree?.length || !!mobileNavTree?.length,
      }}
    >
      {/* @ts-ignore */}
      <Header id="asuHeader" ref={headerRef} breakpoint={breakpoint}>
        <HeaderMain />
      </Header>
    </AppContextProvider>
  );
};

ASUHeader.propTypes = { ...HeaderPropTypes };

ASUHeader.defaultProps = {
  isPartner: false,
  baseUrl: "/",
  breakpoint: "Xl",
  expandOnHover: false,
};

export { ASUHeader };
