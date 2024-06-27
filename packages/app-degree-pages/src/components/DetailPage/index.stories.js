/* eslint-disable react/prop-types */
/* eslint react/jsx-props-no-spreading: "off" */
// @ts-check
import React from "react";

import { DetailPage } from ".";

import { imageName, imageAny } from "../../../../../shared/assets";
import { getStoryBookBaseUrl } from "../../core/utils";

/**
 * @typedef {import('../../core/types/detail-page-types').DetailPageProps} AppProps
 */

export default {
  component: DetailPage,
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
  whyChooseAsu,
}) => (
  <>
    <DetailPage
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
      whyChooseAsu={whyChooseAsu}
    />
    <section id="my-request-form-info-id" className="container mb-4">
      <div className="row">
        <h4>This is a just a Place holder</h4>
        <img
          src={imageName.requestFormInformation}
          alt=""
          style={{
            opacity: "0.7",
            mixBlendMode: "luminosity",
            maxWidth: "100%",
            width: "100%",
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
const queryAcadPlan = new URL(window.location.href).searchParams.get(
  "acadPlan"
);
// ====================================================================================

/** @type {AppProps} */
const defaultArgs = {
  appPathFolder: ".", // OPTIONAL
  dataSource: {
    // endpoint: "https://degrees.apps.asu.edu/t5/service", // OPTIONAL
    // method: "findDegreeByAcadPlan", // OPTIONAL
    // init: "false", // OPTIONAL
    acadPlan: queryAcadPlan || "TBTGMBGM", // this has major map subPlans
    // acadPlan: "FAARTHBA", // this has one on-campus and one online major map
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
      url: `examples/assets/img/ds_header_undergrad.jpg`,
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
        // this is just an example working on Storybook
        url: `${getStoryBookBaseUrl()}?path=/story/program-listing-page--default`,
      },
      {
        text: "Degree title",
        // this is just an example working on Storybook
        url: `${getStoryBookBaseUrl()}?path=/story/program-detail-page--with-content`,
        isActive: true,
      },
    ],
    image: {
      url: imageAny(),
      altText:
        "Random image. REPLACE with appropriate alt text for accessibility.",
    },
    // OPTIONAL
    // video: {
    //   url: "./examples/assets/video/stock-video-person-drawing.mp4",
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
        text: "West Valley campus",
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
    cards: {
      learnMore: {
        icon: ["fas", "info-circle"],
        title: "Learn more about our programs",
        content:
          "Tell us what type of student you are and we'll get you the information you need.",
        buttonLink: {
          label: "Request information",
          ariaLabel: "Request information",
          color: "maroon",
          href: "https://admission.asu.edu/contact/request-info",
        },
      },
      apply: {
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
      visit: {
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
    },
  },
  // affordingCollege: {
  //   hide: true, // OPTIONAL
  // },
  // flexibleDegreeOptions: {
  //   hide: true, // OPTIONAL
  // },
  careerOutlook: {
    image: {
      url: imageAny(),
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
      url: imageAny(),
      altText:
        "Random image. REPLACE with appropriate alt text for accessibility.",
    },
  },
  whyChooseAsu: {
    hide: false,
    sectionIntroText:
      "CUSTOM INTRO TEXT. ASU offers students excellent academics and unique opportunities to customize your college experience and give you an edge, including undergraduate research, internships, access to state-of-the-art facilities, and opportunities to work with world-class faculty and scientists.",
    cards: {
      faculty: {
        image: {
          url: imageAny(),
          altText:
            "Random image. REPLACE with appropriate alt text for accessibility.",
        },
        title: "World-class faculty",
        text: "The ASU faculty is at the forefront nationally in advancing research and discovery. Our faculty members inspire new ways of thinking, innovating and solving problems socially, culturally and economically in our region and in the international community.",
        button: {
          label: "Faculty excellence",
          color: "maroon",
          href: "https://www.asu.edu/academics/faculty-excellence",
        },
      },
      programs: {
        image: {
          url: imageAny(),
          altText:
            "Random image. REPLACE with appropriate alt text for accessibility.",
        },
        title: "Highly ranked programs",
        text: "A leading service ranking the excellence and innovation of the nation’s top universities, U.S. News & World Report rates many ASU programs among the top 25 in the country, including more than thirty programs ranked in the nation's top 10.",
        button: {
          label: "ASU rankings",
          color: "maroon",
          href: "https://www.asu.edu/rankings",
        },
      },
      research: {
        image: {
          url: imageAny(),
          altText:
            "Random image. REPLACE with appropriate alt text for accessibility.",
        },
        title: "Research opportunities",
        text: "Students have the opportunity to work with mentors who are experts in their fields and establish professional connections that may last a lifetime. Engage in meaningful research and gain experience that may make you more competitive in the job market.",
        button: {
          label: "Research opportunities",
          color: "maroon",
          href: "https://provost.asu.edu/uresearch",
        },
      },
      inclusion: {
        image: {
          url: imageAny(),
          altText:
            "Random image. REPLACE with appropriate alt text for accessibility.",
        },
        title: "An inclusive environment",
        text: "ASU defines our success not by whom we exclude, but by whom we include and how our students succeed. Our educational programs are designed to broaden access to a quality education and support our students’ success.",
        button: {
          label: "ASU Charter",
          color: "maroon",
          href: "https://www.asu.edu/about/charter-mission",
        },
      },
      mentors: {
        image: {
          url: imageAny(),
          altText:
            "Random image. REPLACE with appropriate alt text for accessibility.",
        },
        title: "Mentor network",
        text: "Students have access to a powerful online network of diverse mentors. Engaging with the ASU Mentor Network can help to build connections with professionals, both locally and globally, who share career advice, networks, and their own success stories.",
        button: {
          label: "ASU Mentor network",
          color: "maroon",
          href: "https://mentorship.asu.edu",
        },
      },
      honors: {
        image: {
          url: imageAny(),
          altText:
            "Random image. REPLACE with appropriate alt text for accessibility.",
        },
        title: "Global education",
        text: "ASU offers more than 300 Global Education programs in over 65 different countries. Whether you are interested in studying abroad, internships, research or service learning, there's a program for you!",
        button: {
          label: "Explore",
          color: "maroon",
          href: "https://goglobal.asu.edu",
        },
      },
    },
  },
  attendOnline: {
    // hide: true,// OPTIONAL
    image: {
      url: imageAny(),
      altText:
        "Random image. REPLACE with appropriate alt text for accessibility.",
    },
  },
  programContactInfo: {
    // hide: true, // OPTIONAL
    department: { text: "", url: "#" },
    email: { text: "", url: "#" },
  },
};

/**
 * @type {{ args: AppProps }}
 */
export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
  hero: null,
  anchorMenu: null,
  introContent: null,
  atAGlance: null,
  applicationRequirements: null,
  changeMajorRequirements: null,
  nextSteps: null,
  affordingCollege: null,
  flexibleDegreeOptions: null,
  careerOutlook: null,
  exampleCareers: null,
  globalOpportunity: null,
  attendOnline: null,
  programContactInfo: null,
  whyChooseAsu: null,
};

/**
 * @type {{ args: AppProps }}
 */
export const DefaultWithGraduateDegree = Template.bind({});
DefaultWithGraduateDegree.args = {
  ...defaultArgs,
  dataSource: {
    ...defaultArgs.dataSource,
    acadPlan: "LAAUDAUDD",
  },
};

/**
 * @type {{ args: AppProps }}
 */
export const WithContent = Template.bind({});
WithContent.args = {
  ...defaultArgs,
  dataSource: {
    ...defaultArgs.dataSource,
    acadPlan: "FAARTHBA", // online and on-campus major maps, no subPlans
  },
};

/**
 * @type {{ args: AppProps }}
 */
export const WithNotAcceptNewStudents = Template.bind({});
WithNotAcceptNewStudents.args = {
  ...defaultArgs,
  dataSource: {
    ...defaultArgs.dataSource,
    acadPlan: "BABUSCLBA",
  },
};

/**
 * @type {{ args: AppProps }}
 */
export const WithVideoAndMarketText = Template.bind({});
WithVideoAndMarketText.args = { ...defaultArgs };
WithVideoAndMarketText.args.dataSource = {
  ...WithVideoAndMarketText.args.dataSource,
  acadPlan: "LSBISBIS", // this has marketText
};
WithVideoAndMarketText.args.introContent = {
  ...WithVideoAndMarketText.args.introContent,
  image: undefined,
  video: {
    url: "./examples/assets/video/stock-video-person-drawing.mp4",
    title: "",
    vttUrl: "",
  },
};

/**
 * @type {{ args: AppProps }}
 */
export const WithYoutubeVideo = Template.bind({});
WithYoutubeVideo.args = { ...defaultArgs };
WithYoutubeVideo.args.dataSource = {
  ...WithYoutubeVideo.args.dataSource,
  acadPlan: "LSBISBIS", // this has marketText
};
WithYoutubeVideo.args.introContent = {
  ...WithYoutubeVideo.args.introContent,
  image: undefined,
  video: {
    // @ts-ignore
    type: "youtube",
    url:
      "https://www.youtube.com/watch" +
      "?v=aA2DCIDNxmw&list=PLuoS9aQM7Lzurd5ezsuCIlxyag7q_c-NQ",
  },
};

/**
 * @type {{ args: AppProps }}
 */
export const WithNoGlobalOpportunity = Template.bind({});
WithNoGlobalOpportunity.args = { ...defaultArgs };
WithNoGlobalOpportunity.args.dataSource = {
  ...WithNoGlobalOpportunity.args.dataSource,
  acadPlan: "ASAPSSCERT", // this has no global opportunity
};
