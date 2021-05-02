import styled from "styled-components";

const Label = styled.label`
  font-weight: bold;
`;

const LabelGroup = styled(Label)`
  display: block;
  margin-bottom: 4px;
`;

const Error = styled.div`
  color: red;
`;

const Text = styled.div`
  margin-bottom: 4px;
  font-size: 12px;
  min-height: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 6px 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.error ? "red" : "black")};
  margin: 4px 0;
`;

const TxtArea = styled.textarea`
  width: 100%;
  font-size: 14px;
  padding: 6px 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.error ? "red" : "black")};
  margin: 4px 0;
  height: 200px;
`;

const StyledSelect = styled.select`
  width: 100%;
  font-size: 14px;
  padding: 6px 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.error ? "red" : "black")};
  margin: 4px 0;
`;

const Span = styled.span`
  color: ${props => (props.error ? "red" : "#333")};
  margin-right: 20px;
  margin-left: 8px;
`;

const E = styled.div`
  text-align: left;
  margin-top: 8px;
`;

const SectionHeading = styled.h1`
  text-align: left;
  border-bottom: 1px solid grey;
`;

export {
  Input,
  TxtArea,
  Label,
  Error,
  Text,
  Span,
  StyledSelect,
  LabelGroup,
  SectionHeading,
  E,
};
