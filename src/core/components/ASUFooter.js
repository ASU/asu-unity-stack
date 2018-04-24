import React, { Component } from "react";

class ASUFooter extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="innovation-footer">
                <div id="innovation-bar">
                    <div className="innovation-top">
                        <div className="innovation-status">
                            <a href="https://www.asu.edu/rankings"><span>ASU is #1 in the U.S. for Innovation</span></a>
                        </div>
                        <div className="innovation-hidden">
                            <a href="https://www.asu.edu/rankings"><img src="//www-dev.asu.edu/asuthemes/4.6/assets/best-college-2018.png" alt="Best Colleges U.S. News Most Innovative 2018" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-menu">
                    <ul className="default">
                        <li><a href="https://www.asu.edu/copyright/">Copyright and Trademark</a></li>
                        <li><a href="https://www.asu.edu/accessibility/">Accessibility</a></li>
                        <li><a href="https://www.asu.edu/privacy/">Privacy</a></li>
                        <li><a href="https://www.asu.edu/tou/">Terms of Use</a></li>
                        <li><a href="https://www.asu.edu/asujobs">Jobs</a></li>
                        <li><a href="https://www.asu.edu/emergency/">Emergency</a></li>
                        <li className="no-border"><a href="https://www.asu.edu/contactasu/">Contact ASU</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

module.exports = ASUFooter;
