import React, { Component } from "react";
import ASUHeader from "../presentational/ASUHeader";

class ASUHeaderContainer extends Component {

    constructor() {
        super();
    }

    render() {

        return (
            <header id="asu-header-container">
                <ASUHeader
                    headerObj={this.props.headerObj}
                />
            </header>
        );
    }

}
export default ASUHeaderContainer;
