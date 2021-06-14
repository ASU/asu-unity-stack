// @ts-check
/* eslint-disable no-unused-vars */
/**
 * @typedef {{
 *    contents: import("./shared-types").ContentItem[]
 *    video?: import("./shared-types").VideoItem
 * }} IntroContentProps
 */

/**
 * @typedef {{
 *    content: import("./shared-types").ContentItem
 *  }} ProgramDescriptionProps
 */

/**
 * @typedef {{
 *  buttons: import("./shared-types").LinkItem []
 *  majorMapLink: import("./shared-types").LinkItem
 *  whatIf: {
 *    text: string,
 *    changeYourMajor: import("./shared-types").LinkItem
 *  }
 * }} RequiredCoursesProps
 */

/**
 *  @typedef {{
 *   offeredBy: import("./shared-types").LinkItem
 *   locations: import("./shared-types").LinkItem[]
 *   firstRequirementMathCourse: string
 *   mathIntensity: string
 *   timeCommitment: string
 * }} AtAGlanceProps
 */

// todo: to be finished
/**
 *  @typedef {{
 *  buttons: import("./shared-types").LinkItem []
 * }} ApplicationRequirementsProps
 */

/**
 *  @typedef {{
 *   contents: import("./shared-types").ContentItem[]
 * }} ChangeMajorRequirementsProps
 */

/**
 *  @typedef {{
 *    cards: import("./shared-types").CardItem[]
 * }} NextStepsProps
 */

/**
 *  @typedef {{
 *    cards: import("./shared-types").CardItem[]
 * }} AffordingCollegeProps
 */

/**
 *  @typedef {{
 *     startContents: import("./shared-types").ContentItem[]
 *     links: import("./shared-types").LinkItem[]
 *     endContents: import("./shared-types").ContentItem[]
 * }} FlelxibleDegreeOptionItem
 *
 *  @typedef {{
 *   accelleratedOption: FlelxibleDegreeOptionItem
 *   concurrentOption: FlelxibleDegreeOptionItem
 * }} FlelxibleDegreeOptionsProps
 */

/**
 *  @typedef {{
 *    title: string
 *    contents: import("./shared-types").ContentItem[]
 *    image: import("./shared-types").AppImageProps
 * }} CareerOutlookProps
 */

/**
 *  @typedef {{
 *    contents: import("./shared-types").ContentItem[]
 *    careerTable: {
 *      career: import("./shared-types").LinkItem
 *      growth: number // percentage
 *      medianSalary: number // percentage
 *    }[]
 * }} ExampleCareersProps
 */

/**
 *  @typedef {{
 *    title: string
 *    contents: import("./shared-types").ContentItem[]
 *    cards: import("./shared-types").CardItem[]
 * }} CustomizeYourCollegeExperienceProps
 */

/**
 *  @typedef {{
 *   globalExperience: {
 *      contents: import("./shared-types").SectionContentItem[]
 *      learnMoreLink: import("./shared-types").LinkItem
 *   }
 *   plusAlliance:{
 *      contents: import("./shared-types").SectionContentItem[]
 *      learnMoreLink: import("./shared-types").LinkItem
 *   }
 * }} GlobalOpportunityProps
 */

/**
 *  @typedef {{
 *    image: import("./shared-types").AppImageProps
 *    contents: import("./shared-types").SectionContentItem[]
 *    learnAboutButton: import("./shared-types").LinkItem
 * }} AttendOnlineProps
 */

/**
 *  @typedef {{
 *    contents: import("./shared-types").SectionContentItem[]
 *    locations: import("./shared-types").LinkItem[]
 *    emails: import("./shared-types").LinkItem[]
 *    phones: import("./shared-types").LinkItem[]
 * }} ProgramContactProps
 */

/**
 *  @typedef {{
 *  acadPlan?: string
 *  dataSource: import("./listing-page-types").AppDataSource | string
 *  introContent?: IntroContentProps
 *  programDescription?: ProgramDescriptionProps
 *  atAGlance?: AtAGlanceProps
 * }} ProgramDetailPageProps
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 */
export const JSDOC = "jsdoc";
