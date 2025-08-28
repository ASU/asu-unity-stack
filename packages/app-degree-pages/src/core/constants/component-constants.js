// @ts-check

import { title } from "process";

const tagHeadings = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

const tagHeadingList = Object.values(tagHeadings);

const glanceItemsMap = {
  offeredBy: { icon: "university", title: "Offered by" },
  locations: { icon: "map-marker-alt", title: "Location" },
  firstRequirementMathCourse: {
    icon: "pencil-alt",
    title: "First Required math Course",
  },
  mathIntensity: { icon: "calculator", title: "Math intensity" },
  timeCommitment: { icon: "calendar-alt", title: "Time commitment" },
  stemOptText: { icon: "star", title: "STEM-OPT extension eligible" },
};

const GRID_VIEW_ID = "grid-view";
const LIST_VIEW_ID = "list-view";
const GRID_PROGRAMS_ID = "degree-list-programs";

const ERROR_MESSAGE = "Sorry, Something went wrong.";

const STEM_OPT_HEADER_TEXT = "STEM-OPT for international students on F-1 visas";

const PROGRAM_NOT_FOUND_TEXT = `This degree is not found.
  This may be a temporary issue. Please try again in 5 minutes.
  If the issue persists, the degree may no longer be available.`;

export {
  tagHeadings,
  tagHeadingList,
  glanceItemsMap,
  GRID_PROGRAMS_ID,
  GRID_VIEW_ID,
  LIST_VIEW_ID,
  ERROR_MESSAGE,
  STEM_OPT_HEADER_TEXT,
  PROGRAM_NOT_FOUND_TEXT,
};
