// @ts-check
import PropTypes from "prop-types";

const LogoPropTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  mobileSrc: PropTypes.string,
  brandLink: PropTypes.string,
};

const TitlePropTypes = {
  baseUrl: PropTypes.string,
  parentOrg: PropTypes.string,
  parentOrgUrl: PropTypes.string,
  animate: PropTypes.bool,
};

const LoginPropTypes = {
  loggedIn: PropTypes.bool,
  loginLink: PropTypes.string,
  logoutLink: PropTypes.string,
  userName: PropTypes.string,
};

const ButtonPropTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["gold", "maroon", "light", "dark"]),
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
};

const NavTreePropTypes = PropTypes.shape({
  id: PropTypes.number,
  href: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  selected: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  buttons: PropTypes.arrayOf(PropTypes.shape(ButtonPropTypes)),
  class: PropTypes.string,
});

const HeaderPropTypes = {
  isPartner: PropTypes.bool,
  navTree: PropTypes.arrayOf(NavTreePropTypes),
  partnerLogo: PropTypes.shape(LogoPropTypes),
  logo: PropTypes.shape(LogoPropTypes),
  title: PropTypes.string,
  parentOrg: TitlePropTypes.parentOrg,
  parentOrgUrl: TitlePropTypes.parentOrgUrl,
  baseUrl: TitlePropTypes.baseUrl,
  loggedIn: LoginPropTypes.loggedIn,
  userName: LoginPropTypes.userName,
  loginLink: LoginPropTypes.loginLink,
  logoutLink: LoginPropTypes.logoutLink,
  buttons: PropTypes.arrayOf(PropTypes.shape(ButtonPropTypes)),
  breakpoint: PropTypes.oneOf(["Lg", "Xl"]),
  animateTitle: PropTypes.bool,
  expandOnHover: PropTypes.bool,
  mobileNavTree: PropTypes.arrayOf(NavTreePropTypes),
  hasNavigation: PropTypes.bool,
};

export {
  HeaderPropTypes,
  LoginPropTypes,
  LogoPropTypes,
  TitlePropTypes,
  ButtonPropTypes,
  NavTreePropTypes,
};
