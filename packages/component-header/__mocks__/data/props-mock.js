import { basicNavTree, navTreeWithButtons } from "../../src/core/utils";

const testNavTreeWithOnClickEventAndNoHref = [
  {
    text: "Home",
    selected: false,
    onClick: () => {
      console.log("Home clicked");
    }
  },
  {
    text: "Test 1",
    selected: false,
    onClick: () => {
      console.log("Test 1 clicked");
    }
  },
  {
    text: "Test 2",
    selected: false,
    items: [
      [
        {
          text: "Sublink 1",
          selected: false,
          onClick: () => {
            console.log("Sublink 1 clicked");
          },
        },
        {
          href: "https://www.asu.edu/",
          text: "Sublink 2",
        },
      ],
    ]
  }
];

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
const emptyState = {
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
const withOnClickAndNoHref = {
  navTree: testNavTreeWithOnClickEventAndNoHref,
  title: "Ira A. Fulton Schools of Engineering",
  parentOrg:
    "School of Computing, Informatics, and Decisions Systems Engineering",
  parentOrgUrl: "https://engineering.asu.edu",
  loggedIn: false,
};

export {
  defaultState,
  defaultStateLoggedIn,
  emptyState,
  withButtonsState,
  partnersState,
  onHoverState,
  withOnClickAndNoHref,
  testNavTreeWithOnClickEventAndNoHref
};
