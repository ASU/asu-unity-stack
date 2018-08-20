import React from "react";
import ASULink from "./ASULink"
import styles from "../styles/ASU.css"
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ASUSiteName = props => {

    const sitenameClass = classNames(styles.asuSiteName, props.className);

    return (
        <div className={sitenameClass}>
            <div>
                <ASULink className={styles.asuSiteNameLink} href={props.parentOrgUrl}>
                    <span className={styles.asuSiteNameParentOrg}>
                        {props.parentOrg}
                    </span>
                </ASULink>
                <ASULink className={styles.asuSiteNameLink} title="Home" rel="home" href={props.siteUrl}>
                    <span className={styles.asuSiteNameTitle}>
                        {props.siteTitle}
                    </span>
                </ASULink>
            </div>
        </div>
    );
};

ASUSiteName.propTypes = {
    siteTitle: PropTypes.string,
    siteUrl: PropTypes.string,
    parentOrg: PropTypes.string,
    parentOrgUrl: PropTypes.string,
    className: PropTypes.string
};

// Specifies the default values for props:
ASUSiteName.defaultProps = {
    siteUrl: '/'
};

export default ASUSiteName;