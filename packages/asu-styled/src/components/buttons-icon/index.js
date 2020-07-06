import styled, {css} from 'styled-components';
import {Component} from '../../theme';
import {Whatever} from '../../theme';

console.log(Component, 'component');

const ButtonIcon = styled.button`
  border-radius:${Component.button['border-radius'].value};
  font-size: ${Component.button['font-size'].value};
  display: block;

  ${props =>
  props.tertiary &&
  css`
      color: white;
      background-color: ${Whatever.border.breen.value};
    `};
`;

export default ButtonIcon;
