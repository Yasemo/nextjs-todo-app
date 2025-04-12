'use client';

import { useState } from 'react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-1 p-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/50 text-white transition-all duration-300"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-white/20 text-white rounded-xl hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 font-semibold backdrop-blur-sm"
        >
          Add
        </button>
      </div>
    </form>
  );
}
