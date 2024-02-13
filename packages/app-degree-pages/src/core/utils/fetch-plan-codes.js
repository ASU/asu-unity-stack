// @ts-check
import { ACAD_PLAN_ENDPOINT } from "../constants/web-api-constants";

/**
 * Fetches details for a list of academic plan codes.
 * @param {string[]} acadPlanCodes Array of academic plan codes.
 * @returns {Promise<Object[]>} A promise that resolves to an array of academic plan details.
 */
async function fetchAcademicPlans(acadPlanCodes) {
  if (acadPlanCodes?.length) {
    const results = await Promise.all(
      acadPlanCodes.map(async code => {
        try {
          const response = await Promise.race([
            fetch(
              `${ACAD_PLAN_ENDPOINT}${code}?include=academicOfficeUrl&include=acadPlanDescription`
            ),
            // Timeout after 5 seconds
            new Promise((_, reject) =>
              setTimeout(() => reject(new Error("timeout")), 10000)
            ),
          ]);
          const data = await response.json();
          return data;
        } catch (error) {
          console.error(
            `Error fetching academic plan for code ${code}:`,
            error
          );
          return null;
        }
      })
    );
    return results.filter(result => result !== null);
  }
  return [];
}

export { fetchAcademicPlans };
