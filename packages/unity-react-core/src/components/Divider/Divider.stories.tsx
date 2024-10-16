import React from "react";
import { Divider, DividerProps, DividerType } from "./Divider";

export default {
  title: "Components/Divider",
  component: Divider,
};

const dividerTemplate = (args:DividerProps) => <Divider {...args} />;

export const SectionDivider = {
  render: dividerTemplate.bind({}),
};

export const CopyDivider = {
  render: dividerTemplate.bind({}),
  args: {
    type: DividerType.COPY,
  }
};
