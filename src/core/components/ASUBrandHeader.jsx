import React, { Component } from "react";
import PropTypes from 'prop-types';
import ASUHeader from './ASUHeader';
import ASULogo from "./ASULogo";
import ASUGlobalSearch from "./ASUGlobalSearch";
import ASUNav from "./ASUNav";
import ASUSiteName from "./ASUSiteName";
import ASULogin from "./ASULogin";
import styles from '../styles/ASU.css';
import defaultNav from './ASUNavDefaultTree';

class ASUBrandHeader extends Component {

    constructor() {
        super();
        this.state = {renderClient: false};
    }

    render() {

        return (
            <ASUHeader className={styles.asuBrandHeader}>
                <ASULogo className={styles.asuBrandHeaderLogo} {...this.props.logo} />
                <ASUNav className={styles.asuBrandHeaderNav} nav={this.props.navTree} />
                <ASULogin className={styles.asuBrandHeaderLogin} {...this.props.login}/>
                <ASUGlobalSearch className={styles.asuBrandHeaderSearchBox}/>
                {
                    this.state.renderClient && this.props.siteTitle &&
                    <ASUSiteName className={styles.asuBrandHeaderSiteName} {...this.props.siteTitle}/>
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