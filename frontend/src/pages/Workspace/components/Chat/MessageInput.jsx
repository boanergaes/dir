import React, { useState } from 'react';
import { Send } from 'lucide-react';

const MessageInput = ({ onSend }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    onSend?.(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type a message..."
        className="w-full bg-zinc-950 border border-zinc-900 py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-zinc-700 transition-all placeholder:text-zinc-700 font-medium"
        style={{ borderRadius: '0px' }}
      />
      <button 
        type="submit"
        disabled={!content.trim()}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-zinc-600 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <Send size={16} />
      </button>
    </form>
  );
};

export default MessageInput;
