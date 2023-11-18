// @ts-check

/**
 * Fetches details for a list of academic plan codes.
 * @param {string[]} acadPlanCodes Array of academic plan codes.
 * @returns {Promise<Object[]>} A promise that resolves to an array of academic plan details.
 */
async function fetchAcademicPlans(acadPlanCodes) {
  if (acadPlanCodes?.length) {
    return await Promise.all(
      acadPlanCodes.map(async code => {
        const response = await fetch(
          `https://api.myasuplat-dpl.asu.edu/api/codeset/acad-plan/${code}?include=academicOfficeUrl&include=acadPlanDescription`
        );
        const data = await response.json();
        return data;
      })
    );
  }
  return [];
}


export { fetchAcademicPlans };
