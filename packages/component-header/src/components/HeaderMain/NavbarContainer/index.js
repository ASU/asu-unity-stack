// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { useAppContext } from "../../../core/context/app-context";
import { UniversalNavbar } from "../../UniversalNavbar";
import { Wrapper } from "./index.styles";
import { NavItem } from "./NavItem";

/**
 * @typedef {{
 *  display: "mobile" | "desktop"
 * }} NavbarContainerProps
 */

/**
 *
 * @param {NavbarContainerProps} props
 * @returns {JSX.Element}
 */

const NavbarContainer = ({ display }) => {
  const { navTree, mobileNavTree, expandOnHover, buttons } = useAppContext();

  return (
    <Wrapper className={`navbar-container-${display}`}>
      <div></div>
      {/* Navbar Footer */}
      <UniversalNavbar display="mobile" />
    </Wrapper>
  );
};

NavbarContainer.propTypes = {
  display: PropTypes.oneOf(["mobile", "desktop"]),
};

export { NavbarContainer };
