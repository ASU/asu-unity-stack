/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import { useState } from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";
import Nav from "../Nav";

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
  const [open, setOpen] = useState(false);
  const [openSearch, setSearchOpen] = useState(false);

  const toggle = () => setOpen(oldOpen => !oldOpen);
  const toggleSearch = () => setSearchOpen(oldOpen => !oldOpen);

  // TODO: handle custom searchh
  const defaultSearchForm = (
    <form
      action={"https://search.asu.edu/search"}
      method={"get"}
      role={"search"}
    >
      <input name={"q"} placeholder={"Search"} type={"text"} />
    </form>
  );

  return (
    <S.Header>
      <S.UniversalNav>
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
          {openSearch ? defaultSearchForm : ""}
          <a>
            <i class="fa fa-search" onMouseDown={toggleSearch} />
          </a>
        </div>
      </S.UniversalNav>
      <S.PrimaryNav>
        <S.IconHamburger
          onClick={e => {
            e.preventDefault();
            toggle();
          }}
          // If javascript is disabled, the 
          href="#asu-header-nav"
        />
        {props.dangerouslyGenerateStub ? (
          <div id="asu-generated-stub" />
        ) : (
          <Fragment>
            <S.Logo {...logo} />
            <S.Title {...{ title, subtitle }} />
            <Nav
              {...{
                navTree,
                logo,
                mobileOpen: open,
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
