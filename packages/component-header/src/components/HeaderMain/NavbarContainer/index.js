// @ts-check
import React from "react";

import { useAppContext } from "../../../core/context/app-context";
import { useIsMobile } from "../../../core/hooks/isMobile";
import { idGenerator } from "../../../utils/id-generator";
import { UniversalNavbar } from "../../UniversalNavbar";
import { Wrapper } from "./index.styles";
import { NavItem } from "./NavItem";

const NavbarContainer = () => {
  const {
    navTree,
    mobileNavTree,
    expandOnHover,
    buttons,
    breakpoint,
  } = useAppContext();
  const isMobile = useIsMobile(breakpoint);

  return (
    // @ts-ignore
    <Wrapper breakpoint={breakpoint}>
      {navTree?.map(link => {
        const genKey = idGenerator(`${link.text}-`);
        const key = genKey.next().value;
        return <NavItem key={key} />;
      })}
      {/* Navbar Footer */}
      {isMobile && <UniversalNavbar />}
    </Wrapper>
  );
};

export { NavbarContainer };
