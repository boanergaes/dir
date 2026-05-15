import React, { useContext } from 'react';
import Editor from '@monaco-editor/react';
import { WorkspaceContext } from '../../../../context/WorkspaceContext';

const CodeEditor = () => {
  const { activeFile } = useContext(WorkspaceContext);

  if (!activeFile) {
    return (
      <div className="h-full flex items-center justify-center bg-[#050505] text-zinc-600 border border-zinc-900 grid-bg">
        <div className="text-center space-y-2">
          <p className="text-lg font-bold tracking-tighter uppercase">No File Selected</p>
          <p className="text-xs max-w-xs mx-auto opacity-50">Select a file from the tree to view or edit the source code.</p>
        </div>
      </div>
    );
  }

  const getLanguage = (filename) => {
    const ext = filename.split('.').pop();
    const map = {
      js: 'javascript', jsx: 'javascript',
      ts: 'typescript', tsx: 'typescript',
      py: 'python', html: 'html', css: 'css',
      json: 'json', md: 'markdown'
    };
    return map[ext] || 'plaintext';
  };

  return (
    <div className="h-full flex flex-col bg-black border border-zinc-900 overflow-hidden">
      <div className="flex items-center px-4 py-2 border-b border-zinc-900 bg-[#050505]">
        <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">{activeFile.name}</span>
        <div className="ml-auto flex gap-2">
           <span className="text-[10px] text-zinc-600 border border-zinc-800 px-1.5 py-0.5">{getLanguage(activeFile.name).toUpperCase()}</span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden relative noise">
        <Editor
          height="100%"
          language={getLanguage(activeFile.name)}
          theme="vs-dark"
          value={activeFile.content || '// No content available'}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            padding: { top: 20 },
            backgroundColor: '#000000',
            border: 'none',
          }}
          beforeMount={(monaco) => {
            monaco.editor.defineTheme('dir-theme', {
              base: 'vs-dark',
              inherit: true,
              rules: [],
              colors: {
                'editor.background': '#000000',
                'editor.lineHighlightBackground': '#0a0a0a',
                'editorLineNumber.foreground': '#27272a',
                'editorLineNumber.activeForeground': '#a1a1aa',
              }
            });
          }}
          onMount={(editor, monaco) => {
            monaco.editor.setTheme('dir-theme');
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
