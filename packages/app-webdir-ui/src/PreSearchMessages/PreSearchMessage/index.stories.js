import React from "react";

import {
  createComponent,
  createStory,
} from "../../../../unity-bootstrap-theme/helpers/wrapper";
import { searchMessageComponentMap } from "../index";

export default createComponent("PreSearchMessage", "Atoms", "Template");

export const preSearchMessage = createStory(searchMessageComponentMap.all);
