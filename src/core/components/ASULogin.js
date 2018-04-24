/**
 * Created by ctestama on 4/18/18.
 */
import React, { Component } from "react";

class ASULogin extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <span className="hidden">
                                        Sign In / Sign Out
                </span>
                <ul id="asu_login_module">
                    <li className="end" id="asu_hdr_ssi">
                        <a href="//weblogin.asu.edu/cgi-bin/login" target="_top">Sign In</a>
                    </li>
                </ul>
            </div>
        )
    }



}
export default ASULogin;