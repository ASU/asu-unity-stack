// @ts-check
import React from "react";

import { ASUSearchPageComponent } from "./index";

import {
  createComponent,
  createStory,
} from "../../../../bootstrap4-theme/helpers/wrapper";

export default createComponent(
  "App Webdir UI/Search Page",
  "Molecules",
  "Templates"
);

export const DefaultList = createStory(<ASUSearchPageComponent />);
