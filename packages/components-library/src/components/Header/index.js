import { useState, useEffect, useRef } from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";
import { Nav } from "../Nav";
import { UniversalSearch } from "../Search";
import { Login } from "../Login";
import { Navbar } from "../Navbar";
import { Logo } from "../Logo";
import { Title } from "../Title";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Header = ({
  navTree,
  title,
  baseUrl,
  parentOrg,
  parentOrgUrl,
  logo,
  loggedIn,
  userName,
  loginLink,
  logoutLink,
  buttons,
  breakpoint,
  animateTitle,
  expandOnHover,
  mobileNavTree,
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

  // Get breakpoint from theme and props
  const bpoint = breakpoint === "Xl" ? S.BreakpointXl : S.BreakpointLg;
  const bpointInt = parseInt(bpoint, 10);

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

  // Refs to track height of header dom elements
  const universalRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);

  // Calculate the mobile nav menu max-height every time the mobile nav is opened
  // or the viewport changes size
  useEffect(() => {
    if (width < bpointInt && mobileOpen) {
        const uHeight = universalRef.current.clientHeight;
        const lHeight = logoRef.current.clientHeight;
        const tHeight = titleRef.current.clientHeight;
        // Get primary nav top padding value from theme
        const tpadding = parseInt(S.primaryNavTopPadding, 10);

        // top padding x2 - 24px margin under title and 24px padding above title
        const pHeight = lHeight + tHeight + tpadding * 2;
        const newHeight = height - uHeight - pHeight;
        setMaxMobileNavHeight(newHeight);
    }
  }, [height, width, mobileOpen, bpointInt]);

  return (
    <S.Header
      breakpoint={bpoint}
      class={
        scrollPosition > 0
          ? "scrolled"
          : ""
      }
    >
      <S.UniversalNav open={mobileOpen} ref={universalRef} {...{ searchOpen }}>
        <S.UniversalNavLinks>
          <a href="https://www.asu.edu/">ASU home</a>
          <a href="https://my.asu.edu/">My ASU</a>
          <a href="https://www.asu.edu/colleges/">Colleges and schools</a>
          <Login {...{ loggedIn, loginLink, logoutLink, userName }} />
        </S.UniversalNavLinks>
        <UniversalSearch
          open={searchOpen}
          setOpen={setSearchOpen}
          mobile={width < bpointInt}
        />
      </S.UniversalNav>
      <Navbar
        onClick={e => {
          e.preventDefault();
          toggle();
        }}
        mobileOpen={mobileOpen}
        logo={<Logo {...logo} ref={logoRef} />}
      >
        {props.dangerouslyGenerateStub ? (
          <div id="asu-generated-stub" />
        ) : (
          <>
            <Title
              {...{ parentOrg, parentOrgUrl, baseUrl, animate: animateTitle }}
              ref={titleRef}
            >
              {title}
            </Title>
            <Nav
              {...{
                navTree: (width < bpointInt && mobileNavTree ? mobileNavTree : navTree),
                mobileOpen,
                height,
                width,
                buttons,
                maxMobileHeight: maxMobileNavHeight,
                breakpoint,
                expandOnHover
              }}
            />
          </>
        )}
      </Navbar>
    </S.Header>
  );
};

Header.propTypes = {
  navTree: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape(Logo.propTypes),
  title: Title.propTypes.title,
  parentOrg: Title.propTypes.parentOrg,
  parentOrgUrl: Title.propTypes.parentOrgUrl,
  baseUrl: Title.propTypes.baseUrl,
  loggedIn: Login.propTypes.loggedIn,
  userName: Login.propTypes.userName,
  loginLink: Login.propTypes.loginLink,
  logoutLink: Login.propTypes.logoutLink,
  buttons: PropTypes.arrayOf(PropTypes.object),
  breakpoint: PropTypes.oneOf(["Lg", "Xl"]),
  animateTitle: PropTypes.bool,
  expandOnHover: PropTypes.bool,
  mobileNavTree: PropTypes.arrayOf(PropTypes.object)
};

Header.defaultProps = {
  navTree: [],
  dangerouslyGenerateStub: false,
  title: "",
  buttons: [],
  breakpoint: "Lg",
  expandOnHover: false
};

export { Header };
