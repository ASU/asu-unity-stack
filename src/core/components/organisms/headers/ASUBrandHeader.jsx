import React, { Component } from "react";
import PropTypes from 'prop-types';
import ASUHeader from './ASUHeader';
import ASULogo from "../../molecules/branding/ASULogo";
import ASUGlobalSearch from "../../molecules/search/ASUGlobalSearch";
import ASUNav from "../../molecules/nav/ASUNav";
import ASUSiteName from "../../molecules/branding/ASUSiteName";
import ASULogin from "../../molecules/auth/ASULogin";
import styles from './headers.css';
import defaultNav from '../../molecules/nav/ASUNavDefaultTree';

class ASUBrandHeader extends Component {

    constructor() {
        super();
        this.state = {renderClient: false};
    }

    render() {
        return (
            <ASUHeader className={styles.asuBrandHeader}>
                <ASULogo className={styles.asuHeaderLogo} {...this.props.logo} />
                <ASUNav className={styles.asuHeaderNav} nav={this.props.navTree} />
                <ASULogin className={styles.asuBrandHeaderLogin} {...this.props.login}/>
                <ASUGlobalSearch className={styles.asuHeaderGlobalSearch}/>
                {
                    this.state.renderClient && this.props.siteTitle &&
                    <ASUSiteName className={styles.asuHeaderSiteName} {...this.props.siteTitle}/>
                }
            </ASUHeader>
        );
    }

    componentDidMount() {
        this.setState({ renderClient: true });
    }
}


ASUBrandHeader.propTypes = {
    logo: PropTypes.object,
    login: PropTypes.object,
    navTree: PropTypes.arrayOf(PropTypes.object),
    siteTitle: PropTypes.object
};

// Specifies the default values for props:
ASUBrandHeader.defaultProps = {
    logo: ASULogo.defaultProps,
    login: ASULogin.defaultProps,
    navTree: defaultNav
};


export default ASUBrandHeader;