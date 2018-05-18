import React, { Component } from "react";
import ASUButton from './ASUButton';
import ASUHeader from './ASUHeader';
import ASUSearchBox from "./ASUSearchBox";
import ASUNav from "./ASUNav";
import ASUSiteName from "./ASUSiteName";
import ASULogin from "./ASULogin";
import styles from '../styles/ASU.css';
import navtree from './ASUNav.json';

const logoprops = {
    src: "https://www.asu.edu/asuthemes/4.6/assets/full_logo.png",
    href: "https://www.asu.edu/",
    alt: "ASU"
};

class ASUBrandHeader extends Component {

    constructor() {
        super();
        this.state = {renderClient: false};
    }

    render() {

        return (
            <ASUHeader logo={logoprops} className={styles.asu_hdr_white}>
                <ASUButton className="asu_mobile_button" onClick={this.toggleASU}/>
                <ASULogin/>
                <ASUNav nav={navtree}/>
                <ASUSearchBox/>
                {
                    this.state.renderClient && this.props.headerObj.site_title &&
                    <ASUSiteName siteTitle={this.props.headerObj.site_title}/>
                }
            </ASUHeader>
        );
    }

    componentDidMount() {
        this.setState({ renderClient: true });
    }

    toggleASU() {

    }
}
export default ASUBrandHeader;
