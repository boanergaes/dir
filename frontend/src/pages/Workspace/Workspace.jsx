import React from 'react';
import FileTree from './components/Code/FileTree';
import CodeEditor from './components/Code/CodeEditor';
import ChatPanel from './components/Chat/ChatPanel';
import { WorkspaceProvider } from '../../context/WorkspaceContext';

const Workspace = () => {
  return (
    <WorkspaceProvider>
      <div className="h-screen bg-black text-white flex flex-col noise overflow-hidden">
        {/* Workspace Header */}
        <header className="h-14 border-b border-zinc-900 bg-[#050505] flex items-center px-6 justify-between shrink-0 z-20">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-white" />
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tighter uppercase leading-none mt-1">Dir Workspace</span>
              <span className="text-[9px] text-zinc-600 uppercase tracking-widest">Main Repository</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
             <div className="flex gap-4">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Workspace</span>
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Commits</span>
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Settings</span>
             </div>
             <div className="w-8 h-8 border border-zinc-800 bg-zinc-950" title="User Profile" />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex overflow-hidden">
          {/* Left Sidebar: File Tree */}
          <aside className="w-72 border-r border-zinc-900 shrink-0 overflow-hidden">
            <FileTree />
          </aside>

          {/* Middle Section: Code Editor */}
          <section className="flex-1 overflow-hidden">
            <CodeEditor />
          </section>

          {/* Right Sidebar: Chat Panel */}
          <aside className="w-96 overflow-hidden">
            <ChatPanel />
          </aside>
        </main>
      </div>
    </WorkspaceProvider>
  );
};

export default Workspace;
