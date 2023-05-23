import React from "react";

import { PreStudentMsg } from "./index";

import {
  createComponent,
  createStory,
} from "../../../bootstrap4-theme/helpers/wrapper";

export default createComponent("PreStudentMsg", "Atoms", "Template");

export const preStudentMsg = createStory(<PreStudentMsg />);
