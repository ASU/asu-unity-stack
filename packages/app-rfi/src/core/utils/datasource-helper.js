/**
 * @typedef {object} AcadPlan
 * @prop {string} acadPlanKey
 * @prop {string} acadCode
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

        // plan Key is how RFI handles selecting the program
        acadPlanKey: curr.acadPlanCode,

        // EX: PROGRAM-PLAN
        acadCode: `${curr.acadProgramCode}-${curr.acadPlanCode}`,

        // EX: PLAN
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

        // curr.acadPlanMarketingDescription string
        title: curr.acadPlanMarketingDescription,
      };
      acc.push(p);
    }
    if (curr.code) {
      /** @type {AcadPlan} */
      const p = {
        applicationDeadlines: undefined,

        // plan Key is how RFI handles selecting the program
        acadPlanKey: curr.code,

        // EX: PROGRAM-PLAN most of the time
        // sometimes PROGRAM-PLAN--concentration (LWLW-LWLGSMLEGS--CONFLICTLAW)
        acadCode: curr.code,

        // EX: PLAN
        acadPlanCode: curr.plancode,

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
