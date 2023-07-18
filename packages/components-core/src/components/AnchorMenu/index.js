// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";

import { useMediaQuery } from "../../core/hooks/use-media-query";
import { trackGAEvent } from "../../core/services/googleAnalytics";
import { queryFirstFocusable } from "../../core/utils/html-utils";
import { throttle, debounce } from "../../core/utils/timers";
import { Button } from "../Button";
import { AnchorMenuWrapper } from "./index.styles";

const menuTitle = "On This Page";

const defaultMobileGAEvent = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: menuTitle,
};

/**
 * @typedef { import('../../core/types/shared-types').AnchorMenuProps } AnchorMenuProps
 */

/**
 * @param {AnchorMenuProps} props
 * @returns {JSX.Element}
 */
export const AnchorMenu = ({
  items,
  firstElementId,
  focusFirstFocusableElement = false,
}) => {
  const anchorMenuRef = useRef(null);
  const isSmallDevice = useMediaQuery("(max-width: 991px)");
  const [state, setState] = useState({
    hasHeader: false,
    hasDegreeContainer: false,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: false,
  });
  const headerHeight = isSmallDevice ? 110 : 142;

  const handleWindowScroll = () => {
    const newState = {};
    const curPos = window.scrollY;
    // Select first next sibling element of the anchor menu
    const firstElement = document
      .getElementById(firstElementId)
      ?.getBoundingClientRect().top;
    const anchorMenuHeight = 103;

    // Scroll position
    if (firstElement >= 0) {
      newState.sticky = false;
      newState.activeContainer = "";
    }
    if (curPos > anchorMenuRef.current.getBoundingClientRect().top)
      newState.sticky = true;

    // Change active containers on scroll
    const subsHeight = state.hasHeader
      ? headerHeight + anchorMenuHeight
      : anchorMenuHeight;
    items?.forEach(({ targetIdName }) => {
      const container = document.getElementById(targetIdName);
      const containerTop = container?.getBoundingClientRect().top - subsHeight;
      const containerBottom =
        container?.getBoundingClientRect().bottom - subsHeight;
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

  // Set any ASU Header on the document
  const getHasHeader = () => {
    const pageHeader =
      document.getElementById("asu-header") ||
      document.getElementById("headerContainer") ||
      document.getElementById("asuHeader");
    return (!!pageHeader);
  };

  // Sets prop for styled-component to change anchor menu style
  // based on if it requires different spacing for the ASU Header
  const getHasDegreeContainer = () => {
    const degreeDetailPageContainer = document.getElementById(
      "degreeDetailPageContainer"
    );
    return (!!degreeDetailPageContainer);
  };

  // Returns the first container class found from ancestors or default
  function getContainerClass(el = null) {
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
      hasHeader: getHasHeader(),
      hasDegreeContainer: getHasDegreeContainer(),
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

  const handleClickLink = container => {
    // Set scroll position considering if ASU Header is setted or not
    const curScroll =
      window.scrollY - (state.hasHeader ? headerHeight + 100 : 100);
    const anchorMenuHeight = isSmallDevice ? 410 : 90;
    // Set where to scroll to
    let scrollTo =
      document.getElementById(container)?.getBoundingClientRect().top +
      curScroll;

    if (!anchorMenuRef.current.classList.contains("sticky"))
      scrollTo -= anchorMenuHeight;

    if (focusFirstFocusableElement)
      queryFirstFocusable(`#${container}`)?.focus();

    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  };

  const trackMobileDropdownEvent = () => {
    trackGAEvent({
      ...defaultMobileGAEvent,
      action: state.showMenu ? "close" : "open",
    });
  };

  const handleMenuVisibility = () => {
    setState(prevState => ({
      ...prevState,
      showMenu: !prevState.showMenu,
    }));
  };

  return (
    <AnchorMenuWrapper
      // @ts-ignore
      requiresAltMenuSpacing={state.hasDegreeContainer}
      ref={anchorMenuRef}
      className={`uds-anchor-menu uds-anchor-menu-expanded-lg ${state.sticky ? "sticky" : ""} ${
        state.hasHeader ? "with-header " : ""
      }mb-4`}
      style={state.showMenu ? { borderBottom: 0 } : {}}
    >
      <div className={`${state.containerClass} uds-anchor-menu-wrapper`}>
        {isSmallDevice ? (
          <button
            className={`${
              state.showMenu ? "show-menu " : ""
            }mobile-menu-toggler`}
            type="button"
            onClick={() => {
              trackMobileDropdownEvent();
              handleMenuVisibility();
            }}
            data-bs-toggle="collapse"
            data-bs-target="#collapseAnchorMenu"
            aria-controls="collapseAnchorMenu"
          >
            <h4>
              {menuTitle}:<i className="fas fa-chevron-down" />
            </h4>
          </button>
        ) : (
          <h4>{menuTitle}:</h4>
        )}

        <div
          data-testid="anchor-menu-container"
          id="collapseAnchorMenu"
          className={classNames("card", "card-body", "collapse", {
            [`show`]: state.showMenu,
          })}
        >
          <nav data-testid="anchor-menu" className="nav" aria-label={menuTitle}>
            {items?.map(item => (
              // Use this package button
              // @ts-ignore
              <Button
                data-testid={`anchor-item-${item.targetIdName}`}
                key={item.targetIdName}
                classes={[
                  "nav-link",
                  `${state.activeContainer === item.targetIdName ? "active" : ""}`,
                ]}
                ariaLabel={item.text}
                label={item.text}
                icon={item.icon}
                onClick={() => handleClickLink(item.targetIdName)}
              />
            ))}
          </nav>
        </div>
      </div>
    </AnchorMenuWrapper>
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
