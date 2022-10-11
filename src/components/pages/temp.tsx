import TodoInput from "../UI/atoms/TodoInput";
import AddTodoWrapper from "../UI/molecules/AddTodoWrapper";
import OneTodoWrapper from "../UI/molecules/OneTodoWrapper";

const Temp = () => {
  const todoData = { todo: "하드코딩된 테스트 데이터" };
  return (
    <p>
      <AddTodoWrapper />
      <OneTodoWrapper {...todoData} />
    </p>
  );
};

export default Temp;
