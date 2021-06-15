/* eslint-disable react/prop-types */
/* eslint react/jsx-props-no-spreading: "off" */
// @ts-check
import React from "react";

import { ProgramDetailPage } from ".";

// @ts-ignore
import stockVideo from "../../assets/video/stock-video-person-drawing.mp4";

/**
 * @typedef {import('../../core/models/program-detail-types').ProgramDetailPageProps} AppProps
 */

export default {
  component: ProgramDetailPage,
  title: "Program Detail Page",
};

/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
const Template = ({ dataSource, introContent, atAGlance, careerOutlook }) => (
  <ProgramDetailPage
    dataSource={dataSource}
    introContent={introContent}
    atAGlance={atAGlance}
    careerOutlook={careerOutlook}
  />
);

/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
export const DefaultPage = Template.bind({});

/**
 * @type {AppProps}
 */
DefaultPage.args = {
  dataSource:
    `https://degreesearch-proxy.apps.asu.edu/degreesearch/?method=findDegreeByAcadPlan` +
    `&acadPlan=LSBISBIS` +
    // `&acadPlan=ESBMEMDBSE` + // this does not have required courses
    `&fields=` +
    `marketText,DescrlongExtns,concurrentDegreeMajorMaps,onlineMajorMapURL,ChangeMajor,AsuCritTrackUrl,` +
    // at a glance
    `CollegeDescr100,` +
    `AsuOfficeLoc,CampusStringArray,campusWue,MinMathReq,MathIntensity,` +
    // Example Careers
    "careerDataAlterOnetTitle,careerDataBrightOutlook,careerDataGreen," +
    "careerDataGrowth,careerDataOnetTitle,careerDataSalary," +
    // flexible degree options
    `accelerateDegrees,accelerateDegreeMajorMaps,` +
    `concurrentDegreeMajorMaps,concurrentDegrees,` +
    // career opportunity
    `AsuCareerOpp,` +
    // program contact
    `EmailAddr,Phone,CollegeDescr100,` +
    // application requirement
    `DescrlongExtn5,gradAdditionalRequirements,TransferAdmission,` +
    `AdmissionsDegRequirements,` +
    // other
    `planCatDescr&init=false`,
  introContent: {
    breadcrumbs: [
      {
        text: "Academic programs",
        url: "#",
      },
      {
        text: "Undergraduate degrees",
        url: "#",
      },
      {
        text: "Degree title",
        isActive: true,
      },
    ],
    image: {
      url: "https://source.unsplash.com/random/1200x750",
      alt: "Random image. REPLACE with appropriate alt text for accessibility.",
    },
    // video: {
    //   url: "https://player.vimeo.com/video/110626871",
    //   altText: "Example video",
    // },
    // contents: [
    //   {
    //     text: `Can you imagine yourself hosting successful events and meetings?
    //     Then this program is right for you. Earn a degree that showcases your advanced knowledge of event programming, operations, financial management and marketing.
    //     The instructors work in all aspects of the event industry.`,
    //   },
    // ],
  },
  atAGlance: {
    offeredBy: {
      text: "Herberger Instite for Design and the Arts",
      url: "#",
    },
    locations: [
      {
        text: "Tempe campus",
        url: "#",
      },
      {
        text: "West campus",
        url: "#",
      },
      {
        text: "Online",
        url: "#",
      },
      {
        text: "ASU Local@Los Angeles",
        url: "#",
      },
    ],
    firstRequirementMathCourse: "MAT 142 - College Mathematics",
    mathIntensity: "General",
    timeCommitment: "120 credit hours(about 4 years)",
  },
  careerOutlook: {
    image: {
      url: "https://source.unsplash.com/random/1200x750",
      alt: "Random image. REPLACE with appropriate alt text for accessibility.",
    },
  },
  nextSteps: {
    cards: [
      {
        icon: "info-circle",
        title: "Lear more about our programs",
        content: "Content of the card",
        buttonLink: {
          label: "Request information",
          ariaLabel: "Request information",
          color: "maroon",
          href: "#",
        },
      },
      {
        icon: "file-alt",
        title: "Apply to program",
        content: "Content of the card",
        buttonLink: {
          label: "Apply now",
          ariaLabel: "Apply now",
          color: "maroon",
          href: "#",
        },
      },
      {
        icon: "map-marker-alt",
        title: "Visit our campus",
        content: "Content of the card",
        buttonLink: {
          label: "Schedule a visit",
          ariaLabel: "Schedule a visit",
          color: "maroon",
          href: "#",
        },
      },
    ],
  },
};
