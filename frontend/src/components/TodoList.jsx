import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="space-y-2">
      {todos.length === 0 ? (
        <p className="text-green-500 font-bold text-center py-4">No todos yet. Add one above!</p>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo._id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;