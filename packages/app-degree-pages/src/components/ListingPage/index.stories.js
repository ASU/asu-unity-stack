/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

import { ListingPage } from ".";

/**
 * @typedef {import('../../core/models/listing-page-types').ListingPageProps } AppProps
 */

export default {
  component: ListingPage,
  title: "Listing Page",
};

/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
const Template = ({ applyNowUrl, hero, introContent, programList }) => (
  <ListingPage
    applyNowUrl={applyNowUrl}
    hero={hero}
    introContent={introContent}
    programList={programList}
  />
);

/**
 * @type {{ args: AppProps}}
 */
export const UndergraduateDegreePage = Template.bind({});

UndergraduateDegreePage.args = {
  applyNowUrl: "https://webapp4.asu.edu/uga_admissionsapp/?partner=CORP",
  hero: {
    image: {
      url:
        "https://webapp4.asu.edu/programs/resources/images/ds_header_undergrad.jpg",
      altText: "Undergraduate Degrees",
      size: "small",
    },
    title: {
      text: "Undergraduate Degrees",
      highlightColor: "gold",
    },
    contents: [
      {
        text: "Undergraduate Degrees",
      },
    ],
  },
  introContent: {
    type: "text",
    title: {
      text: "This is introductory marketing copy. Lorem ipsum dolor sit amet",
      // component: "h2", default h2
    },
    contents: [
      {
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`,
      },
    ],
  },
  programList: {
    dataSource:
      "https://degreesearch-proxy.apps.asu.edu/degreesearch/" +
      "?init=false" +
      "&method=findAllDegrees" +
      "&fields=Descr100,Institution,AcadPlan," +
      "Degree,DegreeDescr,DegreeDescrlong,concurrentDegreeMajorMaps,managedOnlineCampus,onlineMajorMapURL," +
      "AsuCritTrackUrl,AsuOfficeLoc,CampusStringArray,AcadPlan,accelerateDegrees,concurrentDegrees," +
      "CollegeDescr100,CollegeUrl,EmailAddr,DescrlongExtns,AsuProgramFee," +
      "AsuLangReqFlag,asuAcadpLrfText,asuMathReqFlag,additionalMathReqCourse,asuAcadpMrfText,MathIntensity," +
      "&init=false" +
      "&program=undergrad" +
      "&cert=false",
  },
};

/**
 * @type {{ args: AppProps}}
 */
export const AreaStudyDegreePage1 = Template.bind({});

/**
 * @type {{ args: AppProps }}
 */
AreaStudyDegreePage1.args = {
  applyNowUrl: "https://webapp4.asu.edu/uga_admissionsapp/?partner=CORP",
  hero: {
    image: {
      url:
        "https://webapp4.asu.edu/programs/resources/images/ds_header_undergrad.jpg",
      // @ts-ignore
      size: "small",
    },
    contents: [
      {
        text: "Area of study degrees",
      },
    ],
  },
  introContent: {
    // @ts-ignore
    type: "text-photo-grid",
    title: {
      text: "This is introductory marketing copy. Lorem ipsum dolor sit amet",
      // @ts-ignore
      component: "h3",
    },
    contents: [
      {
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`,
      },
    ],
    photoGrid: {
      images: [
        {
          url: "https://source.unsplash.com/random/800x400?a=1",
        },
        {
          url: "https://source.unsplash.com/random/800x400?a=1",
        },
        {
          url: "https://source.unsplash.com/random/800x400?a=1",
        },
        {
          url: "https://source.unsplash.com/random/800x400?a=1",
        },
      ],
    },
  },
  programList: {
    dataSource: "/api/mocks/degree-search",
  },
};

/**
 * @type {{ args: AppProps}}
 */
export const AreaStudyDegreePage2 = Template.bind({});

/**
 * @type {{ args: AppProps }}
 */
AreaStudyDegreePage2.args = {
  applyNowUrl: "https://webapp4.asu.edu/uga_admissionsapp/?partner=CORP",
  hero: {
    image: {
      url:
        "https://webapp4.asu.edu/programs/resources/images/ds_header_undergrad.jpg",
      // @ts-ignore
      size: "small",
    },
    contents: [
      {
        text: "Area of study degrees",
      },
    ],
  },
  introContent: {
    type: "text-media",
    title: {
      text: "This is introductory marketing copy. Lorem ipsum dolor sit amet",
      // @ts-ignore
      component: "h3",
    },
    contents: [
      {
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`,
      },
    ],
    image: {
      url: "https://source.unsplash.com/random/800x400?a=1",
    },
  },
  programList: {
    dataSource: "/api/mocks/degree-search",
  },
};

/**
 * @type {{ args: AppProps}}
 */
export const AreaStudyDegreePage2B = Template.bind({});

/**
 * @type {{ args: AppProps }}
 */
AreaStudyDegreePage2B.args = { ...AreaStudyDegreePage2.args };
AreaStudyDegreePage2B.args.introContent = {
  ...AreaStudyDegreePage2.args.introContent,
  image: undefined,
  video: {
    url: "/assets/video/stock-video-person-drawing.mp4",
    altText: "",
    vttUrl: "",
  },
};
/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
export const AreaStudyDegreePage3 = Template.bind({});

/**
 * @type {{ args: AppProps }}
 */
AreaStudyDegreePage3.args = {
  applyNowUrl: "https://webapp4.asu.edu/uga_admissionsapp/?partner=CORP",
  hero: {
    image: {
      url:
        "https://webapp4.asu.edu/programs/resources/images/ds_header_undergrad.jpg",
      size: "small",
    },
    contents: [
      {
        text: "[Subdomain] degrees in [area of study]",
      },
    ],
  },
  introContent: {
    type: "text-image-overlay",
    header: {
      text: "Intro Content Image Overlay",
      component: "h2",
    },
    title: {
      text: "This is the contents that goes in the box",
      component: "h3",
    },
    contents: [
      {
        text: `Instagram tour operator travel sailing flying package.
         Territory New York City group discount active lifestyle creditcard
         insurance wellness kayak guide overnight rural lonely planet.`,
      },
      {
        text: `Train luxury Paris recommendations nature France sight seeing.
         Flexibility Amsterdam maps.
         Pacific lonely planet private jet national insurance taxi tourist attractions.
         Budget Pacific guide caravan Barcelona place to stay maps gateway diary tour operator money`,
      },
    ],
    image: {
      url: "https://source.unsplash.com/random/800x600?a=1",
    },
  },
  programList: {
    dataSource: "/api/mocks/degree-search",
  },
};
