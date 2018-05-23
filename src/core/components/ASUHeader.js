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
            <header {...(this.props.className ? {className: this.props.className} : {})}>
                <ASULink href="https://www.asu.edu/accessibility/" className={styles.srOnly}>Report an accessibility problem</ASULink>
                <div className={styles.asuHeaderGrid}>
                    {this.props.logo ? <ASULogo {...this.props.logo} /> : ''}
                    {this.props.children}
                </div>
            </header>
        );
    }

    componentDidMount() {
    }
}

export default ASUHeader;
