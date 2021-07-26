/* eslint-disable react/prop-types */
/* eslint react/jsx-props-no-spreading: "off" */
// @ts-check
import React from "react";

import { ProgramDetailPage } from ".";

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
const Template = ({
  appPathFolder,
  dataSource,
  anchorMenu,
  introContent,
  hero,
  atAGlance,
  applicationRequirements,
  changeMajorRequirements,
  affordingCollege,
  flexibleDegreeOptions,
  careerOutlook,
  exampleCareers,
  globalOpportunity,
  programContactInfo,
  attendOnline,
  nextSteps,
}) => (
  <>
    <ProgramDetailPage
      appPathFolder={appPathFolder}
      dataSource={dataSource}
      anchorMenu={anchorMenu}
      introContent={introContent}
      hero={hero}
      atAGlance={atAGlance}
      applicationRequirements={applicationRequirements}
      changeMajorRequirements={changeMajorRequirements}
      affordingCollege={affordingCollege}
      flexibleDegreeOptions={flexibleDegreeOptions}
      careerOutlook={careerOutlook}
      exampleCareers={exampleCareers}
      globalOpportunity={globalOpportunity}
      programContactInfo={programContactInfo}
      attendOnline={attendOnline}
      nextSteps={nextSteps}
    />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img
          src="/examples/assets/img/request-form-information.png"
          alt=""
          style={{
            opacity: "0.7",
            mixBlendMode: "luminosity",
          }}
        />
      </div>
    </section>
  </>
);

// ====================================================================================
// TEST:  this is just an example which shows how to parse the page URL querystring
// to get the acadPlan
// ====================================================================================
const queryAcadPllan = new URL(window.location.href).searchParams.get(
  "acadPlan"
);
// ====================================================================================

/** @type {AppProps} */
const defaultArgs = {
  // appPathFolder: "/", // OPTIONAL
  dataSource: {
    // endpoint: "https://degreesearch-proxy.apps.asu.edu/degreesearch/", // OPTIONAL
    // method: "findDegreeByAcadPlan", // OPTIONAL
    // init: "false", // OPTIONAL
    acadPlan: queryAcadPllan || "BABUSGLBA",
    // acadPlan: "LSBISBIS", // this has marketText
    // acadPlan: "ESBMEMDBSE", // this does not have required courses
  },
  anchorMenu: {
    applicationRequirements: true,
    nextSteps: true,
    affordingCollege: true,
    careerOutlook: true,
    globalOpportunity: true,
    externalAnchors: [
      {
        targetIdName: "my-request-form-info-id",
        // targetIdName: "#my-request-form-info-id", this stil work but is not recommended
        text: "Request Information",
      },
    ],
  },
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
    // hideMarketText: true,
    // hideProgramDesc: true,
    // hideRequiredCourses: true,
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
      altText:
        "Random image. REPLACE with appropriate alt text for accessibility.",
    },
    // OPTIONAL
    // video: {
    //   url: "/examples/assets/video/stock-video-person-drawing.mp4",
    //   altText: "",
    //   vttUrl: "",
    // },
    // OPTIONAL, override market text
    // contents: [
    //   {
    //     text: `Can you imagine yourself hosting successful events and meetings?
    //     Then this program is right for you. Earn a degree that showcases your advanced knowledge of event programming, operations, financial management and marketing.
    //     The instructors work in all aspects of the event industry.`,
    //   },
    // ],
  },
  atAGlance: {
    //   hide: true, // OPTIONAL
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
  // applicationRequirements: {
  //   hide: true, // OPTIONAL
  // },
  // changeMajorRequirements: {
  //   hide: true, // OPTIONAL
  // },
  nextSteps: {
    cards: [
      {
        icon: ["fas", "info-circle"],
        title: "Lear more about our programs",
        content:
          "Tell us what type of student you are and we'll get you the information you need.",
        buttonLink: {
          label: "Request information",
          ariaLabel: "Request information",
          color: "maroon",
          href: "https://admission.asu.edu/contact/request-info",
        },
      },
      {
        icon: ["fas", "file-alt"],
        title: "Apply to program",
        content:
          "Arizona State University invites freshman, transfer, international, graduate and online students to apply for admission using our online application.",
        buttonLink: {
          label: "Apply now",
          ariaLabel: "Apply now",
          color: "maroon",
          href: "https://admission.asu.edu/apply",
        },
      },
      {
        icon: ["fas", "map-marker-alt"],
        title: "Visit our campus",
        content:
          "An Experience ASU visit includes a presentation on admissions, scholarships and financial aid, student housing, getting involved on campus and much more.You will also go on a student-led walking tour of campus.",
        buttonLink: {
          label: "Schedule a visit",
          ariaLabel: "Schedule a visit",
          color: "maroon",
          href: "https://visit.asu.edu/",
        },
      },
    ],
  },
  // affordingCollege: {
  //   hide: true, // OPTIONAL
  // },
  // flexibleDegreeOptions: {
  //   hide: true, // OPTIONAL
  // },
  careerOutlook: {
    image: {
      url: "https://source.unsplash.com/random/1200x750",
      altText:
        "Random image. REPLACE with appropriate alt text for accessibility.",
    },
  },
  // exampleCareers: {
  //   hide: true, // OPTIONAL
  // },
  globalOpportunity: {
    //   hide: true, // OPTIONAL
    image: {
      url: "https://source.unsplash.com/random/1200x750",
      altText:
        "Random image. REPLACE with appropriate alt text for accessibility.",
    },
  },
  attendOnline: {
    // hide: true,// OPTIONAL
    image: {
      url: "https://source.unsplash.com/random/1200x750",
      altText:
        "Random image. REPLACE with appropriate alt text for accessibility.",
    },
  },
  programContactInfo: {
    departmentUrl: "#",
    emailUrl: "#",
  },
};

/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
  introContent: null,
  hero: null,
  nextSteps: null,
  globalOpportunity: null,
  attendOnline: null,
};

/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
export const PageWithContent = Template.bind({});
PageWithContent.args = {
  ...defaultArgs,
  appPathFolder: "/", // OPTIONAL
};

/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
export const PageWithVideoAndMarketText = Template.bind({});
PageWithVideoAndMarketText.args = { ...defaultArgs };
PageWithVideoAndMarketText.args.dataSource = {
  ...PageWithVideoAndMarketText.args.dataSource,
  acadPlan: "LSBISBIS", // this has marketText
};
PageWithVideoAndMarketText.args.introContent = {
  ...PageWithVideoAndMarketText.args.introContent,
  image: undefined,
  video: {
    url: "/examples/assets/video/stock-video-person-drawing.mp4",
    title: "",
    vttUrl: "",
  },
};
