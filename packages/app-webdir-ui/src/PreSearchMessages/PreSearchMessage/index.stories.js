import React from "react";

import { DefaultContainer } from "../../../../../shared/components/Layout";
import { searchMessageComponentMap } from "../index";

export default {
  title: "Atoms/PreSearchMessage/Template",

  decorators: [story => <DefaultContainer>{story()}</DefaultContainer>],
};

export const preSearchMessage = () => searchMessageComponentMap.all;
