/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import { useState } from "react";
import { todoApi } from "../../../util/api";
import { CategoryOptionsList } from "../../../util/options";
import { RegularText, TodoButton, TodoInput } from "../atoms";

const AddTodoWrapper = () => {
  const [time, setTime] = useState<number>(0);
  const [category, setCategory] = useState<string>("code");
  const [todo, setTodo] = useState<string>("");

  // TODO: react-query 적용
  // TODO: UI 수정, 컴포넌트 분리
  const addTodo = async () => {
    try {
      const res = await todoApi.addTodo({
        todo: todo,
        duration: time * 60 * 1000,
        date: new Date(),
        done: false,
        category,
      });
    } catch (error) {
      alert("실패!");
    }
  };

  return (
    <div css={AddTodoStyle}>
      <TodoInput
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <div
        css={css`
          height: 100%;
        `}
      >
        <div css={TimeInputStyle}>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
          />
          <RegularText>m</RegularText>
        </div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {CategoryOptionsList.map((x) => (
            <option value={x}>{x}</option>
          ))}
        </select>
        <TodoButton name="추가" onClick={addTodo}>
          추가
        </TodoButton>
      </div>
    </div>
  );
};

// TODO: input select 다 컴포넌트 쪼갤 예정
const AddTodoStyle = (theme: Theme) => css`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
  }
  select {
    background-color: transparent;
    font-weight: 500;
    border: none;
    height: 100%;
    appearance: none;
  }
`;

const TimeInputStyle = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white;
  padding: 1rem;
  & > input {
    background-color: transparent;
    height: 100%;
    width: 4rem;
    font-size: inherit;
  }
  & > p {
    height: 100%;
  }
`;

export default AddTodoWrapper;
