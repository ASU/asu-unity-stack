import React from "react";
import { Tooltip } from "./Tooltip";
import { Image } from "../Image/Image";
import { img01 } from "@asu/shared";
/**
 * TODO
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role
 * Keyboard interactions [Escape] should close the tooltip
 *
 * alignment of tooltip assumes the trigger is icon button
 *
 * probably limit the triggers to something with a visual inidicator (like button or link)
 */

const defaultProps = {
  title: "Header",
  content: "Content goes here, this is a tooltip. It can be long or short.",
};
export default {
  title: "Components/Tooltip",
  component: Tooltip,
  decorators: [
    story => (
      <>
        <div style={{ margin: "100px 10px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. {story()} Sed
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </>
    ),
  ],
  render: args => <Tooltip {...args} />,
  args: {
    ...defaultProps,
  },
};

export const NoChildrenDefaultIcon = {};

export const Link = {
  render: args => (
    <Tooltip {...args}>
      <a href="https://example.com">Tooltiptrigger</a>
    </Tooltip>
  ),
};

export const Text = {
  render: args => <Tooltip {...args}>just a plain string</Tooltip>,
};

export const JsxSpanContainingText = {
  render: args => (
    <Tooltip {...args}>
      <span> html string Tooltiptrigger</span>
    </Tooltip>
  ),
};

export const ImageOnly = {
  render: args => (
    <Tooltip {...args}>
      <a style={{ display: "inline-block", maxWidth: "550px" }}>
        <Image src={img01} alt={""} />
      </a>
    </Tooltip>
  ),
};
