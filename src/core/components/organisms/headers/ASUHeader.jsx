import React, { Component } from "react";
import ASULink from "../../atoms/links/ASULink";
import styles from './headers.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

class ASUHeader extends Component {

    constructor() {
        super();
        this.state = {
            searchOpen: false,
            mobileNavOpen: false
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
                <ASULink href="https://www.asu.edu/accessibility/" className={styles.srOnly}>Report an accessibility problem</ASULink>
                <div className={styles.asuHeaderGrid}>
                    {this.props.children}
                    <div className={styles.asuHeaderMobileControls}>
                        <span className={styles.icoNavIcon} onClick={this.toggleMobileNav} role="button" />
                        <span className={styles.icoSearch} onClick={this.toggleMobileSearch} />
                    </div>
                </div>
            </header>
        );
    }

    toggleMobileSearch(e) {
        e.preventDefault();
        this.setState({
           searchOpen: !this.state.searchOpen
        })
    }

    toggleMobileNav(e) {
        e.preventDefault();
        this.setState({
            mobileNavOpen: !this.state.mobileNavOpen
        })
    }

    componentDidMount() {
    }
}

ASUHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

export default ASUHeader;