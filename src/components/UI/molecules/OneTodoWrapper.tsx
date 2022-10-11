/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import { useState } from "react";
import {
  RegularText,
  Shadow,
  TimeLabel,
  TodoButton,
  TodoInput,
} from "../atoms";

type TodoType = {
  todo: string;
};

// TODO: api 연결, 시간/날짜 변경 등 할 게 아직 많습니다
const OneTodoWrapper = ({ todo }: TodoType) => {
  const time = { time: 300000 };
  const [textEdit, setTextEdit] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(todo);

  const modifyTodo = () => {
    setTextEdit(false);
  };

  return (
    <div css={OneTodoStyle}>
      {textEdit ? (
        <TodoInput
          onBlur={modifyTodo}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          ref={(c) => c?.focus()}
        />
      ) : (
        <RegularText
          css={css`
            padding: 1rem;
          `}
          onClick={() => {
            setTextEdit(true);
          }}
        >
          {newTodo}
        </RegularText>
      )}
      <div
        css={css`
          display: flex;
          background-color: rebeccapurple;
          padding: 0;
        `}
      >
        <TimeLabel {...time} />
        <TodoButton>삭제</TodoButton>
      </div>
    </div>
  );
};

const OneTodoStyle = (theme: Theme) => css`
  width: 100%;
  max-width: 100%;
  color: ${theme.colors.fontColor};
  border-radius: 0.2rem;
  font-weight: 400;
  display: flex;
  gap: 0;
  justify-content: space-between;
  overflow: hidden;
  ${Shadow};
`;

export default OneTodoWrapper;
