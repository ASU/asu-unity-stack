// @ts-check
/* eslint-disable no-unused-vars */
/**
 * This type set the `url` and `isActive` optional
 * @typedef {{
 *    url?: string
 *    text: string
 *    isActive?: boolean
 * }} BreadcrumbItem
 *
 * @typedef {{
 *    contents?: import("./shared-types").ContentItem[]
 *    video?: import("./shared-types").VideoItem
 *    image?: import("./shared-types").ImageItem
 *    breadcrumbs: BreadcrumbItem []
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
 *  @typedef {import("./shared-types").OverlapContentImage} CareerOutlookProps
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
 *  @typedef {import("./shared-types").OverlapContentImage} GlobalOpportunityProps
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
 *    department: import("./shared-types").LinkItem
 *    asuOfficeLoc: string
 *    email: import("./shared-types").LinkItem
 *    phone: string
 * }} ProgramContactInfoProps
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
 *  globalOpportunity?: GlobalOpportunityProps
 *  attendOnline?: AttendOnlineProps
 *  programContactInfo?: {
 *      departmentUrl: string
 *      emailUrl: string
 *  }
 * }} ProgramDetailPageProps
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 */
export const JSDOC = "jsdoc";
