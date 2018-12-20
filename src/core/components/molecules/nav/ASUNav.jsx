import React, {Component} from 'react';
import ASUNavItem from './ASUNavItem';
import defaultNav from "./ASUNavDefaultTree";
import PropTypes from 'prop-types';
import styles from './nav.css';
import classNames from 'classnames';

class ASUNav extends Component {

    constructor() {
        super();
        this.state = {
            renderClient: false
        };
    }

    render() {
        const navMenu = this.renderNav(this.props.navTree, true);
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
    navTree: PropTypes.arrayOf(PropTypes.object),
    children: PropTypes.node,
    className: PropTypes.string
};

// Specifies the default values for props:
ASUNav.defaultProps = {
    navTree: defaultNav
};


export default ASUNav;