import { useCallback } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { todosSelector } from "../store/todosSelectors";
import { deleteTodoAction, toggleTodoAction } from "../store/todosActions";
import { UPDATE_TODO_ACTION } from "../store/todosReducer";

function TodoItem({ todo, onToggle, onDelete }) {
  console.log("onToggle :>> ", onToggle);
  console.log("todo :>> ", todo);
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          // onChange={() => onToggle(todo)}
          onChange={onToggle}
        />
        {todo.title}
        {/* <button onClick={() => onDelete(todo)}>x</button> */}
        <button onClick={onDelete}>x</button>
      </label>
    </li>
  );
}

const dispatchToogleTodoAction = (dispatch) => (todo) => () => {
  dispatch(toggleTodoAction(todo));
};

const dispatchDeleteTodoAction = (dispatch) => (todo) => () => {
  dispatch(deleteTodoAction(todo));
};

const mapDispatchToProps = (dispatch, { todo }) => ({
  onToggle: dispatchToogleTodoAction(dispatch)(todo),
  onDelete: dispatchDeleteTodoAction(dispatch)(todo),
});

const TodoItemContainer = connect(() => ({}), mapDispatchToProps)(TodoItem);

//****************************************************************** */

export function TodoList(props) {
  const { todos, onToggle, onDelete } = props;
  console.log("props :>> ", props);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItemContainer
          todo={todo}
          // onToggle={onToggle}
          key={todo.id}
          // onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

// export function TodoListStore() {
//   const todos = useSelector(todosSelector);
//   const dispatch = useDispatch();
//   const onToggle = useCallback(
//     (todo) => {
//       dispatch(toggleTodoAction(todo));
//     },
//     [dispatch]
//   );
//   const onDelete = useCallback(
//     (todo) => {
//       dispatch(deleteTodoAction(todo));
//     },
//     [dispatch]
//   );

//   return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />;
// }

const mapStateToProps = (state) => ({
  todos: todosSelector(state),
});

//********************* mapDispatchToProps **********************

// const mapDispatchToProps = {
//   onToggle: toggleTodoAction,
// };

// const mapDispatchToProps = (dispatch) => ({
//   onToggle: (todo) => dispatch(toggleTodoAction(todo)),
// });

//************************************************************** */

export const TodoListStore = connect(
  mapStateToProps
  // mapDispatchToProps
)(TodoList);
