import React, { useRef } from "react";

import { GaEventWrapper } from "../../GaEventWrapper/GaEventWrapper";
import { useBaseSpecificFramework } from "../../GaEventWrapper/useBaseSpecificFramework";
import type { GaEventData } from "./MoreDropdown";

interface TabHeaderProps {
  id: string;
  selected: boolean;
  title: string;
  selectTab: (e: React.MouseEvent | React.KeyboardEvent, id: string, title: string) => void;
  leftKeyPressed: () => void;
  rightKeyPressed: () => void;
  icon?: [string, string];
  gaData?: GaEventData;
  ref?: React.Ref<HTMLAnchorElement>;
}

const TabHeader = (
  { id, selected, title, selectTab, leftKeyPressed, rightKeyPressed, icon, gaData, ref }: TabHeaderProps
) => {
    const { isReact, isBootstrap } = useBaseSpecificFramework();

    const onKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        leftKeyPressed();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        rightKeyPressed();
      }
    };

    return (
      <GaEventWrapper gaData={{ ...gaData, text: title }}>
        <a
          ref={ref}
          className={`nav-item nav-link ${selected ? "active" : ""}`}
          id={id}
          href={`#nav-${id}`}
          role="tab"
          aria-controls={`nav-${id}`}
          aria-selected={selected}
          data-bs-toggle={isBootstrap ? "tab" : undefined}
          onClick={isReact ? (e) => selectTab(e, id, title) : undefined}
          onKeyDown={isReact ? onKeyDown : undefined}
          tabIndex={0}
        >
          {title}{" "}
          {icon && <i aria-hidden="true" className={`${icon[0]} fa-${icon[1]} me-1`} />}
        </a>
      </GaEventWrapper>
    );
  }
);

TabHeader.displayName = "TabHeader";

export { TabHeader };
export type { TabHeaderProps };
