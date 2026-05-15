import React from 'react';
import Landing from './pages/Landing/Landing';
import Auth from './pages/Auth/Auth';
import Workspace from './pages/Workspace/Workspace';

function App() {
  // Simple routing for demonstration
  const [route, setRoute] = React.useState('landing');

  return (
    <div className="h-full">
      {route === 'landing' && <Landing />}
      {route === 'auth' && <Auth />}
      {route === 'workspace' && <Workspace />}
      
      {/* Dev Navigation */}
      <div className="fixed bottom-4 left-4 z-50 flex gap-2">
        <button onClick={() => setRoute('landing')} className="px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-tighter">Home</button>
        <button onClick={() => setRoute('auth')} className="px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-tighter">Auth</button>
        <button onClick={() => setRoute('workspace')} className="px-3 py-1 bg-white text-black text-[10px) font-bold uppercase tracking-tighter">Workspace</button>
      </div>
    </div>
  )
}

export default App
