import React, { Component } from "react";
import styles from "./AsuBrandHeader.css";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

class ASUHeader extends Component {
  constructor() {
    super();
    this.state = {
      searchOpen: false,
      mobileNavOpen: false,
      renderClient: false
    };

    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.toggleMobileSearch = this.toggleMobileSearch.bind(this);
  }

  render() {
    // add necessary classes
    let cx = classNames.bind(styles);

    const headerClass = cx(this.props.className, {
      openedSearch: this.state.searchOpen,
      openedNav: this.state.mobileNavOpen
    });

    return (
      <header className={headerClass}>
        <a href="https://www.asu.edu/accessibility/" className={styles.srOnly}>
          Report an accessibility problem
        </a>
        <div className={styles.asuHeaderGrid}>
          <div className={styles.asuHeaderTopRow}>{this.props.nav}</div>
          {this.props.search}
          {this.state.renderClient && this.props.siteName
            ? this.props.siteName
            : ""}
          <div className={styles.asuHeaderMobileControls}>
            <span
              className={styles.icoNavIcon}
              onClick={this.toggleMobileNav}
              role="button"
            />
            <span
              className={styles.icoSearch}
              onClick={this.toggleMobileSearch}
            />
          </div>
        </div>
      </header>
    );
  }

  toggleMobileSearch(e) {
    e.preventDefault();
    this.setState({
      searchOpen: !this.state.searchOpen
    });
  }

  toggleMobileNav(e) {
    e.preventDefault();
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen
    });
  }

  componentDidMount() {
    this.setState({ renderClient: true });
  }
}

ASUHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  nav: PropTypes.node,
  search: PropTypes.node,
  siteName: PropTypes.node
};

export default ASUHeader;
