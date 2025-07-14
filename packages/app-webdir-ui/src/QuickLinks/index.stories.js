import React from "react";

import { QuickLinks } from "./index";

import { defaultDecorator } from "@asu/shared";

export default {
  title: "Atoms/QuickLinks/Template",
  decorators: [defaultDecorator],
};

export const preSearchMessage = () => <QuickLinks />;
