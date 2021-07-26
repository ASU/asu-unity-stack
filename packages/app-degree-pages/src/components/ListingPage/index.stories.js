/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

import { ListingPage } from "./index";

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
  appPathFolder,
  actionUrls,
  hero,
  introContent,
  programList,
  hasFilters,
  hasSearchBar,
}) => (
  <ListingPage
    appPathFolder={appPathFolder}
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
  majorInfoUrl: `?path=/story/program-detail-page--default&acadPlan={ACAD_PLAN_CODE}`,
  // majorInfoUrl:
  //   `https://webapp4.asu.edu/programs/t5/majorinfo/` +
  //   `{INSTITUTION_CODE}/{ACAD_PLAN_CODE}/undergrad/false`,
};

/** @type {import("../../core/models/listing-page-types").ProgramListDataSource} */
const dataSource = {
  // OPTIONAL - endpoint: "https://degreesearch-proxy.apps.asu.edu/degreesearch/",
  // another example: dataSource: "/api/mocks/degree-search",

  // method: "findAllDegrees", // OPTIONAL
  // init: "false",  // OPTIONAL "true" | "false"
  program: "graduate", // graduate | undergrad
  cert: "true", // "true" | "false"
  // collegeAcadOrg: "CGF", // OPTIONAL example values: CLW, CTB, CTE
  // departmentCode: "CSFIS", // OPTIONAL example values: CMANAGE, CHUMARTCLT, CHL
};

/**
 * @type {{ args: AppProps }}
 */
export const Default = Template.bind({});

Default.args = {
  appPathFolder: ".", // OPTIONAL
  actionUrls,
  hero: null,
  introContent: {
    type: "text",
    title: {
      text: "This is introductory marketing copy. Lorem ipsum dolor sit amet",
    },
    contents: [
      {
        text: `<p>Lorem, <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     </p>`,
      },
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
 * @type {{ args: AppProps}}
 */
export const DefaultWithCollegeAcadOrgAndDepartmentCode = Template.bind({});
DefaultWithCollegeAcadOrgAndDepartmentCode.args = {
  ...Default.args,
};
DefaultWithCollegeAcadOrgAndDepartmentCode.args.programList = {
  ...Default.args.programList,
  dataSource: {
    // @ts-ignore
    ...Default.args.programList.dataSource,
    collegeAcadOrg: "CGF",
    departmentCode: "CSFIS",
  },
};

/**
 * @type {{ args: AppProps }}
 */
export const PageWithIntroText = Template.bind({});

PageWithIntroText.args = {
  actionUrls,
  hero: {
    // hide: true,// OPTIONAL
    image: {
      url:
        "https://webapp4.asu.edu/programs/resources/images/" +
        "ds_header_undergrad.jpg",
      altText: "Undergraduate Degrees",
      size: "medium",
    },
    title: {
      text: "Undergraduate Degrees",
      highlightColor: "gold",
    },
  },
  introContent: {
    type: "text",
    title: {
      text: "This is introductory marketing copy. Lorem ipsum dolor sit amet",
    },
    contents: [
      {
        text: `<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
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
export const PageWithIntroTextPhotoGrid = Template.bind({});

PageWithIntroTextPhotoGrid.args = {
  actionUrls,
  hero: {
    // hide: true,// OPTIONAL
    image: {
      url:
        "https://webapp4.asu.edu/programs/resources/images/" +
        "ds_header_undergrad.jpg",
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
        text: `<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
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
    dataSource,
  },
};

/**
 * @type {{ args: AppProps}}
 */
export const PageWithIntroTextMediaImage = Template.bind({});

PageWithIntroTextMediaImage.args = {
  actionUrls,
  hero: {
    // hide: true,// OPTIONAL
    image: {
      url:
        "https://webapp4.asu.edu/programs/resources/images/" +
        "ds_header_undergrad.jpg",
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
        text: `<b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?`,
      },
    ],
    image: {
      url: "https://source.unsplash.com/random/800x400?a=1",
    },
  },
  programList: {
    dataSource,
  },
};

/**
 * @type {{ args: AppProps}}
 */
export const PageWithIntroTextMediaVideo = Template.bind({});

PageWithIntroTextMediaVideo.args = { ...PageWithIntroTextMediaImage.args };
PageWithIntroTextMediaVideo.args.introContent = {
  ...PageWithIntroTextMediaImage.args.introContent,
  image: undefined,
  video: {
    url: "/examples/assets/video/stock-video-person-drawing.mp4",
    title: "",
    vttUrl: "",
  },
};
/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
export const PageWithIntroTextImageOverlay = Template.bind({});

/**
 * @type {{ args: AppProps }}
 */
PageWithIntroTextImageOverlay.args = {
  actionUrls,
  hero: {
    // hide: true,// OPTIONAL
    image: {
      url:
        "https://webapp4.asu.edu/programs/resources/images/" +
        "ds_header_undergrad.jpg",
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
        text: `<b>Instagram</b> tour operator travel sailing flying package.
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
    dataSource,
  },
};
