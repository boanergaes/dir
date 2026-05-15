import React from 'react';
import Button from '../../common-components/Button';
import Card from '../../common-components/Card';
import { Github, Zap, Code, Users, BarChart3 } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden noise">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-zinc-900 bg-black/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white" />
          <span className="text-xl font-bold tracking-tighter uppercase">Dir</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Docs</a>
          <a href="#" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Pricing</a>
          <Button variant="outline" className="text-xs uppercase tracking-widest">Sign In</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-24 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-800 bg-zinc-950 text-[10px] uppercase tracking-widest text-zinc-400">
              <span className="w-2 h-2 bg-green-500 animate-pulse" />
              Introducing Dir Collaboration v2
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter leading-none uppercase">
              The real-time <br />
              <span className="text-zinc-600">Workspace</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
              Import repositories, track GitHub Actions, and collaborate with your team in a high-performance interactive environment. Built for speed and focus.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <Button className="px-8 py-4 text-sm uppercase tracking-widest font-bold">Get Started</Button>
              <Button variant="secondary" className="px-8 py-4 text-sm uppercase tracking-widest font-bold flex items-center gap-2">
                <Github size={18} />
                View Source
              </Button>
            </div>
          </div>

          <div className="relative">
             <Card className="p-0 border-zinc-700 bg-black overflow-hidden group">
                <div className="aspect-video bg-zinc-950 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 grid-bg opacity-30" />
                   <Code size={120} className="text-zinc-900 group-hover:text-white transition-all duration-700" />
                   <div className="absolute bottom-6 left-6 right-6 p-4 border border-zinc-800 bg-black/80 backdrop-blur-md">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-white" />
                        <span className="text-[10px] uppercase tracking-widest text-white">Main.jsx</span>
                      </div>
                      <div className="w-full h-1 bg-zinc-900 overflow-hidden">
                        <div className="w-2/3 h-full bg-white" />
                      </div>
                   </div>
                </div>
             </Card>
             {/* Decorative Elements */}
             <div className="absolute -top-4 -right-4 w-24 h-24 border border-zinc-800 pointer-events-none" />
             <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-zinc-800 pointer-events-none" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-32">
          {[
            { icon: Zap, title: 'Instant Sync', desc: 'Real-time synchronization with GitHub repositories and webhooks.' },
            { icon: Users, title: 'Team Chat', desc: 'Context-aware multi-channel chat integrated directly into your workspace.' },
            { icon: BarChart3, title: 'Live Analytics', desc: 'Track contribution heatmaps, star counts, and repository health metrics.' }
          ].map((f, idx) => (
            <Card key={idx} hover className="space-y-4">
              <f.icon className="text-white" size={24} />
              <h3 className="text-lg font-bold uppercase tracking-tighter">{f.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white" />
            <span className="text-sm font-bold tracking-tighter uppercase">Dir Platform</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white transition-colors">Terms</a>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-zinc-800">© 2026 Dir collaboration platform. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
