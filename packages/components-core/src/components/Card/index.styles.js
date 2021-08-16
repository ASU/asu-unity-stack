import styled from "styled-components";

const AnchorWrapper = styled.a`
  &.c-card {
    color: #191919 !important;
    text-decoration: none;
    display: block;
  }
`;

const CardWrapper = styled.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`;

export { AnchorWrapper, CardWrapper };
