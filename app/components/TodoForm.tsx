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
          className="input-base bg-white/50 border border-white/30 focus:ring-white/50 placeholder-white/50 text-white"
        />
        <button
          type="submit"
          className="button-base bg-white/20 text-white hover:bg-white/30 focus:ring-white/50 backdrop-blur-sm"
        >
          Add
        </button>
      </div>
    </form>
  );
}
