import React from "react";
import PropTypes from "prop-types";

import classes from "./ASUHeading.module.css";

const header = (type, color, children) =>
{
    let heading = null;
    let highlight = null;
    let headerStyles = [classes.Heading];
    let highlightStyles = [classes.highlight];

    if (color == 'gold') {
        highlightStyles.push(classes["highlight-gold"]);
        highlight = <span className={highlightStyles.join(' ')}>{children}</span>;
    }
    else if (color == 'black') {
        highlightStyles.push(classes["highlight-black"]);
        highlight = <span className={highlightStyles.join(' ')}>{children}</span>;
    }
    else
        headerStyles.push(classes["highlight-white"]);

    switch (type)
    {
        case '1':
            headerStyles.push(classes.HeadingOne);
            highlightStyles.push(classes.highlightHeadingOne);
            heading = highlight === null
                    ? <h1 className={headerStyles.join(' ')}>{children}</h1>
                    : <h1 className={headerStyles.join(' ')}>{highlight}</h1>
            break;
        case '2':
            headerStyles.push(classes.HeadingTwo);
            highlightStyles.push(classes.highlightHeadingTwo);
            heading = highlight === null
                    ? <h2 className={headerStyles.join(' ')}>{children}</h2>
                    : <h2 className={headerStyles.join(' ')}>{highlight}</h2>
            break;
        case '3':
            headerStyles.push(classes.HeadingThree);
            highlightStyles.push(classes.highlightHeadingThree);
            heading = highlight === null
                    ? <h3 className={headerStyles.join(' ')}>{children}</h3>
                    : <h3 className={headerStyles.join(' ')}>{highlight}</h3>
            break;
        case '4':
            headerStyles.push(classes.HeadingFour);
            highlightStyles.push(classes.highlightHeadingFour);
            heading = highlight === null
                    ? <h4 className={headerStyles.join(' ')}>{children}</h4>
                    : <h4 className={headerStyles.join(' ')}>{highlight}</h4>
            break;
        default:
            headerStyles.push(classes.HeadingFive);
            highlightStyles.push(classes.highlightHeadingFive);
            heading = highlight === null
                    ? <h5 className={headerStyles.join(' ')}>{children}</h5>
                    : <h5 className={headerStyles.join(' ')}>{highlight}</h5>
            break;
    }

    return heading;
};

const header1 = (props) => (header('1', props.highlight, props.children));
const header2 = (props) => (header('2', props.highlight, props.children));
const header3 = (props) => (header('3', props.highlight, props.children));
const header4 = (props) => (header('4', props.highlight, props.children));
const header5 = (props) => (header('5', props.highlight, props.children));

header1.propTypes = header2.propTypes = header3.propTypes = header4.propTypes = header5.propTypes = {
    highlight: PropTypes.string,
    children: PropTypes.node.isRequired,
}

header1.defaultProps = header2.defaultProps = header3.defaultProps = header4.defaultProps = header5.defaultProps = {
    highlight: 'white'
}

export {
    header1 as ASUHeadingOne,
    header2 as ASUHeadingTwo,
    header3 as ASUHeadingThree,
    header4 as ASUHeadingFour,
    header5 as ASUHeadingFive,
};
