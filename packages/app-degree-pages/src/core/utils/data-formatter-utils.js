// @ts-check

import { DOMAIN_URL } from "../constants";

/**
 *
 * @param {object[]} links
 */
const formatAcceleratedConcurrentLinks = links => {
  return links
    .map(link => ({
      title: link.acadPlanDescription,
      url: link.academicOfficeUrl,
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
};

/**
 *
 * @param {object[]} careerData
 */

const formatCareerData = careerData =>
  careerData?.map(data => ({
    career: {
      text: data.alternateTitle,
      url: `${DOMAIN_URL}/career-details/${data.onetCode}`,
    },
    growth: data.growth,
    medianSalary: data.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }),
    brightOutlook: !!data.brightOutlook,
    greenOccupation: !!data.green,
  }));

export { formatAcceleratedConcurrentLinks, formatCareerData };
