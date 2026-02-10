// @ts-check
import { idGenerator, trackGAEvent } from "@asu/shared";
import React, { useState } from "react";

import { useAppContext } from "../../../core/context/app-context";
import { useIsMobile } from "../../../core/hooks/isMobile";
import { Button } from "../../Button";
import { UniversalNavbar } from "../../UniversalNavbar";
import { Wrapper } from "./index.styles";
import { NavItem } from "./NavItem";

export const BUTTON_ERROR_MESSAGE =
  "Header buttons cannot have both an onClick and an href property as this breaks accessibility. Please remove one";

const NavbarContainer = () => {
  const { navTree, mobileNavTree, buttons, breakpoint } = useAppContext();
  const isMobile = useIsMobile(breakpoint);
  const [itemOpened, setItemOpened] = useState(undefined);

  const handleSetItemOpened = itemId => {
    setItemOpened(prev => (itemOpened === itemId ? undefined : itemId));
  };

  const validateButton = button => {
    if (button.onClick && button.href) {
      console.error(BUTTON_ERROR_MESSAGE);
    }
  };

  const handleButtonClick = button => () => {
    trackGAEvent({
      event: "link",
      action: "click",
      name: "onclick",
      region: "navbar",
      type: "internal link",
      section: "main navbar",
      text: button.text,
    });

    if (button.onClick) button.onClick();
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
              {buttons.map(button => {
                validateButton(button);
                return (
                  <Button
                    {...button}
                    key={button.text}
                    onClick={handleButtonClick(button)}
                  />
                );
              })}
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
