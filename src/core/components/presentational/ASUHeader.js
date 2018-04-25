import React, { Component } from "react";
import ASUSearchBox from "../ASUSearchBox";
import ASUNav from "../ASUNav";

class ASUHeader extends Component {
    constructor() {
        super();
        this.state = {renderClient: false};
    }

    render() {

        return (
            <div>
                <div id="main-search" className="main-search closed" />
                <div className="accessibility-hide"><a href="https://www.asu.edu/accessibility/" className="sr-only">Report an accessibility problem</a></div>
                <div id="asu_hdr" className="asu_hdr_white">
                    <div id="asu_mobile_hdr">
                        <div id="asu_logo">
                            <a href="//www.asu.edu/" target="_top">
                                <img alt="A S U" src="//www.asu.edu/asuthemes/4.6/assets/full_logo.png" /></a>
                        </div>
                        <div className="asuhide f-navicon" id="asu_mobile_button" onClick={this.toggleASU()}>
                            <a href="javascript:ASUHeader.toggleASU();">Menu</a>
                        </div>
                        <div className="f-search" id="search_new" onClick={this.toggleASU()} />
                    </div>
                    <div className="closed" id="asu_mobile_menu">
                        <ASUNav/>
                        <ASUSearchBox/>
                    </div>
                </div>

                {
                    this.state.renderClient && this.props.headerObj.site_title &&
                    <div className="header__sitename" id="asu_hdr_title_gen">
                        <div id="asu_hdr_parent_title">
                            <a href={this.props.headerObj.site_title.parent_org_url}><span className="asu-parent-org">{this.props.headerObj.site_title.parent_org}</span></a>
                            <a title="Home" rel="home" href={this.props.headerObj.site_title.site_url}><span className="asu-site-title">{this.props.headerObj.site_title.title}</span></a>
                        </div>
                    </div>
                }


            </div>
        );
    }

    componentDidMount() {
        this.setState({ renderClient: true });
    }

    toggleASU() {

    }
}

export default ASUHeader;
