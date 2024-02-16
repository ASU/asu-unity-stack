import React from "react";

import { QuickLinks } from "./index";

import { DefaultContainer } from "../../../../shared/components/Layout";

export default {
  title: "Atoms/QuickLinks/Template",
  decorators: [story => <DefaultContainer>{story()}</DefaultContainer>],
};

export const preSearchMessage = () => <QuickLinks />;
