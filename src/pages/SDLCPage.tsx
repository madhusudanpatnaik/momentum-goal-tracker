
import React from 'react';
import { SDLCManager } from '@/components/SDLCManager';

const SDLCPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Header with royal green styling */}
        <div className="mb-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-royal-green-200 dark:border-slate-700 shadow-lg">
          <h1 className="text-4xl font-black text-royal-green-900 dark:text-royal-green-400 mb-3 tracking-tight">
            SDLC Management
          </h1>
          <p className="text-royal-green-700 dark:text-royal-green-300 text-lg font-medium">
            Manage your software development lifecycle and project workflows with precision.
          </p>
        </div>

        {/* SDLC Content */}
        <SDLCManager />
      </div>
    </div>
  );
};

export default SDLCPage;
