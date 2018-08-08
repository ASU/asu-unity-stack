import React, { Component } from "react";
import styles from '../styles/ASU.css'
import PropTypes from 'prop-types';

class ASUSearchBox extends Component {
    constructor() {
        super();
    }

    render() {
        if (this.props.drupal) {
            return (
                <div className={styles.asuSearch}>
                    <h2 className={styles.srOnly}>Search</h2>
                    <form id="google/appliance/block/form" method="post" _lpchecked="1"><label htmlFor="masu_search_box">Search</label>
                        <input name="search_header" className={styles.asuSearchBox} placeholder="Search" autoComplete="off" type="text"/>
                        <input className={styles.asuSearchButton} type="submit" value="Search"/>
                    </form>
                </div>
            );
        }

        return (
            <div className={styles.asuSearch}>
                <h2 className={styles.srOnly}>Search</h2>
                <form target="_top" action="https://search.asu.edu/search" method="get" name="gs" role="search">
                    <label className={styles.srOnly} htmlFor="masu_search_box">Search</label>
                    <input name="site" type="hidden" value="default_collection"/>
                    <input name="sort" type="hidden" value="date:D:L:d1"/>
                    <input name="output" type="hidden" value="xml_no_dtd"/>
                    <input name="proxystylesheet" type="hidden" value="asu_frontend"/>
                    <input name="ie" type="hidden" value="UTF-8"/>
                    <input name="oe" type="hidden" value="UTF-8"/>
                    <input name="client" type="hidden" value="asu_frontend"/>
                    <input className={styles.asuSearchButton} type="submit" value="Search"/>
                    <input name="q" className={styles.asuSearchBox} id="masu_search_box" placeholder="Search" autoComplete="off" type="text"/>
                </form>
            </div>
        );
    }
}



ASUSearchBox.propTypes = {
    drupal: PropTypes.bool
};

// Specifies the default values for props:
ASUSearchBox.defaultProps = {
    drupal: false
};

export default ASUSearchBox;