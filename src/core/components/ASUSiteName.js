import React, { Component } from "react";
import ASULink from "./ASULink"
import styles from "../styles/ASU.css"

const ASUSiteName = props => {

    return (
        <div className={styles.header_sitename} id="asu_hdr_title_gen">
            <div id="asu_hdr_parent_title">
                <ASULink className={styles.sitename_a} href={props.siteTitle.parent_org_url}><span className={[styles.asu_parent_org, styles.sitename_span].join(' ')}>{props.siteTitle.parent_org}</span></ASULink>
                <ASULink className={styles.sitename_a} title="Home" rel="home" href={props.siteTitle.site_url}><span className={[styles.asu_site_title, styles.sitename_span].join(' ')}>{props.siteTitle.title}</span></ASULink>
            </div>
        </div>
    );
};

export default ASUSiteName;