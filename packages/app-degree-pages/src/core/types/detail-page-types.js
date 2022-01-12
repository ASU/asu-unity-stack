// @ts-check

/**
 * @typedef {import("@asu-design-system/components-core").HeroProps} HeroProps
 */

/**
 * @typedef {import("@asu-design-system/components-core").ImageProps} ImageItem
 */

/**
 * @typedef {import("@asu-design-system/components-core").VideoProps} VideoItem
 */

/**
 * @typedef {import("@asu-design-system/components-core").AnchorMenuItem} AnchorMenuItem
 */

/**
 * @typedef {import("./shared-types").ContentItem} ContentItem
 */

/**
 * @typedef {import("./shared-types").LinkItem} LinkItem
 */

/**
 * @typedef {import("./shared-types").ButtonProps} ButtonProps
 */

/**
 * @typedef {import("./shared-types").CardItem} CardItem
 */

/**
 *  @typedef {import("./shared-types").OverlapContentImage} CareerOutlookProps
 */

/**
 *  @typedef {import("./shared-types").OverlapContentImage} GlobalOpportunityProps
 */

/**
 *  @typedef {import("./shared-types").TableProps} TableProps
 */

/**
 *  @typedef {import("./shared-types").SectionContentItem} SectionContentItem
 */

/**
 * This type set the `url` and `isActive` optional
 * @typedef  {Object} AnchorMenuProps
 * @property {boolean} [atAGlance]
 * @property {boolean} [applicationRequirements]
 * @property {boolean} [changeMajorRequirements]
 * @property {boolean} [nextSteps]
 * @property {boolean} [affordingCollege]
 * @property {boolean} [flexibleDegreeOptions]
 * @property {boolean} [careerOutlook]
 * @property {boolean} [exampleCareers]
 * @property {boolean} [customizeYourCollegeExperience]
 * @property {boolean} [globalOpportunity]
 * @property {boolean} [attendOnline]
 * @property {boolean} [programContactInfo]
 * @property {Array.<AnchorMenuItem>} [externalAnchors]
 */

/**
 * @typedef {Object} BreadcrumbItem
 * @property {string}  [url]
 * @property {string}  text
 * @property {boolean} [isActive]
 */

/**
 * @typedef {Object} IntroContentProps
 * @property {boolean} [hideMarketText]
 * @property {boolean} [hideProgramDesc]
 * @property {boolean} [hideRequiredCourses]
 * @property {Array.<ContentItem>} [contents]
 * @property {VideoItem} [video]
 * @property {ImageItem} [image]
 * @property {Array.<BreadcrumbItem>} [breadcrumbs]
 */

/**
 * @typedef {Object} ProgramDescriptionProps
 * @property {ContentItem} content
 */

/**
 * @typedef {Object} RequiredCoursesProps
 * @property {string} concurrentDegreeMajorMaps
 * @property {string} onlineMajorMapURL
 * @property {string} majorMapOnCampusArchiveURL
 */

/**
 * @typedef {Object} AtAGlanceProps
 * @property {boolean} [hide]
 * @property {LinkItem} [offeredBy]
 * @property {Array.<LinkItem>} [locations]
 * @property {string} [firstRequirementMathCourse]
 * @property {string} [mathIntensity]
 * @property {string} [timeCommitment]
 */

/**
 * @typedef {Object} ApplicationRequirementsProps
 * @property {string} graduateRequirements
 * @property {string} additionalRequirements
 * @property {string} transferRequirements
 */

/**
 * @typedef {Object} ChangeMajorRequirementsProps
 * @property {Array.<ContentItem>} [contents]
 */

/**
 * @typedef {Object} NextStepsCardProp
 * @property {string[]} [icon]
 * @property {string} [title]
 * @property {string} [content]
 * @property {ButtonProps} [buttonLink]
 */

/**
 * @typedef {Object} NextStepCardsProps
 * @property {NextStepsCardProp} [learnMore]
 * @property {NextStepsCardProp} [apply]
 * @property {NextStepsCardProp} [visit]
 */

/**
 * @typedef {Object} NextStepsProps
 * @property {boolean} [hide]
 * @property {NextStepCardsProps} [cards]
 * @property {NextStepCardsProps} [defaultCards]
 */

/**
 * @typedef {Object} FlexibleDegreeOptionItem
 * @property {string} title
 * @property {string} url
 */

/**
 * @typedef {Object} FlexibleDegreeOptionsProps
 * @property {Array.<FlexibleDegreeOptionItem>} acceleratedLinks
 * @property {Array.<FlexibleDegreeOptionItem>} concurrentLinks
 */

/**
 * @typedef {Object} ExampleCareersProps
 * @property {Array.<TableProps>} tableData
 */

/**
 * @typedef {Object} AttendOnlineProps
 * @property {boolean} [hide]
 * @property {ImageItem} [image]
 * @property {Array.<SectionContentItem>} [contents]
 */

/**
 * @typedef {Object} ProgramContactInfoProps
 * @property {boolean} [hide]
 * @property {LinkItem} [department]
 * @property {string} [asuOfficeLoc]
 * @property {LinkItem} [email]
 * @property {string} [phone]
 */

/**
 * @typedef {Object} HideProp
 * @property {boolean} [hide]
 */

/**
 * @typedef {Object} ProgramDetailDataSource
 * @property {string} [endpoint]
 * @property {string} [method]
 * @property {"true" | "false"} [init]
 * @property {"true" | "false"} [cert]
 * @property {string} [fields]
 * @property {string} acadPlan
 */

/**
 * @typedef {Object} WhyChooseAsuCardProp
 * @property {ImageItem} [image]
 * @property {string} [title]
 * @property {string} [text]
 * @property {ButtonProps} [button]
 */

/**
 * @typedef {Object} WhyChooseAsuCardsProps
 * @property {WhyChooseAsuCardProp} [faculty]
 * @property {WhyChooseAsuCardProp} [programs]
 * @property {WhyChooseAsuCardProp} [research]
 * @property {WhyChooseAsuCardProp} [inclusion]
 * @property {WhyChooseAsuCardProp} [mentors]
 * @property {WhyChooseAsuCardProp} [honors]
 */

/**
 * @typedef {Object} WhyChooseAsuProps
 * @property {boolean} [hide]
 * @property {string} [sectionIntroText]
 * @property {WhyChooseAsuCardsProps} [cards]
 * @property {WhyChooseAsuCardsProps} [defaultCards]
 */

/**
 *
 * @typedef {Object} DetailPageProps
 * @property { string } [appPathFolder]
 * @property { ProgramDetailDataSource } dataSource
 * @property { AnchorMenuProps}[anchorMenu]
 * @property { HeroProps}[hero]
 * @property { IntroContentProps}[introContent]
 * @property { ProgramDescriptionProps}[programDescription]
 * @property { RequiredCoursesProps}[requiredCoursesProps]
 * @property { AtAGlanceProps}[atAGlance]
 * @property { HideProp}[applicationRequirements]
 * @property { HideProp}[changeMajorRequirements]
 * @property { NextStepsProps}[nextSteps]
 * @property { HideProp}[affordingCollege]
 * @property { HideProp}[flexibleDegreeOptions]
 * @property { CareerOutlookProps}[careerOutlook]
 * @property { HideProp}[exampleCareers]
 * @property { GlobalOpportunityProps}[globalOpportunity]
 * @property { AttendOnlineProps}[attendOnline]
 * @property { ProgramContactInfoProps }[programContactInfo]
 * @property { WhyChooseAsuProps }[whyChooseAsu]
 */

/**
 * This helps VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 *  @ignore
 */
export const JSDOC = "jsdoc";
