// @ts-check
/* eslint-disable no-unused-vars */
/**
 * @typedef {{
 *    contents: import("./shared-types").ContentItem[]
 *    video?: import("./shared-types").VideoItem
 *    image?: import("./shared-types").ImageItem
 *    breadcrumbs: import("./shared-types").LinkItem []
 * }} IntroContentProps
 */

/**
 * @typedef {{
 *    content: import("./shared-types").ContentItem
 *  }} ProgramDescriptionProps
 */

/**
 * @typedef {{
 *  concurrentDegreeMajorMaps: string
 *  onlineMajorMapURL: string
 *  majorMapOnCampusArchiveURL: string
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

/**
 * @typedef {{
 *  accordionCards: import("./shared-types").AccordionCard []
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
 *    contents: import("./shared-types").ContentItem[]
 *    image: import("./shared-types").ImageItem
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
 *    BrightOutlook: import("./shared-types").LinkItem
 *    greenOccupation:  import("./shared-types").LinkItem
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
 *    image: import("./shared-types").ImageItem
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
 *  requiredCoursesProps?: RequiredCoursesProps
 *  atAGlance?: AtAGlanceProps
 *  applicationRequirements?: ApplicationRequirementsProps
 *  changeMajorRequirements?: ChangeMajorRequirementsProps
 *  nextSteps?: NextStepsProps
 *  affordingCollege?: AffordingCollegeProps
 *  flelxibleDegreeOptions?: FlelxibleDegreeOptionsProps
 *  careerOutlook?: CareerOutlookProps
 *  exampleCareersProps?: ExampleCareersProps
 *  customizeYourCollegeExperience?: CustomizeYourCollegeExperienceProps
 *  clobalOpportunity?: GlobalOpportunityProps
 *  attendOnline?: AttendOnlineProps
 *  programContact?: ProgramContactProps
 * }} ProgramDetailPageProps
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 */
export const JSDOC = "jsdoc";
