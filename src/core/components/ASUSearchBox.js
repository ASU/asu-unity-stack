import React, { Component } from "react";

class ASUSearchBox extends Component {
    constructor() {
        super();
    }

    render() {

        if (this.props.drupal) {
            return (
                <div id="asu_search_module">
                    <h2 className="hidden">Search</h2>
                    <form id="google/appliance/block/form" method="post" _lpchecked="1"><label htmlFor="masu_search_box">Search</label>
                        <input name="search_header" class="asu_search_box" id="masu_search_box" placeholder="Search" autoComplete="off" type="text"/>
                        <input className="asu_search_button" type="submit" value="Search"/>
                    </form>
                </div>
            );
        }

        return (
            <div id="asu_search_module">
                <h2 className="hidden">Search</h2>
                <form target="_top" action="https://search.asu.edu/search" method="get" name="gs" role="search">
                    <label htmlFor="masu_search_box">Search</label>
                    <input name="site" type="hidden" value="default_collection"/>
                    <input name="sort" type="hidden" value="date:D:L:d1"/>
                    <input name="output" type="hidden" value="xml_no_dtd"/>
                    <input name="proxystylesheet" type="hidden" value="asu_frontend"/>
                    <input name="ie" type="hidden" value="UTF-8"/>
                    <input name="oe" type="hidden" value="UTF-8"/>
                    <input name="client" type="hidden" value="asu_frontend"/>
                    <input className="asu_search_button" type="submit" value="Search"/>
                    <input name="q" className="asu_search_box" id="masu_search_box" placeholder="Search" autoComplete="off" type="text"/>
                </form>
            </div>
        );
    }
}
export default ASUSearchBox;