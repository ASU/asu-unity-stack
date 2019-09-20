import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './BsReactCarousel.styles';
import { UncontrolledCarousel, Util} from 'reactstrap';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Needs to be set for CSS modules.
// See https://github.com/reactstrap/reactstrap/issues/1049
Util.setGlobalCssModule(bootstrap);

const BsReactCarousel = (props) => (
  <UncontrolledCarousel cssModule={bootstrap} items={props.items}/>
);

BsReactCarousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

BsReactCarousel.defaultProps = {
};

export default BsReactCarousel;
