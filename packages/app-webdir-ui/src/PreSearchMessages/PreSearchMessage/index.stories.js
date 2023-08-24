import React from "react";

import { PreSearchMessage } from "./index";

import {
  createComponent,
  createStory,
} from "../../../../unity-bootstrap-theme/helpers/wrapper";

export default createComponent("PreSearchMessage", "Atoms", "Template");

export const preSearchMessage = createStory(<PreSearchMessage />);
