import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const API_URL = 'http://localhost:5000/api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching todos:', err);
      setLoading(false);
    }
  };

  const addTodo = async (text) => {
    try {
      const response = await axios.post(API_URL, { text });
      setTodos([response.data, ...todos]);
    } catch (err) {
      console.error('Error adding todo:', err);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const todoToUpdate = todos.find(todo => todo._id === id);
      const response = await axios.patch(`${API_URL}/${id}`, {
        completed: !todoToUpdate.completed
      });
      setTodos(todos.map(todo => todo._id === id ? response.data : todo));
    } catch (err) {
      console.error('Error toggling todo:', err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center mb-8 pt-2">Todo App</h1>
        <TodoForm addTodo={addTodo} />
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <TodoList 
            todos={todos} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo} 
          />
        )}
      </div>
    </div>
  );
}

export default App;