/**
 * TODO: Does not work with Bootstrap Framework
 * Requires functionality UDS-1664
 */
import {
  debounce,
  queryFirstFocusable,
  throttle,
  useMediaQuery,
} from "@asu/shared";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";

import { Button } from "../Button/Button";
import { GaEventWrapper } from "../GaEventWrapper/GaEventWrapper";
import { useBaseSpecificFramework } from "../GaEventWrapper/useBaseSpecificFramework";
import { AnchorMenuWrapper } from "./AnchorMenu.styles";

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
  icon?: string[];
}

export interface AnchorMenuProps {
  /**
   * Anchor menu items
   */
  items: AnchorMenuItem[];
  /**
   * First next sibling element of the anchor menu
   */
  firstElementId: string;
  /**
   * If true it focus the first focusable element into the section
   * If false it focus the next menu item into the nav bar
   */
  focusFirstFocusableElement?: boolean;
}

interface AnchorMenuState {
  hasHeader: boolean;
  hasAltMenuSpacing: boolean;
  containerClass: string;
  activeContainer: string;
  showMenu: boolean;
  sticky: boolean;
}

export const AnchorMenu: React.FC<AnchorMenuProps> = ({
  items,
  firstElementId,
  focusFirstFocusableElement = false,
}) => {
  const { isReact, isBootstrap } = useBaseSpecificFramework();

  const anchorMenuRef = useRef<HTMLDivElement | null>(null);
  const isSmallDevice = useMediaQuery("(max-width: 991px)");
  const [state, setState] = useState<AnchorMenuState>({
    hasHeader: false,
    hasAltMenuSpacing: false,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: false,
    sticky: false,
  });

  const getPageHeader = (): HTMLElement | null =>
    document.getElementById("asu-header") ||
    document.getElementById("headerContainer") ||
    document.getElementById("asuHeader");

  const getHeaderBottomOffset = (): number => {
    const pageHeader = getPageHeader();
    return Math.max(pageHeader?.getBoundingClientRect().bottom || 0, 0);
  };

  const handleWindowScroll = () => {
    const newState: Partial<AnchorMenuState> = {};
    const curPos = window.scrollY;
    const headerBottomOffset = getHeaderBottomOffset();
    // Select first next sibling element of the anchor menu
    const firstElement = document
      .getElementById(firstElementId)
      ?.getBoundingClientRect().top;
    const anchorMenuHeight = 103;

    // Scroll position
    if (firstElement !== undefined && firstElement >= 0) {
      newState.sticky = false;
      newState.activeContainer = "";
    }
    if (
      anchorMenuRef.current &&
      curPos > anchorMenuRef.current.getBoundingClientRect().top
    )
      newState.sticky = true;

    // Change active containers on scroll
    const subsHeight = state.hasHeader
      ? headerBottomOffset + anchorMenuHeight
      : anchorMenuHeight;
    items?.forEach(({ targetIdName }) => {
      const container = document.getElementById(targetIdName);
      if (!container) return;
      const containerTop = container.getBoundingClientRect().top - subsHeight;
      const containerBottom =
        container.getBoundingClientRect().bottom - subsHeight;
      if (containerTop < 0 && containerBottom > 0) {
        newState.activeContainer = targetIdName;
      }
    });

    setState(prevState => ({
      ...prevState,
      ...newState,
    }));
  };

  const throttleWindowScroll = () => {
    const timeout = 150;
    // prevent function from being called excessively
    throttle(handleWindowScroll, timeout);
    // ensure function executes after scrolling stops
    debounce(handleWindowScroll, timeout);
  };

  // Is ASU Header on the document
  const isHeader = (): boolean => {
    const pageHeader = getPageHeader();
    return !!pageHeader;
  };

  // Is element present which requires different spacing for the ASU Header
  // Sets prop for styled-component to change anchor menu style
  const isAltMenuSpacing = (): boolean => {
    const degreeDetailPageContainer = document.getElementById(
      "degreeDetailPageContainer"
    );
    return !!degreeDetailPageContainer;
  };

  // Returns the first container class found from ancestors or default
  function getContainerClass(el: HTMLElement | null = null): string {
    if (el === null) return state.containerClass;

    const result = Object.values(el.classList).filter(c =>
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

    return getContainerClass(el.parentElement);
  }

  // get values from outside this component
  // set initial state from external values
  useEffect(() => {
    const firstElement = document.getElementById(firstElementId) || null;
    const newState = {
      hasHeader: isHeader(),
      hasAltMenuSpacing: isAltMenuSpacing(),
      containerClass: getContainerClass(firstElement),
    };
    setState(prevState => ({
      ...prevState,
      ...newState,
    }));
  }, []);

  useEffect(() => {
    window?.addEventListener("scroll", throttleWindowScroll);
    return () => window.removeEventListener("scroll", throttleWindowScroll);
  }, [state.hasHeader]);

  const moveFocusToTarget = (target: HTMLElement) => {
    if (focusFirstFocusableElement) {
      const firstFocusable = queryFirstFocusable(`#${target.id}`);
      if (firstFocusable) {
        (firstFocusable as HTMLElement).focus({ preventScroll: true });
        return;
      }
    }
    if (!target.hasAttribute("tabindex")) {
      target.setAttribute("tabindex", "-1");
      target.style.outline = "none";
    }
    target.focus({ preventScroll: true });
  };

  const closeMobileMenu = () => {
    setState(prevState => ({
      ...prevState,
      showMenu: false,
    }));

    if (typeof window !== "undefined") {
      const collapseEl = document.getElementById("collapseAnchorMenu");
      if (collapseEl?.classList.contains("show")) {
        try {
          const bsCollapse =
            // @ts-ignore
            window.bootstrap?.Collapse?.getOrCreateInstance?.(collapseEl) ||
            // @ts-ignore
            window.bootstrap?.Collapse?.getInstance?.(collapseEl);
          bsCollapse?.hide();
        } catch {
          // Fallback if Bootstrap plugin throws
        }
      }
    }
  };

  const handleClickLink = (container: string) => {
    const target = document.getElementById(container);
    if (!target) {
      console.warn(`Anchor target "#${container}" no longer exists in DOM`);
      closeMobileMenu();
      return;
    }

    const headerBottomOffset = getHeaderBottomOffset();
    const navbarHeight = isSmallDevice ? 50 : 90;
    const topOffset = headerBottomOffset + navbarHeight;
    const targetTop = target.getBoundingClientRect().top;
    const viewportMid = window.innerHeight / 2;

    // For the first anchor item, skip scrolling if the section top is already clearly visible
    const isFirstAnchor =
      items?.length > 0 && items[0].targetIdName === container;
    if (isFirstAnchor && targetTop >= topOffset && targetTop <= viewportMid) {
      moveFocusToTarget(target);
      closeMobileMenu();
      return;
    }

    // Set scroll position considering if ASU Header is set or not
    const curScroll =
      window.scrollY - (state.hasHeader ? headerBottomOffset + 100 : 100);
    // Since the mobile menu closes immediately, use the collapsed menu height (~50px on mobile, ~90px on desktop)
    const anchorMenuHeight = isSmallDevice ? 50 : 90;
    // Set where to scroll to
    let scrollTo = target.getBoundingClientRect().top + curScroll;

    if (!anchorMenuRef.current?.classList.contains("sticky"))
      scrollTo -= anchorMenuHeight;

    window.scrollTo({ top: scrollTo, behavior: "smooth" });

    // Move focus to target section so keyboard/screen-reader users maintain focus order (WCAG 2.4.3)
    moveFocusToTarget(target);

    // Close the mobile menu on link selection (UDS-2176)
    closeMobileMenu();
  };

  const handleMenuVisibility = () => {
    setState(prevState => ({
      ...prevState,
      showMenu: !prevState.showMenu,
    }));
  };

  const headerBottomOffset = state.hasHeader ? getHeaderBottomOffset() : 0;
  // @ts-ignore
  const WrapperComponent = isBootstrap ? "div" : AnchorMenuWrapper;
  const wrapperProps = isBootstrap
    ? {}
    : {
        requiresAltMenuSpacing: state.hasAltMenuSpacing,
      };

  return (
    (items?.length > 0 && (
      <WrapperComponent
        {...wrapperProps}
        ref={anchorMenuRef}
        id="uds-anchor-menu"
        className={classNames(
          "uds-anchor-menu",
          "uds-anchor-menu-expanded-lg",
          "mb-4",
          {
            [`sticky`]: state.sticky,
            [`with-header`]: state.hasHeader,
          }
        )}
        style={
          /** @type {React.CSSProperties} */ ({
            ...(state.showMenu ? { borderBottom: 0 } : {}),
            "--uds-anchor-menu-top": `${headerBottomOffset}px`,
          })
        }
      >
        <div className={`${state.containerClass} uds-anchor-menu-wrapper`}>
          <h2>
            {isSmallDevice ? (
              <GaEventWrapper
                gaData={{
                  ...defaultMobileGAEvent,
                  action: state.showMenu ? "close" : "open",
                }}
              >
                <button
                  className={classNames("mobile-menu-toggler", {
                    [`show-menu`]: state.showMenu,
                  })}
                  type="button"
                  onClick={handleMenuVisibility}
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseAnchorMenu"
                  aria-controls="collapseAnchorMenu"
                  aria-expanded={state.showMenu}
                >
                  {menuTitle}:<i className="fas fa-chevron-down" />
                </button>
              </GaEventWrapper>
            ) : (
              <>{menuTitle}:</>
            )}
          </h2>

          <div
            data-testid="anchor-menu-container"
            id="collapseAnchorMenu"
            className={classNames("card", "card-body", "collapse", {
              [`show`]: state.showMenu,
            })}
          >
            <nav
              data-testid="anchor-menu"
              className="nav"
              aria-label={menuTitle}
            >
              {items?.map(item => (
                // Use this package button
                // @ts-ignore
                <Button
                  data-testid={`anchor-item-${item.targetIdName}`}
                  key={item.targetIdName}
                  classes={classNames("nav-link", {
                    [`active`]: state.activeContainer === item.targetIdName,
                  }).split(" ")}
                  ariaLabel={item.text}
                  label={item.text}
                  icon={item.icon}
                  onClick={
                    isReact ? () => handleClickLink(item.targetIdName) : undefined
                  }
                  href={isBootstrap ? `#${item.targetIdName}` : undefined}
                />
              ))}
            </nav>
          </div>
        </div>
      </WrapperComponent>
    )) ||
    null
  );
};

AnchorMenu.propTypes = {
  /**
   * Anchor menu items
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      targetIdName: PropTypes.string.isRequired,
      icon: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  /**
   * First next sibling element of the anchor menu
   */
  firstElementId: PropTypes.string.isRequired,
  /**
   * If true it focus the first focusable element into the section
   * If false it focus the next menu item into the nav bar
   */
  focusFirstFocusableElement: PropTypes.bool,
};
