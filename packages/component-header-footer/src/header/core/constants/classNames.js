export const CLASS_PREFIX = "uds-hdr-";

// Custom class names used in the header component
export const CLASS_NAMES = {
  // Login component
  LOGIN_STATUS: `${CLASS_PREFIX}login-status`,
  USER_NAME: `${CLASS_PREFIX}name`,
  SIGNOUT: `${CLASS_PREFIX}signout`,

  // Navigation
  NAV_LINK: `${CLASS_PREFIX}nav-link`,
  NAV_ITEM_SELECTED: `${CLASS_PREFIX}nav-item-selected`,
  OPEN_LINK: `${CLASS_PREFIX}open-link`,
  ICON_NAV_ITEM: `${CLASS_PREFIX}icon-nav-item`,
  MOBILE_ONLY: `${CLASS_PREFIX}mobile-only`,
  CHEVRON_ICON: `${CLASS_PREFIX}chevron-icon`,
  OPEN: `${CLASS_PREFIX}open`,

  // Dropdown
  HEADER_DROPDOWN: id => `${CLASS_PREFIX}header-dropdown-${id}`,
  OPENED: `${CLASS_PREFIX}opened`,
  DROPDOWN_CONTAINER: `${CLASS_PREFIX}dropdown-container`,
  DROPDOWN_CONTAINER_COLUMN: `${CLASS_PREFIX}dropdown-container-column`,
  DROPDOWN_BUTTON_CONTAINER: `${CLASS_PREFIX}dropdown-button-container`,

  // Search
  SEARCH_BUTTON: `${CLASS_PREFIX}search-button`,
  OPEN_SEARCH: `${CLASS_PREFIX}open-search`,
  SEARCH_ICON: `${CLASS_PREFIX}search-icon`,
  SUBMIT_BUTTON: `${CLASS_PREFIX}submit-button`,
  SUBMIT_SEARCH: `${CLASS_PREFIX}submit-search`,

  // Header sections
  UNIVERSAL_NAV: `${CLASS_PREFIX}universal-nav`,
  HEADER_TOP: `${CLASS_PREFIX}header-top`,
  LINKS_CONTAINER: `${CLASS_PREFIX}links-container`,
  HEADER_MAIN: `${CLASS_PREFIX}header-main`,
  CONTENT_CONTAINER: `${CLASS_PREFIX}content-container`,
  NAV_LIST: `${CLASS_PREFIX}nav-list`,
  BUTTONS_CONTAINER: `${CLASS_PREFIX}buttons-container`,
  NAV_BUTTON: `${CLASS_PREFIX}nav-button`,
  UL_HEADING: `${CLASS_PREFIX}ul-heading`,

  // Title
  TITLE: `${CLASS_PREFIX}title`,
  PARTNER_TITLE: `${CLASS_PREFIX}partner-title`,
  UNIT_NAME: `${CLASS_PREFIX}unit-name`,
  SUBUNIT_NAME: `${CLASS_PREFIX}subunit-name`,
  TITLE_SUBUNIT_NAME: `${CLASS_PREFIX}title-subunit-name`,
  EXPAND_TITLE: `${CLASS_PREFIX}expand-title`,
  NO_NAVIGATION: `${CLASS_PREFIX}no-navigation`,

  // Partner/Logo
  PARTNER: `${CLASS_PREFIX}partner`,
  PARTNERS_LOGOS: `${CLASS_PREFIX}partners-logos`,
  LOGO_VERT: `${CLASS_PREFIX}vert`,
  LOGO_HORIZ: `${CLASS_PREFIX}horiz`,

  // Menu icons
  MENU_SEARCH_ICON: `${CLASS_PREFIX}menu-search-icon`,
  MENU_CLOSE_ICON: `${CLASS_PREFIX}menu-close-icon`,

  NAVBAR: "navbar",
  NAVBAR_EXPAND_XL: "navbar-expand-xl",
  NAVBAR_BRAND: "navbar-brand",
  NAVBAR_TOGGLER: "navbar-toggler",
  NAVBAR_NAV: "navbar-nav",
  NAV_ITEM: "nav-item",
  COLLAPSED: "collapsed",
  CONTAINER: "container",
  CONTAINER_XL: "container-xl",
  FORM_CONTROL: "form-control",
  VISUALLY_HIDDEN: "visually-hidden",
  VISUALLY_HIDDEN_FOCUSABLE: "visually-hidden-focusable",
  MOBILE_MENU_OPEN: `${CLASS_PREFIX}mobile-menu-open`,
};

// Helper function to generate dropdown class name
export const getDropdownClass = id => CLASS_NAMES.HEADER_DROPDOWN(id);

// Helper function to build class string
export const buildClassName = (...classes) => {
  return classes.filter(Boolean).join(" ");
};
