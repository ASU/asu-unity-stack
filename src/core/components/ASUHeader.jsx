import React, { Component } from "react";
import ASULink from "./ASULink";
import styles from '../styles/ASU.css';
import PropTypes from 'prop-types';


class ASUHeader extends Component {

    constructor() {
        super();
    }

    render() {
        return (

            <header {...(this.props.className ? {className: this.props.className} : {})}>
                <ASULink href="https://www.asu.edu/accessibility/" className={styles.srOnly}>Report an accessibility problem</ASULink>
                <div className={styles.asuHeaderGrid}>
                    {this.props.children}
                </div>
            </header>
        );
    }

    componentDidMount() {
    }
}

ASUHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

export default ASUHeader;
