import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from '../../../styles/ASU.css';
import classNames from 'classnames';

class ASULogin extends Component {

    constructor(props) {
        super();
        this.state = {
            loggedIn: (!!props.loggedIn)
        }
    }

    render() {

        const loginClass = classNames(styles.asuLogin, this.props.className);

        return (
            <div className={loginClass}>
                <span className={styles.srOnly}>
                    Sign In / Sign Out
                </span>
                <div>
                    {
                        (!this.state.loggedIn ?
                                <a className={styles.asuLoginLink} href={this.props.loginUrl} target="_top">Sign In</a>
                            :
                                <a className={styles.asuLoginLink} href={this.props.logoutUrl} target="_top">Sign Out</a>
                        )
                    }
                </div>
            </div>
        )
    }
}

ASULogin.propTypes = {
    loginUrl: PropTypes.string,
    logoutUrl: PropTypes.string,
    loggedIn: PropTypes.bool,
    className: PropTypes.string
};

// Specifies the default values for props:
ASULogin.defaultProps = {
    loginUrl: "https://weblogin.asu.edu/cgi-bin/login",
    logoutUrl: "/cas/logout",
    loggedIn: false
};

export default ASULogin;