
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  const handleBookDemo = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="text-3xl font-bold text-white">
          GOALUX
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="text-slate-300 hover:text-white cursor-pointer transition-colors">Features</span>
          <span className="text-slate-300 hover:text-white cursor-pointer transition-colors">Pricing</span>
          <span className="text-slate-300 hover:text-white cursor-pointer transition-colors">Community</span>
          <Button
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
          >
            Sign in
          </Button>
          <Button
            onClick={handleBookDemo}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full"
          >
            Book a demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-8 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-slate-300 text-xl md:text-2xl mb-8 font-medium tracking-wide">
            Get your financial goals done
          </h1>
          
          <div className="relative mb-12">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-4">
              10x faster
            </h2>
            
            {/* Tool icons placeholder */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-slate-400 text-sm">Replaces</span>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center text-white text-xs font-bold">C</div>
                <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center text-white text-xs font-bold">N</div>
                <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center text-white text-xs font-bold">E</div>
                <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center text-white text-xs font-bold">T</div>
                <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs font-bold">M</div>
              </div>
            </div>
          </div>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            GOALUX gives founders and individuals the tools they need to 
            track progress, manage finances, and achieve goals fast.
          </p>

          <Button
            onClick={handleGetStarted}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            Book a 15-minute demo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-purple-500 rounded"></div>
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">Goal Tracking</h3>
            <p className="text-slate-400">Set and track personal and business goals with beautiful progress visualizations.</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-500 rounded"></div>
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">Smart Analytics</h3>
            <p className="text-slate-400">Get insights into your progress with detailed analytics and milestone tracking.</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-green-500 rounded"></div>
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">Gamification</h3>
            <p className="text-slate-400">Stay motivated with XP, levels, badges, and pixel-art achievements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
