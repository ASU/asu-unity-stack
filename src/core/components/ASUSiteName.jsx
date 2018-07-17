import React, { Component } from "react";
import ASULink from "./ASULink"
import styles from "../styles/ASU.css"

const ASUSiteName = props => {

    return (
        <div className={styles.asuSiteName}>
            <div>
                <ASULink className={styles.asuSiteNameLink} href={props.siteTitle.parentOrgUrl}>
                    <span className={styles.asuSiteNameParentOrg}>
                        {props.siteTitle.parentOrg}
                    </span>
                </ASULink>
                <ASULink className={styles.asuSiteNameLink} title="Home" rel="home" href={props.siteTitle.siteUrl}>
                    <span className={styles.asuSiteNameTitle}>
                        {props.siteTitle.title}
                    </span>
                </ASULink>
            </div>
        </div>
    );
};

export default ASUSiteName;