import React, { useEffect, useRef } from 'react';

const MessageBubble = ({ message }) => {
  const isSystem = message.sender?.githubUsername === 'system';

  return (
    <div className={`group flex flex-col mb-4 ${isSystem ? 'items-center' : 'items-start'}`}>
      <div className="flex items-center gap-2 mb-1">
        {!isSystem && (
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">{message.sender?.githubUsername}</span>
        )}
        <span className="text-[9px] text-zinc-600 uppercase tabular-nums">
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
      <div className={`
        px-3 py-2 text-sm max-w-[85%] border
        ${isSystem 
            ? 'bg-zinc-950 border-zinc-800 text-zinc-500 italic text-xs' 
            : 'bg-black border-zinc-800 text-zinc-200 group-hover:border-zinc-700'}
      `} style={{ borderRadius: '0px' }}>
        {message.content}
      </div>
    </div>
  );
};

const MessageList = ({ messages }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div 
      ref={scrollRef}
      className="h-full overflow-y-auto p-4 scrollbar-hide space-y-1"
    >
      <div className="flex flex-col justify-end min-h-full">
        {messages.map((msg, idx) => (
          <MessageBubble key={msg.id || idx} message={msg} />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
