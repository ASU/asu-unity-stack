// @ts-check;
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef } from "react";

import { HeaderMain } from "./components/HeaderMain";
import { HeaderTop } from "./components/HeaderTop";
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
}) => {
  library.add(fas);
  const headerRef = useRef(null);

  const handleWindowScroll = () => {
    headerRef.current.classList.add("scrolled");
  };

  useEffect(() => {
    window?.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <Header ref={headerRef}>
      <HeaderTop login={{ loggedIn, loginLink, logoutLink, userName }} />
      <HeaderMain />
    </Header>
  );
};

ASUHeader.propTypes = { ...HeaderPropTypes };

export { ASUHeader };
