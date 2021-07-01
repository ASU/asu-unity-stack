import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;

  > a {
    padding: 0;
    margin: 0;
    color: #484848;
    text-decoration: none;
  }

  > span.name {
    font-weight: 700;
  }

  > a.signout:before {
    content: "(";
    margin-left: 4px;
  }

  > a.signout:after {
    content: ") ";
  }
`;

export { LoginWrapper };
