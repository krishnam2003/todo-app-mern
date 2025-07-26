import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo._id)}
          className="h-5 w-5 text-blue-500 rounded focus:ring-blue-400"
        />
        <span
          className={`ml-3 ${todo.completed ? 'line-through text-gray-400' : 'text-black-800'}`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo._id)}
        className="text-red-500 hover:text-red-700 transition duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </li>
  );
};

export default TodoItem;