import React from "react";

import { searchMessageComponentMap } from "../index";

import {
  createComponent,
  createStory,
} from "../../../../unity-bootstrap-theme/helpers/wrapper";

export default createComponent("PreSearchMessage", "Atoms", "Template");

export const preSearchMessage = createStory(searchMessageComponentMap.all);
