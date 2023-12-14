// KEY Object contains strings that are being used for comparison
export const KEY = {
  GROUND: "GROUND",
  ONLINE: "ONLNE",
  NOPREF: "NOPREF",
  FRESHMAN: "First Time Freshman",
  TRANSFER: "Transfer",
  READMISSION: "Readmission",
  UNDERGRAD: "undergrad",
  UNDERGRADUATE: "undergraduate",
  GRADUATE: "graduate",
  GR: "GR",
  UG: "UG",
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

export const STUDENT_TYPE = {
  UNDERGRAD: {
    value: "undergrad",
    careerStudentType: KEY.FRESHMAN,
    abbr: "UG",
  },
  GRADUATE: {
    value: "graduate",
    careerStudentType: KEY.READMISSION,
    abbr: "GR",
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
