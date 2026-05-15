import React from 'react';
import Button from '../../common-components/Button';
import Card from '../../common-components/Card';
import Input from '../../common-components/Input';
import { Github } from 'lucide-react';

const Auth = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative noise overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      
      <Card className="max-w-md w-full p-10 space-y-8 bg-black z-10 border-zinc-700">
        <div className="space-y-2 text-center">
            <div className="w-12 h-12 bg-white mx-auto mb-6" />
            <h1 className="text-3xl font-bold tracking-tighter uppercase text-white">Join the Platform</h1>
            <p className="text-xs text-zinc-500 uppercase tracking-widest">Select your preferred authentication method</p>
        </div>

        <div className="space-y-4">
            <Button className="w-full py-4 flex items-center justify-center gap-3 text-sm uppercase tracking-widest font-bold">
                <Github size={18} />
                Continue with GitHub
            </Button>
            
            <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-zinc-900"></div>
                <span className="flex-shrink mx-4 text-[10px] text-zinc-700 uppercase tracking-widest font-bold">OR</span>
                <div className="flex-grow border-t border-zinc-900"></div>
            </div>

            <div className="space-y-4">
                <Input label="Email Address" placeholder="name@company.com" />
                <Button variant="secondary" className="w-full py-3 text-xs uppercase tracking-widest font-bold">
                    Continue with Email
                </Button>
            </div>
        </div>

        <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest leading-relaxed">
            By continuing, you agree to our <br />
            <a href="#" className="text-zinc-400 hover:text-white transition-colors underline">Terms of Service</a> and 
            <a href="#" className="text-zinc-400 hover:text-white transition-colors underline ml-1">Privacy Policy</a>.
        </p>
      </Card>

      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-zinc-900 m-8" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-zinc-900 m-8" />
    </div>
  );
};

export default Auth;
