
import React from 'react';
import { SDLCManager } from '@/components/SDLCManager';

const SDLCPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-green-50 via-white to-royal-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-6 py-8">
        {/* Header with royal green styling */}
        <div className="mb-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-royal-green-200 dark:border-slate-700 shadow-sm">
          <h1 className="text-3xl font-black text-royal-green-900 dark:text-royal-green-400 mb-2 tracking-tight">
            SDLC Management
          </h1>
          <p className="text-royal-green-700 dark:text-royal-green-300 font-bold">
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
