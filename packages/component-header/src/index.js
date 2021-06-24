// @ts-check;
import React from "react";

import { HeaderPropTypes } from "./core/models/app-prop-types";

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
  return <header>Hola</header>;
};

ASUHeader.propTypes = { ...HeaderPropTypes };

export { ASUHeader };
