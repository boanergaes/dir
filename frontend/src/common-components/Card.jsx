import React from 'react';

const Card = ({ children, className = '', hover = false }) => {
  return (
    <div 
      className={`bg-[#050505] border border-zinc-800 p-6 transition-all duration-300 ${hover ? 'hover:border-zinc-500' : ''} ${className}`}
      style={{ borderRadius: '0px' }}
    >
      {children}
    </div>
  );
};

export default Card;
