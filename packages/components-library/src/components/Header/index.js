/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import { useState } from "preact/compat";
import PropTypes from "prop-types";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import * as S from "./styles";
import Nav from "../Nav";

const Header = props => {
  // get window dimensions
  const { height, width } = useWindowDimensions();

  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(oldOpen => !oldOpen);

  return (
    <S.Header>
      <S.UniversalNav>
        <div>
          <a href="https://www.asu.edu/">ASU home</a>
          <a href="https://my.asu.edu/">My ASU</a>
          <a href="https://www.asu.edu/colleges/">Colleges and schools</a>
          <a href="#">Sign in</a>
          <a href="https://search.asu.edu">
            <i className="fa fa-search" />
          </a>
        </div>
      </S.UniversalNav>
      <S.PrimaryNav>
        <S.IconHamburger onMouseDown={toggle} />
        {props.dangerouslyGenerateStub ? (
          <div id="asu-generated-stub" />
        ) : (
          <Fragment>
            <S.Logo {...props.logo} />
            <S.Title {...{ title: props.title, subtitle: props.subtitle }} />
            <Nav
              {...{
                navTree: props.navTree,
                title: props.title,
                subtitle: props.subtitle,
                logo: props.logo,
                width,
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
};

export default Header;
