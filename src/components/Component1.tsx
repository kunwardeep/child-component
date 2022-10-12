import styled from "styled-components";

const StyledRow = styled.div`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: green;
  border: 12px solid red;
`;

interface C1Props {
  txt: string;
}

const Component1 = ({ txt }: C1Props) => {
  return <StyledRow>{txt}</StyledRow>;
};

export default Component1;
