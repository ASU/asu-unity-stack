// @ts-check

import { getCurrnetScriptPath } from "../utils/script-utils";

const scriptPath = getCurrnetScriptPath();

/**
 * @type {import("./program-detail-types").ProgramDetailPageProps}
 */
const detailPageDefault = {
  dataSource: null,
  hero: {
    image: {
      // TODO: temp image. to be replaced with the new one
      url: `${scriptPath}assets/img/hero.jpg`,
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
        icon: "info-circle",
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
        icon: "file-alt",
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
        icon: "map-marker-alt",
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
    // TODO: temp image. to be replaced with the new one
    image: {
      url: `${scriptPath}/assets/img/global-opportunity.jpg`,
      altText: "Global opportunity",
    },
  },
  careerOutlook: {
    image: {
      // TODO: temp image. to be replaced with the new one
      url: `${scriptPath}/assets/img/career-outlook.jpg`,
      altText: "Career Outlook",
    },
  },
  attendOnline: {
    image: {
      // TODO: temp image. to be replaced with the new one
      url: `${scriptPath}/assets/img/attend-online.jpg`,
      altText: "Attend online",
    },
  },
};

export { detailPageDefault };
