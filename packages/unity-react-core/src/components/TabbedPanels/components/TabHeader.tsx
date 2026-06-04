import React from "react";

import { GaEventWrapper } from "../../GaEventWrapper/GaEventWrapper";
import { useBaseSpecificFramework } from "../../GaEventWrapper/useBaseSpecificFramework";
import type { GaEventData } from "./MoreDropdown";

interface TabHeaderProps {
  id: string;
  selected: boolean;
  isFocusEntry?: boolean;
  title: string;
  selectTab: (e: React.MouseEvent | React.KeyboardEvent, id: string, title: string) => void;
  leftKeyPressed: () => void;
  rightKeyPressed: () => void;
  icon?: [string, string];
  gaData?: GaEventData;
  ref?: React.Ref<HTMLButtonElement>;
}

const TabHeader = ({ id, selected, isFocusEntry, title, selectTab, leftKeyPressed, rightKeyPressed, icon, gaData, ref }: TabHeaderProps) => {
    const { isReact } = useBaseSpecificFramework();

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
        <button
          ref={ref}
          type="button"
          className={`nav-item nav-link ${selected ? "active" : ""}`}
          id={id}
          role="tab"
          aria-controls={`nav-${id}`}
          aria-selected={selected}
          onClick={(e) => selectTab(e, id, title)}
          onKeyDown={isReact ? onKeyDown : undefined}
          tabIndex={isFocusEntry ?? selected ? 0 : -1}
        >
          {title}{" "}
          {icon && <i aria-hidden="true" className={`${icon[0]} fa-${icon[1]} me-1`} />}
        </button>
      </GaEventWrapper>
    );
};

export { TabHeader };
export type { TabHeaderProps };
