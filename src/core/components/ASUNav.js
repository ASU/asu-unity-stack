import React, { Component } from "react";
import ASULogin from './ASULogin';

class ASUNav extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div id="asu_nav_wrapper">
                <ASULogin/>
                <div id="asu_nav_menu" role="navigation" aria-label="ASU">
                    <h2 className="hidden">
                        Menu
                    </h2>
                    <div id="asu_universal_nav">
                        <ul>
                            <li className="parent"><a href="//www.asu.edu/" target="_top">ASU Home</a>
                                <ul>
                                    <li><a className="first" href="//www.asu.edu/?feature=newsevents" target="_top" title="News and Events">News/Events</a></li>
                                    <li><a href="//www.asu.edu/?feature=academics" target="_top" title="Academics">Academics</a></li>
                                    <li><a href="//www.asu.edu/?feature=research" target="_top" title="Research">Research</a></li>
                                    <li><a href="//www.asu.edu/?feature=athletics" target="_top" title="Athletics">Athletics</a></li>
                                    <li><a href="//www.asu.edu/?feature=alumni" target="_top" title="Alumni">Alumni</a></li>
                                    <li><a href="//www.asu.edu/?feature=giving" target="_top" title="Giving">Giving</a></li>
                                    <li><a href="//www.asu.edu/?feature=president" target="_top" title="President">President</a></li>
                                    <li><a href="//www.asu.edu/about" target="_top" title="About ASU">About ASU</a></li>
                                </ul>
                            </li>
                            <li><a href="//my.asu.edu/" target="_top">My ASU</a></li>
                            <li className="parent"><a href="//www.asu.edu/colleges/" target="_top">Colleges and Schools</a>
                                <ul>
                                    <li><a className="first" href="//artsandsciences.asu.edu/" target="_top" title="Arts and Sciences website">Arts and Sciences</a></li>
                                    <li><a href="//wpcarey.asu.edu/" target="_top" title="W. P. Carey School of Business Web and Morrison School of Agribusiness website">Business</a></li>
                                    <li><a href="//herbergerinstitute.asu.edu" target="_top" title="Herberger Institute for Design and the Arts website">Design and the Arts</a></li>
                                    <li><a href="//education.asu.edu/" target="_top" title="Mary Lou Fulton Teachers College website">Education</a></li>
                                    <li><a href="//engineering.asu.edu/" target="_top" title="Engineering website">Engineering</a></li>
                                    <li><a href="//sfis.asu.edu/" target="_top" title="Future of Innovation in Society website">Future of Innovation in Society</a></li>
                                    <li><a href="//graduate.asu.edu" target="_top" title="Graduate College website">Graduate</a></li>
                                    <li><a href="//chs.asu.edu/" target="_top" title="Health Solutions website">Health Solutions</a></li>
                                    <li><a href="//honors.asu.edu/" target="_top" title="Barrett, The Honors College website">Honors</a></li>
                                    <li><a href="//cronkite.asu.edu" target="_top" title="Walter Cronkite School of Journalism and Mass Communication website">Journalism</a></li>
                                    <li><a href="//www.law.asu.edu/" target="_top" title="Sandra Day O' Connor College of Law website">Law</a></li>
                                    <li><a href="//nursingandhealth.asu.edu/" target="_top" title="College of Nursing and Health Innovation website">Nursing and Health Innovation</a></li>
                                    <li><a href="//copp.asu.edu" target="_top" title="College of Public Programs website">Public Service and Community Solutions</a></li>
                                    <li><a href="//schoolofsustainability.asu.edu" target="_top" title="School of Sustainability website">Sustainability</a></li>
                                    <li><a href="//uc.asu.edu/" target="_top" title="University College website">University College</a></li>
                                    <li><a target="_top" href="http://www.thunderbird.edu/" title="Thunderbird School of Global Management website">Thunderbird School of Global Management</a></li>
                                </ul>
                            </li>
                            <li className="parent"><a href="//www.asu.edu/map/" target="_top">Map and Locations</a>
                                <ul>
                                    <li><a className="border first" href="//www.asu.edu/map/" target="_top">Map</a></li>
                                    <li><a href="//campus.asu.edu/tempe/" target="_top" title="Tempe campus">Tempe</a></li>
                                    <li><a href="//campus.asu.edu/west/" target="_top" title="West campus">West</a></li>
                                    <li><a href="//campus.asu.edu/polytechnic/" target="_top" title="Polytechnic campus">Polytechnic</a></li>
                                    <li><a href="//campus.asu.edu/downtown/" target="_top" title="Downtown Phoenix campus">Downtown Phoenix</a></li>
                                    <li><a href="//asuonline.asu.edu/" target="_top" title="Online and Extended campus">Online and Extended</a></li>
                                    <li><a href="//havasu.asu.edu/" target="_top">Lake Havasu</a></li>
                                    <li><a className="border" target="_top" href="http://www.thunderbird.edu/about-thunderbird/locations/phoenix-arizona">Thunderbird</a></li>
                                    <li><a href="//skysong.asu.edu/" target="_top">Skysong</a></li>
                                    <li><a href="//asuresearchpark.com/" target="_top">Research Park</a></li>
                                    <li><a href="//washingtoncenter.asu.edu/" target="_top">Washington D.C.</a></li>
                                    <li><a href="//wpcarey.asu.edu/mba/china-program/english/" target="_top">China</a></li>
                                </ul>
                            </li>
                            <li><a href="//isearch.asu.edu/" target="_top" title="Directory, Index and other info">Directory</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default ASUNav;