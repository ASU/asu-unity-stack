import React, { ComponentProps, ReactElement, useId } from "react";

type TooltipTrigger =
  | ReactElement<
      | HTMLAnchorElement
      | HTMLButtonElement
      | (HTMLElement & { tabIndex?: number })
    >
  | string;

export interface TooltipProps {
  /**
   * Title or heading.
   */
  title?: string;
  /**
   * Tooltip content.
   */
  content?: string;
  /**
   * Element that triggers the tooltip. Ignored if `children` is provided.
   */
  triggerElement?: TooltipTrigger;

  /**
   * Element that triggers the tooltip. If provided, this will override `triggerElement`.
   * If a string is provided, it will be wrapped in a span with `tabIndex={0}`.
   */
  children?: TooltipTrigger | string;
}

/**
 * Default tooltip icon button used if no triggerElement or children are provided.
 */
const TooltipIcon: React.FC<ComponentProps<"button">> = props => (
  <button className="uds-tooltip uds-tooltip-gray" {...props}>
    <span className="fa-stack">
      <i className="fas fa-circle fa-stack-2x"></i>
      <i className="fas fa-info fa-stack-1x"></i>
    </span>
    <span className="uds-tooltip-visually-hidden">Notifications</span>
  </button>
);

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  content,
  triggerElement,
  children,
}) => {
  const toolTipId = "tooltip-" + useId();

  let domTrigger: TooltipTrigger = children || triggerElement || (
    <TooltipIcon />
  );

  if (typeof domTrigger === "string") {
    domTrigger = (
      <a href="#" tabIndex={0}>
        {domTrigger}
      </a>
    );
  }

  return (
    <span className="uds-tooltip-container">
      {React.cloneElement(domTrigger as ReactElement, {
        "aria-describedby": toolTipId,
        "tabIndex": 0,
      })}
      <div role="tooltip" className="uds-tooltip-description" id={toolTipId}>
        {title && <span className="uds-tooltip-heading">{title}</span>}
        {content}
      </div>
    </span>
  );
};
