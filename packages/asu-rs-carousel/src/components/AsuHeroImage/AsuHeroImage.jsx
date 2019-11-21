import React from "react";
import PropTypes from "prop-types";
import { Jumbotron, Button, Util } from "reactstrap";
import bootstrap from "asu-web-standards-bootstrap4/dist/css/bootstrap-asu.min.css";
import styles from "./AsuHeroImage.css";

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
      marginLeft: index == 0 ? "0" : "1em"
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

const AsuHeroImage = props => {
  const buttons = props.buttons ? heroButtons(props.buttons) : "";
  let title = <h2 className={styles.heroTitle}>{props.title}</h2>;

  if (props.titleLink) {
    title = (
      <a className={styles.heroLink} href={props.titleLink}>
        {title}
      </a>
    );
  }

  return (
    <Jumbotron cssModule={bootstrap} fluid style={{ padding: "0" }}>
      <div
        style={{
          position: "relative"
        }}
      >
        <img
          className={bootstrap["w-100"] + " " + bootstrap["d-block"]}
          src={props.src}
          alt={props.altText}
        />
        <div
          className={bootstrap["container-fluid"]}
          style={{ position: "absolute", top: "0" }}
        >
          {title}
          <p className={styles.heroP}>{props.tagline}</p>
          {buttons}
        </div>
      </div>
    </Jumbotron>
  );
};

AsuHeroImage.propTypes = {
  src: PropTypes.string,
  altText: PropTypes.string,
  tagline: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleLink: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.object)
};

AsuHeroImage.defaultProps = {
  // bla: 'test',
};

/** Background hero image implementation */
const AsuBgHeroImage = props => {
  const bgStyles = {
    color: "#FFFFFF",
    backgroundImage: "url(" + props.src + ")",
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    height: "100vh",
    maxHeight: parseInt(props.maxHeight) + "px"
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

AsuBgHeroImage.propTypes = {
  src: PropTypes.string,
  altText: PropTypes.string,
  tagline: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleLink: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.object),
  maxHeight: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ])
};

AsuBgHeroImage.defaultProps = {
  maxHeight: 800
};

export {AsuHeroImage, AsuBgHeroImage};
