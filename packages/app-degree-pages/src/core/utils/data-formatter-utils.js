// @ts-check

/**
 *
 * @param {object[]} links
 */
const formatAcceleratedConcurrentLinks = links =>
  links.map(link => ({
    title: link.Descr,
    url: link.PlanUrl,
  }));

export { formatAcceleratedConcurrentLinks };

/**
 *
 * @param {object[]} careerData
 */

const formatCareerData = careerData => {
  return careerData?.map(data => ({
    career: {
      text: data.careerDataAlterOnetTitle,
      url: `https://webapp4.asu.edu/programs/t5/careerdetails/`,
    },
    growth: data.careerDataGrowth,
    medianSalary: data.careerDataSalary,
    brightOutlook: !!data.careerDataBrightOutlook,
    greenOccupation: !!data.careerDataGreen,
  }));
};

export { formatCareerData };
