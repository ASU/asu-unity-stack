import React, { useState, useEffect } from "react";
import styles from "./AsuBrandHeader.css";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

const ASUHeader = props => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setNavOpen] = useState(false);
  const [renderClient, setRendered] = useState(false);

  // add necessary classes
  let cx = classNames.bind(styles);

  const headerClass = cx(props.className, {
    openedSearch: searchOpen,
    openedNav: mobileNavOpen
  });

  useEffect(() => {
    setRendered(true);
  }, [renderClient]);

  return (
    <header className={headerClass}>
      <a href="https://www.asu.edu/accessibility/" className={styles.srOnly}>
        Report an accessibility problem
      </a>
      <div className={styles.asuHeaderGrid}>
        <div className={styles.asuHeaderTopRow}>{props.nav}</div>
        {props.search}
        {renderClient && props.siteName ? this.props.siteName : ""}
        <div className={styles.asuHeaderMobileControls}>
          <span
            className={styles.icoNavIcon}
            onClick={() => setNavOpen(oldOpen => !oldOpen)}
            role="button"
          />
          <span
            className={styles.icoSearch}
            onClick={() => setSearchOpen(oldOpen => !oldOpen)}
          />
        </div>
      </div>
    </header>
  );
};

ASUHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  nav: PropTypes.node,
  search: PropTypes.node,
  siteName: PropTypes.node
};

export default ASUHeader;
