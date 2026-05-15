import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-4 py-2 font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed border';
  const variants = {
    primary: 'bg-white text-black border-white hover:bg-zinc-200',
    secondary: 'bg-transparent text-white border-zinc-800 hover:bg-zinc-900',
    outline: 'bg-transparent text-white border-white hover:bg-white hover:text-black',
    ghost: 'bg-transparent text-zinc-400 border-transparent hover:text-white hover:bg-zinc-900',
    destructive: 'bg-red-600 text-white border-red-600 hover:bg-red-700'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{ borderRadius: '0px' }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
