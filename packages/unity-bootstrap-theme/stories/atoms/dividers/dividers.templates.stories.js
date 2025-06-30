import React from "react";
import { defaultDecorator } from "@asu/shared";

export default {
  title: "Atoms/Dividers/Templates",
  decorators: [defaultDecorator],
  parameters: { controls: { disable: true } },
};

export const Divider = () => <hr className="copy-divider" />;
