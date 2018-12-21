import React, {useState} from 'react';
import ASULink from '../../atoms/links/ASULink';
import styles from './nav.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ASUNavItem = props => {

    const navClass = props.top ? classNames(props.className, styles.asuNavItemTop) : classNames(props.className, styles.asuNavItem);
    const [open, setOpen] = useState(false);
    const subStyles = classNames(styles.subMenu, (open ? styles.subSlideIn : styles.subSlideOut));

    console.log(open, 'the open state');

    return (
        <li className={navClass}>
            <div>
                <ASULink className={styles.asuNavA} href={props.href} target={props.target}>{props.text}</ASULink>
                {props.children ?
                    <span className={open ? styles.icoSortUp: styles.icoSortDown}
                          onClick={() => {setOpen(!open)}}>
                    </span> : ''
                }
            </div>
            {props.children ? <div className={subStyles}>{props.children}</div> : ''}
        </li>
    );
};

ASUNavItem.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.node,
    top: PropTypes.bool
};

// Specifies the default values for props:
ASUNavItem.defaultProps = {
    top: false
};

export default ASUNavItem;