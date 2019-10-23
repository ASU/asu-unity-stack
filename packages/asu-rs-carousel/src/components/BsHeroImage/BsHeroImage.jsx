import React from "react";
import PropTypes from "prop-types";
import { Jumbotron, Button, Util } from "reactstrap";
import bootstrap from "asu-web-standards-bootstrap4-prototype/dist/css/bootstrap-asu.min.css";
import styles from "./BsHeroImage.css";

// Needs to be set for CSS modules.
// See https://github.com/reactstrap/reactstrap/issues/1049
Util.setGlobalCssModule(bootstrap);

const heroButtons = buttons => {
  return buttons.map((item, index) => {
    if (!item.text || !item.url) {
      return "";
    }

    let bcolor = "primary";
    let style = {
      marginLeft: (index == 0) ? "0": "1em"
    };

    if (item.color == "blue") {
      bcolor = "secondary";
    }

    return (
      <Button key={index} tag="a" href={item.url} color={bcolor} style={style}>
        {item.text}
      </Button>
    );
  });
};

const BsHeroImage = props => {
  const bgStyles = {
    color: "white",
    backgroundImage: "url(" + props.src + ")",
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    height: "100vh",
    maxHeight: "800px"
  };

  const buttons = props.buttons ? heroButtons(props.buttons) : "";
  let title = <h2 className={styles.heroTitle} >{props.title}</h2>;

  if (props.titleLink) {
    title = <a className={styles.heroLink} href={props.titleLink}>{title}</a>
  }

  return (
    <Jumbotron cssModule={bootstrap} fluid style={bgStyles}>
      <span
        className={bootstrap["sr-only"]}
      >
        {props.altText}
      </span>
      <div className={bootstrap.container}>
        {title}
        <p className={styles.heroP}>{props.tagline}</p>
        {buttons}
      </div>
    </Jumbotron>
  );
};

BsHeroImage.propTypes = {
  src: PropTypes.string,
  altText: PropTypes.string,
  tagline: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleLink: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.object)
};

BsHeroImage.defaultProps = {
  // bla: 'test',
};

export default BsHeroImage;
