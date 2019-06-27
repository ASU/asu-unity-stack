import React, {Component} from 'react';
import ASUNavItem from './ASUNavItem';
import defaultNav from "./ASUHeaderMenuDefaults";
import PropTypes from 'prop-types';
import styles from './nav.css';
import gstyles from '../../../styles/ASU.css';
import classNames from 'classnames';

class ASUNav extends Component {

    constructor() {
        super();
        this.state = {
            renderClient: false
        };
    }

    render() {

        const navMenu = this.renderNav(this.props.menuTree, true);
        const navClass = classNames(styles.asuNavWrapper, this.props.className);

        return (
            <nav className={navClass}>
                <div className={styles.asuNav} role="navigation" aria-label="ASU">
                    {navMenu}
                    {this.props.children}
                </div>
            </nav>
        );
    }


    renderNav(nav, toplevel) {

        return (
            <ul className={styles.navList}>
                {
                    nav.map((item, index) => {
                        return (
                            <ASUNavItem {...item} key={index} top={toplevel}>
                                { item.subtree ? this.renderNav(item.subtree, false): null}
                            </ASUNavItem>
                        );
                    })
                }
            </ul>
        );
    }
}

ASUNav.propTypes = {
    menuTree: PropTypes.arrayOf(PropTypes.object),
    children: PropTypes.node,
    className: PropTypes.string
};

// Specifies the default values for props:
ASUNav.defaultProps = {
    menuTree: defaultNav
};


export default ASUNav;