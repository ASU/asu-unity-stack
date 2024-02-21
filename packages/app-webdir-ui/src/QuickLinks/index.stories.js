import React from "react";

import { QuickLinks } from "./index";

import { defaultDecorator } from "../../../../shared/components/Layout";

export default {
  title: "Atoms/QuickLinks/Template",
  decorators: [defaultDecorator],
};

export const preSearchMessage = () => <QuickLinks />;
