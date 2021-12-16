// @ts-check
import React from "react";

import { PreSearchMessage } from "./index";

import {
  createComponent,
  createStory,
} from "../../../../bootstrap4-theme/helpers/wrapper";

export default createComponent(
  "App Webdir UI/Pre Search Message",
  "Molecules",
  "Templates"
);

export const Default = createStory(<PreSearchMessage />);
