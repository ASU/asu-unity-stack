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
const Template = ({
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
}) => (
  <ListingPage
    actionUrls={actionUrls}
    hero={hero}
    introContent={introContent}
    programList={programList}
    hasSearchBar={hasSearchBar}
    hasFilters={hasFilters}
  />
);

/** @type {import("../../core/models/listing-page-types").ActionUrlProps} */
const actionUrls = {
  applyNowUrl: "https://webapp4.asu.edu/uga_admissionsapp/?partner=CORP",
  majorInfoUrl: `/?path=/story/program-detail-page--default-page&acadPlan={ACAD_PLAN_CODE}`,
  // majorInfoUrl:
  //   `https://webapp4.asu.edu/programs/t5/majorinfo/` +
  //   `{INSTITUTION_CODE}/{ACAD_PLAN_CODE}/undergrad/false`,
};

/** @type {import("../../core/models/listing-page-types").ProgramListDataSource} */
const dataSource = {
  // OPTIONAL - endpoint: "https://degreesearch-proxy.apps.asu.edu/degreesearch/",
  // OPTIONAL - method: "findAllDegrees",
  // OPTIONAL - init: "false", // "true" | "false"
  program: "undergrad", // graduate | undergrad
  cert: "false", // "true" | "false"
  // OPTIONAL -CollegeAcadOrg: null, //  example values: CLW, CTB, CTE
  // OPTIONAL -DepartmentCode: null, //  example values: CMANAGE, CHUMARTCLT, CHL
};

/**
 * @type {{ args: AppProps }}
 */
export const UndergraduateDegreePage = Template.bind({});

UndergraduateDegreePage.args = {
  actionUrls,
  hero: null,
  // hero: {
  //   image: {
  //     url: "https://webapp4.asu.edu/programs/resources/images/ds_header_undergrad.jpg",
  //     altText: "Undergraduate Degrees",
  //     size: "medium",
  //   },
  //   title: {
  //     text: "Undergraduate Degrees",
  //     highlightColor: "gold",
  //   },
  // },
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
  // hasFilters: false, // OPTIONAL
  // hasSearchBar: false, // OPTIONAL
  programList: {
    dataSource,
    settings: {
      hideCollegeSchool: true,
    },
  },
};

/**
 * @type {{ args: AppProps }}
 */
export const AreaStudyDegreePage1 = Template.bind({});

AreaStudyDegreePage1.args = {
  actionUrls,
  hero: {
    image: {
      url: "https://webapp4.asu.edu/programs/resources/images/ds_header_undergrad.jpg",
      size: "medium",
    },
    title: {
      text: "Area of study degrees",
      highlightColor: "gold",
    },
    // contents: [
    //   {
    //     text: "Area of study degrees",
    //   },
    // ],
  },
  introContent: {
    type: "text-photo-grid",
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
  hasFilters: false,
  hasSearchBar: false,
  programList: {
    dataSource: "/api/mocks/degree-search",
  },
};

/**
 * @type {{ args: AppProps}}
 */
export const AreaStudyDegreePage2 = Template.bind({});

AreaStudyDegreePage2.args = {
  actionUrls,
  hero: {
    image: {
      url: "https://webapp4.asu.edu/programs/resources/images/ds_header_undergrad.jpg",
      size: "medium",
    },
    title: {
      text: "Area of study degrees",
      highlightColor: "gold",
    },
    // contents: [
    //   {
    //     text: "Area of study degrees",
    //   },
    // ],
  },
  introContent: {
    type: "text-media",
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
  actionUrls,
  hero: {
    image: {
      url: "https://webapp4.asu.edu/programs/resources/images/ds_header_undergrad.jpg",
      size: "medium",
    },
    title: {
      text: "[Subdomain] degrees in [area of study]",
      highlightColor: "gold",
    },
    // contents: [
    //   {
    //     text: "[Subdomain] degrees in [area of study]",
    //   },
    // ],
  },
  introContent: {
    type: "text-image-overlay",
    header: {
      text: "Intro Content Image Overlay",
      // component: "h2", default h2
    },
    title: {
      text: "This is the contents that goes in the box",
      // component: "h2", default h2
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
