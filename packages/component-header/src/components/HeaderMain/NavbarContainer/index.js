// @ts-check
import React, { useState } from "react";

import { useAppContext } from "../../../core/context/app-context";
import { useIsMobile } from "../../../core/hooks/isMobile";
import { idGenerator } from "../../../utils/id-generator";
import { Button } from "../../Button";
import { UniversalNavbar } from "../../UniversalNavbar";
import { Wrapper } from "./index.styles";
import { NavItem } from "./NavItem";

const NavbarContainer = () => {
  const { navTree, mobileNavTree, buttons, breakpoint } = useAppContext();
  const isMobile = useIsMobile(breakpoint);
  const [itemOpened, setItemOpened] = useState(undefined);

  const handleSetItemOpened = itemId => {
    setItemOpened(itemId === itemOpened ? undefined : itemId);
  };

  return (
    // @ts-ignore
    <Wrapper breakpoint={breakpoint}>
      <ul className="nav-list">
        {!!mobileNavTree?.length && isMobile
          ? mobileNavTree?.map((link, i) => {
              const item = { ...link, id: i };
              const genKey = idGenerator(`${link.text}-`);
              const key = genKey.next().value;
              return (
                <NavItem
                  key={key}
                  link={item}
                  setItemOpened={() => handleSetItemOpened(i)}
                  itemOpened={itemOpened}
                />
              );
            })
          : navTree?.map((link, i) => {
              const item = { ...link, id: i };
              const genKey = idGenerator(`${link.text}-`);
              const key = genKey.next().value;
              return (
                <NavItem
                  key={key}
                  link={item}
                  setItemOpened={() => handleSetItemOpened(i)}
                  itemOpened={itemOpened}
                />
              );
            })}
      </ul>
      {!!buttons?.length && (
        <form className="buttons-container">
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
