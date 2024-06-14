// @ts-check

/**
 * @typedef {Object} RFIProps
 * @property {string} [appPathFolder]
 * @property {"rfiVariant1"|"rfiVariant2"} [variant]
 * @property {string} [campus]
 * @property {string} [actualCampus]
 * @property {string} [college]
 * @property {string} [department]
 * @property {string} [studentType]
 * @property {string} [areaOfInterest]
 * @property {boolean} [areaOfInterestOptional]
 * @property {string} [programOfInterest]
 * @property {boolean} [programOfInterestOptional]
 * @property {boolean} [isCertMinor]
 * @property {string} [country]
 * @property {string} [stateProvince]
 * @property {string} [successMsg]
 * @property {boolean} [test]
 * @property {string} [dataSourceDegreeSearch]
 * @property {string} [dataSourceAsuOnline]
 * @property {string} [dataSourceCountriesStates]
 * @property {string} submissionUrl
 */

/**
 * @typedef {Object} RFIContext
 * @property {object} [rfiProps]
 * @property {import("formik").FormikContextType<any>} [formik]
 * @property {function} [goBack]
 * @property {import("typescript").JsxElement} [step]
 * @property {string} [appPathFolder]
 * @property {import("../utils/datasource-helper").AcadPlan} degreeData
 * @property {import("../utils/datasource-helper").AcadPlan[]} degreeDataList
 * @property {string} [campusType] // campus prop renamed for clarity
 * @property {string} [filterByCampusCode] // actualCampus prop renamed for clarity
 * @property {string} [filterByCollegeCode]  // college prop renamed for clarity
 * @property {string} [filterByDepartmentCode]  // department prop renamed for clarity
 * @property {string} [studentType]
 * @property {string} [areaOfInterest]
 * @property {boolean} [areaOfInterestOptional]
 * @property {string} [programOfInterest]
 * @property {boolean} [programOfInterestOptional]
 * @property {boolean} [isCertMinor]
 * @property {string} [country]
 * @property {string} [stateProvince]
 * @property {string} [successMsg]
 * @property {boolean} [test]
 * @property {string} [dataSourceDegreeSearch]
 * @property {string} [dataSourceAsuOnline]
 * @property {string} [dataSourceCountriesStates]
 * @property {string} [submissionUrl]
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 *  @ignore
 */
export const JSDOC = "jsdoc";
