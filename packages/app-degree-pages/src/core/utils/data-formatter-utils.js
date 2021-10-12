// @ts-check

import { DOMAIN_URL } from "../constants";

/**
 *
 * @param {object[]} links
 */
const formatAcceleratedConcurrentLinks = links =>
  links.map(link => ({
    title: link.Descr,
    url: link.PlanUrl,
  }));

/**
 *
 * @param {object[]} careerData
 */

const formatCareerData = careerData =>
  careerData?.map(data => ({
    career: {
      text: data.careerDataAlterOnetTitle,
      url: `${DOMAIN_URL}/programs/t5/careerdetails/${data.careerDataOnetCode}`,
    },
    growth: data.careerDataGrowth,
    medianSalary: data.careerDataSalary,
    brightOutlook: !!data.careerDataBrightOutlook,
    greenOccupation: !!data.careerDataGreen,
  }));

export { formatAcceleratedConcurrentLinks, formatCareerData };
