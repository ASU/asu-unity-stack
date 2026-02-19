// @ts-check
import { trackReactComponent } from "@asu/shared";
import { throttle } from "@asu/shared/utils/timers";
import React, { useEffect, useRef, useState } from "react";

import { HeaderMain } from "./components/HeaderMain";
import { AppContextProvider } from "./core/context/app-context";
import { HeaderPropTypes } from "./core/models/app-prop-types";
import { tryAddActivePage } from "./core/utils/helpers/active-page";
import { Header, HeaderDiv } from "./header.styles";

/**
 * @typedef {import("./core/models/types").HeaderProps} HeaderProps
 */

/**
 *
 * @param {HeaderProps} props
 * @returns {JSX.Element}
 */

const ASUHeader = ({
  isPartner = false,
  navTree: rawNavTree,
  title,
  baseUrl = "/",
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
  breakpoint = "Xl",
  animateTitle,
  expandOnHover = false,
  mobileNavTree: rawMobileNavTree,
  searchUrl,
  site,
  renderDiv = "false",
}) => {
  const navTree = tryAddActivePage(rawNavTree);
  const mobileNavTree = tryAddActivePage(rawMobileNavTree);

  /**
   * Header reference
   * @type {React.MutableRefObject<HTMLDivElement?>}
   */
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(150);

  const handleWindowScroll = () => {
    const curPos = window.scrollY;
    if (!headerRef?.current) return;
    if (curPos > headerRef.current.getBoundingClientRect().top) {
      headerRef.current.classList.add("scrolled");
    } else {
      headerRef.current.classList.remove("scrolled");
    }
    setHeaderHeight(headerRef.current.getBoundingClientRect().bottom);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      trackReactComponent({
        packageName: "component-header",
        component: "Component Header",
        type: "NA",
        configuration: {
          site,
          isPartner,
          searchUrl,
          navTree,
          parentOrg,
          buttons,
          mobileNavTree,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (headerRef?.current) {
      setHeaderHeight(headerRef.current.getBoundingClientRect().bottom);
    }
  }, [headerRef]);

  useEffect(() => {
    const throttledScroll = () => throttle(handleWindowScroll, 100);
    window.addEventListener("scroll", throttledScroll);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  const renderHeader = () => {
    // Determine the wrapper based on renderDiv value
    const Wrapper = renderDiv === "true" ? HeaderDiv : Header;

    return (
      <Wrapper id="asuHeader" breakpoint={breakpoint} ref={headerRef}>
        <HeaderMain />
      </Wrapper>
    );
  };

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
        searchUrl,
        headerHeight,
        site,
      }}
    >
      {renderHeader()}
    </AppContextProvider>
  );
};

ASUHeader.propTypes = { ...HeaderPropTypes };

export { ASUHeader };
