/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const TodoInput = styled("input")`
  width: 100%;
  padding: 1rem;
  border: none;
  font-size: 1rem;
  font-weight: 300;
  background-color: transparent;
  line-height: inherit;
  margin: 0;
  &:focus {
    outline: none;
    border: none;
  }
`;

export default TodoInput;
