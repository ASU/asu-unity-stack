// @ts-check
import { basicNavTree, navTreeWithButtons } from "../../src/header/core/utils";
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

const emptyStateFooter = {};
const completeState = {
  ...social,
  ...contact,
};


const defaultState = {
  loggedIn: false,
  userName: "",
  navTree: basicNavTree,
  title: "School of Computing, Informatics, and Decisions Systems Engineering",
  parentOrg: "Ira A. Fulton Schools of Engineering",
  parentOrgUrl: "https://engineering.asu.edu",
  breakpoint: "Lg",
};
const defaultStateLoggedIn = {
  loggedIn: true,
  userName: "Sparky",
  logoutLink: "/caslogout",
  loginLink: "/cas",
  navTree: basicNavTree,
  title: "School of Computing, Informatics, and Decisions Systems Engineering",
  parentOrg: "Ira A. Fulton Schools of Engineering",
  parentOrgUrl: "https://engineering.asu.edu",
  breakpoint: "Lg",
};
const emptyStateHeader = {
  loggedIn: true,
  userName: "",
  logoutLink: "",
  loginLink: "",
  navTree: [],
  title: "",
  parentOrg: "",
  parentOrgUrl: "",
  breakpoint: ""
};

const withButtonsState = {
  navTree: navTreeWithButtons,
  title: "University Technology Office",
  buttons: [
    {
      href: "/",
      text: "CTA Button 1",
      color: "gold",
    },
    {
      text: "CTA Button 2",
      href: "#",
      color: "light",
    },
  ],
  loggedIn: true,
  userName: "Sparky",
  logoutLink: "/caslogout",
  loginLink: "/cas",
};
const partnersState = {
  isPartner: true,
  navTree: basicNavTree,
  loggedIn: false,
  userName: "",
  breakpoint: "Lg",
};
const onHoverState = {
  navTree: basicNavTree,
  title: "Ira A. Fulton Schools of Engineering",
  parentOrg:
    "School of Computing, Informatics, and Decisions Systems Engineering",
  parentOrgUrl: "https://engineering.asu.edu",
  loggedIn: true,
  userName: "Sparky",
  logoutLink: "/caslogout",
  loginLink: "/cas",
  expandOnHover: true,
  breakpoint: "Lg",
};

export {
  defaultState,
  defaultStateLoggedIn,
  emptyStateHeader,
  emptyStateFooter,
  withButtonsState,
  partnersState,
  onHoverState,
  social, contactWithColumn, completeState,
};
