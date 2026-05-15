import React from 'react';

const Input = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
          {label}
        </label>
      )}
      <input
        className={`w-full bg-black border border-zinc-800 px-3 py-2 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white transition-colors duration-200 ${className}`}
        style={{ borderRadius: '0px' }}
        {...props}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
