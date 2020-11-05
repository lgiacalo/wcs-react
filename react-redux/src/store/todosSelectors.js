export const todosSelector = ({ todos }) => todos;

export const filteredTodosSelector = ({ todos, filter }) => {
  if (filter === null) return todos;
  else return todos.filter((todo) => todo.completed === filter);
};
