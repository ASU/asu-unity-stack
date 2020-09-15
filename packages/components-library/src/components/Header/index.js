/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
import { useState, useEffect, useRef } from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";
import { Nav } from "../Nav";
import { UniversalSearch } from "../Search";
import { Login } from "../Login";
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
  // State hooks to track and set opening/closing mobile nav
  const [mobileOpen, setMobileOpen] = useState(false);
  // Function to toggle the mobile nav
  const toggle = () => setMobileOpen(oldOpen => !oldOpen);

  //State hooks for tracking and setting open/close search in universal nav
  const [searchOpen, setSearchOpen] = useState(false);

  // State hooks for tracking and setting the max mobile nav menu height
  const [maxMobileNavHeight, setMaxMobileNavHeight] = useState(-1);

  // Get breakpoint from theme
  const bpoint = parseInt(S.mobileBreak, 10);

  // get window dimensions
  const { height, width } = useWindowDimensions();

  // Hooks to track scroll position state
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  // Attach scroll event lister which will update the scrollPosition state
  // when window scrolled
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Get primary nav top padding value from theme
  const tpadding = parseInt(S.primaryNavTopPadding, 10);

  // Use refs to track height of header dom elements
  const universalRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);

  // Calculate the mobile nav menu max-height every time the mobile nav is opened
  // or the viewport changes size
  useEffect(() => {
    if (width < bpoint && mobileOpen) {
      window.setTimeout(() => {
        const uHeight = universalRef.current.clientHeight;
        const lHeight = logoRef.current.clientHeight;
        const tHeight = titleRef.current.clientHeight;

        const pHeight = lHeight + tHeight + tpadding;

        const newHeight = height - uHeight - pHeight;

        setMaxMobileNavHeight(newHeight);
      }, 500);
    }
  }, [height, width, mobileOpen]);



  return (
    <S.Header
      class={
        scrollPosition > 0 || (mobileOpen && width < bpoint) ? "scrolled" : ""
      }
    >
      <S.UniversalNav
        open={mobileOpen}
        domRef={universalRef}
        {...{ searchOpen }}
      >
        <div>
          <div class="nav-grid">
            <a href="https://www.asu.edu/">ASU home</a>
            <a href="https://my.asu.edu/">My ASU</a>
            <a href="https://www.asu.edu/colleges/">Colleges and schools</a>
            <Login {...{ loggedIn, loginLink, logoutLink, userName }} />
          </div>
          <UniversalSearch
            open={searchOpen}
            setOpen={setSearchOpen}
            mobile={width < bpoint}
          />
        </div>
      </S.UniversalNav>
      <S.PrimaryNav>
        {props.dangerouslyGenerateStub ? (
          <div id="asu-generated-stub" />
        ) : (
          <div>
            <S.Logo {...logo} domRef={logoRef} />
            <S.NavbarToggler
              onClick={e => {
                e.preventDefault();
                toggle();
              }}
              mobileOpen={mobileOpen}
            />
            <S.NavbarContainer>
              <S.Title {...{ title, unit }} ref={titleRef} />
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
  loggedIn: Login.defaultProps.loggedIn,
  loginLink: Login.defaultProps.loginLink,
  logoutLink: Login.defaultProps.logoutLink,
  buttons: [],
};

export { Header };
