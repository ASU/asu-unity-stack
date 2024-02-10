// @ts-check

const ONLNE = "ONLNE";

const locationOptions = [
  { id: 0, value: "DTPHX", text: "Downtown Phoenix campus" },
  { id: 1, value: "POLY", text: "Polytechnic campus" },
  { id: 2, value: "TEMPE", text: "Tempe campus" },
  { id: 3, value: "WEST", text: "West Valley campus" },
  { id: 4, value: "ONLNE", text: "ASU Online" },
];

const onlneOption = locationOptions[4];

const asuLocalOptions = [
  { id: 0, value: "COCHS", text: "ASU at Cochise" },
  { id: 1, value: "LOSAN", text: "ASU at Los Angeles" },
  { id: 2, value: "NEAZ", text: "ASU at Northeastern Arizona" },
  { id: 3, value: "PIMA", text: "ASU at Pima" },
  { id: 4, value: "CAC", text: "ASU at Pinal" },
  { id: 5, value: "EAC", text: "ASU at TheGilaValley" },
  { id: 6, value: "TUCSN", text: "ASU at Tucson" },
  { id: 7, value: "YAVAP", text: "ASU at Yavapai" },
  { id: 8, value: "AWC", text: "ASU at Yuma" },
  { id: 9, value: "MESACITYCR", text: "ASU at Mesa City Center" },
  { id: 10, value: "CALHC", text: "Colleges at Lake Havasu City" },
];

const acceleratedConcurrentOptions = [
  {
    id: 0,
    value: "all",
    text: "All",
  },
  {
    id: 1,
    value: "acceleratedAcadPlanCodes",
    text: "Accelerated",
  },
  {
    id: 2,
    value: "concurrentAcadPlanCodes",
    text: "Concurrent",
  },
];

const defaultAccelConcOption = acceleratedConcurrentOptions[0];

const acceleratedConcurrentValues = [
  "acceleratedConcurrent",
  "concurrentDegrees",
  "all",
];

const isAccelConcValid = opt => opt?.value && opt?.value !== "all";

const getFullCampusLocalText = opt =>
  [
    ...locationOptions,
    ...asuLocalOptions,
    ...acceleratedConcurrentOptions,
  ].find(({ value }) => value === opt)?.text || opt;

export {
  asuLocalOptions,
  acceleratedConcurrentOptions,
  acceleratedConcurrentValues,
  defaultAccelConcOption,
  isAccelConcValid,
  locationOptions,
  ONLNE,
  onlneOption,
  getFullCampusLocalText,
};
