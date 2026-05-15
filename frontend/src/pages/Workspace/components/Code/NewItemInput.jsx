import React, { useState } from 'react';
import Button from '../../../../common-components/Button';
import Input from '../../../../common-components/Input';

const NewItemInput = ({ isVisible, depth, onSubmit, onCancel }) => {
  const [name, setName] = useState('');

  if (!isVisible) return null;

  return (
    <div 
      className="flex items-center gap-2 py-1 px-2 border border-zinc-800 bg-black"
      style={{ marginLeft: `${depth * 12}px` }}
    >
      <input
        autoFocus
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSubmit(name, 'file');
          if (e.key === 'Escape') onCancel();
        }}
        placeholder="Name..."
        className="bg-transparent border-none outline-none text-sm text-white w-full"
      />
      <div className="flex gap-1">
        <button onClick={() => onSubmit(name, 'file')} className="text-zinc-500 hover:text-white text-xs">OK</button>
        <button onClick={onCancel} className="text-zinc-500 hover:text-white text-xs">X</button>
      </div>
    </div>
  );
};

export default NewItemInput;
