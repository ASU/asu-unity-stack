// @ts-check

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
};

const GRID_VIEW_ID = "grid-view";
const LIST_VIEW_ID = "list-view";
const GRID_PROGRAMS_ID = "degree-list-programs";

export {
  tagHeadings,
  tagHeadingList,
  glanceItemsMap,
  GRID_PROGRAMS_ID,
  GRID_VIEW_ID,
  LIST_VIEW_ID,
};
