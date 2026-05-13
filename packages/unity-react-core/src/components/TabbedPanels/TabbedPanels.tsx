import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { MoreDropdown, TabHeader } from "./components";
import type { GaEventData } from "./components/MoreDropdown";
import { useBaseSpecificFramework } from "../GaEventWrapper/useBaseSpecificFramework";

type RefMap = Record<string, HTMLButtonElement | null>;

function useRefs(): [
  React.MutableRefObject<RefMap>,
    (name: string) => (ref: HTMLButtonElement | null) => void,
] {
  const refs = useRef<RefMap>({});

  const register = useCallback(
    (refName: string) => (ref: HTMLButtonElement | null) => {
      refs.current[refName] = ref;
    },
    []
  );

  return [refs, register];
}

// ─── Tab ─────────────────────────────────────────────────────────────────────

interface TabProps {
  id: string;
  title: string;
  icon?: [string, string];
  bgColor?: string;
  selected?: boolean;
  children?: React.ReactNode;
}

const Tab = ({ id, bgColor, selected, children }: TabProps) => {
  return (
    <div
      className={`tab-pane fade ${selected ? "show active" : ""} ${
        bgColor === "bg-dark" ? "text-white" : ""
      }`}
      id={`nav-${id}`}
      role="tabpanel"
      aria-labelledby={`nav-${id}-tab`}
    >
      {children}
    </div>
  );
};

// ─── TabbedPanels ─────────────────────────────────────────────────────────────

interface TabbedPanelsProps {
  initialTab?: string;
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
  bgColor?: string;
  onTabChange?: (tabId: string) => void;
}

function readTabGap(container: HTMLElement): number {
  const style = getComputedStyle(container);
  // Read the actual rendered gap from the nav-tabs flex container
  return parseFloat(style.getPropertyValue("column-gap") || style.getPropertyValue("gap")) || 8;
}

