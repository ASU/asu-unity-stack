// @ts-check
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef } from "react";

import { HeaderMain } from "./components/HeaderMain";
import { UniversalNavbar } from "./components/UniversalNavbar";
import { AppContextProvider } from "./core/context/app-context";
import { HeaderPropTypes } from "./core/models/app-prop-types";
import { Header } from "./index.styles";

/**
 * @typedef {import("./core/models/types").HeaderProps} HeaderProps
 */

/**
 *
 * @param {HeaderProps} props
 * @returns {JSX.Element}
 */

const ASUHeader = ({
  navTree,
  title,
  baseUrl = "/",
  parentOrg,
  parentOrgUrl,
  logo,
  loggedIn,
  userName,
  loginLink,
  logoutLink,
  buttons,
  breakpoint = "Xl",
  animateTitle = true,
  expandOnHover = false,
  mobileNavTree,
}) => {
  library.add(fas);
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
        navTree,
        title,
        baseUrl,
        parentOrg,
        parentOrgUrl,
        logo,
        loggedIn,
        userName,
        loginLink,
        logoutLink,
        buttons,
        breakpoint,
        animateTitle,
        expandOnHover,
        mobileNavTree,
      }}
    >
      {/* @ts-ignore */}
      <Header ref={headerRef} breakpoint={breakpoint}>
        <UniversalNavbar display="desktop" />
        <HeaderMain />
      </Header>
    </AppContextProvider>
  );
};

ASUHeader.propTypes = { ...HeaderPropTypes };

export { ASUHeader };
