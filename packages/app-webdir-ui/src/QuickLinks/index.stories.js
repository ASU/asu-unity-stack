import React from "react";

import { QuickLinks } from "./index";

import {
  createComponent,
  createStory,
} from "../../../unity-bootstrap-theme/helpers/wrapper";

export default createComponent("QuickLinks", "Atoms", "Template");

export const preSearchMessage = createStory(<QuickLinks />);
