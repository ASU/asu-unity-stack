/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { useState, useEffect, useRef } from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";
import { Nav } from "../Nav";
import { UniversalSearch } from "../Search";
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
  buttons,
  ...props
}) => {
  // Mobile menu open state and helper functions
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // State to set mobile nav max height. Needed for fixed positioning elements
  const [maxMobileNavHeight, setMaxMobileNavHeight] = useState(-1);

  // Get breakpoint from design token
  const bpoint = parseInt(S.mobileBreak, 10);

  // get window dimensions
  const { height, width } = useWindowDimensions();

  const toggle = () => setMobileOpen(oldOpen => !oldOpen);

  // Scroll position state handling for adding 'scroll' class
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (width < bpoint && mobileOpen) {
      const uHeight = universalRef.current.base.clientHeight;
      // TODO: measure this dynamically
      const pHeight = 96;
      const newHeight = height - uHeight - pHeight;

      setMaxMobileNavHeight(newHeight);
    }
  }, [height, width, mobileOpen]);

  const universalRef = useRef(null);

  return (
    <S.Header class={scrollPosition > 0 || mobileOpen ? "scrolled" : ""}>
      <S.UniversalNav open={mobileOpen} ref={universalRef} {...{ searchOpen }}>
        <div>
          <div class="nav-grid">
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
          </div>
          <UniversalSearch open={searchOpen} setOpen={setSearchOpen} />
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
                  buttons,
                  maxMobileHeight: maxMobileNavHeight,
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
  buttons: PropTypes.arrayOf(PropTypes.object),
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
  buttons: [],
};

export { Header };