const TabbedPanels = ({
  initialTab = "",
  children,
  bgColor = "",
  onTabChange = () => {},
}: TabbedPanelsProps) => {
  const childrenArray = useMemo(
    () =>
      React.Children.toArray(children) as React.ReactElement<TabProps>[],
    [children]
  );

  const idToChild = useMemo(() => {
    const map: Record<string, React.ReactElement<TabProps>> = {};
    childrenArray.forEach((child) => {
      if (child?.props?.id) {
        map[child.props.id] = child;
      }
    });
    return map;
  }, [childrenArray]);

  const isMounted = useRef(false);
  const [activeTabID, setActiveTabID] = useState(
    initialTab && initialTab !== "null"
      ? initialTab
      : childrenArray[0]?.props?.id ?? ""
  );
  const headerTabs = useRef<HTMLDivElement>(null);
  const moreBtnRef = useRef<HTMLDivElement>(null);
  const [headerTabItems, setHeaderTabItems] = useRefs();
  const tabRefs = useRef<Record<string, HTMLButtonElement>>({});
  const tabWidthsRef = useRef<Record<string, number>>({});

  const registerTabNode = useCallback(
    (id: string) => (node: HTMLButtonElement | null) => {
      setHeaderTabItems(id)(node);
      if (node) {
        tabRefs.current[id] = node;
        tabWidthsRef.current[id] = Math.round(
          node.getBoundingClientRect().width
        );
      } else {
        delete tabRefs.current[id];
      }
    },
    [setHeaderTabItems]
  );

  const [overflowTabs, setOverflowTabs] = useState<string[]>([]);
  const [visibleTabs, setVisibleTabs] = useState<string[]>(
    childrenArray.map((c) => c.props.id)
  );

  const calculateOverflow = useCallback(() => {
    const container = headerTabs.current;
    if (!container) {
      setVisibleTabs(childrenArray.map((c) => c.props.id));
      setOverflowTabs([]);
      return;
    }

    const tabIDs = childrenArray.map((c) => c.props.id);

    const widths = tabIDs.map((id) => {
      if (typeof tabWidthsRef.current[id] === "number") {
        return tabWidthsRef.current[id];
      }
      const domNode = tabRefs.current[id] ?? headerTabItems.current?.[id];
      if (domNode && typeof domNode.getBoundingClientRect === "function") {
        const width = Math.round(domNode.getBoundingClientRect().width);
        tabWidthsRef.current[id] = width;
        return width;
      }
      return 80;
    });

    const availableWidth = container.clientWidth ?? 0;
    const moreBtnWidth = moreBtnRef.current
      ? Math.round(moreBtnRef.current.getBoundingClientRect().width)
      : 83;
    const tabGap = readTabGap(container);
    const newVisibleTabs: string[] = [];
    const newOverflowTabs: string[] = [];
    let used = 0;

    for (let i = 0; i < tabIDs.length; i++) {
      const w = widths[i] ?? 0;
      if (used + w + moreBtnWidth > availableWidth) {
        for (let j = i; j < tabIDs.length; j++) {
          newOverflowTabs.push(tabIDs[j]);
        }
        break;
      }
      newVisibleTabs.push(tabIDs[i]);
      used += w + tabGap;
    }

    setVisibleTabs(newVisibleTabs);
    setOverflowTabs(newOverflowTabs);
  }, [childrenArray, headerTabItems]);

  useLayoutEffect(() => {
    calculateOverflow();
    window.addEventListener("resize", calculateOverflow);
    return () => window.removeEventListener("resize", calculateOverflow);
  }, [calculateOverflow]);

  useEffect(() => {
    if (
      isMounted.current &&
      initialTab &&
      initialTab !== "null" &&
      activeTabID !== initialTab
    ) {
      setActiveTabID(initialTab);
    }
  }, [initialTab, activeTabID]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  if (childrenArray.length === 0) {
    return null;
  }

  const updateActiveTabID = (tab: string) => {
    onTabChange(tab);
    setActiveTabID(tab);
  };

  const trackLinkEvent: GaEventData = {
    event: "link",
    action: "click",
    name: "onclick",
    type: "internal link",
    text: "",
  };

  const tabs = childrenArray.map((el) =>
    React.cloneElement(el, {
      bgColor,
      selected: activeTabID === el.props.id,
    })
  );

  const switchToTab = (
    e: React.MouseEvent | React.KeyboardEvent,
    tabID: string,
    _title: string
  ) => {
    e.preventDefault();
    updateActiveTabID(tabID);
  };

  const incrementIndex = (up = true) => {
    // Only navigate through currently visible (non-overflow) tabs
    const navigableTabs = visibleTabs;
    const count = navigableTabs.length;
    if (count === 0) return;
    const num = up ? 1 : -1;
    const currPos = navigableTabs.indexOf(activeTabID);
    // If active tab is in overflow, start from edge of visible list
    const startPos = currPos === -1 ? (up ? count - 1 : 0) : currPos;
    const newTabID = navigableTabs[(count + startPos + num) % count];
    updateActiveTabID(newTabID);
    // Focus the new tab (keyboard-triggered navigation)
    headerTabItems.current[newTabID]?.focus();
  };

  const { isReact } = useBaseSpecificFramework();

  let navClasses = "uds-tabbed-panels";
  if (bgColor === "bg-dark") {
    navClasses += " uds-tabbed-panels-dark";
  }

  // When the active tab is in the overflow dropdown, the first visible tab
  // becomes the roving-tabindex entry point so keyboard users can reach the row.
  const activeIsOverflow = overflowTabs.includes(activeTabID);

  return (
    <div className={bgColor}>
      <nav className={navClasses} {...(isReact ? { "data-react": "true" } : {})}>
        <div className="nav nav-tabs" role="tablist" ref={headerTabs}>
          {visibleTabs.map((tabId, index) => {
            const child = idToChild[tabId];
            if (!child) return null;
            const isFocusEntry = activeIsOverflow
              ? index === 0
              : activeTabID === tabId;

            return (
              <TabHeader
                ref={registerTabNode(tabId)}
                id={child.props.id}
                title={child.props.title}
                selected={activeTabID === child.props.id}
                isFocusEntry={isFocusEntry}
                gaData={trackLinkEvent}
                selectTab={switchToTab}
                key={child.props.id}
                leftKeyPressed={() => incrementIndex(false)}
                rightKeyPressed={() => incrementIndex()}
                icon={child.props.icon}
              />
            );
          })}

          <MoreDropdown
            ref={moreBtnRef}
            overflowTabs={overflowTabs}
            idToChild={idToChild}
            activeTabID={activeTabID}
            selectTab={switchToTab}
            gaData={trackLinkEvent}
          />
        </div>
      </nav>
      <div
        className="tab-content"
        tabIndex={0}
        role="tabpanel"
        id="nav-tabContent"
      >
        {tabs}
      </div>
    </div>
  );
};

export { TabbedPanels, Tab, TabHeader };
export type { TabProps, TabbedPanelsProps };
