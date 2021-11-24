// @ts-check
import PropTypes from "prop-types";

const accordionCardPropShape = PropTypes.shape({
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  content: PropTypes.shape({
    icon: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string,
  }),
});

const buttonPropShape = PropTypes.shape({
  ariaLabel: PropTypes.string,
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  icon: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["default", "small", "xsmall"]),
});

const imagePropType = {
  url: PropTypes.string,
  altText: PropTypes.string,
  cssClass: PropTypes.arrayOf(PropTypes.string),
};

const contentPropType = {
  text: PropTypes.string,
  cssClass: PropTypes.arrayOf(PropTypes.string),
};

const videoPropType = {
  type: PropTypes.oneOf(["video", "youtube"]),
  url: PropTypes.string,
  altText: PropTypes.string,
  vttUrl: PropTypes.string,
  title: PropTypes.string,
};

const linkPropType = {
  url: PropTypes.string,
  text: PropTypes.string,
  isActive: PropTypes.bool,
};

const imagePropShape = PropTypes.shape({
  ...imagePropType,
});

const contentPropShape = PropTypes.shape({
  ...contentPropType,
});

const videoPropShape = PropTypes.shape({
  ...videoPropType,
});

const linkPropShape = PropTypes.shape({
  ...linkPropType,
});

const dataSourcePropShape = PropTypes.shape({
  id: PropTypes.string,
  sourceType: PropTypes.oneOf(["api", "shared-data-source", "static-json"]), // default `api`
  sharedDataSourceId: PropTypes.string, // only if `dataSourceType == "shared-data-source"``
  data: PropTypes.arrayOf(PropTypes.object), // only if `dataSourceType == "static-json"``
  apiUrl: PropTypes.string, // only if `dataSourceType == "api"``
});

const glanceItemPropShape = PropTypes.shape({
  text: PropTypes.string,
  url: PropTypes.string,
});

const cardPropShape = PropTypes.shape({
  icon: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  content: PropTypes.string,
  buttonLink: buttonPropShape,
});

const flexibleDegreeOptionsLinks = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  })
);

const exampleCareersTableDataPropShape = PropTypes.shape({
  career: linkPropShape,
  growth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  medianSalary: PropTypes.string,
  brightOutlook: PropTypes.bool,
  greenOccupation: PropTypes.bool,
});

const columSettingsPropType = {
  hideCollegeSchool: PropTypes.bool,
  defaultView: PropTypes.oneOf(["list-view", "grid-view"]),
  cardDefaultImage: imagePropShape,
};

const columSettingsPropShape = PropTypes.shape({
  ...columSettingsPropType,
});

const anchorMenuPropType = {
  atAGlance: PropTypes.bool,
  applicationRequirements: PropTypes.bool,
  changeMajorRequirements: PropTypes.bool,
  nextSteps: PropTypes.bool,
  affordingCollege: PropTypes.bool,
  flexibleDegreeOptions: PropTypes.bool,
  careerOutlook: PropTypes.bool,
  exampleCareers: PropTypes.bool,
  customizeYourCollegeExperience: PropTypes.bool,
  globalOpportunity: PropTypes.bool,
  attendOnline: PropTypes.bool,
  programContactInfo: PropTypes.bool,
  externalAnchors: PropTypes.arrayOf(
    PropTypes.shape({
      targetIdName: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

const whyChooseAsuCardShape = PropTypes.shape({
  image: imagePropShape,
  title: PropTypes.string,
  text: PropTypes.string,
  button: buttonPropShape,
});

const whyChooseAsuCardsShape = PropTypes.shape({
  faculty: whyChooseAsuCardShape,
  programs: whyChooseAsuCardShape,
  research: whyChooseAsuCardShape,
  inclusion: whyChooseAsuCardShape,
  mentors: whyChooseAsuCardShape,
  honors: whyChooseAsuCardShape,
});

const whyChooseAsuShape = {
  hide: PropTypes.bool,
  sectionIntroText: PropTypes.string,
  cards: whyChooseAsuCardsShape,
  defaultCards: whyChooseAsuCardsShape,
};

const anchorMenuPropShape = PropTypes.shape({
  ...anchorMenuPropType,
});

const optionItemShape = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.string,
});

const filterValueShape = PropTypes.shape({
  locations: PropTypes.arrayOf(optionItemShape),
  asuLocals: PropTypes.arrayOf(optionItemShape),
  acceleratedConcurrent: optionItemShape,
});

export {
  anchorMenuPropType,
  anchorMenuPropShape,
  accordionCardPropShape,
  buttonPropShape,
  linkPropShape,
  videoPropShape,
  videoPropType,
  imagePropShape,
  contentPropShape,
  imagePropType,
  contentPropType,
  dataSourcePropShape,
  glanceItemPropShape,
  cardPropShape,
  flexibleDegreeOptionsLinks,
  exampleCareersTableDataPropShape,
  columSettingsPropShape,
  columSettingsPropType,
  filterValueShape,
  optionItemShape,
  whyChooseAsuShape,
};
