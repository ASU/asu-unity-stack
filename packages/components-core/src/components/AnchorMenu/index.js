// @ts-check
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";

import { useMediaQuery } from "../../core/hooks/use-media-query";
import { queryFirstFocusable } from "../../core/utils/html-utils";
import { Button } from "../Button";
import { AnchorMenuWrapper } from "./index.styles";

const menuTitle = "On This Page";

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
  const [hasHeader, setHasHeader] = useState(false);
  const [actualContainer, setActualContainer] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const isSmallDevice = useMediaQuery("(max-width: 991px)");
  const headerHeight = isSmallDevice ? 110 : 142;

  const handleWindowScroll = () => {
    const curPos = window.scrollY;
    // Select first next sibling element of the anchor menu
    const firstElement = document
      .getElementById(firstElementId)
      ?.getBoundingClientRect().top;
    const anchorMenuHeight = 103;

    // Scroll position
    if (firstElement >= 0) {
      anchorMenuRef.current.classList.remove("sticky");
      setActualContainer("");
    }
    if (curPos > anchorMenuRef.current.getBoundingClientRect().top)
      anchorMenuRef.current.classList.add("sticky");

    // Change active containers on scroll
    let curSection = "";
    const subsHeight = hasHeader
      ? headerHeight + anchorMenuHeight
      : anchorMenuHeight;
    items?.forEach(({ targetIdName }) => {
      const container = document.getElementById(targetIdName);
      const containerTop = container?.getBoundingClientRect().top - subsHeight;
      const containerBottom =
        container?.getBoundingClientRect().bottom - subsHeight;
      if (containerTop < 0 && containerBottom > 0) {
        curSection = targetIdName;
      }
    });

    setActualContainer(curSection);
  };

  // Set any ASU Header on the document
  const setHeader = () => {
    const pageHeader =
      document.getElementById("asu-header") ||
      document.getElementById("headerContainer") ||
      document.getElementById("asuHeader");
    setHasHeader(!!pageHeader);
  };

  useEffect(() => {
    setHeader();
  }, []);

  useEffect(() => {
    window?.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [hasHeader]);

  const handleClickLink = container => {
    // Set scroll position considering if ASU Header is setted or not
    const curScroll = window.scrollY - (hasHeader ? headerHeight + 100 : 100);
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

  const handleMenuVisibility = () => {
    setShowMenu(prevState => !prevState);
  };

  return (
    <AnchorMenuWrapper
      ref={anchorMenuRef}
      className={`uds-anchor-menu uds-anchor-menu-expanded-lg ${
        hasHeader ? "with-header " : ""
      }mb-4`}
      style={showMenu ? { borderBottom: 0 } : {}}
    >
      <div className="container-xl uds-anchor-menu-wrapper">
        {isSmallDevice ? (
          <button
            className={`${showMenu ? "show-menu " : ""}mobile-menu-toggler`}
            type="button"
            onClick={handleMenuVisibility}
            data-toggle="collapse"
            data-target="#collapseAnchorMenu"
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
          id="collapseAnchorMenu"
          className={classNames("card", "card-body", "collapse", {
            [`show`]: showMenu,
          })}
        >
          <nav className="nav" aria-label={menuTitle}>
            {items?.map(item => (
              // Use this package button
              // @ts-ignore
              <Button
                data-testid={`anchor-item-${item.targetIdName}`}
                key={item.targetIdName}
                classes={[
                  "nav-link",
                  `${actualContainer === item.targetIdName ? "active" : ""}`,
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
