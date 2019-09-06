import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Wrapper} from './AsuDropdownMenu.styles';
import Downshift from 'downshift';

const AsuDropdownMenu = (props) => {

  let linkRefs = [];

  for (let i=0; i < props.items.length; i++) {
    let newRef = React.createRef();
    linkRefs.push(newRef);
  }

  return(
    <Wrapper>
      <Downshift
        stateReducer={stateReducer}
        itemToString={item => (item ? item.value : '')}
        onStateChange={(changes, stateAndHelpers)=> {

          console.log(changes, 'changes');
          console.log(stateAndHelpers, 'the helpers');

          if (changes.hasOwnProperty('highlightedIndex') && changes.highlightedIndex !== null) {
            //todo: focus the menu item when it's selected
            linkRefs[changes.highlightedIndex].current.focus();
          }
        }}
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
            <input {...getInputProps()} type="hidden"></input>
            <ul {...getMenuProps()} >
              { isOpen ? props.items.map((item, index) => {
                return (
                  <li
                    {...getItemProps({
                      item,
                      index,
                      onBlur: (event) => { event.nativeEvent.preventDownshiftDefault = true; },
                      onFocus: (event) => { event.nativeEvent.preventDownshiftDefault = true; }
                    })}
                    key={item.value}
                    style={{
                      cursor: 'pointer',
                      backgroundColor: highlightedIndex === index ? '#bed5df' : 'transparent',
                    }}
                  >
                    <a onFocus={(event) => { // Prevent Downshift's default 'Enter' behavior.
                        event.nativeEvent.preventDownshiftDefault = true; event.stopPropagation(); }} href={item.href} ref={linkRefs[index]} tabIndex="0">{item.value}</a>
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
        highlightedIndex: state.highlightedIndex
      }
    case Downshift.stateChangeTypes.blurInput:
      return {
        ...changes,
        isOpen: state.isOpen,
        highlightedIndex: state.highlightedIndex
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
