// @ts-check

const locationOptions = [
  { id: 0, value: "DTPHX", label: "Downtown Phoenix campus" },
  { id: 1, value: "POLY", label: "Polytechnic campus" },
  { id: 2, value: "TEMPE", label: "Tempe campus" },
  { id: 3, value: "TBIRD", label: "Thunderbird campus" },
  { id: 4, value: "WEST", label: "West campus" },
  { id: 5, value: "ONLNE", label: "ASU Online" },
];

const asuLocalOptions = [
  { id: 0, value: "COCHS", label: "ASU@Cochise" },
  { id: 1, value: "LOSAN", label: "ASU@Los Angeles" },
  { id: 2, value: "NEAZ", label: "ASU@Northeastern Arizona" },
  { id: 3, value: "PIMA", label: "ASU@Pima" },
  { id: 4, value: "CAC", label: "ASU@Pinal" },
  { id: 5, value: "EAC", label: "ASU@TheGilaValley" },
  { id: 6, value: "TUCSN", label: "ASU@Tucson" },
  { id: 7, value: "YAVAP", label: "ASU@Yavapai" },
  { id: 8, value: "AWC", label: "ASU@Yuma" },
  { id: 9, value: "CALHC", label: "Colleges at Lake Havasu City" },
];

const acceleratedConcurrentOptions = [
  {
    id: 0,
    value: "all",
    label: "All",
  },
  {
    id: 1,
    value: "accelerateDegrees",
    label: "Accelerated",
  },
  {
    id: 2,
    value: "concurrentDegrees",
    label: "Concurrent",
  },
];

const acceleratedConcurrentValues = [
  "acceleratedConcurrent",
  "concurrentDegrees",
  "all",
];

export {
  locationOptions,
  asuLocalOptions,
  acceleratedConcurrentOptions,
  acceleratedConcurrentValues,
};
