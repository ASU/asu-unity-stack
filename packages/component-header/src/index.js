// @ts-check;
import React from "react";

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
  return (
    <Header>
      <h1 className="header">Header</h1>
    </Header>
  );
};

ASUHeader.propTypes = { ...HeaderPropTypes };

export { ASUHeader };
