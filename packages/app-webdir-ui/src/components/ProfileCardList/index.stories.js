// @ts-check
import React from "react";

import { ASUProfileCardList } from "./index";

import {
  createComponent,
  createStory,
} from "../../../../bootstrap4-theme/helpers/wrapper";
import { getTestCards } from "../assets/test-data";

export default createComponent(
  "App Webdir UI/Profile Card List",
  "Molecules",
  "Templates"
);

export const DefaultList = createStory(
  <ASUProfileCardList profiles={getTestCards()} />
);
