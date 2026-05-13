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
   * If a string is provided, it will be wrapped in a button element.
   */
  children?: TooltipTrigger | string;

  /**
   * Accessible label for the default tooltip icon. If not provided, will use tooltip content or fallback to "Show more information".
   */
  iconLabel?: string;
}

/**
 * Default tooltip icon button used if no triggerElement or children are provided.
 */
const TooltipIcon: React.FC<ComponentProps<"button">> = props => (
  <button className="uds-tooltip uds-tooltip-gray" {...props}>
    <span className="fa-stack" aria-hidden="true">
      <i className="fas fa-circle fa-stack-2x"></i>
      <i className="fas fa-info fa-stack-1x"></i>
    </span>
  </button>
);

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  content,
  triggerElement,
  children,
  iconLabel,
}) => {
  const toolTipId = "tooltip-" + useId();

  // Create accessible label for default icon
  const getIconLabel = () => {
    if (iconLabel) return iconLabel;
    if (title) return `Show tooltip: ${title}`;
    if (content && typeof content === 'string') {
      // Truncate long content for the label
      const truncated = content.length > 50 ? content.substring(0, 47) + "..." : content;
      return `Show tooltip: ${truncated}`;
    }
    return "Show more information";
  };

  let domTrigger: TooltipTrigger = children || triggerElement || (
    <TooltipIcon aria-label={getIconLabel()} />
  );

  if (typeof domTrigger === "string") {
    domTrigger = <button type="button">{domTrigger}</button>;
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
