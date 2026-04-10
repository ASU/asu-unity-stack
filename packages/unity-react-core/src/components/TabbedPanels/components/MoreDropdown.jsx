import PropTypes from "prop-types";
import React,{useEffect, useRef, useState} from "react";

import { GaEventWrapper } from "../../GaEventWrapper/GaEventWrapper";


  // -----------------------------
  // TODO 1.2
  // -----------------------------

  const MoreDropdown = ({ overflowTabs, idToChild, activeTabID, selectTab, gaData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef(null);
    const firstItemRef = useRef(null);
    // REVIEW: Look at TabbedPanels.jsx - what data structure is actually being passed in overflowTabs?
    // REVIEW: Do you have access to tab titles and icons? Think about what data you actually need.
    // overflowTabs passes an array of the tab IDs
    const safeOverflow = Array.isArray(overflowTabs) ? overflowTabs : [];
    const menuId = "more-dropdown-menu";

    const items = safeOverflow.map((tabId) => {
      const child = idToChild?.[tabId];

      if (!child) {
        return {
          id: tabId,
          title: tabId,
          icon: null,
        };
      }

      return {
        id: tabId,
        title: child.props.title,
        icon: child.props.icon,
      };
    });

    useEffect(() => {
      if (isOpen) {
        firstItemRef.current?.focus();
      }
    }, [isOpen]);

    const toggle = (event) => {
      if (event) {
        event.preventDefault();
      }
      setIsOpen((isCurOpen) => !isCurOpen);
    };

    const onButtonKeyDown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        event.stopPropagation();
        setIsOpen(true);
      }
    };

    const onMenuKeyDown = (event) => {
      if (event.key === "Tab") {
        setIsOpen(false);
      }
    };

    useEffect(() => {
      function onDocClick(event) {
        const clickedInside = rootRef.current?.contains(event.target);

        if (clickedInside) {
          return;
        }
        else {
          setIsOpen(false);
        }
      }

      document.addEventListener("mousedown", onDocClick);

      return () => {
        document.removeEventListener("mousedown", onDocClick);
      };
    }, []);

    useEffect(() => {
      const onKey = (event) => {
        if (event.key === "Escape") setIsOpen(false);
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, []);

    const onItemClick = (event, id, title) => {
      event.preventDefault();
      setIsOpen(false);
      if (typeof selectTab === "function") {
        selectTab(event, id, title);
      }
    };

        if (items.length === 0) {
          return null;
        }

        // REVIEW: The TODO says to "Wrap in GaEventWrapper for analytics tracking". Where is it?
        // REVIEW: You imported GaEventWrapper but never used it. The gaData prop is also unused.

        return (
          <div ref={rootRef} className="uds-more-dropdown">
            <GaEventWrapper gaData={gaData || {}}>
              <button
                type="button"
                onClick={toggle}
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-label="More tabs"
                aria-controls={menuId}
                className={`uds-tab more-dropdown-button${isOpen ? " active" : ""}`}
                onKeyDown={onButtonKeyDown}
                // REVIEW: Should you use inline styles or CSS classes? Check the project conventions and try to create styles, even if its new ones, in unity-bootstrap-theme
              >
                <span>More</span>
                <i
                  className={`fas fa-chevron-down more-dropdown-icon${isOpen ? " open" : ""}`}
                />
              </button>
            </GaEventWrapper>

            {isOpen && (
              <div
                id={menuId}
                role="menu"
                aria-label="More tabs"
                className="more-dropdown-menu"
                onKeyDown={onMenuKeyDown}
              >
                <ul className="uds-more-dropdown-list">
                  {items.map((item, index) => {
                    const isActive = item.id === activeTabID;
                    return (
                      <li key={item.id}>
                        <a
                          ref={index === 0 ? firstItemRef : undefined}
                          href={`#${item.id}`}
                          role="menuitem"
                          tabIndex={0}
                          onClick={(e) => onItemClick(e, item.id, item.title)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              onItemClick(e, item.id, item.title);
                            }
                          }}
                          className="more-dropdown-item"
                          aria-current={isActive ? "true" : undefined}
                        >
                          {item.icon && (
                            <i className={`${item.icon?.[0]} fa-${item.icon?.[1]} me-1`} />
                          )}
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        );
      };

// REVIEW: Should any of these props be marked as .isRequired?
MoreDropdown.propTypes = {
  overflowTabs: PropTypes.array.isRequired,
  idToChild: PropTypes.object.isRequired,
  activeTabID: PropTypes.string,
  selectTab: PropTypes.func,
  gaData: PropTypes.object,
};

export { MoreDropdown };
