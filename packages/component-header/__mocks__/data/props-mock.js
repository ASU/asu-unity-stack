import { basicNavTree, navTreeWithButtons } from "../../src/core/utils";

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
const emptyState = {};
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
  emptyState,
  withButtonsState,
  partnersState,
  onHoverState,
};
