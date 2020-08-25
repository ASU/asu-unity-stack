/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";
import Nav from "../Nav";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Header = ({
  navTree,
  title,
  unit,
  logo,
  loggedIn,
  userName,
  loginLink,
  logoutLink,
  ...props
}) => {
  // Mobile menu open state and helper functions
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSearch, setSearchOpen] = useState(false);

  const toggle = () => setMobileOpen(oldOpen => !oldOpen);
  const toggleSearch = () => setSearchOpen(oldOpen => !oldOpen);

  // Scroll position state handling for adding 'scroll' class
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  // get window dimensions
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Header scrollPosition={scrollPosition}>
      <S.UniversalNav open={mobileOpen}>
        <div>
          <a href="https://www.asu.edu/">ASU home</a>
          <a href="https://my.asu.edu/">My ASU</a>
          <a href="https://www.asu.edu/colleges/">Colleges and schools</a>
          {loggedIn ? (
            <span>
              {userName}
              <a href={logoutLink}>Sign Out</a>
            </span>
          ) : (
            <a href={loginLink}>Sign in</a>
          )}
          <S.SearchForm open={openSearch}>
            <S.Icon type="search" onMouseDown={toggleSearch} />
          </S.SearchForm>
        </div>
      </S.UniversalNav>
      <S.PrimaryNav>
        {props.dangerouslyGenerateStub ? (
          <div id="asu-generated-stub" />
        ) : (
          <div>
            <S.Logo {...logo} />
            <S.NavbarToggler
              onClick={e => {
                e.preventDefault();
                toggle();
              }}
              mobileOpen={mobileOpen}
            />
            <S.NavbarContainer>
              <S.Title {...{ title, unit }} />
              <Nav
                {...{
                  navTree,
                  logo,
                  mobileOpen,
                  height,
                  width,
                }}
              />
            </S.NavbarContainer>
          </div>
        )}
      </S.PrimaryNav>
    </S.Header>
  );
};

Header.propTypes = {
  navTree: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
    mobileSrc: PropTypes.string,
    brandLink: PropTypes.string,
  }),
  title: PropTypes.string,
  unit: PropTypes.string,
  loggedIn: PropTypes.bool,
  userName: PropTypes.string,
  loginLink: PropTypes.string,
  logoutLink: PropTypes.string,
};

Header.defaultProps = {
  navTree: [],
  dangerouslyGenerateStub: false,
  logo: {
    alt: "Arizona State University Logo",
    src: "https://i.imgur.com/5WtkgkV.png",
    mobileSrc:
      "https://www.asu.edu/asuthemes/4.10/assets/arizona-state-university-logo.png",
  },
  title: "",
  unit: "",
  loggedIn: false,
  userName: "",
  loginLink: "https://weblogin.asu.edu/cas/login",
  logoutLink: "https://weblogin.asu.edu/cas/logout",
};

export default Header;
