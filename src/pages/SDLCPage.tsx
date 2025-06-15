
import React from 'react';
import { SDLCManager } from '@/components/SDLCManager';

const SDLCPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Header with enhanced royal green styling */}
        <div className="mb-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg rounded-3xl p-8 border border-royal-green-200/50 dark:border-royal-green-700/50 shadow-xl shadow-royal-green-100/20 dark:shadow-royal-green-900/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-royal-green-500 to-royal-green-700 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-4xl font-black bg-gradient-to-r from-royal-green-600 to-royal-green-800 dark:from-royal-green-400 dark:to-royal-green-600 bg-clip-text text-transparent mb-2 tracking-tight">
                SDLC Management
              </h1>
              <p className="text-royal-green-700/80 dark:text-royal-green-300/80 text-lg font-medium">
                Manage your software development lifecycle and project workflows with precision.
              </p>
            </div>
          </div>
          
          {/* Enhanced visual elements */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-gradient-to-r from-royal-green-50 to-royal-green-100 dark:from-royal-green-900/30 dark:to-royal-green-800/30 rounded-xl p-4 border border-royal-green-200/50 dark:border-royal-green-700/50">
              <div className="text-2xl font-bold text-royal-green-800 dark:text-royal-green-200">12</div>
              <div className="text-royal-green-600 dark:text-royal-green-400 text-sm font-medium">Active Projects</div>
            </div>
            <div className="bg-gradient-to-r from-royal-green-50 to-royal-green-100 dark:from-royal-green-900/30 dark:to-royal-green-800/30 rounded-xl p-4 border border-royal-green-200/50 dark:border-royal-green-700/50">
              <div className="text-2xl font-bold text-royal-green-800 dark:text-royal-green-200">48</div>
              <div className="text-royal-green-600 dark:text-royal-green-400 text-sm font-medium">Tasks Completed</div>
            </div>
            <div className="bg-gradient-to-r from-royal-green-50 to-royal-green-100 dark:from-royal-green-900/30 dark:to-royal-green-800/30 rounded-xl p-4 border border-royal-green-200/50 dark:border-royal-green-700/50">
              <div className="text-2xl font-bold text-royal-green-800 dark:text-royal-green-200">92%</div>
              <div className="text-royal-green-600 dark:text-royal-green-400 text-sm font-medium">Team Efficiency</div>
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
