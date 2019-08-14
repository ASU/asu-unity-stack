import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Wrapper} from './AsuDropdownMenu.styles';
import Downshift from 'downshift';

const AsuDropdownMenu = (props) => {

  let links = [];
  const [active, setActive] = useState(-1);

  useEffect(() => {
    if (active != -1) {
      links[active].current.focus();
    }
  });

  return(
    <Wrapper>
      <Downshift
        stateReducer={stateReducer}
        itemToString={item => (item ? item.value : '')}
      >
        {({
          getItemProps,
          getMenuProps,
          isOpen,
          getToggleButtonProps,
          highlightedIndex,
          getInputProps
        }) => (
          <div role="navigation">
            <button {...getToggleButtonProps()}>{props.title}</button>
            <ul {...getMenuProps()} >
              { isOpen ? props.items.map((item, index) => {
                // create ref to control link focus
                let newRef = React.createRef();
                links.push(newRef);

                if (highlightedIndex === index) {
                  setActive(index);
                }

                return (
                  <li
                    {...getItemProps({
                      item,
                      index
                    })}
                    key={item.value}
                    style={{
                      cursor: 'pointer',
                      backgroundColor: highlightedIndex === index ? '#bed5df' : 'transparent'
                    }}
                  >
                    <a {...getInputProps({
                      'aria-autocomplete': 'none'
                    })} href={item.href} ref={links[index]} tabIndex="0">{item.value}</a>
                  </li>
                )
              }) : null }
            </ul>
          </div>
        )}
      </Downshift>
    </Wrapper>
  )
};

const stateReducer = (state, changes) => {


  console.log(changes, 'the changes');

  // this prevents the menu from being closed when the user
  // selects an item with a keyboard or mouse
  switch (changes.type) {
    case Downshift.stateChangeTypes.clickItem:
      return {
        ...changes,
        isOpen: state.isOpen,
        highlightedIndex: state.highlightedIndex,
      }
    case Downshift.stateChangeTypes.blurButton:
      return {
        ...changes,
        isOpen: state.isOpen,
        highlightedIndex: state.highlightedIndex,
      }
    case Downshift.stateChangeTypes.blurInput:
      return {
        ...changes,
        isOpen: state.isOpen,
        highlightedIndex: state.highlightedIndex,
      }
    default:
      return changes
  }
}



AsuDropdownMenu.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object)
};

AsuDropdownMenu.defaultProps = {
  title: 'test',
};

export default AsuDropdownMenu;
