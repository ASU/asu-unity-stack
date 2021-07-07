// @ts-check
import React from "react";

import { useAppContext } from "../../../core/context/app-context";
import { useIsMobile } from "../../../core/hooks/isMobile";
import { idGenerator } from "../../../utils/id-generator";
import { Button } from "../../Button";
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
      <ul className="nav-list">
        {navTree?.map(link => {
          const genKey = idGenerator(`${link.text}-`);
          const key = genKey.next().value;
          return <NavItem key={key} />;
        })}
      </ul>
      {!!buttons?.length && (
        <form>
          {buttons?.map(button => (
            <Button {...button} key={button.text} />
          ))}
        </form>
      )}
      {/* Navbar Footer */}
      {isMobile && <UniversalNavbar />}
    </Wrapper>
  );
};

export { NavbarContainer };
