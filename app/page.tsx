'use client';

import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Todo App YEAH</h1>
        <TodoForm onAdd={addTodo} />
        <div className="space-y-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </div>
        {todos.length === 0 && (
          <p className="text-center text-white/70 mt-6 text-lg">
            No todos yet. Add one above!
          </p>
        )}
      </div>
    </main>
  );
}
