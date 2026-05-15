import React, { useState, useContext, useMemo } from 'react';
import { ChevronRight, FileText, Folder, FolderOpen, Search, X } from 'lucide-react';
import { WorkspaceContext } from '../../../../context/WorkspaceContext';
import NewItemInput from './NewItemInput';

const FileItem = ({ item, depth = 0, searchTerm = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeFile, setActiveFile, creationTarget, stageFile, cancelCreation } = useContext(WorkspaceContext);

  const isFolder = item.type === 'dir';
  const isSelected = activeFile?.path === item.path;
  const isCreationTarget = creationTarget === item.path;

  const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

  const handleClick = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    } else {
      setActiveFile(item);
    }
  };

  if (searchTerm && !matchesSearch && !isFolder) return null;

  return (
    <div className="flex flex-col">
      <div
        onClick={handleClick}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
        className={`group flex items-center gap-2 py-1.5 cursor-pointer transition-colors border-l-2 ${
          isSelected 
            ? 'bg-zinc-900 border-white text-white' 
            : 'border-transparent text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
        }`}
      >
        <div className="w-4 h-4 flex items-center justify-center">
          {isFolder && (
            <ChevronRight
              size={12}
              className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
            />
          )}
        </div>
        
        {isFolder ? (
          isOpen ? <FolderOpen size={14} className="text-zinc-300" /> : <Folder size={14} className="text-zinc-500" />
        ) : (
          <FileText size={14} className="opacity-50" />
        )}
        
        <span className={`text-sm truncate ${matchesSearch && searchTerm ? 'text-white font-bold underline decoration-zinc-600' : ''}`}>
          {item.name}
        </span>
      </div>

      {isFolder && isOpen && (
        <div className="flex flex-col border-l border-zinc-900 ml-[15px]">
          {isCreationTarget && (
            <NewItemInput
              isVisible={true}
              depth={depth + 1}
              onSubmit={(name, type) => stageFile(name, type, item.path)}
              onCancel={cancelCreation}
            />
          )}
          {item.children?.map((child, idx) => (
            <FileItem key={child.path || idx} item={child} depth={depth + 1} searchTerm={searchTerm} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function FileTree() {
  const [searchTerm, setSearchTerm] = useState("");
  const { contents, creationTarget, stageFile, cancelCreation } = useContext(WorkspaceContext);

  return (
    <div className="h-full flex flex-col bg-black text-white select-none">
      <div className="p-4 border-b border-zinc-900">
        <div className="relative group">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-white transition-colors" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search files..."
            className="w-full bg-zinc-950 border border-zinc-900 py-1.5 pl-9 pr-4 text-sm outline-none focus:border-zinc-700 transition-all"
            style={{ borderRadius: '0px' }}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-2 scrollbar-hide">
        {creationTarget === '' && (
          <NewItemInput
            isVisible={true}
            depth={0}
            onSubmit={(name, type) => stageFile(name, type, '')}
            onCancel={cancelCreation}
          />
        )}
        {contents.map((item, idx) => (
          <FileItem key={idx} item={item} searchTerm={searchTerm} />
        ))}
      </div>
    </div>
  );
}
