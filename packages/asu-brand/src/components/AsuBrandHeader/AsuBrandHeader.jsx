import React, { Component } from "react";
import PropTypes from "prop-types";
import AsuHeader from "./AsuHeader";
import AsuGcseSearch from "../AsuGcseSearch";
import AsuNav from "../AsuNav";
import AsuLogin from "../AsuLogin";
import styles from "./AsuBrandHeader.css";
import defaultNav from "./AsuHeaderNavDefaults";

class AsuBrandHeader extends Component {
  constructor() {
    super();
    this.state = { renderClient: false };
  }

  render() {
    const completeTree = defaultNav.concat(this.props.siteMenu);

    return (
      <AsuHeader className={styles.asuBrandHeader}>
        {this.props.logo ? this.siteLogo(this.props.logo) : ""}

        <AsuNav className={styles.asuHeaderNav} menuTree={completeTree} />

        <AsuLogin
          className={styles.asuBrandHeaderLogin}
          {...this.props.login}
        />

        <AsuGcseSearch className={styles.asuHeaderGlobalSearch} />

        {/* Render the site title only on the client side */ }
        {this.state.renderClient && this.props.siteName && this.siteName(this.props.siteName)}
      </AsuHeader>
    );
  }

  siteName(title) {
    const sitenameClass = styles.asuSiteName;

    return (
        <div className={sitenameClass}>
            <div>
                <a className={styles.asuSiteNameLink} href={title.parentOrgUrl}>
                    <span className={styles.asuSiteNameParentOrg}>
                        {title.parentOrg}
                    </span>
                </a>
                <a className={styles.asuSiteNameLink} title="Home" rel="home" href={title.siteUrl}>
                    <span className={styles.asuSiteNameTitle}>
                        {title.siteTitle}
                    </span>
                </a>
            </div>
        </div>
    );
  }

  siteLogo(logo) {
    const logoClass = styles.asuLogo;

    return (
      <div className={logoClass}>
        <a href={logo.href} target={logo.target}>
          <img alt={logo.alt} src={logo.src} />
        </a>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ renderClient: true });
  }
}

AsuBrandHeader.propTypes = {
  logo: PropTypes.object,
  login: PropTypes.object,
  siteMenu: PropTypes.arrayOf(PropTypes.object),
  siteName: PropTypes.object
};

// Specifies the default values for props:
AsuBrandHeader.defaultProps = {
  logo: {
    href: '/',
    target: '_top',
    alt: 'A S U',
    src: "https://www.asu.edu/asuthemes/4.6/assets/full_logo.png"
  },
  login: AsuLogin.defaultProps,
  siteMenu: []
};

export default AsuBrandHeader;
