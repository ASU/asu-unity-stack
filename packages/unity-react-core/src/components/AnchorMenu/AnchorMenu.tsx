import { useMediaQuery } from "@asu/shared";
import classNames from "classnames";
import React, { useState, useEffect, useRef } from "react";
import { initAnchorMenu } from "../../../../unity-bootstrap-theme/src/js/anchor-menu";
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";

const menuTitle = "On This Page";

const defaultMobileGAEvent = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: menuTitle,
};

export interface AnchorMenuItem {
  text: string;
  targetIdName: string;
  icon?: string | string[];
}

export interface AnchorMenuProps {
  items: AnchorMenuItem[];
  firstElementId: string;
  focusFirstFocusableElement?: boolean;
}

export const AnchorMenu: React.FC<AnchorMenuProps> = ({
  items,
  firstElementId,
}) => {
  const anchorMenuRef = useRef<HTMLDivElement>(null);
  const isSmallDevice = useMediaQuery("(max-width: 991px)");
  const [showMenu, setShowMenu] = useState(false);

  // Initialize shared logic (scroll, stickiness, active states)
  useEffect(() => {
    let cleanupFn: Function;

    const initialize = () => {
      // requestAnimationFrame ensures we execute after layout paint implies the DOM is stable
      requestAnimationFrame(() => {
        cleanupFn = initAnchorMenu({ ignoreReactCheck: true });
      });
    };

    // If the page is already fully loaded run immediately.
    // Otherwise, wait for the load event to ensure global headers/styles are ready.
    if (document.readyState === "complete") {
      initialize();
    } else {
      window.addEventListener("load", initialize, { once: true });
    }

    return () => {
      window.removeEventListener("load", initialize);
      if (cleanupFn) cleanupFn();
    };
  }, []);

  const [containerClass, setContainerClass] = useState("container-xl");

  // Determine container class for initial layout
  function getContainerClass(el: HTMLElement | null = null): string {
    if (el === null) return containerClass;
    const result = Array.from(el.classList).filter(c =>
      [
        "container-sm",
        "container-md",
        "container",
        "container-lg",
        "container-xl",
        "container-fluid",
      ].includes(c)
    );
    if (result.length > 0) return result.join(" ");

    const parent = el.parentElement;
    return parent ? getContainerClass(parent) : containerClass;
  }

  useEffect(() => {
    const firstElement = document.getElementById(firstElementId);
    setContainerClass(getContainerClass(firstElement));
  }, [firstElementId]);

  const handleMenuVisibility = () => {
    setShowMenu(!showMenu);
  };

  return (
    items?.length > 0 && (
      <div
        ref={anchorMenuRef}
        id="uds-anchor-menu"
        className={classNames(
          "uds-anchor-menu",
          "uds-anchor-menu-expanded-lg",
          "mb-4"
        )}
        style={showMenu ? { borderBottom: 0 } : {}}
      >
        <div className={`${containerClass} uds-anchor-menu-wrapper`}>
          {isSmallDevice ? (
            <GaEventWrapper
              gaData={{
                ...defaultMobileGAEvent,
                action: showMenu ? "close" : "open",
              }}
            >
              <button
                className={classNames("mobile-menu-toggler", {
                  [`show-menu`]: showMenu,
                })}
                type="button"
                onClick={handleMenuVisibility}
                data-bs-toggle="collapse"
                data-bs-target="#collapseAnchorMenu"
                aria-controls="collapseAnchorMenu"
              >
                <h4>
                  {menuTitle}:<i className="fas fa-chevron-down" />
                </h4>
              </button>
            </GaEventWrapper>
          ) : (
            <h4>{menuTitle}:</h4>
          )}

          <div
            data-testid="anchor-menu-container"
            id="collapseAnchorMenu"
            className={classNames("card", "card-body", "collapse", {
              [`show`]: showMenu,
            })}
          >
            <nav data-testid="anchor-menu" aria-label={menuTitle}>
              <ul className="nav">
                {items?.map(item => (
                  <li key={item.targetIdName} className="nav-item">
                    <a
                      data-testid={`anchor-item-${item.targetIdName}`}
                      className="nav-link"
                      href={`#${item.targetIdName}`}
                    >
                      {item.icon && (
                        <i
                          className={classNames(item.icon)}
                          aria-hidden="true"
                        />
                      )}
                      <span>{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  );
};
