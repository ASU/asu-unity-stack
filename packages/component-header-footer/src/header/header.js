// @ts-check
import { trackReactComponent } from "@asu/shared";
import { throttle } from "@asu/shared/utils/timers";
import React, { useEffect, useRef, useState } from "react";

import { HeaderMain } from "./components/HeaderMain";
import { AppContextProvider } from "./core/context/app-context";
import { HeaderPropTypes } from "./core/models/app-prop-types";
import { tryAddActivePage } from "./core/utils/helpers/active-page";
import { Header, HeaderDiv, GlobalStyle } from "./header.styles";

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
  const mobileMenuToggleRef = useRef(null);

  const [itemOpened, setStateItemOpened] = useState(undefined);
  const [mobileMenuOpen, setStateMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(150);
  const [headerTop, setHeaderTop] = useState(0);

  const setItemOpened = (openState = undefined) => {
    setStateItemOpened(openState);
  };

  const setMobileMenuOpen = (openState = false) => {
    if (
      mobileMenuToggleRef?.current &&
      typeof mobileMenuToggleRef.current.focus === "function"
    ) {
      mobileMenuToggleRef.current.focus();
    }

    setStateMobileMenuOpen(openState);
  };

  const singlePageAppReset = () => {
    if (headerRef?.current) {
      headerRef.current.focus();
      window.scrollTo(0, 0);
    }
    setMobileMenuOpen();
    setItemOpened();
    document.body.style.overflow = "unset";
  };

  const handleWindowScroll = () => {
    const curPos = window.scrollY;
    if (!headerRef?.current) return;
    if (curPos > headerRef.current.getBoundingClientRect().top) {
      headerRef.current.classList.add("scrolled");
    } else {
      headerRef.current.classList.remove("scrolled");
    }

    setHeaderTop(headerRef.current.getBoundingClientRect().top);
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
      setHeaderTop(headerRef.current.getBoundingClientRect().top);
    }
  }, [headerRef, mobileMenuOpen]);

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
        headerTop,
        headerHeight,
        itemOpened,
        setItemOpened,
        mobileMenuOpen,
        setMobileMenuOpen,
        singlePageAppReset,
        mobileMenuToggleRef,
        site,
      }}
    >
      <GlobalStyle />
      {renderHeader()}
    </AppContextProvider>
  );
};

ASUHeader.propTypes = { ...HeaderPropTypes };

export { ASUHeader };
