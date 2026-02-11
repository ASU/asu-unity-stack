import styled from "styled-components";
import {
  ASU_GRAY1,
  ASU_BLACK,
  ASU_WHITE,
  GRAY_BUTTON_DISABLED,
  ASU_GOLD,
  ASU_MAROON
} from "../../colors";

const ButtonWrapper = styled.a`
  font-family: Arial, Helvetica, "Nimbus Sans L", "Liberation Sans", FreeSans,
    sans-serif;
  color: ${ASU_GRAY1};
  padding: 0.5rem 1rem;
  border-radius: 400rem;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  transition: 0.03s ease-in-out;
  cursor: pointer;
  & + a {
    margin-left: 1rem;
  }
  &:hover {
    transform: scale(1.05);
  }
  &.button-light {
    background-color: ${GRAY_BUTTON_DISABLED} !important;
    color: ${ASU_BLACK} !important;
  }
  &.button-gold {
    background-color: ${ASU_GOLD} !important;
    color: ${ASU_BLACK} !important;
  }
  &.button-dark {
    background-color: ${ASU_GRAY1} !important;
    color: ${ASU_WHITE} !important;
  }
  &.button-maroon {
    background-color: ${ASU_MAROON} !important;
    color: ${ASU_WHITE} !important;
  }
`;

export { ButtonWrapper };
