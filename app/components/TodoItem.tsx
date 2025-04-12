'use client';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white/40 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg transition-all duration-300 hover:bg-white/50 group">
      <div className="flex items-center flex-1 mr-4">
        <div className="relative">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="h-5 w-5 rounded-md border-white/30 bg-white/50 checked:bg-purple-500 transition-all duration-300 focus:ring-2 focus:ring-white/50"
          />
        </div>
        <span className={`ml-4 text-white text-lg transition-all duration-300 ${
          todo.completed ? 'line-through opacity-70' : 'opacity-90'
        }`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-4 py-2 text-white/70 hover:text-red-400 transition-all duration-300 rounded-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        Delete
      </button>
    </div>
  );
}
