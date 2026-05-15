import React, { createContext, useState, useCallback } from 'react';

export const WorkspaceContext = createContext();

export const WorkspaceProvider = ({ children }) => {
  const [activeFile, setActiveFile] = useState(null);
  const [contents, setContents] = useState([]);
  const [creationTarget, setCreationTarget] = useState(null);

  const setFolderChildren = useCallback((path, children) => {
    setContents(prev => {
      const updateChildren = (items) => {
        return items.map(item => {
          if (item.path === path) {
            return { ...item, children };
          }
          if (item.children) {
            return { ...item, children: updateChildren(item.children) };
          }
          return item;
        });
      };
      return updateChildren(prev);
    });
  }, []);

  const stageFile = useCallback((name, type, parentPath) => {
    // Logic to stage a new file creation
    console.log(`Staging ${type}: ${name} in ${parentPath}`);
    setCreationTarget(null);
  }, []);

  const cancelCreation = useCallback(() => {
    setCreationTarget(null);
  }, []);

  return (
    <WorkspaceContext.Provider
      value={{
        activeFile,
        setActiveFile,
        contents,
        setContents,
        setFolderChildren,
        creationTarget,
        setCreationTarget,
        stageFile,
        cancelCreation
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};
