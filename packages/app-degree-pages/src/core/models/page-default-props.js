// @ts-check

import { getCurrnetScriptPath } from "../utils/script-utils";

const scriptPath = getCurrnetScriptPath();
const detailImageFolder = `${scriptPath}assets/img/detail-page`;
const listingImageFolder = `${scriptPath}assets/img/listing-page`;

/**
 * @type {import("./program-detail-types").ProgramDetailPageProps}
 */
const detailPageDefault = {
  dataSource: undefined,
  introContent: {
    image: {
      url: `${detailImageFolder}/intro.jpg`,
      altText: "Detail Page Degree",
    },
  },
  hero: {
    image: {
      url: `${detailImageFolder}/hero.jpg`,
      altText: "Detail Page Degree",
      size: "medium",
    },
    title: {
      text: "Detail Page Degree",
      highlightColor: "gold",
    },
  },
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
  globalOpportunity: {
    image: {
      url: `${detailImageFolder}/global-opportunity.jpg`,
      altText: "Global opportunity",
    },
  },
  careerOutlook: {
    image: {
      url: `${detailImageFolder}/career-outlook.jpg`,
      altText: "Career Outlook",
    },
  },
  attendOnline: {
    image: {
      url: `${detailImageFolder}/attend-online.jpg`,
      altText: "Attend online",
    },
  },
};

/**
 * @type {import("./listing-page-types").ListingPageProps}
 */
const listingPageDefault = {
  hero: {
    image: {
      url: `${listingImageFolder}/hero.jpg`,
      altText: "Listing Page Degree",
      size: "medium",
    },
  },
  programList: undefined,
};

export { detailPageDefault, listingPageDefault };
