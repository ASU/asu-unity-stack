import React, { Component } from "react";
import PropTypes from "prop-types";
import AsuHeader from "./AsuHeader";
import AsuGcseSearch from "../AsuGcseSearch";
import AsuNav from "../AsuNav";
import AsuLogin from "../AsuLogin";
import styles from "./AsuBrandHeader.css";
import defaultNav from "./AsuHeaderNavDefaults";

const siteLogo = logo => {
  const logoClass = styles.asuLogo;

  return (
    <div className={logoClass}>
      <a href={logo.href} target={logo.target}>
        <img alt={logo.alt} src={logo.src} />
      </a>
    </div>
  );
};

const siteName = title => {
  const sitenameClass = styles.asuSiteName;

  return (
    <div className={sitenameClass}>
      <div>
        <a className={styles.asuSiteNameLink} href={title.parentOrgUrl}>
          <span className={styles.asuSiteNameParentOrg}>{title.parentOrg}</span>
        </a>
        <a
          className={styles.asuSiteNameLink}
          title="Home"
          rel="home"
          href={title.siteUrl}
        >
          <span className={styles.asuSiteNameTitle}>{title.siteTitle}</span>
        </a>
      </div>
    </div>
  );
};

const AsuBrandHeader = props => {
  return (
    <AsuHeader
      className={styles.asuBrandHeader}
      nav={
        <React.Fragment>
          {siteLogo(props.logo)}
          <AsuNav
            className={styles.asuBrandHeaderNav}
            globalNav={defaultNav}
            siteNav={props.siteNav}
          />
          <AsuLogin className={styles.asuBrandHeaderLogin} {...props.login} />
        </React.Fragment>
      }
      search={<AsuGcseSearch className={styles.asuHeaderGlobalSearch} />}
      siteName={props.siteName ? siteName(props.siteName) : undefined}
    />
  );
};

AsuBrandHeader.propTypes = {
  logo: PropTypes.object,
  login: PropTypes.object,
  siteNav: PropTypes.arrayOf(PropTypes.object),
  siteName: PropTypes.object
};

// Specifies the default values for props:
AsuBrandHeader.defaultProps = {
  logo: {
    href: "/",
    target: "_top",
    alt: "A S U",
    src: "https://www.asu.edu/asuthemes/4.6/assets/full_logo.png"
  },
  login: AsuLogin.defaultProps,
  siteMenu: []
};

export default AsuBrandHeader;
