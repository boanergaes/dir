import React, { useState, useEffect, useRef } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatPanel = () => {
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  
  // Dummy messages for UI demonstration
  useEffect(() => {
    setMessages([
      { id: 1, sender: { githubUsername: 'system' }, content: 'Welcome to the #general channel!', timestamp: new Date() },
    ]);
  }, []);

  return (
    <div className="h-full flex flex-col bg-black border-l border-zinc-900 overflow-hidden">
      <div className="flex items-center px-4 py-3 border-b border-zinc-900 bg-[#050505]">
        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-tighter uppercase text-white"># general</span>
          <span className="text-[10px] text-zinc-600 uppercase tracking-widest">Main workspace channel</span>
        </div>
      </div>

      <div className="flex-1 overflow-hidden relative">
        <MessageList messages={messages} />
        
        {typingUsers.length > 0 && (
          <div className="absolute bottom-2 left-4">
            <span className="text-[10px] text-zinc-500 animate-pulse uppercase tracking-wider">
              {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
            </span>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-zinc-900">
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatPanel;
