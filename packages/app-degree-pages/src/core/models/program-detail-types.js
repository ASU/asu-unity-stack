// @ts-check

/**
 * This type set the `url` and `isActive` optional
 * @typedef {{
 *    atAGlance?: boolean,
 *    applicationRequirements?: boolean,
 *    changeMajorRequirements?: boolean,
 *    nextSteps?: boolean,
 *    affordingCollege?: boolean,
 *    flexibleDegreeOptions?: boolean,
 *    careerOutlook?: boolean,
 *    exampleCareers?: boolean,
 *    customizeYourCollegeExperience?: boolean,
 *    globalOpportunity?: boolean,
 *    attendOnline?: boolean,
 *    programContactInfo?: boolean,
 *    externalAnchors?: {
 *        targetIdName: string
 *        text: string,
 *      }[],
 * }} AnchorMenuProps
 */

/**
 * This type set the `url` and `isActive` optional
 * @typedef {{
 *    url?: string
 *    text: string
 *    isActive?: boolean
 * }} BreadcrumbItem
 *
 * @typedef {{
 *    hideMarketText?: boolean
 *    hideProgramDesc?: boolean
 *    hideRequiredCourses?: boolean
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
 *   timeCommitment?: string
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
 *    title: string
 *    url: string
 * }} FlexibleDegreeOptionItem
 *
 *  @typedef {{
 *   acceleratedLinks: FlexibleDegreeOptionItem[]
 *   concurrentLinks: FlexibleDegreeOptionItem[]
 * }} FlexibleDegreeOptionsProps
 */

/**
 *  @typedef {import("./shared-types").OverlapContentImage} CareerOutlookProps
 */

/**
 *  @typedef {{
 *    tableData: import("./shared-types").TableProps[]
 * }} ExampleCareersProps
 */

// TODO: to be implemented
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
 *    image?: import("./shared-types").ImageItem
 *    contents?: import("./shared-types").SectionContentItem[]
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
 *   hide?: boolean
 *  }} HideProp
 *
 *  @typedef {{
 *  dataSource: import("./listing-page-types").ProgramDetailDataSource | string
 *  anchorMenu?: AnchorMenuProps
 *  hero?: HideProp & import("@asu-design-system/components-core/src/components").HeroProps
 *  introContent?: IntroContentProps
 *  programDescription?: ProgramDescriptionProps
 *  requiredCoursesProps?: RequiredCoursesProps
 *  atAGlance?: HideProp & AtAGlanceProps
 *  applicationRequirements?: HideProp
 *  changeMajorRequirements?: HideProp
 *  nextSteps?: HideProp & NextStepsProps
 *  affordingCollege?: HideProp
 *  flexibleDegreeOptions?: HideProp
 *  careerOutlook?: CareerOutlookProps
 *  exampleCareers?: HideProp
 *  globalOpportunity?: HideProp & GlobalOpportunityProps
 *  attendOnline?: HideProp &  AttendOnlineProps
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
