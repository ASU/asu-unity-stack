import React from "react";

import { defaultDecorator } from "../../../../../shared/components/Layout";
import { searchMessageComponentMap } from "../index";

export default {
  title: "Atoms/PreSearchMessage/Template",

  decorators: [defaultDecorator],
};

export const preSearchMessage = () => searchMessageComponentMap.all;
