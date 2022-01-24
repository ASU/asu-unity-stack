import React from "react";

import { PreSearchMessage } from "./index";

import {
  createComponent,
  createStory,
} from "../../../bootstrap4-theme/helpers/wrapper";

export default createComponent("PreSearchMessage", "Atoms", "Template");

export const preSearchMessage = createStory(<PreSearchMessage />);
