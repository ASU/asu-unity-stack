import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const AsuDropdownNav = (props) => {

  let linkRefs = [];

  for (let i=0; i < props.items.length; i++) {
    let newRef = React.createRef();
    linkRefs.push(newRef);
  }

  return(
    <div>
      <div role="navigation">
        <button>{props.title}</button>
        
        <ul>
          { props.items.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href} ref={linkRefs[index]} tabIndex="0">{item.value}</a>
                </li>
              );
            })
          } 
        </ul>
      </div>
    </div>
  )
};


AsuDropdownNav.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object)
};

AsuDropdownNav.defaultProps = {
  title: 'test'
};

export default AsuDropdownNav;
