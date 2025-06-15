
import React from 'react';
import { SDLCManager } from '@/components/SDLCManager';

const SDLCPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Header with dark styling */}
        <div className="mb-8 bg-slate-800/95 dark:bg-slate-900/95 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 dark:border-slate-600/50 shadow-xl shadow-slate-900/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-4xl font-black text-white mb-2 tracking-tight">
                SDLC Management
              </h1>
              <p className="text-slate-300 text-lg font-medium">
                Manage your software development lifecycle and project workflows with precision.
              </p>
            </div>
          </div>
          
          {/* Enhanced visual elements */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-700/50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-600/50 dark:border-slate-500/50">
              <div className="text-2xl font-bold text-white">12</div>
              <div className="text-slate-300 text-sm font-medium">Active Projects</div>
            </div>
            <div className="bg-slate-700/50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-600/50 dark:border-slate-500/50">
              <div className="text-2xl font-bold text-white">48</div>
              <div className="text-slate-300 text-sm font-medium">Tasks Completed</div>
            </div>
            <div className="bg-slate-700/50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-600/50 dark:border-slate-500/50">
              <div className="text-2xl font-bold text-white">92%</div>
              <div className="text-slate-300 text-sm font-medium">Team Efficiency</div>
            </div>
          </div>
        </div>

        {/* SDLC Content */}
        <SDLCManager />
      </div>
    </div>
  );
};

export default SDLCPage;
