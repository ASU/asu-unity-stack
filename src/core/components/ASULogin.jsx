import React, { Component } from "react";
import styles from '../styles/ASU.css';

class ASULogin extends Component {

    constructor(props) {
        super();
        this.state = {
            loggedIn: (!!props.loggedIn)
        }
    }

    render() {
            return (
                <div className={styles.asuLogin}>
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
export default ASULogin;