import styled from "styled-components";

const breakpointMap = {
  "992px": "993px",
  "1260px": "1261px",
};

const TitleWrapper = styled.div`
  line-height: 1;
  font-size: 1rem;
  font-weight: 700;
  padding: 0 2rem 1.5rem 2rem;
  letter-spacing: -1px;
  background-image: linear-gradient(
    to right,
    transparent 51%,
    #ffc626 51%,
    95%,
    transparent
  );
  background-position: 0 0;
  background-size: 200%;
  display: inline-block;
  transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
  transition-duration: 1.5s;
  margin: 0;
  width: max-content;

  &.active {
    background-position: -200%;
  }

  > .unit-name {
    display: none;
  }
  .unit-name,
  .subunit-name,
  .title-subunit-name {
    color: #191919;
  }
  @media (min-width: ${({ breakpoint }) => breakpointMap[breakpoint]}) {
    line-height: 1;
    font-weight: 700;
    padding: 0;
    margin: 1rem 0 0.5rem 0;
    > .unit-name {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      display: block;

      :hover {
        text-decoration: underline;
      }
    }
    .subunit-name {
      font-size: 1.5rem;
      margin-bottom: 0;
      display: inline-block;

      :hover {
        text-decoration: underline;
      }
    }
    .title-subunit-name {
      font-size: 2rem;
      font-weight: 700;
      display: inline-block;
      margin: 0.5rem 0 0.5rem 0;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export { TitleWrapper };
