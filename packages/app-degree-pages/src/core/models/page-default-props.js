// @ts-check
import { getCurrentScriptPath } from "@asu-design-system/components-core";

const currentScriptPath = getCurrentScriptPath();

/**
 *
 * @param {string} appPathFolder
 * @returns {{
 *    listingPageDefault: import("../types/listing-page-types").ListingPageProps
 *    detailPageDefault: import("../types/detail-page-types").DetailPageProps
 * }}
 */
const resolveDefaultProps = appPathFolder => {
  const scriptPath = appPathFolder || currentScriptPath;
  const detailImageFolder = `${scriptPath}/assets/img/detail-page`;
  const listingImageFolder = `${scriptPath}/assets/img/listing-page`;

  /**
   * @type {import("../types/detail-page-types").DetailPageProps}
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
            "Arizona State University invites first-year, transfer, international, graduate and online students to apply for admission using our online application.",
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
    whyChooseAsu: {
      sectionIntroText:
        "ASU offers students excellent academics and unique opportunities to customize your college experience and give you an edge, including undergraduate research, internships, access to state-of-the-art facilities, and opportunities to work with world-class faculty and scientists.",
      cards: {
        faculty: {
          image: {
            url: `${detailImageFolder}/customize-faculty-600.jpg`,
            altText: "World-class faculty",
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
            url: `${detailImageFolder}/customize-programs-600.jpg`,
            altText: "Highly ranked programs",
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
            url: `${detailImageFolder}/customize-research-600.jpg`,
            altText: "Research opportunities",
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
            url: `${detailImageFolder}/customize-inclusion-600.jpg`,
            altText: "An inclusive environment",
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
            url: `${detailImageFolder}/customize-mentor-600.jpg`,
            altText: "Mentor network",
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
            url: `${detailImageFolder}/customize-honors-600.jpg`,
            altText: "Global education",
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
   * @type {import("../types/listing-page-types").ListingPageProps}
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
 * @param {import("../types/listing-page-types").ProgramListDataSource | string} dataSource
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
