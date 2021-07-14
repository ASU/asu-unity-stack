// @ts-check
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";

import { useMediaQuery } from "../../core/hooks/use-media-query";
import { queryFirstFocusable } from "../../core/utils/html-utils";
import { Button } from "../Button";

import "./index.css";

/**
 * @typedef { import('../../core/shared-model-types').AnchorMenuProps } AnchorMenuProps
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
  library.add(fas);
  const anchorMenuRef = useRef(null);
  const [actualContainer, setActualContainer] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const isSmallDevice = useMediaQuery("(max-width: 991px)");
  const menuTitle = "On This Page";

  const handleWindowScroll = () => {
    const curPos = window.scrollY;
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
    items?.forEach(({ targetIdName }) => {
      const container = document.getElementById(targetIdName);
      const containerTop =
        container?.getBoundingClientRect().top - anchorMenuHeight;
      const containerBottom =
        container?.getBoundingClientRect().bottom - anchorMenuHeight;
      if (containerTop < 0 && containerBottom > 0) {
        curSection = targetIdName;
      }
    });
    setActualContainer(curSection);
  };

  useEffect(() => {
    window?.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  const handleClickLink = container => {
    const curScroll = window.scrollY - 100;
    const anchorMenuHeight = window.innerWidth <= 992 ? 410 : 90;
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
    <div
      ref={anchorMenuRef}
      className={classNames(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4"
      )}
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
              {menuTitle}:
              <FontAwesomeIcon icon="chevron-down" />
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
              // @ts-ignore
              <Button
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
    </div>
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
