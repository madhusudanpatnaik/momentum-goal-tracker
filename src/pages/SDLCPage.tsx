
import React from 'react';
import { SDLCManager } from '@/components/SDLCManager';

const SDLCPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Header with premium dark blue styling */}
        <div className="mb-8 bg-gradient-to-br from-slate-950/95 to-blue-950/95 backdrop-blur-xl rounded-3xl p-8 border border-blue-800/30 shadow-2xl shadow-blue-900/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-4xl font-black text-white mb-2 tracking-tight">
                SDLC Management
              </h1>
              <p className="text-blue-200 text-lg font-medium">
                Manage your software development lifecycle and project workflows with precision.
              </p>
            </div>
          </div>
          
          {/* Enhanced visual elements */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-900/60 backdrop-blur rounded-xl p-4 border border-blue-700/30">
              <div className="text-2xl font-bold text-white">12</div>
              <div className="text-blue-200 text-sm font-medium">Active Projects</div>
            </div>
            <div className="bg-slate-900/60 backdrop-blur rounded-xl p-4 border border-blue-700/30">
              <div className="text-2xl font-bold text-white">48</div>
              <div className="text-blue-200 text-sm font-medium">Tasks Completed</div>
            </div>
            <div className="bg-slate-900/60 backdrop-blur rounded-xl p-4 border border-blue-700/30">
              <div className="text-2xl font-bold text-white">92%</div>
              <div className="text-blue-200 text-sm font-medium">Team Efficiency</div>
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
