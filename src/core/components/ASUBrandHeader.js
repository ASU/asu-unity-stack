import React, { Component } from "react";
import ASUButton from './ASUButton';
import ASUHeader from './ASUHeader';
import ASUSearchBox from "./ASUSearchBox";
import ASUNav from "./ASUNav";
import ASUSiteName from "./ASUSiteName";
import ASULogin from "./ASULogin";
import styles from '../styles/ASU.css';
import navtree from './ASUNav.json';

class ASUBrandHeader extends Component {

    constructor() {
        super();
        this.state = {renderClient: false};
    }

    render() {

        const header = this.props.headerObj;

        return (
            <ASUHeader logo={header.logo} className={styles.asuHeader}>
                <ASUNav nav={navtree}>
                    <ASULogin {...header.login}/>
                    <ASUSearchBox/>
                </ASUNav>
                {
                    this.state.renderClient && header.siteTitle &&
                    <ASUSiteName siteTitle={header.siteTitle}/>
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
