import { useCallback } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { todosSelector, filteredTodosSelector } from "../store/todosSelectors";
import { deleteTodoAction, toggleTodoAction } from "../store/todosActions";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
        {todo.title}
        <button onClick={() => onDelete(todo)}>x</button>
      </label>
    </li>
  );
}

export function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onToggle={onToggle}
          key={todo.id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export function TodoListStore() {
  const todos = useSelector(filteredTodosSelector);
  const dispatch = useDispatch();
  const onToggle = useCallback(
    (todo) => {
      dispatch(toggleTodoAction(todo));
    },
    [dispatch]
  );
  const onDelete = useCallback(
    (todo) => {
      dispatch(deleteTodoAction(todo));
    },
    [dispatch]
  );

  return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />;
}

// export const TodoListStore = connect(
//   (state) => ({
//     todos: todosSelector(state),
//   }),
//   (dispatch) => ({
//     onToggle: (todo) => dispatch(toggleTodoAction(todo)),
//   })
// )(TodoList);
