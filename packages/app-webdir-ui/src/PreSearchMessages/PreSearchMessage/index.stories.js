import React from "react";

import { defaultDecorator } from "@asu/shared";
import { searchMessageComponentMap } from "../index";

export default {
  title: "Atoms/PreSearchMessage/Template",

  decorators: [defaultDecorator],
};

export const preSearchMessage = () => searchMessageComponentMap.all;
