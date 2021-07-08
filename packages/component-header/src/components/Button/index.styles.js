import styled from "styled-components";

const ButtonWrapper = styled.a`
  color: #191919;
  padding: 0.5rem 1rem;
  border-radius: 400rem;
  font-weight: 700;
  font-size: 0.875rem;
  transition: 0.03s ease-in-out;
  & + a {
    margin-left: 1rem;
  }
  &:hover {
    transform: scale(1.05);
  }
  &.button-light {
    background-color: #bfbfbf;
  }
  &.button-gold {
    background-color: #ffc627;
  }
  &.button-dark {
    background-color: #191919;
    color: #ffffff;
  }
  &.button-maroon {
    background-color: #8c1d40;
    color: #ffffff;
  }
`;

export { ButtonWrapper };
