
import React from 'react';
import { SDLCManager } from '@/components/SDLCManager';

const SDLCPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight">
            SDLC Management
          </h1>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            Manage your software development lifecycle and project workflows.
          </p>
        </div>

        {/* SDLC Content */}
        <SDLCManager />
      </div>
    </div>
  );
};

export default SDLCPage;
