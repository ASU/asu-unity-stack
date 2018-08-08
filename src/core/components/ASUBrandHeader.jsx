import React, { Component } from "react";
import PropTypes from 'prop-types';
import ASUHeader from './ASUHeader';
import ASUSearchBox from "./ASUSearchBox";
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
            <ASUHeader logo={this.props.logo} className={styles.asuHeader}>
                <ASUNav nav={this.props.navTree}>
                    <ASULogin {...this.props.login}/>
                    <ASUSearchBox/>
                </ASUNav>
                {
                    this.state.renderClient && this.props.siteTitle &&
                    <ASUSiteName {...this.props.siteTitle}/>
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
    logo: ASUHeader.defaultProps.logo,
    login: ASULogin.defaultProps,
    navTree: defaultNav
};


export default ASUBrandHeader;