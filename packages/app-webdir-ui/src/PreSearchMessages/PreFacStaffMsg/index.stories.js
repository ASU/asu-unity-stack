import React from "react";

import { PreFacStaffMsg } from "./index";

import {
  createComponent,
  createStory,
} from "../../../../unity-bootstrap-theme/helpers/wrapper";

export default createComponent("PreFacStaffMsg", "Atoms", "Template");

export const preFacStaffMsg = createStory(<PreFacStaffMsg />);
