import React, { useCallback, useEffect, useId, useRef, useState } from "react";

import { GaEventWrapper } from "../../GaEventWrapper/GaEventWrapper";

interface DropdownItem {
  id: string;
  title: string;
  icon: [string, string] | null;
}

interface ChildProps {
  title: string;
  icon?: [string, string];
}

interface IdToChild {
  [id: string]: React.ReactElement<ChildProps>;
}

interface GaEventData {
  event?: string;
  action?: string;
  name?: string;
  type?: string;
  region?: string;
  text?: string;
}

interface MoreDropdownProps {
  overflowTabs: string[];
  idToChild: IdToChild;
  activeTabID?: string;
  selectTab?: (e: React.MouseEvent | React.KeyboardEvent, id: string, title: string) => void;
  gaData?: GaEventData;
}

const MoreDropdown = React.forwardRef<HTMLDivElement, MoreDropdownProps>((
  {
    overflowTabs,
    idToChild,
    activeTabID,
    selectTab,
    gaData,
  },
  ref
) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<HTMLButtonElement[]>([]);
  const safeOverflow = Array.isArray(overflowTabs) ? overflowTabs : [];
  const menuId = useId();
  const hasActiveOverflowTab = safeOverflow.includes(activeTabID ?? "");

  const items: DropdownItem[] = safeOverflow.map((tabId) => {
    const child = idToChild?.[tabId];
    if (!child) {
      return { id: tabId, title: tabId, icon: null };
    }
    return {
      id: tabId,
      title: child.props.title,
      icon: child.props.icon ?? null,
    };
  });

  const close = useCallback((returnFocus = true) => {
    setIsOpen(false);
    if (returnFocus) {
      triggerRef.current?.focus();
    }
  }, []);

  // Move focus to first item when dropdown opens
  useEffect(() => {
    if (isOpen) {
      itemRefs.current[0]?.focus();
    }
  }, [isOpen]);

  const toggle = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };

  // Close on outside click
  useEffect(() => {
    function onDocClick(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Arrow key navigation + Escape inside the dropdown
  const onItemKeyDown = useCallback(
    (event: React.KeyboardEvent, index: number) => {
      switch (event.key) {
        case "ArrowDown": {
          event.preventDefault();
          const next = itemRefs.current[index + 1] ?? itemRefs.current[0];
          next?.focus();
          break;
        }
        case "ArrowUp": {
          event.preventDefault();
          const prev =
            itemRefs.current[index - 1] ??
            itemRefs.current[items.length - 1];
          prev?.focus();
          break;
        }
        case "Home":
          event.preventDefault();
          itemRefs.current[0]?.focus();
          break;
        case "End":
          event.preventDefault();
          itemRefs.current[items.length - 1]?.focus();
          break;
        case "Escape":
          event.preventDefault();
          close();
          break;
        case "Tab":
          // Let Tab close the dropdown naturally without stealing focus
          setIsOpen(false);
          break;
        default:
          break;
      }
    },
    [items.length, close]
  );

  const onItemClick = (
    event: React.MouseEvent,
    id: string,
    title: string
  ) => {
    event.preventDefault();
    close(false);
    selectTab?.(event, id, title);
  };

  const hidden = items.length === 0;

  const setRootRef = (node: HTMLDivElement | null) => {
    rootRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
  };

  return (
    <div
      ref={setRootRef}
      className="uds-more-dropdown"
      aria-hidden={hidden || undefined}
      style={hidden ? { visibility: "hidden", pointerEvents: "none" } : undefined}
    >
      <GaEventWrapper gaData={gaData ?? {}}>
        <button
          ref={triggerRef}
          type="button"
          onClick={toggle}
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label={`More, ${items.length} additional tab${items.length !== 1 ? "s" : ""}`}
          className={`uds-tab more-dropdown-button${hasActiveOverflowTab ? " active" : ""}`}
        >
          <span className="more-dropdown-button-inner">
            <span aria-hidden="true">More</span>
            <i
              aria-hidden="true"
              className={`fas fa-chevron-down more-dropdown-icon${isOpen ? " open" : ""}`}
            />
          </span>
          <span className="more-dropdown-button-indicator" aria-hidden="true" />
        </button>
      </GaEventWrapper>

      <ul
          id={menuId}
          role="menu"
          aria-label="More tabs"
          aria-hidden={!isOpen}
          className={`more-dropdown-menu uds-more-dropdown-list${isOpen ? " open" : ""}`}
        >
          {items.map((item, index) => {
            const isActive = item.id === activeTabID;
            return (
              <li key={item.id} role="none">
                <button
                  ref={(el) => {
                    if (el) itemRefs.current[index] = el;
                  }}
                  type="button"
                  role="menuitem"
                  tabIndex={-1}
                  onClick={(e) => onItemClick(e, item.id, item.title)}
                  onKeyDown={(e) => onItemKeyDown(e, index)}
                  className="more-dropdown-item"
                  aria-current={isActive || undefined}
                >
                  {item.icon && (
                    <i
                      aria-hidden="true"
                      className={`${item.icon[0]} fa-${item.icon[1]} me-1`}
                    />
                  )}
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
    </div>
  );
});

MoreDropdown.displayName = "MoreDropdown";

export { MoreDropdown };
export type { MoreDropdownProps, GaEventData };
