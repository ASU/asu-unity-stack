import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Button, Util } from 'reactstrap';
import bootstrap from '../../styles/bs4/css/bootstrap-asu.min.css';

// Needs to be set for CSS modules.
// See https://github.com/reactstrap/reactstrap/issues/1049
Util.setGlobalCssModule(bootstrap);


const heroButtons = (buttons) => {
    return buttons.map((item, index) => {
      return (<Button key={index} tag='a' href={item.url} color={item.color}>{item.text}</Button>)
    })
}

const BsHeroImage = (props) => {

  const bgStyles = {
    color: 'white',
    backgroundImage: 'url(' + props.src + ')',
    backgroundPosition: 'center',
    backgroundRepeat: 'norepeat',
    backgroundSize: 'cover',
    height: '100vh'
  };

  const buttons = props.buttons ? heroButtons(props.buttons) : '';

  return (
    <Jumbotron cssModule={bootstrap} fluid style={bgStyles}>
      <img src={props.src} alt={props.altText} className={bootstrap['sr-only']}/>
      <div className={bootstrap.container}>
        <h2 className={bootstrap["display-4"]}>{props.title}</h2>
        <p>{props.tagline}</p>
        {buttons}
      </div>
    </Jumbotron>
  )
};

BsHeroImage.propTypes = {
  src: PropTypes.string,
  altText: PropTypes.string,
  tagline: PropTypes.string,
  title: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.object)
};

BsHeroImage.defaultProps = {
  // bla: 'test',
};

export default BsHeroImage;
