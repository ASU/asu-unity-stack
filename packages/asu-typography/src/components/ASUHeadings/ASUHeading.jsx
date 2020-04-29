import React from "react";
import PropTypes from "prop-types";

import classes from "./ASUHeading.module.css";

/**
 * @param {integer} type - The type of HTML heading to render via JSX (ranges from <h1> to <h6>)
 * @param {string} color - The color of the heading highlight, which can be white, black or gold (white is default)
 * @param {node} children - Child elements to rendered within the heading tags (could be text or additional elements)
 */
const headingCreate = (type, color, children) => {
    let heading = null; // Holds heading JSX to be returned
    let highlight = null; // Configurable highlight property
    let headerStyles = [classes["heading"]]; // Adds general ASU heading styles (e.g. font size, font weight, etc.)
    let highlightStyles = [classes.highlight]; // Adds general ASU highlight styles (e.g. line height)

    // Checks the color of the highlight property and applies it accordingly
    if (color == 'gold') {
        highlightStyles.push(classes["highlight-gold"]);
        // Creates span with child elements and adds new highlight styles
    }
    else if (color == 'black') {
        highlightStyles.push(classes["highlight-black"]);
    }
    else
        headerStyles.push(classes["highlight-white"]); // Adds white highlight to heading itself since that is the default

    switch (type) {
        case '1':
            headerStyles.push(classes["heading-one"]); // Adds style for component heading
            // If there is a highlight, return the span with the with highlight span. Otherwise, return the heading with
            // child elements
            if (color !== 'white') {
                highlightStyles.push(classes["highlight-heading-one"]); // Adds style for component highlight
                highlight = <span className={highlightStyles.join(' ')}>{children}</span>;
                heading = <h1 className={headerStyles.join(' ')}>{highlight}</h1>;
            }
            else {
                heading = <h1 className={headerStyles.join(' ')}>{children}</h1>;
            }
            break;
        case '2':
            headerStyles.push(classes["heading-two"]);
            if (color !== 'white') {
                highlightStyles.push(classes["highlight-heading-two"]);
                highlight = <span className={highlightStyles.join(' ')}>{children}</span>;
                heading = <h2 className={headerStyles.join(' ')}>{highlight}</h2>;
            }
            else {
                heading = <h2 className={headerStyles.join(' ')}>{children}</h2>;
            }
            break;
        // No special highlight sizings for h3 - h6
        case '3':
            headerStyles.push(classes["heading-three"]);
            if (color !== 'white') {
                highlight = <span className={highlightStyles.join(' ')}>{children}</span>;
                heading = <h3 className={headerStyles.join(' ')}>{highlight}</h3>;
            }
            else {
                heading = <h3 className={headerStyles.join(' ')}>{children}</h3>;
            }
            break;
        case '4':
            headerStyles.push(classes["heading-four"]);
            if (color !== 'white') {
                highlight = <span className={highlightStyles.join(' ')}>{children}</span>;
                heading = <h4 className={headerStyles.join(' ')}>{highlight}</h4>;
            }
            else {
                heading = <h4 className={headerStyles.join(' ')}>{children}</h4>;
            }
            break;
        default:
            headerStyles.push(classes["heading-five"]);
            if (color !== 'white') {
                highlight = <span className={highlightStyles.join(' ')}>{children}</span>;
                heading = <h5 className={headerStyles.join(' ')}>{highlight}</h5>;
            }
            else {
                heading = <h5 className={headerStyles.join(' ')}>{children}</h5>;
            }
            break;
    }

    return heading;
};

// Creates multiple headings for export
const heading1 = (props) => (headingCreate('1', props.highlight, props.children));
const heading2 = (props) => (headingCreate('2', props.highlight, props.children));
const heading3 = (props) => (headingCreate('3', props.highlight, props.children));
const heading4 = (props) => (headingCreate('4', props.highlight, props.children));
const heading5 = (props) => (headingCreate('5', props.highlight, props.children));

heading1.propTypes = heading2.propTypes = heading3.propTypes = heading4.propTypes = heading5.propTypes = {
    highlight: PropTypes.string,
    children: PropTypes.node.isRequired, // Children can be any text or JSX elements
}

heading1.defaultProps = heading2.defaultProps = heading3.defaultProps = heading4.defaultProps = heading5.defaultProps = {
    highlight: 'white' // If no highlight is specified, default is white with black text
}

export {
    heading1 as ASUHeadingOne,
    heading2 as ASUHeadingTwo,
    heading3 as ASUHeadingThree,
    heading4 as ASUHeadingFour,
    heading5 as ASUHeadingFive,
};
