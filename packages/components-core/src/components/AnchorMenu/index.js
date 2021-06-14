// @ts-check
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";

import { Button } from "../Button";

import "./index.css";

/**
 * @typedef { import('../../core/shared-model-types').AnchorMenuProps } AnchorMenuProps
 */

/**
 * @param {AnchorMenuProps} props
 * @returns {JSX.Element}
 */

export const AnchorMenu = ({ items }) => {
  library.add(fas, far);
  const anchorMenuRef = useRef(null);
  const [actualContainer, setActualContainer] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleWindowScroll = () => {
    // Scroll position
    if (window.scrollY > anchorMenuRef.current.offsetTop) {
      anchorMenuRef.current.classList.add("sticky");
    } else {
      anchorMenuRef.current.classList.remove("sticky");
    }
    // Change active containers on scroll
    const offset = window.scrollY + anchorMenuRef.current.offsetHeight;
    items?.forEach(({ targetIdName }) => {
      const container = document.getElementById(targetIdName);
      const containerOffsetTop = container?.offsetTop;
      const containerOffsetBottom =
        container?.offsetTop + container?.offsetHeight;
      if (offset >= containerOffsetTop && offset <= containerOffsetBottom) {
        setActualContainer(targetIdName);
      }
    });
  };

  useEffect(() => {
    window?.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  const handleClickLink = container => {
    let scrollTo = document.getElementById(container).offsetTop - 70;
    if (window.scrollY === 0) scrollTo -= anchorMenuRef.current.offsetHeight;
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
        <button
          className="mobile-menu-toggler"
          type="button"
          onClick={handleMenuVisibility}
          data-toggle="collapse"
          data-target="#collapseAnchorMenu"
          aria-controls="collapseAnchorMenu"
        >
          <h4>
            On This Page:
            <FontAwesomeIcon icon={`chevron-${showMenu ? "up" : "down"}`} />
          </h4>
        </button>
        <div
          id="collapseAnchorMenu"
          className={classNames("card", "card-body", "collapse", {
            [`show`]: showMenu,
          })}
        >
          <nav className="nav" aria-label="Same Page">
            {items?.map(item => (
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      targetIdName: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ).isRequired,
};
