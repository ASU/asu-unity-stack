import React, { ReactElement, useRef, useState } from "react";

export interface TooltipProps {
  /**
   * Title or heading.
   */
  title?: string;
  /**
   * Content
   */
  content?: string;
  /**
   * The element where we will position the dialog beside.
   */
  triggerElement: ReactElement;
}

let toolTipIdCounter = 0;

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  content,
  triggerElement,
}) => {
  const [toolTipId] = useState(`tooltip-${toolTipIdCounter++}`);
  const ref = useRef(null);

  return (
    <span className="uds-tooltip-container">
      {React.cloneElement(triggerElement, {
        ref,
        "aria-describedby": toolTipId,
        "tabindex": 0,
      })}
      <div role="tooltip" className="uds-tooltip-description" id={toolTipId}>
        {title && <span className="uds-tooltip-heading">{title}</span>}
        {content}
      </div>
    </span>
  );
};
