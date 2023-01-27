

import PropTypes from "prop-types";

import * as S from "./styles";

const Navbar = ({ children, mobileOpen, logo, hasNavigation, ...props }) => {
  return (
    <S.Navbar mobileOpen={mobileOpen}>
      {logo}
      <S.NavbarToggler {...props} mobileOpen={mobileOpen} />
      <S.NavbarContainer hasNavigation={hasNavigation}>
        {children}
      </S.NavbarContainer>
    </S.Navbar>
  );
};

Navbar.propTypes = {
  mobileOpen: PropTypes.bool,
  logo: PropTypes.node,
  children: PropTypes.node
};

Navbar.defaultProps = {
  mobileOpen: false
};
export { Navbar };
