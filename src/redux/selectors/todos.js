import { useSelector } from "react-redux"

export const GetListTodoSelector = () => {
  const todos = useSelector((state) => state.todosReducer.todos);
  return todos;
}