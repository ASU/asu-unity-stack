// KEY Object contains strings that are being used for comparison
export const KEY = {
  GROUND: "GROUND",
  ONLINE: "ONLNE", // value has no i
  NOPREF: "NOPREF",
  FRESHMAN: "First Time Freshman",
  TRANSFER: "Transfer",
  READMISSION: "Readmission",
  UNDERGRAD: "undergrad",
  UNDERGRADUATE: "undergraduate",
  GRADUATE: "graduate",
  GR: "GR",
  UG: "UG",
  CER: "CER",
  FALSE_EMPTY: "__NA__",
};

export const CAMPUS = {
  GROUND: {
    key: "1",
    value: KEY.GROUND,
    text: "I plan to take some/all of my classes on campus",
  },
  ONLINE: {
    key: "2",
    value: KEY.ONLINE,
    text: "I plan to study 100% online through ASU Online",
  },
  NOPREF: {
    key: "3",
    value: KEY.NOPREF,
    text: "I am not sure",
  },
};

export const STUDENT = {
  FRESHMAN: {
    key: "1",
    value: KEY.FRESHMAN,
    text: "First-year undergraduate",
  },
  TRANSFER: {
    key: "2",
    value: KEY.TRANSFER,
    text: "Transferring undergraduate",
  },
  READMISSION: {
    key: "3",
    value: KEY.READMISSION,
    text: "Graduate (Masters, PhD, EdD, DNP, etc.)",
  },
};

export const CAMPUS_OPTIONS_DEFAULT = [
  CAMPUS.GROUND,
  CAMPUS.ONLINE,
  CAMPUS.NOPREF,
];

export const STUDENT_OPTIONS_DEFAULT = [
  STUDENT.FRESHMAN,
  STUDENT.TRANSFER,
  STUDENT.READMISSION,
];

export const FAILED_OPTIONS_DEFAULT = [
  {
    key: "1",
    value: "",
    text: "Load failed. Please try again in 5 minutes.",
  },
];

export const GA_EVENT_DEFAULT = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  section: "request information",
  component: "step 1 of 3",
};

export const DATA_SOURCE = {
  DEGREE_SEARCH: "https://api.myasuplat-dpl.asu.edu/api/codeset",
  ASU_ONLINE: "https://cms.asuonline.asu.edu/lead-submissions-v3.5/programs",
  COUNTRIES_STATES: "https://api.myasuplat-dpl.asu.edu/api/codeset/countries",
};
