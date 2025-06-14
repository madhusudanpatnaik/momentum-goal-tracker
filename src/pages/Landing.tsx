
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Target, TrendingUp, BarChart3, Zap } from 'lucide-react';

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
      {/* High-quality flowing wave background */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main flowing wave */}
          <path
            d="M0 400C200 300, 400 500, 600 400C800 300, 1000 500, 1200 400C1400 300, 1600 500, 1800 400V800H0V400Z"
            fill="url(#waveGradient1)"
            opacity="0.8"
          />
          <path
            d="M0 450C250 350, 500 550, 750 450C1000 350, 1250 550, 1500 450C1750 350, 2000 550, 2250 450V800H0V450Z"
            fill="url(#waveGradient2)"
            opacity="0.6"
          />
          <path
            d="M0 500C300 400, 600 600, 900 500C1200 400, 1500 600, 1800 500C2100 400, 2400 600, 2700 500V800H0V500Z"
            fill="url(#waveGradient3)"
            opacity="0.4"
          />
          
          {/* Floating particles */}
          <circle cx="200" cy="200" r="3" fill="url(#particleGradient)" opacity="0.6">
            <animate attributeName="cy" values="200;180;200" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="400" cy="150" r="2" fill="url(#particleGradient)" opacity="0.5">
            <animate attributeName="cy" values="150;130;150" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="800" cy="300" r="4" fill="url(#particleGradient)" opacity="0.7">
            <animate attributeName="cy" values="300;280;300" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="1100" cy="250" r="2.5" fill="url(#particleGradient)" opacity="0.6">
            <animate attributeName="cy" values="250;230;250" dur="3.5s" repeatCount="indefinite" />
          </circle>

          {/* Gradients */}
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#156548" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#059669" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#064e3b" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#6ee7b7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
            </linearGradient>
            <radialGradient id="particleGradient">
              <stop offset="0%" stopColor="#a7f3d0" stopOpacity="1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Subtle overlay for content readability */}
      <div className="absolute inset-0 bg-slate-900/20" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="text-3xl font-bold text-white tracking-tight">
          MOMENTUM
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="text-slate-300 hover:text-white cursor-pointer transition-colors font-medium">Features</span>
          <span className="text-slate-300 hover:text-white cursor-pointer transition-colors font-medium">Pricing</span>
          <span className="text-slate-300 hover:text-white cursor-pointer transition-colors font-medium">Community</span>
          <Button
            variant="outline"
            className="border-slate-400 text-slate-300 hover:bg-slate-800 hover:text-white font-medium"
          >
            Sign in
          </Button>
          <Button
            onClick={handleBookDemo}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium"
          >
            Book a demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-slate-300 text-xl md:text-2xl mb-8 font-medium tracking-wide">
            Clarity and focus for your goals
          </h1>
          
          <div className="relative mb-12">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6 tracking-tight">
              Stay on track,<br />
              <span className="text-emerald-400">hit your targets</span>
            </h2>
          </div>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Momentum brings clarity and focus to your goals with elegant dashboards, 
            project tracking, and data-driven insights that keep you moving forward.
          </p>

          <Button
            onClick={handleGetStarted}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 font-medium"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-3 tracking-tight">Goal Tracking</h3>
            <p className="text-slate-300 font-medium">Visualize progress with beautiful charts and milestone tracking.</p>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-3 tracking-tight">Data Analytics</h3>
            <p className="text-slate-300 font-medium">Get insights with detailed analytics and performance metrics.</p>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-3 tracking-tight">Project Management</h3>
            <p className="text-slate-300 font-medium">Organize SDLC and MVP tasks with customizable boards.</p>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-3 tracking-tight">Smart Reminders</h3>
            <p className="text-slate-300 font-medium">Stay motivated with daily nudges and achievement tracking.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to build momentum?
          </h3>
          <p className="text-slate-300 text-lg mb-8 font-medium">
            Join thousands of founders and individuals achieving their goals with clarity and focus.
          </p>
          <Button
            onClick={handleGetStarted}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
