import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title, Dropper} from './AsuDropdownMenu.styles';

const AsuDropdownMenu = (props) => {

  const [open, setOpen] = useState(false);

  return(
    <Wrapper>
      <Title onClick={() => {setOpen(!open)}}>{props.title}</Title>
      <Dropper {...{open: open ? true: false}}>{props.children}</Dropper>
    </Wrapper>
  )
};

AsuDropdownMenu.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

AsuDropdownMenu.defaultProps = {
  title: 'test',
};

export default AsuDropdownMenu;
