// @ts-check
import React from "react";

import { SearchResultsList } from "./index";

import {
  createComponent,
  createStory,
} from "../../../../bootstrap4-theme/helpers/wrapper";
import { getTestCards } from "../assets/test-data";

export default createComponent(
  "App Webdir UI/Faculty And Staff Results",
  "Molecules",
  "Templates"
);

export const DefaultList = createStory(
  <SearchResultsList
    profiles={getTestCards()}
    searchTerm="Sarah Hough"
  />
);
