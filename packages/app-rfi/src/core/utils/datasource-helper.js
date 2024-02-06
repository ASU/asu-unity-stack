/**
 * @typedef {object} AcadPlan
 * @prop {string} acadPlanCode
 * @prop {string[]} [departmentCodes]
 * @prop {string[]} [collegeCodes]
 * @prop {string[]} [campusCodes]
 * @prop {"UG"|"GR"} degreeType
 * @prop {string} [planType]
 * @prop {string} [emailAddr]
 * @prop {string[]} planCategories
 * @prop {[{strm: string, strmDescription: string}]} [applicationDeadlines]
 * @prop {string} title
 */

import { KEY } from "./constants";

/**
 * @param {object | object[]} data
 * @returns {AcadPlan[]} This is the result
 */
export const normalizeDegreeData = data => {
  const dataArray = Array.isArray(data) ? data : [data];
  /** @type {AcadPlan[]} */
  const result = dataArray.reduce((acc, curr) => {
    if (curr.acadPlanCode) {
      /** @type {AcadPlan} */
      const p = {
        applicationDeadlines: curr.applicationDeadlines?.map(
          ({ strm, strmDescription }) => ({ strm, strmDescription })
        ),
        acadPlanCode: curr.acadPlanCode,

        // curr.campusesOffered array || null
        campusCodes: curr.campusesOffered?.map(({ campusCode }) => campusCode),

        // curr.owners array || null
        collegeCodes: curr.owners?.map(({ collegeAcadOrg }) => collegeAcadOrg),

        // curr.acadPlanType
        planType: curr.acadPlanType,

        // curr.degreeType always "GR" || "UG"
        degreeType: curr.degreeType,

        // curr.owners array || null
        departmentCodes: curr.owners?.map(
          ({ departmentAcadOrg }) => departmentAcadOrg
        ),

        // curr.emailAddr
        emailAddr: curr.emailAddr,

        // curr.planCategories array
        planCategories:
          curr.planCategories?.map(
            ({ categoryDescription }) => categoryDescription
          ) || [],

        // curr.acadPlanDescription string
        //   title = (Degree not included)
        //   title (Certificate) = (ex Degree is a Cert)
        title: `${curr.acadPlanDescription}${
          curr.degreeDescriptionShort && curr.acadPlanType !== KEY.CER
            ? ` (${curr.degreeDescriptionShort})`
            : ``
        }`,
      };
      acc.push(p);
    }
    if (curr.code) {
      /** @type {AcadPlan} */
      const p = {
        applicationDeadlines: undefined,
        // Online wants curr.code (which contains progcode-plancode)
        acadPlanCode: curr.code,

        // always undefined
        campusCodes: undefined,

        // always undefined
        collegeCodes: undefined,

        // curr.category always "Undergraduate" || "Graduate"
        degreeType: curr.category === "Graduate" ? "GR" : "UG",

        // always undefined
        departmentCodes: undefined,

        // always undefined
        emailAddr: undefined,

        // curr.interestareas always non-empty array
        planCategories: [...curr.interestareas],

        // Already formated title (BS)
        title: curr.title,
      };
      acc.push(p);
    }
    return acc;
  }, []);

  return result.sort((a, b) => (a.title > b.title ? 1 : -1));
};
