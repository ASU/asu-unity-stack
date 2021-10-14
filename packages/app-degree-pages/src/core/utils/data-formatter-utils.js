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

const CAREER_DETAILS_PAGE = `https://degrees.apps.asu.edu/career-details`;
/**
 *
 * @param {object[]} careerData
 */
const formatCareerData = careerData =>
  careerData?.map(data => ({
    career: {
      text: data.careerDataAlterOnetTitle,
      url: `${CAREER_DETAILS_PAGE}/${data.careerDataOnetCode}`,
    },
    growth: data.careerDataGrowth,
    medianSalary: data.careerDataSalary,
    brightOutlook: !!data.careerDataBrightOutlook,
    greenOccupation: !!data.careerDataGreen,
  }));

export { formatAcceleratedConcurrentLinks, formatCareerData };
