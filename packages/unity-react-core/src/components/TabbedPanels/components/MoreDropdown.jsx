import PropTypes from "prop-types";
import React,{useEffect, useRef, useState} from "react";

import { GaEventWrapper } from "../../GaEventWrapper/GaEventWrapper";
import { root } from "postcss";
import { title } from "process";

  // -----------------------------
  // TODO 1.2
  // -----------------------------

  const MoreDropdown = ({ overflowTabs, activeTabID, selectTab, gaData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef(null);
    const items = overflowTabs.map((str) => {
      if (typeof str === "string") {
        return {
          id: str,
          title: str,
        };
      }
      else {
        return {
          id: str.id,
          title: str.title || str.id
        };
      }
    }
    );

    const toggle = (event) => {
      if (event) {
        event.preventDefault();
      }
      setIsOpen((isCurOpen) => !isCurOpen);
    };

    useEffect(() => {
      function onDocClick(event) {
        const clickedInside = rootRef.current.contains(event.target);

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

        return (
          <div
            ref={rootRef}
            className="uds-more-dropdown"
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >

            <button
              type="button"
              onClick={toggle}
              aria-haspopup="menu"
              aria-expanded={isOpen}
              style={{
                paddingTop: "0.5rem",
                paddingLeft: "0.25rem",
                paddingRight: "0.25rem",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>More</span>

              <i
                className="fas fa-chevron-down"
                aria-hidden="true"
                style={{
                  transition: "transform 160ms ease",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {isOpen && (
              <div
                role="menu"
                aria-label="More tabs"
                style={{
                  position: "absolute",
                  top: "41px",
                  right: 0,
                  width: "180px",
                  padding: "2rem",
                  background: "#ffffff",
                  border: "1px solid #d0d0d0",
                  zIndex: 1000,
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {items.map((item) => {
                    const isActive = item.id === activeTabID;

                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          role="menuitem"
                          tabIndex={0}
                          onClick={(e) =>
                            onItemClick(e, item.id, item.title)
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              onItemClick(e, item.id, item.title);
                            }
                          }}
                          style={{
                            display: "block",
                            padding: "0.25rem 0.5rem",
                            textDecoration: "none",
                            cursor: "pointer",
                            color: isActive ? "#8c1d40" : "inherit",
                            borderBottom: isActive
                              ? "8px solid #8c1d40"
                              : "none",
                          }}
                          aria-current={isActive ? "true" : undefined}
                        >
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

MoreDropdown.propTypes = {
  overflowTabs: PropTypes.array,
  activeTabID: PropTypes.string,
  selectTab: PropTypes.func,
  gaData: PropTypes.object,
};

export { MoreDropdown };
