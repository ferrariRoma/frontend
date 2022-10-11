/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

interface ButtonType {
  name: string;
}

const TodoButton = styled("button")`
  width: 100%;
  height: 100%;
  padding: 1rem;
  font-weight: 700;
  color: white;
  white-space: pre;
  background-color: ${({ theme }) => theme.colors.accentColor};
  border-right: 1px solid ${({ theme }) => theme.colors.bgColor};
  &:last-of-type {
    border-right: 0;
  }
`;

// const TodoButton = ({ name }: ButtonType) => {
//   return (
//     <button
//       css={(theme: Theme) => css`
//         width: 100%;
//         height: 100%;
//         padding: 1rem;
//         font-weight: 700;
//         color: white;
//         white-space: pre;
//         background-color: ${theme.colors.accentColor};
//         border-right: 1px solid ${theme.colors.bgColor};
//         &:last-of-type {
//           border-right: 0;
//         }
//       `}
//     >
//       {name}
//     </button>
//   );
// };

export default TodoButton;
