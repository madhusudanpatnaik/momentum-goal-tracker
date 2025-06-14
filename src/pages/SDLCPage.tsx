
import React from 'react';
import { SDLCManager } from '@/components/SDLCManager';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Rocket } from 'lucide-react';

const SDLCPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight flex items-center gap-3">
              <Rocket className="w-8 h-8 text-purple-600" />
              SDLC Management
            </h1>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              Manage your software development lifecycle and projects.
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* SDLC Content */}
        <SDLCManager />
      </div>
    </div>
  );
};

export default SDLCPage;
