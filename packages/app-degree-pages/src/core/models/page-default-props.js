// @ts-check

import { getCurrentScriptPath } from "../utils/script-utils";

const currentScriptPath = getCurrentScriptPath();

/**
 *
 * @param {string} appPathFolder
 * @returns {{
 *    listingPageDefault: import("./listing-page-types").ListingPageProps
 *    detailPageDefault: import("./program-detail-types").ProgramDetailPageProps
 * }}
 */
const resolveDefaultProps = appPathFolder => {
  const scriptPath = appPathFolder || currentScriptPath;
  const detailImageFolder = `${scriptPath}/assets/img/detail-page`;
  const listingImageFolder = `${scriptPath}/assets/img/listing-page`;

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
        color: "black",
        highlightColor: "gold",
        maxWidth: "100%",
      },
    },
    nextSteps: {
      cards: [
        {
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
    actionUrls: {
      applyNowUrl: "https://admission.asu.edu/apply",
    },
    hero: {
      image: {
        url: `${listingImageFolder}/hero.jpg`,
        altText: "Listing Page Degree",
        size: "medium",
      },
    },
    programList: undefined,
  };

  return {
    detailPageDefault,
    listingPageDefault,
  };
};

/**
 *
 * @param {import("./listing-page-types").AppDataSource | string} dataSource
 * @returns
 */
const resolveListingHeroTitle = dataSource => {
  if (typeof dataSource === "string") return "Degrees";

  const { program, cert } = dataSource;

  if (program === "undergrad" && cert === "true")
    return "Undergraduate Minors and Certificates";

  if (program === "undergrad") return "Undergraduate Degrees";

  if (program === "graduate" && cert === "true")
    return "Graduate Degrees and Certificates";

  if (program === "graduate") return "Graduate Degrees";

  return "Degrees";
};

export { resolveDefaultProps, resolveListingHeroTitle };
