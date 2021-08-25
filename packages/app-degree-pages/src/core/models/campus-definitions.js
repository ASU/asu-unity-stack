// @ts-check

const campusDefinitions = {
  "TEMPE": {
    text: "Tempe campus",
    url: "https://campus.asu.edu/tempe",
  },
  "POLY": {
    text: "Polytechnic campus",
    url: "https://campus.asu.edu/polytechnic",
  },

  "WEST": {
    text: "West campus",
    url: "https://campus.asu.edu/west",
  },
  "DTPHX": {
    text: "Downtown Phoenix campus",
    url: "https://campus.asu.edu/downtown-phoenix",
  },
  "EAC": {
    text: "",
    url: "https://admission.asu.edu/transfer/thegilavalley",
  },
  "CAC": {
    text: "",
    url: "https://admission.asu.edu/transfer/pinal",
  },
  "ONLNE": {
    text: "Online",
    url: "https://asuonline.asu.edu",
  },
  "CALHC": {
    text: "Lake Havasu",
    url: "https://havasu.asu.edu",
  },
  "COCHS": {
    text: "",
    url: "https://admission.asu.edu/transfer/asu-cochise",
  },
  "WASHD": {
    text: "",
    url: "https://washingtondc.asu.edu",
  },
  "YAVAP": {
    text: "",
    url: "https://admission.asu.edu/transfer/asuyavapai",
  },
  "PIMA": {
    text: "",
    url: "https://admission.asu.edu/transfer/pima",
  },
  "NEAZ": {
    text: "",
    url: "https://admission.asu.edu/transfer/asu-northeastern-arizona",
  },
  "LOSAN": {
    text: "ASU@Los Angeles",
    url: "https://california.asu.edu",
  },
  "TUCSN-undergrad": {
    text: "",
    url: "https://transfer.asu.edu/tucson",
  },
  "TUCSN-graduate": {
    text: "",
    url: "https://admission.asu.edu/contact/graduate",
  },
  "MXCTY": {
    text: "",
    url: "https://admission.asu.edu/contact/graduate",
  },
  "AWC-undergrad": {
    text: "",
    url: "https://admission.asu.edu/transfer/asu-yuma",
  },
  "AWC-graduate": {
    text: "",
    url: "https://admission.asu.edu/contact/graduate",
  },
};

/**
 *
 * @param {string} campus
 * @param {string} programm
 */
const findCampusDefinition = (campus, programm) => {
  const specialCases = ["TUCSN", "AWC"];
  const campusKey = campus.toUpperCase();
  const searchKey = specialCases.includes(campusKey)
    ? `${campusKey}-${programm}`
    : campusKey;

  return campusDefinitions[searchKey];
};

export { campusDefinitions, findCampusDefinition };
