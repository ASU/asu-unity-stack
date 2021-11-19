// @ts-check
import { columns } from "./columns-data";

const social = {
  social: {
    unitLogo: "",
    mediaLinks: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com/?lang=en",
      instagram: "https://instagram.com",
      linkedIn: "https://www.linkedin.com/",
      youtube: "https://www.youtube.com/",
    },
  },
};

const contact = {
  contact: {
    title: "Complete Name of College, School or Unit Title Should Go Here",
    contactLink: "#",
    contributionLink: "#",
  },
};

const contactWithColumn = {
  contact: {
    ...contact.contact,
    columns,
  },
};

const emptyState = {};
const completeState = {
  ...social,
  ...contact,
};

export { social, contactWithColumn, completeState, emptyState };
