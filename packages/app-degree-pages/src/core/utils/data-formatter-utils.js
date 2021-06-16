// @ts-check

/**
 *
 * @param {{
 *  careerDataAlterOnetTitle: string
 *  careerDataBrightOutlook: string
 *  careerDataGreen: string
 *  careerDataGrowth: number
 *  careerDataOnetTitle: string
 *  careerDataSalary: string
 * }[]} careerData
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
