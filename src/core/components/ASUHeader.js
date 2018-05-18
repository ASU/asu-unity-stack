import React, { Component } from "react";
import ASULogo from "./ASULogo";
import ASULink from "./ASULink";
import styles from '../styles/ASU.css';

class ASUHeader extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <header>
                <div className={styles.asu_hdr}>
                    <ASULink href="https://www.asu.edu/accessibility/" className={styles.sr_only}>Report an accessibility problem</ASULink>
                    {this.props.logo ? <ASULogo {...this.props.logo} /> : ''}
                    {this.props.children}
                </div>
            </header>
        );
    }

    componentDidMount() {
    }

    toggleASU() {

    }
}

export default ASUHeader;
