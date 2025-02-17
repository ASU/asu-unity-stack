// @ts-check
import React, { useState } from "react";

import { idGenerator, trackGAEvent } from "../../../../../../../shared";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useAppContext } from "../../../core/context/app-context";
import { useIsMobile } from "../../../core/hooks/isMobile";
import { Button } from "../../Button";
import { UniversalNavbar } from "../../UniversalNavbar";
import { Wrapper } from "./index.styles";
import { NavItem } from "./NavItem";

const NavbarContainer = () => {
  const { navTree, mobileNavTree, buttons, breakpoint } = useAppContext();
  const isMobile = useIsMobile(breakpoint);
  const [itemOpened, setItemOpened] = useState(undefined);

  const handleSetItemOpened = itemId => {
    setItemOpened(prev => (itemOpened === itemId ? undefined : itemId));
  };

  const renderItem = (link, index) => {
    const item = { ...link, id: index };
    const genKey = idGenerator(`${link.text}-${index}-`);
    const key = genKey.next().value;
    return (
      <NavItem
        key={key}
        link={item}
        setItemOpened={() => handleSetItemOpened(index)}
        itemOpened={itemOpened}
      />
    );
  };

  return (
    // @ts-ignore
    <Wrapper breakpoint={breakpoint} data-testid="navigation" aria-label="Site">
      {(navTree?.length || mobileNavTree?.length || buttons?.length) && (
        <div className="content-container">
          {(navTree?.length || mobileNavTree?.length) && (
            <ul className="nav-list">
              {!!mobileNavTree?.length && isMobile
                ? mobileNavTree?.map((link, i) => renderItem(link, i))
                : navTree?.map((link, i) => renderItem(link, i))}
            </ul>
          )}
          {!!buttons?.length && (
            <form className="buttons-container" data-testid="buttons-container">
              {buttons?.map(button => (
                <Button
                  {...button}
                  key={button.text}
                  onClick={() =>
                    trackGAEvent({
                      event: "link",
                      action: "click",
                      name: "onclick",
                      region: "navbar",
                      type: "internal link",
                      section: "main navbar",
                      text: button.text,
                    })
                  }
                />
              ))}
            </form>
          )}
        </div>
      )}
      {/* Navbar Footer */}
      {isMobile && <UniversalNavbar />}
    </Wrapper>
  );
};

export { NavbarContainer };
