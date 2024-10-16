import React from "react";
import { Tooltip } from "./Tooltip";
import { ButtonIconOnly } from "../ButtonIconOnly/ButtonIconOnly";
/**
 * TODO
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role
 * Keyboard interactions [Escape] should close the tooltip
 *
 * alignment of tooltip assumes the trigger is icon button
 *
 * probably limit the triggers to something with a visual inidicator (like button or link)
 */
export default {
  title: "Components/Tooltip",
  component: Tooltip,
};

const defaultProps = {
  title: "Header",
  content: "Content",
}

const tooltipTemplate = args => <Tooltip {...args} />;

export const Icon = {
  render: tooltipTemplate.bind({}),
  args: {
    ...defaultProps,
    triggerElement: <ButtonIconOnly icon={["fas","info"]} />,
  }
};

export const link = {
  render: args => <div>This is a <Tooltip {...args} /> sentence.</div>,
  args: {
    ...defaultProps,
    triggerElement: <a href="javascript:void(0);">Tooltiptrigger</a>,
  }
};

export const text = {
  render: tooltipTemplate.bind({}),
  args: {
    ...defaultProps,
    triggerElement: <span>Tooltiptrigger</span>,
  }
};
