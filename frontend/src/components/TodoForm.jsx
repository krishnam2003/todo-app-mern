import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-grow px-4 py-2 border border-green-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;