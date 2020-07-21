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
  subtitle,
  logo,
  loggedIn,
  userName,
  loginLink,
  logoutLink,
  ...props
}) => {
  // Mobile menu open state and helper functions
  const [open, setOpen] = useState(false);
  const [openSearch, setSearchOpen] = useState(false);

  const toggle = () => setOpen(oldOpen => !oldOpen);
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

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <S.Header scrollPosition={scrollPosition} >
      <S.UniversalNav open={open}>
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
            <S.IconSearch onMouseDown={toggleSearch} />
          </S.SearchForm>
        </div>
      </S.UniversalNav>
      <S.PrimaryNav>
        {props.dangerouslyGenerateStub ? (
          <div id="asu-generated-stub" />
        ) : (
          <Fragment>
            <div>
              <S.Logo {...logo} />
              <S.IconHamburger
                onClick={e => {
                  e.preventDefault();
                  toggle();
                }}
                // If javascript is disabled, this should target and open the
                href="#asu-header-nav"
              />
              <S.Title {...{ title, subtitle }} />
            </div>
            <Nav
              {...{
                navTree,
                logo,
                mobileOpen: open,
                height,
                width
              }}
            />
          </Fragment>
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
  }),
  title: PropTypes.string,
  subtitle: PropTypes.string,
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
  subtitle: "",
  loggedIn: false,
  userName: "",
  loginLink: "https://weblogin.asu.edu/cas/login",
  logoutLink: "https://weblogin.asu.edu/cas/logout",
};

export default Header;
